// Cloudflare Pages Function — POST /api/leads
// Proxies Outscraper's Google Maps search so the API key stays server-side.

const TRADE_QUERIES = {
  roofer: "roofer",
  electrician: "electrician",
  plumber: "plumber",
  carpenter: "carpenter",
  painter: "painting contractor",
  hvac: "air conditioning and heating",
};

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const safeParse = (t) => {
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
};

export async function onRequestPost(context) {
  // Top-level guard: never let an exception escape as a bare platform 500.
  try {
    return await handle(context);
  } catch (err) {
    return json({ error: "Lead lookup failed.", detail: String((err && err.stack) || err) }, 500);
  }
}

async function handle(context) {
  const { request, env } = context;

  const key = env.OUTSCRAPER_API_KEY;
  if (!key) {
    return json(
      { error: "Lead service isn't configured yet. Add the OUTSCRAPER_API_KEY secret to the Production environment." },
      500
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Bad request." }, 400);
  }

  const trades = Array.isArray(body.trades) ? body.trades.filter((t) => TRADE_QUERIES[t]) : [];
  if (!trades.length) return json({ error: "Pick at least one trade." }, 400);

  const areas = (Array.isArray(body.areas) && body.areas.length ? body.areas : [body.location])
    .map((s) => (s || "").trim())
    .filter(Boolean);
  if (!areas.length) return json({ error: "Enter a location." }, 400);

  const limit = Math.min(Math.max(parseInt(body.limit, 10) || 20, 1), 100);

  // One query per (area x trade); remember which trade each query belongs to.
  const queries = [];
  const queryTrade = [];
  for (const area of areas) {
    for (const t of trades) {
      queries.push(`${TRADE_QUERIES[t]} in ${area}, Australia`);
      queryTrade.push(t);
    }
  }

  const params = new URLSearchParams();
  for (const q of queries) params.append("query", q);
  params.set("limit", String(limit));
  params.set("region", "AU");
  params.set("language", "en");
  params.set("dropDuplicates", "true");
  params.set("async", "false");

  let data;
  try {
    data = await outscraper(
      "https://api.app.outscraper.com/maps/search-v3?" + params.toString(),
      key
    );
  } catch (err) {
    return json({ error: "The data service didn't answer.", detail: String(err) }, 502);
  }

  // Outscraper normally returns data.data as an array-of-arrays (one inner
  // array per query). Be defensive in case it arrives flat or shaped oddly.
  const groups = Array.isArray(data && data.data) ? data.data : [];
  const rows = [];
  const seen = new Set();

  const pushPlace = (p, trade) => {
    if (!p || typeof p !== "object") return;
    const name = (p.name || "").trim();
    if (!name) return;
    const suburb = p.city || p.borough || "";
    const dedupe = (name + "|" + suburb).toLowerCase();
    if (seen.has(dedupe)) return;
    seen.add(dedupe);
    const phone = p.phone || "";
    rows.push({
      trade: trade || "",
      name,
      phone,
      website: p.site || "",
      suburb,
      address: p.full_address || [p.street, suburb, p.postal_code].filter(Boolean).join(", "),
      tier: phone ? "USABLE" : "REVIEW",
    });
  };

  groups.forEach((group, i) => {
    if (Array.isArray(group)) {
      for (const p of group) pushPlace(p, queryTrade[i]);
    } else {
      pushPlace(group, queryTrade[i]);
    }
  });

  rows.sort(
    (a, b) => (a.tier !== "USABLE") - (b.tier !== "USABLE") || a.trade.localeCompare(b.trade)
  );

  return json({ rows });
}

// Outscraper answers synchronously for small jobs; larger ones come back as a
// pending request we poll. Read the body as text so we can surface API errors.
async function outscraper(url, key) {
  const headers = { "X-API-KEY": key };
  let r = await fetch(url, { headers });
  let text = await r.text();
  let data = safeParse(text);

  let tries = 0;
  while (
    (r.status === 202 || (data && data.status === "Pending")) &&
    data &&
    (data.id || data.results_location) &&
    tries < 18
  ) {
    await sleep(3500);
    const loc = data.results_location || "https://api.app.outscraper.com/requests/" + data.id;
    r = await fetch(loc, { headers });
    text = await r.text();
    data = safeParse(text);
    tries++;
  }

  if (!r.ok) {
    throw new Error("Outscraper HTTP " + r.status + (text ? ": " + text.slice(0, 200) : ""));
  }
  return data || {};
}

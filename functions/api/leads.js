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

export async function onRequestPost(context) {
  const { request, env } = context;

  const key = env.OUTSCRAPER_API_KEY;
  if (!key) {
    return json(
      { error: "Lead service isn't configured yet. Add the OUTSCRAPER_API_KEY secret to the project." },
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

  const limit = Math.min(Math.max(parseInt(body.limit, 10) || 30, 1), 100);

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
    return json(
      { error: "The data service didn't answer. Try again in a moment.", detail: String(err) },
      502
    );
  }

  const groups = Array.isArray(data && data.data) ? data.data : [];
  const rows = [];
  const seen = new Set();

  groups.forEach((places, i) => {
    const trade = queryTrade[i] || "";
    for (const p of places || []) {
      const name = (p.name || "").trim();
      if (!name) continue;
      const suburb = p.city || p.borough || "";
      const dedupe = (name + "|" + suburb).toLowerCase();
      if (seen.has(dedupe)) continue;
      seen.add(dedupe);
      const phone = p.phone || "";
      rows.push({
        trade,
        name,
        phone,
        website: p.site || "",
        suburb,
        address: p.full_address || [p.street, suburb, p.postal_code].filter(Boolean).join(", "),
        tier: phone ? "USABLE" : "REVIEW",
      });
    }
  });

  rows.sort(
    (a, b) => (a.tier !== "USABLE") - (b.tier !== "USABLE") || a.trade.localeCompare(b.trade)
  );

  return json({ rows });
}

// Outscraper answers synchronously for small jobs; larger ones come back as a
// pending request we poll. Cap polling so we stay under the platform timeout.
async function outscraper(url, key) {
  const headers = { "X-API-KEY": key };
  let r = await fetch(url, { headers });
  let data = await r.json().catch(() => ({}));

  let tries = 0;
  while (
    (r.status === 202 || data.status === "Pending") &&
    (data.id || data.results_location) &&
    tries < 18
  ) {
    await sleep(3500);
    const loc = data.results_location || "https://api.app.outscraper.com/requests/" + data.id;
    r = await fetch(loc, { headers });
    data = await r.json().catch(() => ({}));
    tries++;
  }

  if (!r.ok) throw new Error("Outscraper HTTP " + r.status);
  return data;
}

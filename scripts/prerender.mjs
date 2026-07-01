// Post-build static prerender. Renders each route to full HTML so search
// engines see headings and copy in the raw source, then the app hydrates.
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const ORIGIN = "https://pipelinepartners.com.au";

// 1) bundle the server entry
const serverOut = path.resolve(".prerender/entry-server.mjs");
fs.mkdirSync(path.dirname(serverOut), { recursive: true });
await build({
  entryPoints: ["src/entry-server.jsx"],
  bundle: true,
  platform: "browser",
  format: "esm",
  jsx: "automatic",
  outfile: serverOut,
  logLevel: "error",
});
const { render } = await import(pathToFileURL(serverOut).href);

// 2) load site data for meta and schema
const site = await import(pathToFileURL(path.resolve("src/data/site.js")).href);
const { landings, faqs } = site;

const AREA = ["Newcastle", "Lake Macquarie", "Maitland", "Hunter Valley", "Central Coast"];

const pages = [
  {
    path: "/",
    title: "Lead Generation Agency Newcastle | Pipeline Partners",
    description: "Newcastle lead generation, SEO and web design for local service businesses. Exclusive, guaranteed leads. No leads, no pay. Book a free area check.",
    kind: "home",
  },
  { path: "/leadgen", title: landings.leadgen.metaTitle, description: landings.leadgen.metaDesc, kind: "service", serviceName: "Lead Generation", crumb: "Lead Generation" },
  { path: "/seo", title: landings.seo.metaTitle, description: landings.seo.metaDesc, kind: "service", serviceName: "SEO", crumb: "SEO" },
  { path: "/webdev", title: landings.webdev.metaTitle, description: landings.webdev.metaDesc, kind: "service", serviceName: "Web Design and Development", crumb: "Web Design" },
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function jsonldFor(pg) {
  const url = ORIGIN + (pg.path === "/" ? "/" : pg.path);
  const blocks = [];
  blocks.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN + "/" },
      ...(pg.path === "/" ? [] : [{ "@type": "ListItem", position: 2, name: pg.crumb, item: url }]),
    ],
  });
  if (pg.kind === "home") {
    blocks.push({ "@context": "https://schema.org", "@type": "WebSite", name: "Pipeline Partners", url: ORIGIN + "/" });
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  if (pg.kind === "service") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: pg.serviceName,
      provider: { "@type": "ProfessionalService", name: "Pipeline Partners", url: ORIGIN + "/" },
      areaServed: AREA,
      url,
    });
  }
  return blocks.map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`).join("\n");
}

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

for (const pg of pages) {
  const url = ORIGIN + (pg.path === "/" ? "/" : pg.path);
  const appHtml = render(pg.path);
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(pg.title)}</title>`);
  html = html.replace(/(<meta name="description" content=")[\s\S]*?("\s*\/?>)/, `$1${esc(pg.description)}$2`);
  html = html.replace(/(<link rel="canonical" href=")[\s\S]*?(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:title" content=")[\s\S]*?(")/, `$1${esc(pg.title)}$2`);
  html = html.replace(/(<meta property="og:description" content=")[\s\S]*?(")/, `$1${esc(pg.description)}$2`);
  html = html.replace(/(<meta property="og:url" content=")[\s\S]*?(")/, `$1${url}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[\s\S]*?(")/, `$1${esc(pg.title)}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[\s\S]*?(")/, `$1${esc(pg.description)}$2`);
  html = html.replace("</head>", `${jsonldFor(pg)}\n</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outPath = pg.path === "/" ? path.join(DIST, "index.html") : path.join(DIST, pg.path, "index.html");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log("prerendered", pg.path, "->", outPath);
}

fs.rmSync(".prerender", { recursive: true, force: true });

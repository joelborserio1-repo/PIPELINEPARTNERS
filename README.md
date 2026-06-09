# Pipeline Partners

Done-for-you, exclusive lead generation. We run the marketing. The client just answers the phone.

> Keep the work flowing.

## What is in here

| File | Purpose |
| --- | --- |
| `index.html` | The main landing page. Hero with the animated wave/flow visual, three vertical pillars, how it works, the guarantee, exclusive vs shared comparison, GoHighLevel form slot, FAQ, final CTA. |
| `vertical-template.html` | One reusable per-vertical landing page. The vertical is a variable, driven by `?vertical=<slug>`. Adding a vertical is one config object, not a redesign. |
| `og-image.png` | Branded 1200x630 social share image. Regenerate with the script below. |
| `scripts/make-og-image.py` | Generates `og-image.png`. Run with `python3 scripts/make-og-image.py` (needs Pillow). |
| `robots.txt`, `sitemap.xml` | Crawl and indexing. Replace the placeholder domain before launch. |

## Verticals are config driven

Both pages read from a single `VERTICALS` source of truth in their inline script.

- On `index.html` the array renders the three pillar cards.
- On `vertical-template.html` the object keyed by slug fills the H1, hero copy, lead types, SEO tags, and the GoHighLevel form ID.

Current slugs: `trades`, `fitness`, `clinics`. To add a vertical, add one object to the config in both files. No layout work.

Example links:

```
vertical-template.html?vertical=trades
vertical-template.html?vertical=fitness
vertical-template.html?vertical=clinics
```

## Before you launch (placeholders to replace)

1. **Domain.** Search for `pipelinepartners.com` across `index.html`, `vertical-template.html`, `robots.txt`, and `sitemap.xml` and swap in your live domain. Update the `canonical`, Open Graph, and Twitter URLs.
2. **GoHighLevel form.** In each page find the `GOHIGHLEVEL FORM GOES HERE` block and paste your inline embed in place of the placeholder slot. The `form_embed.js` script is already included and handles responsive resizing. Each vertical can use its own form ID (see `formId` in the config).
3. **Analytics.** Uncomment and fill the GTM and GA4 snippets in the head. A `generate_lead` dataLayer event is the recommended fire on form submit (wire it to your GHL form callback).
4. **Proof.** In `index.html` the comparison section has a clearly marked slot for real testimonials, case studies, or verified numbers. Add them when available. Nothing is fabricated.

## Deploy (Cloudflare Pages, no build step)

These are static files, so there is no build.

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a project from the repo.
3. Framework preset: **None**. Build command: empty. Output directory: `/` (the repo root).
4. Deploy, then point your custom domain at the project.

You can also drag the folder straight into Cloudflare Pages for a one-off deploy.

## Regenerating the share image

```bash
pip install Pillow
python3 scripts/make-og-image.py
```

This writes `og-image.png` (1200x630) in the repo root.

# Pipeline Partners

Static marketing site. No build step. Plain HTML, CSS, and vanilla JS. Deploys to Cloudflare Pages directly from this repo.

## What is here

| File | Purpose |
| --- | --- |
| `index.html` | Home page. |
| `vertical.html` | Reusable per vertical landing page, driven by `?vertical=SLUG`. |
| `styles.css` | All styling. Colour and type tokens are at the top in `:root`. |
| `config.js` | Single source of truth: brand details, the verticals array, and the FAQ. |
| `main.js` | Home page behaviour. |
| `vertical.js` | Per vertical page behaviour. |
| `og-image.png` | 1200x630 social share image. |
| `_headers` | Security headers applied by Cloudflare Pages. |

To add a vertical, add one object to `PP.verticals` in `config.js`. The home pillars, the footer, the structured data, and `vertical.html?vertical=SLUG` all read from it. No redesign needed.

## Deploy to Cloudflare Pages (Git)

1. Push this repo to GitHub or GitLab (see commands below).
2. In the Cloudflare dashboard, go to Workers and Pages, then Create, then Pages, then Connect to Git.
3. Pick this repo. Set the build settings to:
   - Framework preset: None
   - Build command: leave empty
   - Build output directory: `/`
4. Save and deploy. Your site goes live at a `pipelinepartners.pages.dev` style URL within a minute.

There is nothing to compile. Every push to the main branch triggers a new deploy automatically.

## Push this repo

```bash
git init
git add .
git commit -m "Pipeline Partners site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pipelinepartners-site.git
git push -u origin main
```

## Important: where the site lives

Cloudflare Pages serves a site at the root of a domain or subdomain, not at a path like `yourdomain.com/pipelinepartners`. So attach one of these to the Pages project under Custom domains:

- `pipelinepartners.com.au` (cleanest, on brand)
- a subdomain such as `get.jtbassetgroup.com` or `pipelinepartners.jtbassetgroup.com`
- or just use the free `pipelinepartners.pages.dev` while testing

The site uses relative links throughout, so it works correctly at a domain root with no changes.

## Set your live domain (one find and replace)

The absolute URLs (canonical and Open Graph tags) currently read `https://REPLACE-WITH-LIVE-DOMAIN`. Once you know the final domain, replace every instance of `REPLACE-WITH-LIVE-DOMAIN` with your domain (no trailing slash, no path). It appears in `index.html`, `vertical.html`, and `config.js`. That is the only edit needed for URLs.

## Before it is truly live

- GoHighLevel: set your form id. Put it on the `#ghlSlot` element, or set `ghlFormId` per vertical in `config.js`. A tidy placeholder shows until then.
- Analytics: add your GTM, GA4, and Google Ads ids in the head of `index.html`. A `generate_lead` event already fires on form submit.
- Proof: replace the labelled proof slot with real testimonials, case studies, or verified numbers.
- Footer: add privacy and terms links.
- Email and deliverability: this site does not handle email. Run your mailboxes (for example Spacemail) on your domain and confirm DKIM and DMARC are set.

## Accessibility and motion

Keyboard focus is visible, the FAQ uses real buttons with aria attributes, and all motion is transform or opacity based and respects `prefers-reduced-motion`.

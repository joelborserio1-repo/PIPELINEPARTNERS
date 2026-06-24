# Pipeline Partners

Marketing agency website for Pipeline Partners (pipelinepartners.com.au). Lead generation is the hero service, with SEO and social as supporting services. Built with React, Vite, Tailwind CSS and Framer Motion. Deploys to Cloudflare Pages.

> Keep the work flowing.

## Stack

- **React + Vite** application, built to static files in `dist/`.
- **Tailwind CSS** for styling. Brand tokens (colours, fonts) are in `tailwind.config.js`.
- **Framer Motion** for scroll reveals, the animated counters, hover micro interactions and the FAQ accordion.
- **Space Grotesk** for headings, **Inter** for body, loaded from Google Fonts in `index.html`.

## Run locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Where the content lives

All copy is in **`src/data/site.js`** (brand, services, packages, testimonials, comparison, FAQ, about). Edit there and every section updates. Components are in `src/components/`.

- **Packages** reflect the proposal: Starter, Growth (most popular), Scale. Management fee plus advertising spend billed at cost, never marked up, with full reporting. No setup fee. 90 day initial term, then month to month.
- **Testimonials** in `site.js` are flagged as placeholders. Swap them for real verified reviews before relying on them publicly (see the comment in `src/components/Results.jsx`).

## GoHighLevel form and analytics

- The enquiry form is the GoHighLevel inline embed in `src/components/Contact.jsx`, using form id `yP1jbWcsbMe8gaXBFCzL`. `form_embed.js` is loaded automatically and the iframe auto resizes. The card is wide enough (880px) for the form's two column layout.
- A `generate_lead` event is pushed to `dataLayer` when the form is submitted.
- GA4 (`G-057VWHYGTH`) is installed in `index.html`.

## Deploy to Cloudflare Pages

This is now a **build** project, so the Pages settings differ from a plain static site.

1. In the Cloudflare Pages project, set:
   - Framework preset: **Vite** (or None)
   - Build command: **`npm run build`**
   - Build output directory: **`dist`**
2. Deploy. Every push to the production branch triggers a new build and deploy.

The build copies everything in `public/` to the site root, including the existing campaign landing page (`/lp.html`) and the per vertical page (`/vertical.html?vertical=SLUG`), so existing ad links keep working.

## Sections

Hero, Services (lead gen featured, SEO and social supporting), Packages, How it works, Guarantee, Results (testimonials), Exclusive vs shared comparison, About, FAQ, Contact, Footer.

## Writing rules

No em dashes or en dashes anywhere, including comments. Australian English. Honesty is the brand: no invented statistics, ad spend is billed at cost and never marked up.

## Accessibility and motion

Semantic HTML, visible focus, the FAQ uses real buttons with aria attributes, and all motion respects `prefers-reduced-motion` (the animated hero background renders a static frame when reduced motion is on).

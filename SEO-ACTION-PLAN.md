# Pipeline Partners SEO Action Plan

Local-first, buyer-intent SEO for a Newcastle NSW agency (lead generation core, plus SEO and web development). Target local + service + intent terms we can actually rank for, not broad head terms.

Honest timeline: local SEO takes months, not weeks. Google Business Profile and citations move first (weeks to a couple of months). Organic rankings for the target terms build over 3 to 9 months with consistent content and links. There are no shortcuts, and bought links get you penalised.

---

## What is built into the code (done or in progress)

- **Server rendered HTML (the number 1 fix).** The site now pre-renders every route to static HTML at build time, so Google sees the full headings and copy in the raw page source without running JavaScript. It still hydrates into a fast React app for visitors.
- **robots.txt** allowing crawl and pointing to the sitemap.
- **sitemap.xml** listing every live page.
- **Per page SEO:** unique title, meta description, canonical, Open Graph and Twitter tags, injected into each page's raw HTML.
- **Schema (JSON-LD):** ProfessionalService and Organization on the home page, Service schema on each service page, FAQPage where an FAQ exists, and BreadcrumbList for navigation. Review or AggregateRating schema is intentionally left out until real reviews exist.
- **GA4** is installed (`G-057VWHYGTH`). A `generate_lead` event fires on form submit, tagged by service.
- Mobile first, responsive, HTTPS via Cloudflare, fast static delivery.

## What needs YOU (manual, not code)

These are the highest-leverage local levers and only you can do them:

### 1. Google Business Profile (the number 1 local ranking lever)
- Create or claim the profile for Pipeline Partners, Newcastle NSW.
- Primary category: Marketing Agency. Add secondary: Advertising Agency, Website Designer, Internet Marketing Service.
- Fill everything: services (Lead Generation, SEO, Google Ads, Web Design), service areas (Newcastle, Lake Macquarie, Maitland, Hunter Valley, Central Coast), hours, description, real photos.
- Post weekly (offers, tips, results). Reply to every review.
- Ask every happy client for a Google review. This feeds both the map pack and the review schema later.

### 2. Real NAP (name, address, phone)
- Decide the public phone number and whether you list a street address or run as a service-area business.
- Send it to me and I will add it to the LocalBusiness schema and the contact page. Do not fabricate an address.

### 3. Local citations (consistent NAP everywhere)
Same name, address, phone, and website on each:
- Yellow Pages AU, True Local, Hotfrog AU, Yelp AU, Brownbook, Startlocal, Aussie Web, dLook.
- Newcastle and Hunter local business directories, and the Newcastle chamber of commerce.
- Marketing and agency directories (Clutch, DesignRush, Sortlist, The Manifest).
Consistency matters more than volume. Fix any old or wrong listings.

### 4. Free contextual backlinks from your own work
- Put a small "Website by Pipeline Partners" credit link in the footer of every client site you build. Over time this is a strong, relevant, growing backlink source.
- Offer clients a case study or testimonial in exchange for a link back from their site.

### 5. Social profiles (consistent, all linking the site)
- LinkedIn (company), Facebook, Instagram. Same name, logo, and the website URL in each. Add these to me so I can wire them into `sameAs` in the schema.

### 6. Local authority and press
- Newcastle business chamber membership and listing.
- Local sponsorships (a club, a trade event) that link back.
- Guest posts on AU small business and trades blogs, and outreach to local news for anything newsworthy.

### 7. Analytics setup
- Verify the site in **Google Search Console**, submit `sitemap.xml`, and watch coverage and queries.
- Confirm GA4 is receiving data. Mark `generate_lead` as a key event so form submits count as conversions.
- Set up call tracking if you advertise a phone number.

---

## Content roadmap (phased, built for real rankings)

Each page is genuinely useful, 600 to 900 words, specific to Newcastle and the Hunter, never duplicated across locations.

### Phase 1: core service pages (keyword-rich URLs)
- `/lead-generation` (core, deep)
- `/seo`
- `/web-design`
- `/google-ads` (ties to lead gen)
- `/about`, `/contact`, `/results` (placeholder testimonials, flagged)

### Phase 2: location + service landing pages (local SEO gold)
Unique, localised content on each, not a template swap:
- `/lead-generation-newcastle`, `/seo-newcastle`, `/web-design-newcastle`
- Nearby: Lake Macquarie, Maitland, Hunter Valley, Central Coast variants.
- Trade specific: exclusive leads for electricians, plumbers, roofers, builders in Newcastle and the Hunter.

### Phase 3: blog engine (the long game)
Article template with title, meta, headings, FAQ schema, internal links, author and date. Easy to add posts. Starter briefs:
1. How much does lead generation cost in Newcastle?
2. Shared leads vs exclusive leads: what tradies need to know.
3. How much should a small business website cost in Australia?
4. Local SEO for tradies: a plain English guide.
5. Google Ads vs SEO for local service businesses.
6. How to get more leads as a Newcastle electrician.
7. Do you need a website if you have a Google Business Profile?
8. What is a lead worth to a trades business?

## Internal linking rules
- Home links to every core service page.
- Each service page links to the two related services and to any relevant blog posts.
- Blog posts link up to the relevant service and location pages.
- Use descriptive anchor text (for example "exclusive leads for Newcastle electricians"), never "click here".

## Target keywords (build pages and content around these)
- lead generation agency Newcastle
- lead generation for tradies, lead generation for trades Newcastle
- SEO agency Newcastle, SEO for tradies Hunter Valley
- web developer Newcastle, web design for small business Newcastle
- Google Ads management Newcastle
- exclusive leads for electricians, plumbers, roofers, builders Newcastle

Do not chase "SEO" or "lead generation" alone. They are unwinnable for a new domain.

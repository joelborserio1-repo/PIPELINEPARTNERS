// Pipeline Partners. Single source of content. No em dashes anywhere.
// Edit copy here. Components read from these exports.

export const brand = {
  name: "Pipeline Partners",
  tagline: "Keep the work flowing.",
  promise: "We take the risk. You take the work.",
  domain: "https://pipelinepartners.com.au",
  city: "Newcastle",
  phone: "+61 468 165 126",
  phoneHref: "tel:+61468165126",
  // GoHighLevel inline form id used in the Contact section.
  ghlFormId: "yP1jbWcsbMe8gaXBFCzL",
};

// GoHighLevel form ids. `general` is the default. Paste each sector form id
// here as they are built. An empty id falls back to the general form.
export const formIds = {
  general: "P5odBwmLo09OAkzhAktp",
  leads: "yP1jbWcsbMe8gaXBFCzL",
  seo: "8wsbaW3xBYg02rr9Qdfg",
  webdev: "VplXzV6XIR8OLahDAuPW",
  // Paste the /promo practitioner form id here once it is built.
  // While empty it falls back to the general form.
  promo: "",
};

export const formOptions = [
  { key: "general", label: "General" },
  { key: "leads", label: "Leads" },
  { key: "seo", label: "SEO" },
  { key: "webdev", label: "Web" },
];

export function resolveFormId(key) {
  const id = formIds[key];
  return (id && id.trim()) || formIds.general;
}

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#results" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

// Meet the team. Add photos and fuller bios when ready.
export const team = [
  {
    name: "Joel",
    role: "Co-founder, Campaigns and Build",
    blurb: "The build and the numbers. Joel runs the campaigns and monitors the figures, and manages the automations, workflows and website development that keep your pipeline full.",
  },
  {
    name: "Brendan",
    role: "Co-founder, Clients and Strategy",
    blurb: "Your main point of contact. Brendan looks after customer relationships, onboarding and implementation, account strategy, and everything else that keeps your campaigns moving and your questions answered.",
  },
];

export const heroBullets = [
  { strong: "Exclusive to you.", rest: "Never shared, never resold to a rival." },
  { strong: "A guaranteed minimum,", rest: "agreed in writing, every month." },
  { strong: "No leads, no pay.", rest: "The risk sits with us." },
];

// Honest, brand fact stats only. Nothing invented.
export const stats = [
  { value: 1, suffix: "", label: "business per area, per industry. Yours alone" },
  { value: 100, suffix: "%", label: "done for you, end to end" },
  { value: 0, prefix: "$", label: "setup fee, ever" },
];

export const services = [
  {
    key: "leadgen",
    featured: true,
    tag: "Our core service",
    title: "Lead Generation",
    desc: "Exclusive, guaranteed leads, done for you. We build and run your Google Ads end to end and send every enquiry straight to your CRM and your phone. You get a written monthly minimum. Miss it and you do not pay.",
    points: [
      "Exclusive to you, never shared",
      "Guaranteed monthly minimum, in writing",
      "Every enquiry into your CRM",
      "No leads, no pay",
    ],
  },
  {
    key: "seo",
    title: "SEO",
    desc: "Get found locally and rank for the searches that bring real jobs. SEO compounds in the background while paid ads do the heavy lifting today.",
  },
  {
    key: "social",
    title: "Social Media Marketing",
    desc: "Build presence and pull in enquiries across Meta and beyond, so your brand keeps working even when the ads are off.",
  },
  {
    key: "webdev",
    title: "Website Development & Management",
    desc: "We build and look after a fast, modern site that turns clicks into enquiries, then keep it updated and online so it never lets a lead slip.",
  },
];

export const steps = [
  {
    label: "First",
    title: "We claim your area",
    body: "We lock your area and industry to you alone, agree the monthly minimum in writing, then build the campaigns from scratch.",
  },
  {
    label: "Then",
    title: "Leads start flowing",
    body: "Our Google Ads find people who want your service right now. Each enquiry is qualified and sent straight to your CRM and your phone.",
  },
  {
    label: "You",
    title: "You answer and close",
    body: "The easy part. Our automated follow up does the chasing, qualifying and nurturing for you, then sends warm, ready to book leads straight to your phone. You just pick up and say yes.",
  },
];

export const guaranteePoints = [
  { strong: "A written minimum.", rest: "We agree a set number of leads per month before a dollar changes hands." },
  { strong: "Pay for what arrives.", rest: "Miss the minimum and you only pay for the leads we actually delivered." },
  { strong: "No long lock in.", rest: "A 90 day initial term, then month to month. Cancel any time." },
];

// Pricing from the proposal. Ad spend billed at cost, never marked up.
export const packages = [
  {
    name: "Starter",
    tagline: "Get the phone ringing.",
    fee: 1200,
    adSpend: 1000,
    allIn: 2200,
    popular: false,
    includes: [
      "1 Google Ads campaign, built and managed",
      "Monthly optimisation",
      "Conversion tracking",
      "Every enquiry into your CRM",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    tagline: "Steady pipeline.",
    fee: 1800,
    adSpend: 1500,
    allIn: 3300,
    popular: true,
    includes: [
      "Up to 2 Google Ads campaigns, plus retargeting",
      "Fortnightly optimisation",
      "Advanced conversion tracking",
      "Every enquiry into your CRM",
      "Twice monthly reporting",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    tagline: "Maximise volume.",
    fee: 2800,
    adSpend: 2500,
    allIn: 5300,
    popular: false,
    includes: [
      "Multi campaign across Google and Meta",
      "Weekly optimisation",
      "Full funnel tracking",
      "Every enquiry into your CRM",
      "Weekly and monthly reporting",
      "Priority support",
      "Monthly strategy call",
    ],
  },
];

export const packagesTerms =
  "Management fee billed monthly. Advertising spend is billed at cost alongside your fee, never marked up, with full reporting so you always see where it goes. No setup fee. A 90 day initial term, then month to month, cancel any time. Backed by the guarantee: if we miss the agreed number, you do not pay.";

// SEO packages. Simple monthly fee, no ad spend.
export const packagesSeo = [
  {
    name: "Essentials",
    tagline: "Get found locally.",
    price: 499,
    popular: false,
    includes: [
      "Google Business Profile optimisation and management",
      "Local SEO setup (NAP consistency, citations, local listings)",
      "On-page optimisation for up to 5 key pages",
      "2 target keywords tracked",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    tagline: "Climb the rankings.",
    price: 899,
    popular: true,
    includes: [
      "Everything in Essentials",
      "On-page optimisation across the full site",
      "Up to 10 target keywords tracked",
      "2 SEO content pieces or blog posts per month",
      "Backlink building (quality local and industry links)",
      "Technical SEO fixes",
      "Twice monthly reporting",
    ],
  },
  {
    name: "Authority",
    tagline: "Own your market.",
    price: 1499,
    popular: false,
    includes: [
      "Everything in Growth",
      "Up to 25 keywords tracked",
      "4 content pieces per month",
      "Ongoing link building campaign",
      "Competitor analysis and strategy",
      "Conversion rate optimisation on key pages",
      "Monthly strategy call",
    ],
  },
];

export const packagesSeoTerms =
  "Billed monthly. Tell us your market and what you want to rank for, and we will recommend the right tier.";

// Website packages. One off build cost, plus an optional recurring Care Plan.
export const packagesWeb = [
  {
    name: "Starter Site",
    tagline: "A clean, professional presence.",
    price: 1500,
    unit: "one-off",
    popular: false,
    includes: [
      "Up to 5 pages (Home, About, Services, Gallery, Contact)",
      "Mobile responsive, fast loading",
      "Contact form and Google Maps",
      "Basic on-page SEO setup",
      "1 round of revisions",
    ],
    bestFor: "A tradie who just needs to look legit online.",
  },
  {
    name: "Professional Site",
    tagline: "Built to convert, not just exist.",
    price: 3000,
    unit: "one-off",
    popular: true,
    includes: [
      "Up to 10 pages",
      "Custom design, not a template",
      "Lead capture forms wired into your CRM",
      "Conversion focused copy and layout",
      "Booking and quote integration",
      "Blog setup",
      "2 rounds of revisions",
    ],
    bestFor: "A business serious about generating enquiries online.",
  },
  {
    name: "Premium / Custom",
    tagline: "A site that does heavy lifting.",
    price: 5000,
    unit: "one-off",
    from: true,
    popular: false,
    includes: [
      "Unlimited pages, fully custom build",
      "Advanced functionality (booking systems, portals, e-commerce, animations)",
      "Full CRM and automation integration",
      "Premium copywriting",
      "Ongoing revisions during build",
    ],
    bestFor: "Established businesses wanting a standout digital presence.",
  },
];

export const packagesWebTerms =
  "One off build cost, quoted and fixed before we start. Keep it humming with a Care Plan below.";

export const carePlan = {
  name: "Care Plan",
  priceFrom: 99,
  desc: "Hosting, security, backups, updates, small monthly changes and uptime monitoring. Keep your site fast, safe and up to date, hands off.",
};

// Client supplied testimonials.
export const testimonials = [
  { quote: "We were relying on word of mouth and referrals, but work was unpredictable. Within a few weeks we started getting genuine local enquiries from people actually looking for an electrician. The biggest difference is knowing every lead is ours and we are not competing against five other companies.", name: "Jason K.", role: "Electrical, Hunter Region", rating: 5 },
  { quote: "The quality of the enquiries has been far better than anything we have used before. We spend less time quoting jobs that go nowhere and more time working. Having exclusive leads has completely changed the way we book our weeks.", name: "Sarah T.", role: "Plumbing, Lake Macquarie", rating: 5 },
  { quote: "We wanted more than just traffic, we needed customers. The store feels like it finally has momentum. The whole process was straightforward, communication was excellent and everything was focused on growing sales, not vanity metrics.", name: "Michael R.", role: "Ecommerce, Newcastle", rating: 5 },
  { quote: "We were struggling to keep a steady flow of new members each month. Now we have consistent enquiries coming through and people are booking trials every week. It has given us confidence to keep growing instead of wondering where the next member is coming from.", name: "Emily C.", role: "Fitness Studio, Central Coast", rating: 5 },
  { quote: "Our old website looked dated and did not reflect the quality of our business. The new site loads fast, looks professional and finally gives customers confidence when they land on it. We have had so many compliments since launching.", name: "Daniel W.", role: "Building Company, Newcastle", rating: 5 },
  { quote: "We used to be buried in Google. Over time we have started appearing where our customers are actually searching, and the increase in organic enquiries has been noticeable. It finally feels like our website is working for us instead of just existing.", name: "Rebecca M.", role: "Professional Services, Mid North Coast", rating: 5 },
];

export const comparison = [
  { factor: "Who else gets this lead", us: "No one. It is yours alone.", them: "Sold to several rivals at once." },
  { factor: "If the leads do not arrive", us: "You pay nothing for what was not delivered.", them: "You often pay anyway." },
  { factor: "Who runs the marketing", us: "We do, from end to end.", them: "Frequently you, or it is unclear." },
  { factor: "The monthly minimum", us: "Agreed in writing.", them: "Rarely promised." },
  { factor: "Ad spend", us: "Billed at cost, never marked up.", them: "Often hidden or padded." },
  { factor: "Lock in", us: "90 days, then month to month.", them: "Long terms are common." },
];

export const about =
  "Pipeline Partners is a young, honest lead generation agency out of Newcastle. We do one thing properly: bring local service businesses a steady flow of exclusive, guaranteed work, and we put our own fee on the line to back it. No jargon, no lock in games, no marked up ad spend. We tell you straight whether your area is open, and we only win when you do.";

export const faqs = [
  { q: "What does exclusive actually mean?", a: "Every lead we send you is yours alone. We never share it, and we never resell it to a competitor in your area. When your phone rings, ours is the only number that person called." },
  { q: "How does the guarantee work?", a: "We agree a minimum number of leads per month, in writing, before we start. If we miss that minimum, you only pay for the leads we actually delivered. No leads, no pay. The risk sits with us, not you." },
  { q: "How does pricing work?", a: "A monthly management fee plus advertising spend billed at cost. Starter is 1,200 plus 1,000 ad spend, Growth is 1,800 plus 1,500, and Scale is 2,800 plus 2,500. No setup fee. A 90 day initial term, then month to month." },
  { q: "Do you mark up the ad spend?", a: "Never. Advertising spend is billed at cost alongside our fee, with full reporting so you always see exactly where it goes." },
  { q: "Do I have to run any marketing myself?", a: "No. We run all of it: the ads, the targeting, the tracking, and the follow up. Every enquiry lands in your CRM and on your phone." },
  { q: "Is there a lock in contract?", a: "A 90 day initial term so the campaigns have time to work, then month to month. Cancel any time after that." },
  { q: "Which channels do you use?", a: "Google Ads is the core. At Scale we add Meta. SEO and social media are available as supporting services." },
  { q: "Which industries do you cover?", a: "Trades and home services, health and fitness, clinics and practitioners, and other local service businesses. If you are not sure you fit, ask." },
];

// /promo. A single, aggressive launch offer aimed at service based
// practitioners: psychologists, physios, counsellors and allied health.
export const promoIndustries = [
  "Psychologists",
  "Physiotherapists",
  "Counsellors",
  "Chiropractors",
  "Osteopaths",
  "Podiatrists",
  "Dietitians",
  "Occupational Therapists",
  "Speech Pathologists",
  "Exercise Physiologists",
  "Remedial Massage",
  "Naturopaths",
];

// Practitioner flavoured live leads for the promo hero visual.
export const promoLeads = [
  { name: "Emma R.", note: "New client, anxiety support", area: "Newcastle" },
  { name: "Tom H.", note: "Initial physio assessment", area: "Lake Macquarie" },
  { name: "Priya S.", note: "Couples counselling enquiry", area: "Central Coast" },
];

// The single, too good to be true launch offer.
export const promoOffer = {
  badge: "Launch offer",
  name: "The Practice Growth Offer",
  tagline: "New client bookings, guaranteed.",
  fee: 600,
  adSpend: 1000,
  allIn: 1600,
  includes: [
    "1 Google Ads campaign, built and run for you end to end",
    "Every enquiry sent straight to your CRM and your phone",
    "Automated follow up that books the client for you",
    "Conversion tracking and clear monthly reporting",
    "Exclusive to your practice, never shared with a rival",
    "A written monthly minimum. No leads, no pay.",
  ],
  note: "No setup fee. A 90 day initial term, then month to month. Ad spend billed at cost, never marked up.",
};

// Per service landing pages: /leadgen, /seo, /webdev, /promo.
// tab = which Packages tab to show. formKey = which GHL form to embed.
export const landings = {
  promo: {
    slug: "promo",
    formKey: "promo",
    eyebrow: "For psychologists, physios and practitioners",
    h1: "Fill your practice with new client bookings.",
    sub: "We run the ads, follow up the enquiries and send booked clients straight to you. One simple offer, exclusive to your practice, backed by no leads, no pay.",
    bullets: [
      { strong: "Built for practitioners.", rest: "Psychologists, physios, counsellors and allied health." },
      { strong: "One simple offer.", rest: "$600 management plus $1,000 ad spend. That is it." },
      { strong: "No leads, no pay.", rest: "A written monthly minimum, or you do not pay." },
    ],
    pointsTitle: "Why practices choose this.",
    points: [
      { title: "Clients, not clicks", body: "We target people actively searching for your service in your area, then follow up until they book." },
      { title: "Exclusive to your practice", body: "Your leads are yours alone. We never share or resell them to another practice nearby." },
      { title: "The risk sits with us", body: "We agree a monthly minimum in writing. Miss it and you only pay for what we actually delivered." },
    ],
    guarantee: true,
    metaTitle: "Lead Generation for Psychologists, Physios and Practitioners | Pipeline Partners",
    metaDesc: "New client bookings for psychologists, physiotherapists, counsellors and allied health. $600 management plus $1,000 ad spend, exclusive leads, no leads no pay.",
  },
  leadgen: {
    slug: "leadgen",
    tab: "leads",
    formKey: "leads",
    eyebrow: "Exclusive, guaranteed leads",
    h1: "Exclusive leads, guaranteed. You just answer the phone.",
    sub: "We run all the marketing and send exclusive local jobs straight to you. A written monthly minimum every month, or you do not pay.",
    bullets: [
      { strong: "Exclusive to you.", rest: "Never shared, never resold to a rival." },
      { strong: "A guaranteed minimum,", rest: "agreed in writing, every month." },
      { strong: "No leads, no pay.", rest: "The risk sits with us." },
    ],
    pointsTitle: "How the lead engine works.",
    points: [
      { title: "Exclusive by contract", body: "Every lead is yours alone. Never shared, never resold to a competitor in your area." },
      { title: "A written monthly minimum", body: "We agree a set number of leads up front. Miss it and you only pay for what actually arrived." },
      { title: "Fully done for you", body: "Google Ads, tracking and automated follow up. Every enquiry lands in your CRM and on your phone." },
    ],
    guarantee: true,
    metaTitle: "Exclusive, Guaranteed Lead Generation | Pipeline Partners",
    metaDesc: "Exclusive local leads for service businesses, with a guaranteed monthly minimum. No leads, no pay. We run the Google Ads, you answer the phone.",
  },
  seo: {
    slug: "seo",
    tab: "seo",
    formKey: "seo",
    eyebrow: "Local SEO that ranks",
    h1: "Get found first when locals search for you.",
    sub: "We put your business at the top of Google for the searches that bring real jobs, and keep it climbing month after month.",
    bullets: [
      { strong: "Rank locally.", rest: "Show up first for the searches that matter in your area." },
      { strong: "Built to compound.", rest: "Rankings that grow while your ads do the heavy lifting now." },
      { strong: "Clear reporting.", rest: "See exactly where you rank and what we are doing." },
    ],
    pointsTitle: "What your SEO covers.",
    points: [
      { title: "Local search domination", body: "Google Business Profile, local listings and on-page work so you show up where your customers look." },
      { title: "Content and links", body: "Content that answers what buyers search for, plus quality local links that build your authority." },
      { title: "Tracked and reported", body: "Keyword tracking and regular reports, so you always know it is working." },
    ],
    guarantee: false,
    metaTitle: "Local SEO for Service Businesses | Pipeline Partners",
    metaDesc: "Local SEO that ranks your business first for the searches that bring real jobs. Google Business Profile, on-page, content and links, tracked and reported.",
  },
  webdev: {
    slug: "webdev",
    tab: "webdev",
    formKey: "webdev",
    eyebrow: "Websites that convert",
    h1: "A website that turns clicks into booked jobs.",
    sub: "Fast, modern and built to capture enquiries, wired straight into your CRM. Then we keep it running for you.",
    bullets: [
      { strong: "Built to convert.", rest: "Not just a brochure. Every page nudges visitors to enquire." },
      { strong: "Wired to your CRM.", rest: "Leads flow straight into your pipeline and follow up." },
      { strong: "Looked after.", rest: "An optional Care Plan keeps it fast, safe and up to date." },
    ],
    pointsTitle: "What you get.",
    points: [
      { title: "Custom, not a template", body: "Designed around your business and built to load fast on every device." },
      { title: "Lead capture baked in", body: "Forms, booking and quote tools wired into your CRM, so no enquiry slips." },
      { title: "Care Plan option", body: "Hosting, security, backups and updates handled for you, from $99 a month." },
    ],
    guarantee: false,
    metaTitle: "Website Design and Development | Pipeline Partners",
    metaDesc: "Fast, modern websites built to capture enquiries and wired into your CRM. New builds and rebuilds, plus a Care Plan to keep it running.",
  },
};

// Pipeline Partners. Single source of content. No em dashes anywhere.
// Edit copy here. Components read from these exports.

export const brand = {
  name: "Pipeline Partners",
  tagline: "Keep the work flowing.",
  promise: "We take the risk. You take the work.",
  domain: "https://pipelinepartners.com.au",
  city: "Newcastle",
  // GoHighLevel inline form id used in the Contact section.
  ghlFormId: "yP1jbWcsbMe8gaXBFCzL",
};

// GoHighLevel form ids. `general` is the default. Paste each sector form id
// here as they are built. An empty id falls back to the general form.
export const formIds = {
  general: "yP1jbWcsbMe8gaXBFCzL",
  leads: "",
  seo: "",
  webdev: "",
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

// PLACEHOLDER TESTIMONIALS. Swap for real verified reviews before relying on these publicly.
export const testimonials = [
  { quote: "We went from chasing quotes on shared lead sites to having our own steady flow of jobs. Every lead is ours, no one else is calling them. Booked solid three months ahead now.", name: "Dave M.", role: "Roofing, Newcastle" },
  { quote: "The phone actually rings with real local jobs, not tyre kickers. And I am not paying for leads that go nowhere. It just works.", name: "Sarah T.", role: "Plumbing, Lake Macquarie" },
  { quote: "Being the only sparky getting that customer's call makes all the difference. No race to the bottom on price. Best marketing decision we have made.", name: "Jason K.", role: "Electrical, Hunter Valley" },
  { quote: "Parents find us, book an assessment, and we fill our terms. The enquiries are exactly the families we want. Could not run without it now.", name: "Priya S.", role: "Tutoring, Sydney" },
  { quote: "Straight up, no lock in, and they only get paid when the leads land. That told me everything. Six months in and the pipeline has not dried up.", name: "Mark R.", role: "Building, Central Coast" },
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

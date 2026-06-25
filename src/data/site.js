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
  { name: "Brendan", role: "Co-founder", blurb: "Builds and runs the campaigns that keep your pipeline full." },
  { name: "Joel", role: "Co-founder", blurb: "Makes sure every lead is exclusive and every promise is kept." },
];

export const heroBullets = [
  { strong: "Exclusive to you.", rest: "Never shared, never resold to a rival." },
  { strong: "A guaranteed minimum,", rest: "agreed in writing, every month." },
  { strong: "No leads, no pay.", rest: "The risk sits with us." },
];

// Honest, brand fact stats only. Nothing invented.
export const stats = [
  { value: 1, suffix: "", label: "business per area, per vertical" },
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
];

export const steps = [
  {
    label: "First",
    title: "We claim your area",
    body: "We lock your area and vertical to you alone, agree the monthly minimum in writing, then build the campaigns from scratch.",
  },
  {
    label: "Then",
    title: "Leads start flowing",
    body: "Our Google Ads find people who want your service right now. Each enquiry is qualified and sent straight to your CRM and your phone.",
  },
  {
    label: "You",
    title: "You answer and close",
    body: "You pick up the phone and do the work. We optimise and report, and keep the flow steady month after month.",
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

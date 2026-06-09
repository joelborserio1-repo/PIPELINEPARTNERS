/*
  Pipeline Partners. Single source of truth.

  Add a new vertical by adding ONE object to PP.verticals below.
  The home page pillar cards and the reusable vertical template
  (vertical.html?vertical=SLUG) both read from this array. No redesign needed.

  Per vertical you can set a different GoHighLevel form id in "ghlFormId".
  Leave it as the placeholder to show the tidy embed slot instead of a live form.
*/
window.PP = {
  brand: {
    name: "Pipeline Partners",
    motto: "Keep the work flowing.",
    // Replace with the live domain before launch. Used for canonical and absolute URLs.
    domain: "https://REPLACE-WITH-LIVE-DOMAIN",
    bookingUrl: "#enquire" // anchor to the form section; swap for a real calendar link if wanted
  },

  // The whole vertical system is data. Order here is the order shown on the home page.
  verticals: [
    {
      slug: "trades",
      short: "Trades",
      name: "Trades and Home Services",
      // Keyword matched H1 used on the per vertical page.
      h1: "Exclusive trades leads, guaranteed. You just answer the phone.",
      heroLine: "Homeowners who are ready to book, sent straight to you. Every job is yours alone.",
      oneLiner: "Booked work for the trades that keep homes running.",
      examples: "Electricians, plumbers, roofers, builders, HVAC.",
      keyword: "trades and home services",
      ghlFormId: "yP1jbWcsbMe8gaXBFCzL",
      metaTitle: "Exclusive Trades Leads, Guaranteed, Done For You | Pipeline Partners",
      metaDescription: "Done for you lead generation for electricians, plumbers, roofers, builders and HVAC. Exclusive leads, a guaranteed monthly minimum, and no leads no pay."
    },
    {
      slug: "health",
      short: "Health and Fitness",
      name: "Health and Fitness",
      h1: "Exclusive health and fitness leads, guaranteed. You just answer the phone.",
      heroLine: "Members and clients who want to start now, sent straight to you. Every lead is yours alone.",
      oneLiner: "New members and clients for gyms, trainers and studios.",
      examples: "Gyms, personal trainers, studios.",
      keyword: "health and fitness",
      ghlFormId: "yP1jbWcsbMe8gaXBFCzL",
      metaTitle: "Exclusive Health and Fitness Leads, Guaranteed | Pipeline Partners",
      metaDescription: "Done for you lead generation for gyms, personal trainers and studios. Exclusive leads, a guaranteed monthly minimum, and no leads no pay."
    },
    {
      slug: "clinics",
      short: "Clinics and Practitioners",
      name: "Clinics and Practitioners",
      h1: "Exclusive clinic leads, guaranteed. You just answer the phone.",
      heroLine: "Patients who are ready to book, sent straight to you. Every enquiry is yours alone.",
      oneLiner: "New patients for clinics and allied health practitioners.",
      examples: "Dental, physio, cosmetic, allied health.",
      keyword: "clinics and practitioners",
      ghlFormId: "yP1jbWcsbMe8gaXBFCzL",
      metaTitle: "Exclusive Clinic and Practitioner Leads, Guaranteed | Pipeline Partners",
      metaDescription: "Done for you lead generation for dental, physio, cosmetic and allied health. Exclusive leads, a guaranteed monthly minimum, and no leads no pay."
    }
  ],

  // Shown on the home page FAQ and mirrored into FAQPage JSON-LD.
  faq: [
    {
      q: "What does exclusive actually mean?",
      a: "Every lead we send you is yours alone. We never share it, and we never resell it to a competitor in your area. When your phone rings, ours is the only number that person called."
    },
    {
      q: "How does the guarantee work?",
      a: "We agree a minimum number of leads per month, in writing, before we start. If we miss that minimum, you only pay for the leads we actually delivered. No leads, no pay. The risk sits with us, not you."
    },
    {
      q: "Do I have to run any marketing myself?",
      a: "No. We run all of it. The ads, the targeting, the follow up, the tracking. You answer the phone and do the work you are good at."
    },
    {
      q: "What if I am in a small market?",
      a: "We take one business per area, per vertical. If your area is open, it is yours and we close it to everyone else. If it is already taken, we will tell you straight."
    },
    {
      q: "How do the leads reach me?",
      a: "Straight to your phone and inbox as they come in, so you can follow up while the person is still interested. No logging into a dashboard to dig them out."
    },
    {
      q: "What does it cost?",
      a: "It depends on your vertical and your area, and you only ever pay for leads that arrive. Book a call and we will lay the numbers out plainly, with the written minimum included."
    },
    {
      q: "Which industries do you cover?",
      a: "Trades and home services, health and fitness, and clinics and practitioners today. The model is built to add new verticals, so if you do not see yours yet, ask."
    }
  ]
};

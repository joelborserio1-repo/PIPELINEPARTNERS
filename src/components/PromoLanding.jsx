import { useEffect } from "react";
import { motion } from "framer-motion";
import { landings, promoIndustries, promoLeads, promoOffer } from "../data/site.js";
import LandingNav from "./LandingNav.jsx";
import HeroVisual from "./HeroVisual.jsx";
import { Reveal } from "./Reveal.jsx";
import Marquee from "./Marquee.jsx";
import Guarantee from "./Guarantee.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { IconCheck } from "./icons.jsx";

const L = landings.promo;

function fmt(n) {
  return n.toLocaleString("en-AU");
}

function OfferCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="relative mx-auto max-w-xl rounded-3xl border border-accent bg-surface p-8 shadow-card ring-1 ring-accent/30 md:p-10"
    >
      <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-body text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white">
        {promoOffer.badge}
      </span>
      <h3 className="text-[1.9rem]">{promoOffer.name}</h3>
      <p className="mt-1 font-body font-medium text-accent2">{promoOffer.tagline}</p>

      <div className="mt-7 space-y-2 border-y border-line py-5 font-body">
        <div className="flex items-center justify-between text-muted">
          <span>Management fee</span>
          <span className="font-semibold text-ink">${fmt(promoOffer.fee)}/mo</span>
        </div>
        <div className="flex items-center justify-between text-muted">
          <span>Ad spend, at cost</span>
          <span className="font-semibold text-ink">${fmt(promoOffer.adSpend)}/mo</span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="font-semibold">All in total</span>
          <span className="font-display text-[1.9rem] leading-none text-accent">${fmt(promoOffer.allIn)}<span className="font-body text-[0.9rem] text-muted">/mo</span></span>
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-3 font-body text-[0.98rem]">
        {promoOffer.includes.map((inc) => (
          <li key={inc} className="flex items-start gap-2.5">
            <IconCheck className="mt-0.5 h-5 w-5 flex-none text-accent" /> <span>{inc}</span>
          </li>
        ))}
      </ul>

      <a href="#contact" className="btn btn-primary mt-8 w-full py-4 text-[1.05rem]">Check if your area is open</a>
      <p className="mt-4 font-body text-[0.85rem] text-faint">{promoOffer.note}</p>
    </motion.div>
  );
}

export default function PromoLanding() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = L.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta ? meta.getAttribute("content") : null;
    if (meta) meta.setAttribute("content", L.metaDesc);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc != null) meta.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <>
      <LandingNav />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-accentDeep pt-[112px] text-white">
          <div className="wrap pb-16 pt-10 md:pb-20 md:pt-14">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 font-body text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/80">{L.eyebrow}</span>
                <h1 className="mt-6 text-[clamp(2.6rem,6.4vw,4.8rem)] leading-[0.94]">{L.h1}</h1>
                <p className="mt-5 max-w-xl text-[clamp(1.05rem,1.5vw,1.22rem)] text-white/70">{L.sub}</p>
                <ul className="mt-7 flex flex-col gap-2.5">
                  {L.bullets.map((b) => (
                    <li key={b.strong} className="flex items-start gap-3 text-[1.0rem]">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-white" />
                      <span className="text-white/70"><b className="text-white">{b.strong}</b> {b.rest}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap gap-3.5">
                  <a href="#contact" className="btn bg-white px-7 py-4 text-[1.02rem] text-onlight hover:-translate-y-0.5 hover:bg-white/90">Claim your area</a>
                  <a href="#offer" className="btn border border-white/30 px-7 py-4 text-[1.02rem] text-white hover:bg-white/10">See the offer</a>
                </div>
              </div>
              <div className="lg:pl-6"><HeroVisual leads={promoLeads} /></div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* who it is for */}
        <section className="py-24 md:py-32">
          <div className="wrap">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="eyebrow justify-center">Who it is for</span>
                <h2 className="mt-4 text-[clamp(2rem,4.6vw,3.2rem)]">Built for service based practices.</h2>
                <p className="mt-4 font-body text-muted">
                  If you run a practice and rely on a steady stream of new client bookings, this is for you. A few of the practitioners we work with.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
                {promoIndustries.map((name) => (
                  <span key={name} className="rounded-full border border-line bg-surface px-4 py-2 font-body text-[0.92rem] text-ink/85">
                    {name}
                  </span>
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-xl text-center font-body text-[0.9rem] text-faint">
                Not on the list? If new client bookings drive your practice, ask us.
              </p>
            </Reveal>
          </div>
        </section>

        {/* why it works */}
        <section className="bg-paper2 py-24 md:py-32">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Why it works</span>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.2rem)]">{L.pointsTitle}</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {L.points.map((p, i) => (
                <Reveal key={p.title} delay={0.07 * i}>
                  <div className="card h-full p-7">
                    <span className="font-display text-[1.7rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 text-[1.35rem]">{p.title}</h3>
                    <p className="mt-2.5 font-body text-[0.98rem] text-muted">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* the offer */}
        <section id="offer" className="py-24 md:py-32">
          <div className="wrap">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="eyebrow justify-center">The offer</span>
                <h2 className="mt-4 text-[clamp(2rem,4.6vw,3.4rem)]">One offer. Nothing hidden.</h2>
                <p className="mt-4 font-body text-muted">
                  A flat monthly fee plus ad spend at cost, backed by the guarantee. No setup fee, no long lock in, no marked up ad spend.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12"><OfferCard /></div>
            </Reveal>
          </div>
        </section>

        <Guarantee />

        {/* the matching form */}
        <Contact fixedService={L.formKey} />
      </main>
      <Footer />
    </>
  );
}

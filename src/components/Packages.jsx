import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { packages, packagesTerms, packagesSeo, packagesSeoTerms } from "../data/site.js";

const tabs = [
  { key: "leads", label: "Leads" },
  { key: "seo", label: "SEO" },
  { key: "webdev", label: "Web Development" },
];

function fmt(n) { return n.toLocaleString("en-AU"); }
function Dot() { return <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />; }

function PlanGrid({ plans, terms }) {
  return (
    <>
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className={`relative flex h-full flex-col rounded-2xl border p-8 ${
              p.popular ? "border-accent bg-white shadow-card ring-1 ring-accent/30" : "border-line bg-white shadow-soft"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-body text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white">
                Most popular
              </span>
            )}
            <h3 className="text-[1.6rem]">{p.name}</h3>
            <p className="mt-1 font-body font-medium text-accent2">{p.tagline}</p>

            {p.adSpend != null ? (
              <>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-[0.95rem] text-muted">$</span>
                  <span className="font-display text-[3.2rem] leading-none">{fmt(p.fee)}</span>
                </div>
                <p className="font-body text-[0.9rem] text-muted">per month, management fee</p>
                <div className="mt-5 space-y-2 border-y border-line py-4 font-body text-[0.92rem]">
                  <div className="flex items-center justify-between text-muted">
                    <span>Ad spend, at cost</span><span className="font-semibold text-ink">${fmt(p.adSpend)}/mo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">All in total</span><span className="font-display text-[1.3rem] text-accent">${fmt(p.allIn)}/mo</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-[0.95rem] text-muted">$</span>
                  <span className="font-display text-[3.2rem] leading-none">{fmt(p.price)}</span>
                  <span className="mb-1.5 font-body text-[0.9rem] text-muted">/mo</span>
                </div>
                <div className="mt-5 border-t border-line pt-5" />
              </>
            )}

            <ul className="mt-6 flex flex-1 flex-col gap-3 font-body text-[0.95rem]">
              {p.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-muted"><Dot /> <span>{inc}</span></li>
              ))}
            </ul>

            <a href="#contact" className={`btn mt-8 ${p.popular ? "btn-primary" : "btn-ghost"}`}>Get started</a>
          </motion.div>
        ))}
      </div>
      {terms && (
        <p className="mx-auto mt-8 max-w-3xl border-l-2 border-accent pl-4 font-body text-[0.92rem] text-muted">{terms}</p>
      )}
    </>
  );
}

function ComingSoon({ title, body }) {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-white p-10 text-center shadow-soft md:p-14">
      <span className="eyebrow justify-center">Coming soon</span>
      <h3 className="mt-4 text-[clamp(1.5rem,3vw,2rem)]">{title}</h3>
      <p className="mx-auto mt-3 max-w-md font-body text-muted">{body}</p>
      <a href="#contact" className="btn btn-primary mt-7 px-7 py-3.5">Book a call</a>
    </div>
  );
}

export default function Packages() {
  const [active, setActive] = useState("leads");
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Packages</span>
            <h2 className="mt-4 text-[clamp(2rem,4.6vw,3.4rem)]">Choose your package.</h2>
            <p className="mt-4 font-body text-muted">
              Lead generation is a monthly fee plus ad spend at cost, backed by the guarantee. SEO and websites are priced separately. Pick a tab.
            </p>
          </div>
        </Reveal>

        {/* tabs */}
        <Reveal delay={0.06}>
          <div className="mx-auto mt-8 flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-line bg-white p-1.5 shadow-soft">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                aria-pressed={active === t.key}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 font-body text-[0.82rem] font-bold uppercase tracking-wide transition-colors ${
                  active === t.key ? "bg-accent text-white" : "text-muted hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {active === "leads" && <PlanGrid plans={packages} terms={packagesTerms} />}
              {active === "seo" && <PlanGrid plans={packagesSeo} terms={packagesSeoTerms} />}
              {active === "webdev" && (
                <ComingSoon
                  title="Website packages are on the way"
                  body="A new site or a rebuild, tell us what you need and we will scope it and quote it. No obligation."
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

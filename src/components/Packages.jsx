import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { packages, packagesTerms, packagesSeo, packagesSeoTerms, packagesWeb, packagesWebTerms, carePlan } from "../data/site.js";

const tabs = [
  { key: "leads", label: "Leads" },
  { key: "seo", label: "SEO" },
  { key: "webdev", label: "Web Development" },
];

// Each service has a dedicated landing page with its own CRM form.
const serviceRoutes = { leads: "/leadgen", seo: "/seo", webdev: "/webdev" };

function fmt(n) { return n.toLocaleString("en-AU"); }
function Dot() { return <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />; }

function PlanGrid({ plans, terms, serviceKey, onEnquire, onLanding }) {
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
                <div className="mt-6 flex flex-wrap items-end gap-x-1.5">
                  {p.from && <span className="mb-1.5 font-body text-[0.9rem] text-muted">From</span>}
                  <span className="font-display text-[0.95rem] text-muted">$</span>
                  <span className="font-display text-[3.2rem] leading-none">{fmt(p.price)}</span>
                  <span className="mb-1.5 font-body text-[0.9rem] text-muted">{p.unit === "one-off" ? "one-off" : "/mo"}</span>
                </div>
                <div className="mt-5 border-t border-line pt-5" />
              </>
            )}

            <ul className="mt-6 flex flex-1 flex-col gap-3 font-body text-[0.95rem]">
              {p.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-muted"><Dot /> <span>{inc}</span></li>
              ))}
            </ul>

            {p.bestFor && <p className="mt-5 font-body text-[0.85rem] italic text-faint">Best for: {p.bestFor}</p>}

            {onLanding ? (
              <a href="#contact" onClick={() => onEnquire && onEnquire(serviceKey)} className={`btn mt-8 ${p.popular ? "btn-primary" : "btn-ghost"}`}>Get started</a>
            ) : (
              <Link to={serviceRoutes[serviceKey] || "#contact"} className={`btn mt-8 ${p.popular ? "btn-primary" : "btn-ghost"}`}>Get started</Link>
            )}
          </motion.div>
        ))}
      </div>
      {terms && (
        <p className="mx-auto mt-8 max-w-3xl border-l-2 border-accent pl-4 font-body text-[0.92rem] text-muted">{terms}</p>
      )}
    </>
  );
}

function CarePlanBanner({ onEnquire, onLanding }) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl bg-accentDeep p-7 text-white md:p-9">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 font-body text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white/80">Optional add-on</span>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-3">
            <h3 className="text-[1.6rem]">{carePlan.name}</h3>
            <span className="font-display text-[1.5rem] text-white/85">From ${carePlan.priceFrom}<span className="font-body text-[0.8rem] text-white/50"> /mo</span></span>
          </div>
          <p className="mt-3 font-body text-[0.98rem] text-white/70">{carePlan.desc}</p>
        </div>
        {onLanding ? (
          <a href="#contact" onClick={() => onEnquire && onEnquire("webdev")} className="btn shrink-0 bg-white px-7 py-3.5 text-ink hover:-translate-y-0.5 hover:bg-white/90">Add a Care Plan</a>
        ) : (
          <Link to="/webdev" className="btn shrink-0 bg-white px-7 py-3.5 text-ink hover:-translate-y-0.5 hover:bg-white/90">Add a Care Plan</Link>
        )}
      </div>
    </div>
  );
}

export default function Packages({ onEnquire, defaultTab = "leads", hideTabs = false }) {
  const [active, setActive] = useState(defaultTab);
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Packages</span>
            <h2 className="mt-4 text-[clamp(2rem,4.6vw,3.4rem)]">Choose your package.</h2>
            <p className="mt-4 font-body text-muted">
              Transparent pricing, no surprises. Lead generation is a monthly fee plus ad spend at cost, backed by the guarantee. SEO and websites are priced separately.
            </p>
          </div>
        </Reveal>

        {/* tabs */}
        {!hideTabs && (
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
        )}

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {active === "leads" && <PlanGrid plans={packages} terms={packagesTerms} serviceKey="leads" onEnquire={onEnquire} onLanding={hideTabs} />}
              {active === "seo" && <PlanGrid plans={packagesSeo} terms={packagesSeoTerms} serviceKey="seo" onEnquire={onEnquire} onLanding={hideTabs} />}
              {active === "webdev" && (
                <>
                  <PlanGrid plans={packagesWeb} terms={packagesWebTerms} serviceKey="webdev" onEnquire={onEnquire} onLanding={hideTabs} />
                  <CarePlanBanner onEnquire={onEnquire} onLanding={hideTabs} />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

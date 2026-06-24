import { motion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { packages, packagesTerms } from "../data/site.js";

function fmt(n) { return n.toLocaleString("en-AU"); }

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />;
}

export default function Packages() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Packages</span>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.2rem)] font-bold">Choose your package.</h2>
          <p className="mt-4 max-w-2xl text-muted">
            A monthly management fee plus advertising spend billed at cost. Pick the volume you want. Every package is backed by the guarantee.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  p.popular
                    ? "border-accent bg-gradient-to-b from-surface2 to-ink2 shadow-card"
                    : "border-line bg-gradient-to-b from-surface to-ink2"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-[1.6rem] font-semibold">{p.name}</h3>
                <p className="mt-1 font-medium text-accent2">{p.tagline}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-[0.95rem] text-muted">$</span>
                  <span className="font-display text-[3rem] font-semibold leading-none">{fmt(p.fee)}</span>
                </div>
                <p className="text-[0.9rem] text-muted">per month, management fee</p>

                <div className="mt-5 space-y-2 border-y border-line py-4 text-[0.92rem]">
                  <div className="flex items-center justify-between text-muted">
                    <span>Ad spend, at cost</span><span className="font-semibold text-cream">${fmt(p.adSpend)}/mo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">All in total</span><span className="font-display text-[1.15rem] font-semibold text-accent">${fmt(p.allIn)}/mo</span>
                  </div>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3 text-[0.95rem]">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-muted">
                      <Dot /> <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`btn mt-8 ${p.popular ? "btn-primary" : "btn-ghost"}`}>
                  Get started
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-3xl border-l-2 border-accent pl-4 text-[0.92rem] text-muted">
            {packagesTerms}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import HeroVisual from "./HeroVisual.jsx";
import { Counter } from "./Reveal.jsx";
import { brand, heroBullets, stats } from "../data/site.js";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1];
  const rise = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: reduce ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay: d },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-[112px]">
      {/* soft, airy background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_88%_8%,rgba(255,106,26,0.12),transparent_60%),radial-gradient(45%_40%_at_6%_18%,rgba(40,90,255,0.05),transparent_60%)]"
      />

      <div className="wrap relative pb-20 pt-10 md:pb-28 md:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy */}
          <div>
            <motion.span {...rise(0)} className="eyebrow">Exclusive, guaranteed leads</motion.span>
            <motion.h1 {...rise(0.08)} className="mt-5 text-[clamp(2.4rem,5.4vw,4.2rem)] font-bold leading-[1]">
              {brand.promise}
            </motion.h1>
            <motion.p {...rise(0.16)} className="mt-5 max-w-xl text-[clamp(1.05rem,1.5vw,1.22rem)] text-muted">
              We run all the marketing and guarantee a set number of local jobs every month, yours alone, never shared. If we miss the number, you do not pay. Simple as that.
            </motion.p>

            <motion.ul {...rise(0.22)} className="mt-6 flex flex-col gap-2.5">
              {heroBullets.map((b) => (
                <li key={b.strong} className="flex items-start gap-3 text-[1.0rem]">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent shadow-[0_0_0_4px_rgba(255,106,26,0.15)]" />
                  <span className="text-muted"><b className="text-ink">{b.strong}</b> {b.rest}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...rise(0.3)} className="mt-8 flex flex-wrap gap-3.5">
              <a href="#contact" className="btn btn-primary px-8 py-4 text-[1.05rem]">
                Claim your area <Arrow />
              </a>
              <a href="#how" className="btn btn-ghost px-8 py-4 text-[1.05rem]">See how it works</a>
            </motion.div>
          </div>

          {/* visual */}
          <motion.div {...rise(0.2)} className="lg:pl-6">
            <HeroVisual />
          </motion.div>
        </div>

        {/* honest stat band */}
        <motion.div {...rise(0.42)} className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-line bg-white px-6 py-6 shadow-soft">
              <div className="font-display text-[2.1rem] font-semibold text-accent">
                <Counter to={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
              </div>
              <div className="mt-1 text-[0.92rem] text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

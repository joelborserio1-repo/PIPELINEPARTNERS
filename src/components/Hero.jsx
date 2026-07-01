import { motion, useReducedMotion } from "framer-motion";
import HeroVisual from "./HeroVisual.jsx";
import { Counter } from "./Reveal.jsx";
import { brand, heroBullets, stats } from "../data/site.js";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
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
    <section id="top" className="relative overflow-hidden bg-accentDeep pt-[112px] text-white">
      <div className="wrap relative pb-16 pt-10 md:pb-20 md:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy */}
          <div>
            <motion.h1 {...rise(0.04)} className="text-[clamp(2.9rem,7vw,5.4rem)] leading-[0.92]">
              {brand.promise}
            </motion.h1>
            <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-[clamp(1.05rem,1.5vw,1.22rem)] text-white/70">
              We run all the marketing and guarantee a set number of local jobs every month, yours alone, never shared. If we miss the number, you do not pay. Simple as that.
            </motion.p>

            <motion.ul {...rise(0.22)} className="mt-7 flex flex-col gap-2.5">
              {heroBullets.map((b) => (
                <li key={b.strong} className="flex items-start gap-3 text-[1.0rem]">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-white" />
                  <span className="text-white/70"><b className="text-white">{b.strong}</b> {b.rest}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap gap-3.5">
              <a href="#contact" className="btn bg-white px-7 py-4 text-[1.02rem] text-onlight hover:-translate-y-0.5 hover:bg-white/90">
                Claim your area <Arrow />
              </a>
              <a href="#how" className="btn border border-white/30 px-7 py-4 text-[1.02rem] text-white hover:bg-white/10">See how it works</a>
            </motion.div>
          </div>

          {/* visual */}
          <motion.div {...rise(0.2)} className="lg:pl-6">
            <HeroVisual />
          </motion.div>
        </div>

        {/* stats card band */}
        <motion.div {...rise(0.42)} className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-7 py-7">
              <div className="font-display text-[2.6rem] leading-none text-accent">
                <Counter to={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
              </div>
              <div className="mt-2 text-[0.92rem] text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

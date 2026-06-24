import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import HeroBackground from "./HeroBackground.jsx";
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
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const ease = [0.16, 1, 0.3, 1];
  const rise = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: reduce ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay: d },
  });

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-[112px]">
      {/* animated pipeline background */}
      <motion.div style={{ opacity: fade }} className="absolute inset-0 -z-10">
        <HeroBackground />
      </motion.div>
      {/* controlled glow with parallax */}
      <motion.div
        style={{ y: glowY }}
        aria-hidden="true"
        className="absolute -right-[10%] top-[26%] -z-10 h-[44vw] max-h-[640px] w-[44vw] max-w-[640px] rounded-full"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,26,0.28),rgba(255,106,26,0.06)_40%,transparent_66%)] blur-[6px] animate-floatglow" />
      </motion.div>
      {/* grid wash */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_30%,#000,transparent_78%)]" />

      <div className="wrap relative pb-20 pt-10 md:pb-28 md:pt-16">
        <div className="max-w-3xl">
          <motion.span {...rise(0)} className="eyebrow">Exclusive, guaranteed leads</motion.span>
          <motion.h1 {...rise(0.08)} className="mt-5 text-[clamp(2.6rem,6.6vw,5rem)] font-bold leading-[0.98]">
            {brand.promise}
          </motion.h1>
          <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-[clamp(1.08rem,1.7vw,1.3rem)] text-muted">
            We run all the marketing and guarantee a set number of local jobs every month, yours alone, never shared. If we miss the number, you do not pay. Simple as that.
          </motion.p>

          <motion.ul {...rise(0.22)} className="mt-7 flex flex-col gap-2.5">
            {heroBullets.map((b) => (
              <li key={b.strong} className="flex items-start gap-3 text-[1.02rem]">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent shadow-[0_0_10px_rgba(255,106,26,0.7)]" />
                <span className="text-muted"><b className="text-cream">{b.strong}</b> {b.rest}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap gap-3.5">
            <a href="#contact" className="btn btn-primary btn-lg px-8 py-4 text-[1.05rem]">
              Claim your area <Arrow />
            </a>
            <a href="#how" className="btn btn-ghost px-8 py-4 text-[1.05rem]">See how it works</a>
          </motion.div>
        </div>

        {/* honest stat band */}
        <motion.div {...rise(0.4)} className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink2 px-6 py-6">
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

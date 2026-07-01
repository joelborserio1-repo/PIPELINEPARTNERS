import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { testimonials } from "../data/site.js";

function Stars() {
  return (
    <div className="flex justify-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.9.6-5.2 4.5 1.56 6.74L12 17.77 5.84 20.6 7.4 13.86 2.2 9.36l6.9-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Results() {
  const reduce = useReducedMotion();
  const n = testimonials.length;
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((d) => { setDir(d); setI((p) => (p + d + n) % n); }, [n]);
  const jump = (idx) => { setDir(idx > i ? 1 : -1); setI(idx); };

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [go, reduce, i]);

  const t = testimonials[i];
  const variants = {
    enter: (d) => ({ opacity: 0, x: reduce ? 0 : d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: reduce ? 0 : d * -40 }),
  };

  return (
    <section id="results" className="py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Results</span>
            <h2 className="mt-4 text-[clamp(2rem,4.6vw,3.2rem)]">Real local businesses, owning their pipeline.</h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.12),transparent_60%)] blur-xl" />
            <div className="overflow-hidden rounded-3xl border border-line bg-white p-8 text-center shadow-soft md:p-14">
              <div className="min-h-[280px] sm:min-h-[240px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.figure
                    key={i}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Stars />
                    <blockquote className="mx-auto mt-6 max-w-2xl font-body text-[clamp(1.12rem,2.1vw,1.45rem)] leading-relaxed text-ink">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-7">
                      <div className="font-display text-[1.25rem] uppercase text-ink">{t.name}</div>
                      <div className="font-body text-[0.92rem] text-muted">{t.role}</div>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button onClick={() => go(-1)} aria-label="Previous review" className="grid h-11 w-11 flex-none place-items-center rounded-full border border-line2 text-ink transition hover:bg-black/[0.04]">
                <Chevron dir="left" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to review ${idx + 1}`}
                    onClick={() => jump(idx)}
                    className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-accent" : "w-2 bg-line2 hover:bg-muted"}`}
                  />
                ))}
              </div>
              <button onClick={() => go(1)} aria-label="Next review" className="grid h-11 w-11 flex-none place-items-center rounded-full border border-line2 text-ink transition hover:bg-black/[0.04]">
                <Chevron dir="right" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

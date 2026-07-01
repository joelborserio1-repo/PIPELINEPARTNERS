import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { testimonials } from "../data/site.js";

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="currentColor" aria-hidden="true">
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

// 3 per view on desktop, 2 on tablet, 1 on mobile
function usePerView() {
  const [pv, setPv] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPv(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    calc();
    window.addEventListener("resize", calc, { passive: true });
    return () => window.removeEventListener("resize", calc);
  }, []);
  return pv;
}

export default function Results() {
  const reduce = useReducedMotion();
  const perView = usePerView();
  const pages = Math.ceil(testimonials.length / perView);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => { setPage((p) => Math.min(p, pages - 1)); }, [pages]);

  const go = useCallback((d) => { setDir(d); setPage((p) => (p + d + pages) % pages); }, [pages]);

  useEffect(() => {
    if (reduce || pages <= 1) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go, reduce, pages, page]);

  const slice = testimonials.slice(page * perView, page * perView + perView);
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
          <div className="relative mt-12">
            <div aria-hidden="true" className="absolute -inset-x-4 -top-6 -z-10 h-56 rounded-[40px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,26,0.06),transparent_60%)] blur-xl" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={page}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {slice.map((t) => (
                  <figure key={t.name} className="card flex h-full flex-col p-7">
                    <Stars />
                    <blockquote className="mt-4 flex-1 font-body text-[0.98rem] leading-relaxed text-ink/90">{t.quote}</blockquote>
                    <figcaption className="mt-6 border-t border-line pt-4">
                      <div className="font-display text-[1.1rem] uppercase text-ink">{t.name}</div>
                      <div className="font-body text-[0.85rem] text-muted">{t.role}</div>
                    </figcaption>
                  </figure>
                ))}
              </motion.div>
            </AnimatePresence>

            {pages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button onClick={() => go(-1)} aria-label="Previous reviews" className="grid h-11 w-11 flex-none place-items-center rounded-full border border-line2 text-ink transition hover:bg-white/[0.06]">
                  <Chevron dir="left" />
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: pages }).map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to page ${idx + 1}`}
                      onClick={() => { setDir(idx > page ? 1 : -1); setPage(idx); }}
                      className={`h-2 rounded-full transition-all ${idx === page ? "w-6 bg-accent" : "w-2 bg-line2 hover:bg-muted"}`}
                    />
                  ))}
                </div>
                <button onClick={() => go(1)} aria-label="Next reviews" className="grid h-11 w-11 flex-none place-items-center rounded-full border border-line2 text-ink transition hover:bg-white/[0.06]">
                  <Chevron dir="right" />
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

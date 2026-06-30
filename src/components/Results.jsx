import { motion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { testimonials } from "../data/site.js";

/*
  PLACEHOLDER TESTIMONIALS. Swap for real verified reviews before relying on
  these publicly. The quotes live in src/data/site.js under `testimonials`.
*/

function Quote() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent/70" fill="currentColor" aria-hidden="true">
      <path d="M9.5 6C6.5 6 4 8.5 4 11.5V18h6v-6H7.2c0-1.6 1-2.8 2.3-3.2zM20 6c-3 0-5.5 2.5-5.5 5.5V18h6v-6h-2.8c0-1.6 1-2.8 2.3-3.2z" />
    </svg>
  );
}

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Results</span>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.2rem)] font-bold">
            Real local businesses, owning their pipeline.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Exclusive leads change how a service business runs. No race to the bottom, no shared lists. Just your phone ringing.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <motion.figure
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="card flex h-full flex-col p-7"
              >
                <Quote />
                <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-cream/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-[0.9rem] text-muted">{t.role}</div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

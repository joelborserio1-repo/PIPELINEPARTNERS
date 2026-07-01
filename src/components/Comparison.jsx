import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { comparison } from "../data/site.js";

function Tick() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] flex-none text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2.6">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Cross() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] flex-none text-faint" fill="none" stroke="currentColor" strokeWidth="2.6">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function Comparison() {
  const reduce = useReducedMotion();
  return (
    <section id="compare" className="bg-paper2 py-24 text-ink md:py-32">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow" style={{ color: "#ff8347" }}>Exclusive vs shared</span>
          <h2 className="mt-4 max-w-[20ch] text-[clamp(1.8rem,4vw,2.9rem)] font-bold">
            Most agencies sell the same lead to four of your rivals. We sell it once. To you.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface">
            {/* header */}
            <div className="grid grid-cols-[1.3fr_1fr_1fr] border-b border-line">
              <div className="p-4 md:p-5" />
              <div className="relative bg-accent/12 p-4 font-display font-semibold text-white md:p-5">
                Pipeline Partners
                <span className="absolute right-3 top-0 rounded-b-md bg-accent px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white">Exclusive</span>
              </div>
              <div className="p-4 font-display font-semibold text-faint md:p-5">Shared lead sellers</div>
            </div>

            {comparison.map((row, i) => (
              <motion.div
                key={row.factor}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="grid grid-cols-[1.3fr_1fr_1fr] border-b border-line last:border-0 text-[0.92rem] md:text-[1rem]"
              >
                <div className="p-4 font-semibold md:p-5">{row.factor}</div>
                <div className="flex items-center gap-2 bg-accent/[0.06] p-4 font-medium md:p-5">
                  <Tick /> <span>{row.us}</span>
                </div>
                <div className="flex items-center gap-2 p-4 text-muted md:p-5">
                  <Cross /> <span>{row.them}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-5 text-[0.92rem] text-muted">Every row is a plain statement of how we operate. No figures we cannot stand behind.</p>
        </Reveal>
      </div>
    </section>
  );
}

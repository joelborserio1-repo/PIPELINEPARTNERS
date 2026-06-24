import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { faqs } from "../data/site.js";

function Item({ q, a, open, onToggle, id }) {
  return (
    <div className="border-b border-line">
      <button
        className="flex w-full items-center justify-between gap-5 py-6 text-left font-display text-[1.12rem] font-medium transition-colors hover:text-accent2"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        <span>{q}</span>
        <span className={`relative grid h-8 w-8 flex-none place-items-center rounded-full border border-line2 transition ${open ? "border-accent bg-accent/10" : ""}`}>
          <span className="absolute h-[2px] w-3 rounded bg-accent" />
          <span className={`absolute h-3 w-[2px] rounded bg-accent transition-transform duration-300 ${open ? "scale-y-0" : ""}`} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] pb-6 text-[1.02rem] text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-paper2 py-24 md:py-32">
      <div className="wrap grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <span className="eyebrow">Questions</span>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,2.9rem)] font-bold">Straight answers.</h2>
          <p className="mt-4 text-muted">
            Still unsure? <a href="#contact" className="font-semibold text-accent2">Check your area</a> with no pressure.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {faqs.map((f, i) => (
              <Item
                key={f.q}
                id={`faq-${i}`}
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

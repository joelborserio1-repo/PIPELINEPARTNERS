import { Reveal } from "./Reveal.jsx";
import { steps } from "../data/site.js";

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-cream py-24 text-ink2 md:py-32">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow" style={{ color: "#e2540a" }}>How it works</span>
          <h2 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.6vw,3.2rem)] font-bold">
            Three steps. Then your phone starts ringing.
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-12 md:grid-cols-3">
          {/* flowing connector line */}
          <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-2 hidden h-[2px] md:block">
            <div className="h-full w-full bg-gradient-to-r from-accent via-accent/40 to-transparent" />
          </div>

          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.12 * i}>
              <div className="relative pt-9">
                <span className="absolute left-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-accent shadow-[0_0_0_5px_rgba(255,106,26,0.16)]" />
                <div className="font-display text-[0.92rem] font-semibold text-accentDeep">{s.label}</div>
                <h3 className="mt-2 text-[1.5rem] font-semibold">{s.title}</h3>
                <p className="mt-3 text-[1.02rem] text-ink2/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

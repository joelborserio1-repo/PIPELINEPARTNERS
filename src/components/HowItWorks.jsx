import { Reveal } from "./Reveal.jsx";
import { steps } from "../data/site.js";
import { stepIcons } from "./icons.jsx";

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-paper2 py-24 text-ink md:py-32">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.6vw,3.2rem)] font-bold">
            Three steps. Then your phone starts ringing.
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* flowing connector line */}
          <div aria-hidden="true" className="absolute left-[14%] right-[14%] top-7 hidden h-[2px] md:block">
            <div className="h-full w-full bg-gradient-to-r from-accent via-accent/40 to-transparent" />
          </div>

          {steps.map((s, i) => {
            const Icon = stepIcons[i] || stepIcons[0];
            return (
              <Reveal key={s.title} delay={0.12 * i}>
                <div className="relative rounded-3xl border border-line bg-white p-7 shadow-soft">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-accent text-white shadow-glow">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-[0.92rem] font-semibold uppercase tracking-wide text-accent2">{s.label}</span>
                  </div>
                  <h3 className="mt-5 text-[1.5rem] font-semibold">{s.title}</h3>
                  <p className="mt-3 text-[1.0rem] text-ink/65">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

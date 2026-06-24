import { Reveal } from "./Reveal.jsx";
import { about, brand } from "../data/site.js";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">About</span>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3rem)] font-bold">
            A young {brand.city} agency that does what it says.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[clamp(1.1rem,1.7vw,1.35rem)] leading-relaxed text-muted">
            {about}
          </p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem]">
            <span className="text-cream"><b className="text-accent">No</b> marked up ad spend</span>
            <span className="text-cream"><b className="text-accent">No</b> lock in games</span>
            <span className="text-cream"><b className="text-accent">No</b> shared leads</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

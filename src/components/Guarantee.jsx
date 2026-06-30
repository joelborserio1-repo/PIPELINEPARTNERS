import { Reveal } from "./Reveal.jsx";
import { guaranteePoints } from "../data/site.js";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Guarantee() {
  return (
    <section id="guarantee" className="relative overflow-hidden bg-accentDeep py-24 text-white md:py-32">
      <div className="wrap">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/80">The guarantee</span>
            <h2 className="mt-5 text-[clamp(3rem,8vw,5.5rem)] leading-[0.9]">
              No leads.<span className="block text-white/55">No pay.</span>
            </h2>
            <a href="#contact" className="btn mt-8 bg-white px-7 py-4 text-ink hover:-translate-y-0.5 hover:bg-white/90">Put us on the hook</a>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[1.12rem] text-white/70">
              This is not a slogan, it is how we are built. We agree a minimum number of exclusive leads up front, in writing. Miss it, and you only pay for what we deliver. The downside sits entirely with us.
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {guaranteePoints.map((p) => (
                <li key={p.strong} className="flex items-start gap-3 text-[1.04rem]">
                  <Check /> <span><b className="text-white">{p.strong}</b> <span className="text-white/70">{p.rest}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

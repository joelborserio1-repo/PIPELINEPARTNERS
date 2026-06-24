import { Reveal } from "./Reveal.jsx";
import { guaranteePoints } from "../data/site.js";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-accent" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-paper2 py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-10 shadow-card md:p-16">
            <div aria-hidden="true" className="absolute -right-24 -top-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,106,26,0.42),transparent_65%)] blur-[44px] opacity-60" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="eyebrow">The guarantee</span>
                <h2 className="mt-4 text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-[0.95]">
                  No leads.<span className="block text-accent">No pay.</span>
                </h2>
                <a href="#contact" className="btn btn-primary mt-8 px-7 py-3.5">Put us on the hook</a>
              </div>
              <div>
                <p className="text-[1.12rem] text-muted">
                  This is not a slogan, it is how we are built. We agree a minimum number of exclusive leads up front, in writing. Miss it, and you only pay for what we deliver. The downside sits entirely with us.
                </p>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {guaranteePoints.map((p) => (
                    <li key={p.strong} className="flex items-start gap-3 text-[1.04rem]">
                      <Check /> <span><b className="text-cream">{p.strong}</b> <span className="text-muted">{p.rest}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import { landings } from "../data/site.js";
import LandingNav from "./LandingNav.jsx";
import LandingVisual from "./LandingVisual.jsx";
import { Reveal } from "./Reveal.jsx";
import Marquee from "./Marquee.jsx";
import Packages from "./Packages.jsx";
import Guarantee from "./Guarantee.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

export default function ServiceLanding({ slug }) {
  const L = landings[slug];

  useEffect(() => {
    if (!L) return;
    const prevTitle = document.title;
    document.title = L.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta ? meta.getAttribute("content") : null;
    if (meta) meta.setAttribute("content", L.metaDesc);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc != null) meta.setAttribute("content", prevDesc);
    };
  }, [L]);

  if (!L) return null;

  return (
    <>
      <LandingNav />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-accentDeep pt-[112px] text-white">
          <div className="wrap pb-16 pt-10 md:pb-20 md:pt-14">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 font-body text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/80">{L.eyebrow}</span>
                <h1 className="mt-6 text-[clamp(2.6rem,6.4vw,4.8rem)] leading-[0.94]">{L.h1}</h1>
                <p className="mt-5 max-w-xl text-[clamp(1.05rem,1.5vw,1.22rem)] text-white/70">{L.sub}</p>
                <ul className="mt-7 flex flex-col gap-2.5">
                  {L.bullets.map((b) => (
                    <li key={b.strong} className="flex items-start gap-3 text-[1.0rem]">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-white" />
                      <span className="text-white/70"><b className="text-white">{b.strong}</b> {b.rest}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap gap-3.5">
                  <a href="#contact" className="btn bg-white px-7 py-4 text-[1.02rem] text-ink hover:-translate-y-0.5 hover:bg-white/90">Get started</a>
                  <a href="#pricing" className="btn border border-white/30 px-7 py-4 text-[1.02rem] text-white hover:bg-white/10">See pricing</a>
                </div>
              </div>
              <div className="lg:pl-6"><LandingVisual service={slug} /></div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* what you get */}
        <section className="py-24 md:py-32">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Why it works</span>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.2rem)]">{L.pointsTitle}</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {L.points.map((p, i) => (
                <Reveal key={p.title} delay={0.07 * i}>
                  <div className="card h-full p-7">
                    <span className="font-display text-[1.7rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 text-[1.35rem]">{p.title}</h3>
                    <p className="mt-2.5 font-body text-[0.98rem] text-muted">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* transparent pricing for this service */}
        <Packages hideTabs defaultTab={L.tab} />

        {L.guarantee && <Guarantee />}

        {/* the matching form */}
        <Contact fixedService={L.formKey} />
      </main>
      <Footer />
    </>
  );
}

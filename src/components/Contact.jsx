import { useEffect } from "react";
import { Reveal } from "./Reveal.jsx";
import { brand } from "../data/site.js";

const reassure = [
  "No obligation and no hard sell.",
  "A clear yes or no on whether your area is open.",
  "Backed by the no leads, no pay guarantee.",
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contact() {
  useEffect(() => {
    // Load the GoHighLevel embed helper once (auto-resizes the iframe).
    const SRC = "https://link.msgsndr.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      document.body.appendChild(s);
    }
    const onMsg = (e) => {
      const host = String(e.origin || "");
      if (host.indexOf("leadconnectorhq") === -1 && host.indexOf("msgsndr") === -1) return;
      const d = e.data;
      const submitted = d && (d.type === "form-submitted" || (typeof d === "string" && d.indexOf("submit") !== -1));
      if (submitted) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "generate_lead", source: "agency-site" });
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <section id="contact" className="bg-accentDeep py-24 text-white md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 font-body text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/80">Claim your area</span>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">Let us see if your area is open.</h2>
            <p className="mt-4 text-[1.1rem] text-white/70">
              We work with one business per service, per area, to keep every lead exclusive. Tell us a little and we will come back with a straight answer.
            </p>
          </div>
          <ul className="mx-auto mt-7 flex max-w-2xl flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-7">
            {reassure.map((r) => (
              <li key={r} className="flex items-start gap-2 font-body text-[0.95rem] text-white/85">
                <Check /> {r}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {/* the form sits in a clean white panel so it reads as a deliberate
              part of the page, not a floating embed. Style the form itself in
              GoHighLevel (font Inter, navy #1E40AF button, rounded fields) to
              finish the match. */}
          <div className="mx-auto mt-12 w-full max-w-[880px] overflow-hidden rounded-3xl bg-white p-2 shadow-card sm:p-3">
            <div className="flex items-center justify-between px-4 pb-2 pt-3">
              <span className="font-body text-[0.72rem] font-bold uppercase tracking-[0.14em] text-accent2">Free area check</span>
              <span className="font-body text-[0.78rem] text-muted">Takes under a minute</span>
            </div>
            <iframe
              src={`https://api.leadconnectorhq.com/widget/form/${brand.ghlFormId}`}
              title="Pipeline Partners enquiry"
              id={`inline-${brand.ghlFormId}`}
              data-layout="{'id':'INLINE'}"
              data-form-id={brand.ghlFormId}
              className="block w-full rounded-2xl border-0 bg-white"
              style={{ width: "100%", minHeight: 720 }}
            />
          </div>
          <p className="mt-4 text-center font-body text-[0.9rem] text-white/55">
            One business per area. If yours is open, we will tell you straight.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

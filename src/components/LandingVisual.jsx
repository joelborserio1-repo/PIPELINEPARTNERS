import { motion, useReducedMotion } from "framer-motion";
import HeroVisual from "./HeroVisual.jsx";

function Shell({ children }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_70%_20%,rgba(255,106,26,0.10),transparent_60%)] blur-xl" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function SeoVisual() {
  const reduce = useReducedMotion();
  const rows = [
    { name: "Your Business", rank: "1", you: true },
    { name: "Competitor Co.", rank: "4" },
    { name: "Others Pty Ltd", rank: "7" },
  ];
  const bars = [35, 52, 48, 66, 72, 88];
  return (
    <Shell>
      <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
        <div className="flex items-center justify-between">
          <span className="font-display text-[1rem] uppercase text-ink">Search results</span>
          <span className="rounded-full bg-[#16A34A]/10 px-2.5 py-1 font-body text-[0.7rem] font-semibold text-[#16A34A]">Top ranked</span>
        </div>
        <div className="mt-4 space-y-2.5">
          {rows.map((r, i) => (
            <motion.div
              key={r.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.16 }}
              className={`flex items-center gap-3 rounded-2xl border p-3 ${r.you ? "border-accent/40 bg-accent/[0.06]" : "border-line bg-paper2/60"}`}
            >
              <span className={`grid h-8 w-8 flex-none place-items-center rounded-full font-display text-[0.85rem] ${r.you ? "bg-accent text-white" : "bg-paper2 text-muted"}`}>{r.rank}</span>
              <div className="min-w-0 flex-1">
                <div className="truncate font-body text-[0.9rem] font-semibold text-ink">{r.name}</div>
                <div className="mt-1 h-1.5 w-28 rounded bg-line"><div className="h-full rounded bg-accent" style={{ width: r.you ? "90%" : "40%" }} /></div>
              </div>
              {r.you && <span className="rounded-md bg-accent/10 px-2 py-1 font-body text-[0.62rem] font-bold uppercase text-accent2">You</span>}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex items-end gap-1.5 rounded-2xl bg-paper2 p-4">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              initial={reduce ? false : { height: 6 }}
              animate={reduce ? {} : { height: `${h}%` }}
              transition={{ duration: 0.7, delay: 0.9 + i * 0.06 }}
              className="w-full rounded-sm bg-gradient-to-t from-accent/40 to-accent"
              style={{ height: `${h}%`, minHeight: 6 }}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
}

function WebVisual() {
  return (
    <Shell>
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
        <div className="flex items-center gap-2 border-b border-line bg-paper2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line2" />
          <span className="h-2.5 w-2.5 rounded-full bg-line2" />
          <span className="h-2.5 w-2.5 rounded-full bg-line2" />
          <span className="ml-3 flex-1 truncate rounded-full bg-white px-3 py-1 font-body text-[0.72rem] text-muted">yourbusiness.com.au</span>
        </div>
        <div className="p-6">
          <div className="h-6 w-2/3 rounded bg-ink/80" />
          <div className="mt-2.5 h-3 w-1/2 rounded bg-line2" />
          <div className="mt-4 inline-flex rounded-lg bg-accent px-4 py-2 font-body text-[0.75rem] font-semibold text-white">Get a quote</div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="h-20 rounded-xl bg-paper2" />
            <div className="h-20 rounded-xl bg-paper2" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-card">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <div>
          <div className="font-body text-[0.8rem] font-semibold text-ink">New enquiry</div>
          <div className="font-body text-[0.72rem] text-muted">Straight to your CRM</div>
        </div>
      </div>
    </Shell>
  );
}

export default function LandingVisual({ service }) {
  if (service === "seo") return <SeoVisual />;
  if (service === "webdev") return <WebVisual />;
  return <HeroVisual />;
}

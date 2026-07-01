import { motion, useReducedMotion } from "framer-motion";
import { IconPhone } from "./icons.jsx";

const leads = [
  { name: "Dave M.", note: "Roof replacement quote", area: "Newcastle" },
  { name: "Sarah T.", note: "Burst pipe, urgent", area: "Lake Macquarie" },
  { name: "Jason K.", note: "Switchboard upgrade", area: "Hunter Valley" },
];

export default function HeroVisual() {
  const reduce = useReducedMotion();
  const row = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: reduce ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.18 },
  });

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* soft accent halo behind the card */}
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_70%_20%,rgba(255,106,26,0.10),transparent_60%)] blur-xl" />

      {/* main card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="rounded-3xl border border-line bg-surface p-5 shadow-card"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#16A34A] shadow-[0_0_0_4px_rgba(22,163,74,0.15)]" />
            <span className="font-display text-[0.95rem] font-semibold text-ink">Live leads</span>
          </div>
          <span className="rounded-full bg-paper2 px-2.5 py-1 text-[0.7rem] font-semibold text-muted">Today</span>
        </div>

        <div className="mt-4 space-y-2.5">
          {leads.map((l, i) => (
            <motion.div key={l.name} {...row(i)} className="flex items-center gap-3 rounded-2xl border border-line bg-paper2/60 p-3">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-accent/12 font-display text-[0.8rem] font-semibold text-accent">
                {l.name.split(" ")[0][0]}
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[0.9rem] font-semibold text-ink">{l.name}</div>
                <div className="truncate text-[0.78rem] text-muted">{l.note}</div>
              </div>
              <span className="flex-none rounded-md bg-accent/10 px-2 py-1 text-[0.66rem] font-bold uppercase tracking-wide text-accent2">New</span>
            </motion.div>
          ))}
        </div>

        {/* mini volume bars */}
        <div className="mt-4 flex items-end gap-1.5 rounded-2xl bg-paper2 p-4">
          {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
            <motion.span
              key={i}
              initial={reduce ? false : { height: 6 }}
              animate={reduce ? {} : { height: `${h}%` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.9 + i * 0.06 }}
              className="w-full rounded-sm bg-gradient-to-t from-accent/40 to-accent"
              style={{ height: `${h}%`, minHeight: 6 }}
            />
          ))}
        </div>
      </motion.div>

      {/* floating incoming-call badge */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8, y: 10 }}
        animate={reduce ? {} : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
        className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card"
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white shadow-glow">
          <IconPhone className="h-5 w-5" />
        </span>
        <div>
          <div className="text-[0.8rem] font-semibold text-ink">Incoming call</div>
          <div className="text-[0.72rem] text-muted">Your lead, only yours</div>
        </div>
      </motion.div>
    </div>
  );
}

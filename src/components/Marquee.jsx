const items = [
  "Exclusive leads",
  "Guaranteed monthly",
  "No leads, no pay",
  "One business per area",
  "Done for you",
];

export default function Marquee() {
  // duplicate the sequence so the -50% translate loops seamlessly
  const seq = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-accentDeep py-5 text-white" aria-hidden="true">
      <div className="marquee-track">
        {seq.map((t, i) => (
          <span key={i} className="mx-7 inline-flex items-center gap-7 font-display text-[clamp(1.4rem,3vw,2.2rem)] uppercase tracking-wide">
            {t}
            <span className="text-white/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

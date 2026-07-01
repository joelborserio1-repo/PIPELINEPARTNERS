import { nav, brand } from "../data/site.js";

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
      <path d="M5 23 C 11 23, 12 10, 20 10" stroke="rgba(255,255,255,.55)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="23" cy="10" r="4.6" fill="#ffffff" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-accentDeep py-16 text-white">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5 font-display text-[1.3rem] uppercase tracking-wide">
              <Mark /> {brand.name}
            </a>
            <p className="mt-4 text-[0.95rem] text-white/60">
              Exclusive, guaranteed lead generation for local service businesses. We run the marketing so you keep the work flowing.
            </p>
            <a href={brand.phoneHref} className="mt-4 inline-block font-body text-[0.95rem] font-semibold text-white/85 hover:text-white">
              {brand.phone}
            </a>
            <p className="mt-1 font-body text-[0.85rem] text-white/45">Newcastle, NSW</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="font-body text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/40">Explore</h4>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-white/65">
                {nav.map((n) => (
                  <li key={n.href}><a href={n.href} className="transition-colors hover:text-white">{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/40">Get started</h4>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-white/65">
                <li><a href="#contact" className="transition-colors hover:text-white">Claim your area</a></li>
                <li><a href="#pricing" className="transition-colors hover:text-white">Packages</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-body text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/40">Legal</h4>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-white/65">
                <li><a href="#" className="transition-colors hover:text-white">Privacy</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[0.85rem] text-white/45 sm:flex-row">
          <span>&copy; {year} {brand.name}. All rights reserved.</span>
          <span>{brand.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

import { nav, brand } from "../data/site.js";

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
      <path d="M5 23 C 11 23, 12 10, 20 10" stroke="rgba(244,242,237,.55)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="23" cy="10" r="4.6" fill="#1E40AF" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-16">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5 font-display text-[1.12rem] font-semibold">
              <Mark /> {brand.name}
            </a>
            <p className="mt-4 text-[0.95rem] text-muted">
              Exclusive, guaranteed lead generation for local service businesses. We run the marketing so you keep the work flowing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-faint">Explore</h4>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-muted">
                {nav.map((n) => (
                  <li key={n.href}><a href={n.href} className="transition-colors hover:text-cream">{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-faint">Get started</h4>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-muted">
                <li><a href="#contact" className="transition-colors hover:text-cream">Claim your area</a></li>
                <li><a href="#pricing" className="transition-colors hover:text-cream">Packages</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-faint">Legal</h4>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-muted">
                <li><a href="#" className="transition-colors hover:text-cream">Privacy</a></li>
                <li><a href="#" className="transition-colors hover:text-cream">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-[0.85rem] text-faint sm:flex-row">
          <span>&copy; {year} {brand.name}. All rights reserved.</span>
          <span>{brand.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

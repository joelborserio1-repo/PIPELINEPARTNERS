import { useEffect, useState } from "react";
import { nav, brand } from "../data/site.js";

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
      <path d="M5 23 C 11 23, 12 10, 20 10" stroke="rgba(244,242,237,.55)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="23" cy="10" r="4.6" fill="#1E40AF" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[1.12rem] font-semibold">
          <Mark /> {brand.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.95rem] font-medium text-muted transition-colors hover:text-cream">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-primary hidden px-5 py-2.5 text-[0.92rem] sm:inline-flex">
            Claim your area
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-line2 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-[2px] w-5 bg-cream before:absolute before:-top-1.5 before:left-0 before:h-[2px] before:w-5 before:bg-cream after:absolute after:top-1.5 after:left-0 after:h-[2px] after:w-5 after:bg-cream" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-paper/95 px-6 pb-7 pt-2 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 text-[1.05rem] text-cream">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-4">
              Claim your area
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { brand } from "../data/site.js";

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
      <path d="M5 23 C 11 23, 12 10, 20 10" stroke="currentColor" strokeOpacity="0.55" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="23" cy="10" r="4.6" fill="currentColor" />
    </svg>
  );
}

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const light = scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        light ? "border-b border-line bg-paper/85 text-ink backdrop-blur-xl" : "border-b border-transparent text-white"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-[1.3rem] uppercase tracking-wide">
          <Mark /> {brand.name}
        </Link>
        <div className="flex items-center gap-5">
          <Link
            to="/"
            className={`hidden font-display text-[0.9rem] uppercase tracking-wide transition-colors sm:inline ${light ? "text-muted hover:text-ink" : "text-white/75 hover:text-white"}`}
          >
            Home
          </Link>
          <a href="#contact" className={`btn px-5 py-2.5 text-[0.92rem] ${light ? "btn-primary" : "bg-white text-onlight hover:-translate-y-0.5"}`}>
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

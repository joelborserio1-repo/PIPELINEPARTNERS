import { motion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { services } from "../data/site.js";

const lead = services.find((s) => s.featured);
const others = services.filter((s) => !s.featured);

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-accent" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.2rem)] font-bold">
            A marketing engine, with lead generation at its core.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Lead generation is the heart of what we do. SEO and social are there to support it, so your pipeline keeps flowing from every angle.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Featured: Lead Generation */}
          <Reveal className="lg:col-span-2">
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="card relative h-full overflow-hidden p-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-44 w-44 -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,106,26,0.4),transparent_60%)] blur-2xl" />
              <span className="eyebrow">{lead.tag}</span>
              <h3 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] font-semibold">{lead.title}</h3>
              <p className="mt-4 max-w-xl text-[1.05rem] text-muted">{lead.desc}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {lead.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[0.98rem]">
                    <Check /> <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary mt-8 px-7 py-3.5">Claim your area</a>
            </motion.article>
          </Reveal>

          {/* Supporting services */}
          <div className="grid gap-5">
            {others.map((s, i) => (
              <Reveal key={s.key} delay={0.08 * (i + 1)}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="card group relative h-full overflow-hidden p-7"
                >
                  <span className="absolute left-0 top-0 h-[3px] w-12 bg-accent transition-all duration-500 group-hover:w-full" />
                  <h3 className="text-[1.4rem] font-semibold">{s.title}</h3>
                  <p className="mt-3 text-[0.98rem] text-muted">{s.desc}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

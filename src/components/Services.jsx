import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal.jsx";
import { services } from "../data/site.js";
import { serviceIcons, IconCheck } from "./icons.jsx";

const routeFor = { leadgen: "/leadgen", seo: "/seo", webdev: "/webdev" };

const lead = services.find((s) => s.featured);
const others = services.filter((s) => !s.featured);
const LeadIcon = serviceIcons[lead.key];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.4rem)]">
            A marketing engine, with lead generation at its core.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Lead generation is the heart of what we do. SEO, social and your website are there to support it, so your pipeline keeps flowing from every angle.
          </p>
        </Reveal>

        {/* Featured: Lead Generation, full width */}
        <Reveal className="mt-12">
          <motion.article
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="card relative overflow-hidden p-8 md:p-10"
          >
            <div className="absolute right-0 top-0 h-56 w-56 -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,106,26,0.07),transparent_60%)] blur-2xl" />
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-white shadow-glow">
                    <LeadIcon className="h-7 w-7" />
                  </span>
                  <span className="eyebrow">{lead.tag}</span>
                </div>
                <h3 className="mt-5 text-[clamp(1.7rem,3vw,2.4rem)]">{lead.title}</h3>
                <p className="mt-3 text-[1.05rem] text-muted">{lead.desc}</p>
                <Link to="/leadgen" className="btn btn-primary mt-7 px-7 py-3.5">Explore lead generation</Link>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                {lead.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 rounded-xl border border-line bg-paper2/60 p-3.5 text-[0.98rem]">
                    <IconCheck className="mt-0.5 h-5 w-5 flex-none text-accent" /> <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </Reveal>

        {/* Supporting services */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {others.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <Reveal key={s.key} delay={0.07 * i}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="card h-full p-7"
                >
                  <span className="chip">{Icon ? <Icon className="h-6 w-6" /> : null}</span>
                  <h3 className="mt-5 text-[1.35rem]">{s.title}</h3>
                  <p className="mt-2.5 text-[0.98rem] text-muted">{s.desc}</p>
                  {routeFor[s.key] && (
                    <Link to={routeFor[s.key]} className="mt-4 inline-flex items-center gap-1.5 font-body text-[0.9rem] font-semibold text-accent2 hover:gap-2.5">
                      Learn more
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  )}
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

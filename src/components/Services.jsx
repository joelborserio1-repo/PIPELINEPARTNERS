import { motion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { services } from "../data/site.js";
import { serviceIcons, IconCheck } from "./icons.jsx";

const lead = services.find((s) => s.featured);
const others = services.filter((s) => !s.featured);
const LeadIcon = serviceIcons[lead.key];

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
              <div className="absolute right-0 top-0 h-44 w-44 -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(30,64,175,0.16),transparent_60%)] blur-2xl" />
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-white shadow-glow">
                  <LeadIcon className="h-7 w-7" />
                </span>
                <span className="eyebrow">{lead.tag}</span>
              </div>
              <h3 className="mt-5 text-[clamp(1.7rem,3vw,2.3rem)] font-semibold">{lead.title}</h3>
              <p className="mt-3 max-w-xl text-[1.05rem] text-muted">{lead.desc}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {lead.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[0.98rem]">
                    <IconCheck className="mt-0.5 h-5 w-5 flex-none text-accent" /> <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary mt-8 px-7 py-3.5">Claim your area</a>
            </motion.article>
          </Reveal>

          {/* Supporting services */}
          <div className="grid gap-5">
            {others.map((s, i) => {
              const Icon = serviceIcons[s.key];
              return (
                <Reveal key={s.key} delay={0.08 * (i + 1)}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className="card h-full p-7"
                  >
                    <span className="chip">{Icon ? <Icon className="h-6 w-6" /> : null}</span>
                    <h3 className="mt-5 text-[1.4rem] font-semibold">{s.title}</h3>
                    <p className="mt-2.5 text-[0.98rem] text-muted">{s.desc}</p>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

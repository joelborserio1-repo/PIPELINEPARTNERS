import { motion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { team } from "../data/site.js";

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Meet the team</span>
            <h2 className="mt-4 text-[clamp(2rem,4.6vw,3.2rem)] font-bold">The two people behind your pipeline.</h2>
            <p className="mt-4 text-muted">
              Pipeline Partners is small on purpose. You deal with the founders directly, not a call centre or an account manager who has never run a campaign.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="card flex h-full flex-col items-center p-8 text-center"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-accent/12 font-display text-[1.8rem] font-semibold text-accent ring-1 ring-accent/20">
                  {m.name[0]}
                </span>
                <h3 className="mt-5 text-[1.5rem] font-semibold">{m.name}</h3>
                <div className="mt-1 font-semibold text-accent2">{m.role}</div>
                <p className="mt-3 text-[0.98rem] text-muted">{m.blurb}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

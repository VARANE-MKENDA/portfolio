import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience, education } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Timeline() {
  return (
    <>
      <section id="experience" className="px-4 md:px-8 py-20 max-w-4xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Professional experience</p>
            <h2 className="text-2xl md:text-3xl font-bold text-heading">Experience</h2>
          </div>

          {experience.map((job) => (
            <div
              key={job.role}
              className="rounded-2xl border border-border bg-surface p-6 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-heading font-semibold text-base">{job.role}</h3>
                    <span className="text-xs text-muted">{job.duration}</span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-3">{job.org}</p>
                  <ul className="space-y-1.5">
                    {job.points.map((p) => (
                      <li key={p} className="text-body text-sm leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="education" className="px-4 md:px-8 py-20 max-w-4xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Education & training</p>
            <h2 className="text-2xl md:text-3xl font-bold text-heading">My Qualifications</h2>
          </div>

          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-accent font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-heading text-sm font-medium mb-2">{item.subtitle}</p>
                    <p className="text-body text-sm leading-relaxed mb-3">{item.description}</p>
                    <span className="inline-block text-[11px] font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { Code2, BarChart3, Database, Brain, LineChart, Globe } from "lucide-react";
import { skillGroups } from "../data/content";

const icons = { Code2, BarChart3, Database, Brain, LineChart, Globe };

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <p className="eyebrow mb-3">Technical expertise</p>
        <h2 className="text-2xl md:text-3xl font-bold text-heading">My Skills</h2>
        <p className="text-muted text-sm mt-2">Tools I use for data analysis and reporting</p>
      </motion.div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skillGroups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-surface p-5 hover:border-accent/40 hover:bg-surface-hover transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="text-heading font-semibold text-sm mb-1">{group.category}</h3>
              <p className="text-muted text-xs mb-3">{group.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] text-body bg-bg-alt border border-border rounded px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { GraduationCap, Building2, BarChart3, Code2, MapPin } from "lucide-react";
import { quickProfile, aboutBody, aboutQuote } from "../data/content";

const icons = { GraduationCap, Building2, BarChart3, Code2, MapPin };

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <p className="eyebrow mb-3">About me</p>
        <h2 className="text-2xl md:text-3xl font-bold text-heading">
          Data Science graduate focused on practical insight
        </h2>
      </motion.div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-[1.3fr_0.9fr] gap-6"
      >
        <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
          {aboutBody.map((p) => (
            <p key={p} className="text-body text-sm md:text-base leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
          <span className="inline-block mt-6 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
            Available for internship / full-time work
          </span>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 flex flex-col">
          <p className="eyebrow mb-4">Quick profile</p>
          <ul className="space-y-3 flex-1">
            {quickProfile.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li key={item.label} className="flex items-center gap-3 text-sm text-body">
                  <Icon size={16} className="text-accent shrink-0" />
                  {item.label}
                </li>
              );
            })}
          </ul>
          <p className="mt-6 pt-5 border-t border-border text-sm text-muted italic">
            "{aboutQuote}"
          </p>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { BarChart3, LineChart, Sparkles, FileText, Sigma } from "lucide-react";
import { services } from "../data/content";

const icons = { BarChart3, LineChart, Sparkles, FileText, Sigma };

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">What I can do</p>
          <h2 className="text-2xl md:text-3xl font-bold text-heading">Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="text-heading font-semibold text-sm mb-1.5">{service.title}</h3>
                <p className="text-body text-xs leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

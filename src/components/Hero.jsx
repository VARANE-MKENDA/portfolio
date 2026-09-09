import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="rounded-3xl border border-border bg-surface/60 p-5 md:p-8 grid md:grid-cols-[1.3fr_0.9fr] gap-8 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow mb-4">
            {profile.eyebrow.join(" • ")}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-heading"
          >
            {profile.heroHeading}
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-lg text-base text-body">
            {profile.statement}
          </motion.p>

          <motion.p variants={item} className="mt-2 max-w-lg text-sm text-muted">
            {profile.focusLine}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-heading px-5 py-2.5 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="w-full max-w-xs mx-auto md:max-w-none"
        >
          <div className="aspect-[4/5] rounded-2xl border border-border bg-bg-alt overflow-hidden">
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt={profile.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl font-extrabold text-accent/40">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

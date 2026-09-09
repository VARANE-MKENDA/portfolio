import { motion } from "framer-motion";
import { ExternalLink, Target, Lightbulb, FolderKanban } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/content";
import { badgeClasses } from "../data/badgeColors";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectThumb({ image, title }) {
  if (image) {
    return (
      <div className="h-44 bg-bg-alt border-b border-border overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="h-44 bg-bg-alt border-b border-border flex items-center justify-center">
      <FolderKanban size={28} className="text-muted/50" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <p className="eyebrow mb-3">Portfolio projects</p>
        <h2 className="text-2xl md:text-3xl font-bold text-heading">
          Data Science & BI Projects
        </h2>
        <p className="text-muted text-sm mt-2">Real-world analytics and reporting work</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-border bg-surface overflow-hidden flex flex-col hover:border-accent/40 transition-colors"
          >
            <ProjectThumb image={project.image} title={project.title} />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-heading font-semibold text-base mb-2">{project.title}</h3>
              <p className="text-body text-xs leading-relaxed mb-3 flex-1">
                {project.description}
              </p>

              <div className="space-y-1.5 mb-4 text-xs">
                <p className="flex gap-2 text-body">
                  <Target size={13} className="text-accent shrink-0 mt-0.5" />
                  <span>{project.objective}</span>
                </p>
                <p className="flex gap-2 text-body">
                  <Lightbulb size={13} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>{project.insight}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-[11px] font-medium rounded px-2 py-1 ${badgeClasses(t)}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-body hover:text-heading transition-colors"
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-dark transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 border border-dashed border-border rounded-2xl p-8 text-center">
        <p className="text-muted text-sm">More projects coming soon.</p>
      </div>
    </section>
  );
}

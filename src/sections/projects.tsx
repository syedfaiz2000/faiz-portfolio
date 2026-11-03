import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Live: "bg-green-500/15 text-green-500",
  "In Progress": "bg-amber-500/15 text-amber-500",
  Archived: "bg-muted text-muted-foreground",
};

const HOME_PROJECTS_LIMIT = 6;

export function Projects() {
  const featured = PROJECTS.slice(0, HOME_PROJECTS_LIMIT);

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work & case studies"
          description="A curated selection of products I've designed, built, and shipped to production."
        />

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <motion.article
              key={project.id}
              layout
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 h-full object-cover w-full transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 grid-bg opacity-40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white/90 drop-shadow">
                    {project.title}
                  </span>
                </div>

                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>

                <span
                  className={cn(
                    "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur",
                    statusStyles[project.status],
                  )}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 grid grid-cols-2 gap-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-primary-foreground transition-shadow hover:shadow-glow"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {PROJECTS.length > HOME_PROJECTS_LIMIT && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-brand-gradient hover:text-primary-foreground hover:shadow-glow"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

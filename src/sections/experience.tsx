import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { EXPERIENCE, EDUCATION } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career Path"
          title="Experience & education"
          description="A track record of leadership, impact, and continuous growth."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          {/* Experience timeline */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold">Work Experience</h3>
            </div>

            <div className="relative space-y-8 border-l border-border pl-8">
              {EXPERIENCE.map((exp) => (
                <motion.div
                  key={exp.company + exp.duration}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="relative"
                >
                  <span className="absolute -left-[2.65rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-brand-gradient shadow-glow" />
                  <div className="rounded-2xl border border-border bg-card p-5 card-hover">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {exp.duration}
                    </span>
                    <h4 className="mt-1 text-lg font-bold">{exp.role}</h4>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      {exp.company}
                      <span className="inline-flex items-center gap-1 text-xs">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.points.map((p) => (
                        <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                          • {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 space-y-1.5 border-t border-border pt-3">
                      {exp.achievements.map((a) => (
                        <p key={a} className="flex items-start gap-2 text-sm text-foreground/90">
                          <Trophy className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          {a}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold">Education</h3>
            </div>

            <div className="relative space-y-8 border-l border-border pl-8">
              {EDUCATION.map((edu) => (
                <motion.div
                  key={edu.institute}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="relative"
                >
                  <span className="absolute -left-[2.65rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-brand-gradient shadow-glow" />
                  <div className="rounded-2xl border border-border bg-card p-5 card-hover">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {edu.duration}
                    </span>
                    <h4 className="mt-1 text-lg font-bold">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institute}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

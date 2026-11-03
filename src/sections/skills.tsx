import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { SKILLS } from "@/data/portfolio";
import { SKILL_ICONS } from "@/components/skill-icons";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const categories = ["All", ...SKILLS.map((s) => s.category)];

export function Skills() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & technologies I master"
          description="A battle-tested toolkit spanning frontend, backend, databases, and developer tooling."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                active === cat
                  ? "border-transparent bg-brand-gradient text-primary-foreground shadow-soft"
                  : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-14">
          {visible.map((group) => (
            <div key={group.category}>
              <h3 className="mb-6 text-center text-lg font-semibold text-muted-foreground">
                {group.category}
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              >
                {group.skills.map((skill) => {
                  const Icon = SKILL_ICONS[skill.name];
                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeUp}
                      className="card-hover group rounded-2xl border border-border bg-card p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:text-primary">
                          {Icon && <Icon className="h-6 w-6" />}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">{skill.name}</p>
                          <p className="text-xs text-muted-foreground">{skill.years} experience</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Proficiency</span>
                        <span className="font-semibold text-primary">{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-brand-gradient"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

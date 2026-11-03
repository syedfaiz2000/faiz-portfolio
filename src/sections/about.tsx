import { motion } from "motion/react";
import { Target, Compass, Heart, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const highlights = [
  {
    icon: Target,
    title: "Career Goal",
    text: "To architect products that reach millions while raising the craft bar for every team I join.",
  },
  {
    icon: Compass,
    title: "Professional Journey",
    text: "Frontend developer at Eplanet Global, building responsive, polished interfaces from Karachi.",
  },
  {
    icon: Heart,
    title: "Personal Mission",
    text: "Build technology that feels effortless, inclusive, and genuinely improves people's days.",
  },
  {
    icon: Code2,
    title: "Core Focus",
    text: "React, JavaScript, TypeScript & responsive web design — with an obsession for performance and clean UI.",
  },
];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Firebase",
  "GraphQL",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering elegant products with intent"
          // description="A full-stack engineer who treats every pixel and every millisecond as part of the experience."
          description="Passionate about building scalable web applications where clean architecture, performance, and user experience work together seamlessly."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="glass rounded-3xl p-8 shadow-soft"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a <span className="font-semibold text-primary">Frontend Developer</span>{" "}
              with <span className="font-semibold text-primary">5+ years</span> of experience
              turning ambitious ideas into production-grade web platforms.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I've led teams, mentored engineers, and shipped products used by hundreds of thousands
              of people. My work sits at the intersection of thoughtful design and rigorous
              engineering — clean architecture, delightful interactions, and relentless attention to
              performance.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When I'm not building, I'm exploring new tools, contributing to open source, and
              refining a design system that makes the next project even faster.
            </p>

            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold">Skills summary</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={fadeUp}
                className="card-hover rounded-3xl border border-border bg-card p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow">
                  <h.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

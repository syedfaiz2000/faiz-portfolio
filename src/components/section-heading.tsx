import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}

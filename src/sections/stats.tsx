import { motion } from "motion/react";
import { STATS } from "@/data/portfolio";
import { useCountUp } from "@/hooks/use-count-up";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: count, ref } = useCountUp(value);
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-3xl border border-border bg-card p-8 text-center card-hover"
    >
      <p className="text-4xl font-bold text-gradient sm:text-5xl">
        <span ref={ref}>{count}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

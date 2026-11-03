import { motion } from "motion/react";
import {
  Layout,
  Layers,
  Smartphone,
  Rocket,
  Plug,
  Gauge,
  Bug,
  Flame,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SERVICES } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const ICONS: Record<string, LucideIcon> = {
  Layout,
  Layers,
  Smartphone,
  Rocket,
  Plug,
  Gauge,
  Bug,
  Flame,
  Sparkles,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="Services I offer"
          description="End-to-end expertise to take your product from idea to a polished, scalable reality."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Sparkles;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 card-hover"
              >
                <span className="pointer-events-none absolute -right-6 -top-6 text-7xl font-bold text-muted/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

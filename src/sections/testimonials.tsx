import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TESTIMONIALS } from "@/data/portfolio";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients & teammates say"
          description="Trusted by founders, engineering leaders, and product teams."
        />

        <div className="relative mt-14">
          <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[16rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-3xl p-8 shadow-soft sm:p-10"
              >
                <Quote className="h-10 w-10 text-primary/40" />
                <p className="mt-4 text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  "{t.feedback}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-lg font-bold text-primary-foreground shadow-glow">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand-gradient" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

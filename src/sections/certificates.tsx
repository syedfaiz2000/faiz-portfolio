"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CERTIFICATES } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Certificates() {
  const [selected, setSelected] = useState<(typeof CERTIFICATES)[number] | null>(null);

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & achievements"
          description="Continuous learning backed by recognized industry certifications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.name}
              variants={fadeUp}
              onClick={() => setSelected(cert)}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-card card-hover"
            >
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden">
                <img
                  src={cert.achievement}
                  alt={cert.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 grid-bg opacity-40" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {cert.year}
                </span>

                <h3 className="mt-1 text-base font-semibold">{cert.name}</h3>

                <p className="text-sm text-muted-foreground">{cert.org}</p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View Certificate
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-card shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Certificate Image */}
              <img
                src={selected.achievement}
                alt={selected.name}
                className="max-h-[80vh] w-full object-contain bg-black"
              />

              {/* Footer */}
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{selected.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selected.org} • {selected.year}
                  </p>
                </div>

                {selected.url && (
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    Open Original
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

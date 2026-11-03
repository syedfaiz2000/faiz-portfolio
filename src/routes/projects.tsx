import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Search, Check, Loader2 } from "lucide-react";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "All Projects — Syed Faiz Uddin" },
      {
        name: "description",
        content: "Browse the full collection of products and case studies built by Syed Faiz Uddin.",
      },
    ],
  }),
});

const statusStyles: Record<string, string> = {
  Live: "bg-green-500/15 text-green-500",
  "In Progress": "bg-amber-500/15 text-amber-500",
  Archived: "bg-muted text-muted-foreground",
};

const PAGE_SIZE = 6;

function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const byCat = active === "All" || p.category === active;
      const q = query.toLowerCase();
      const byQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return byCat && byQuery;
    });
  }, [active, query]);

  // Reset pagination whenever the filter/search changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [active, query]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Infinite scroll via IntersectionObserver
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((c) => Math.min(c + PAGE_SIZE, filtered.length));
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, filtered.length]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <SectionHeading
              eyebrow="Portfolio"
              title="All Projects"
              description="Every product, case study, and experiment I've designed, built, and shipped."
              align="left"
            />

            <div className="mt-10 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-wrap justify-center gap-2">
                {PROJECT_CATEGORIES.map((cat) => (
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

              <div className="relative w-full max-w-xs">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects..."
                  aria-label="Search projects"
                  className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Showing {visible.length} of {filtered.length} project
              {filtered.length === 1 ? "" : "s"}
            </p>

            <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((project) => (
                  <motion.article
                    key={project.id}
                    layout
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    exit={{ opacity: 0, scale: 0.95 }}
                    viewport={viewportOnce}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card card-hover"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                          <li
                            key={f}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground"
                          >
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
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <p className="mt-12 text-center text-muted-foreground">
                No projects match your search.
              </p>
            )}

            {/* Infinite scroll sentinel + loading indicator */}
            {hasMore && (
              <div ref={sentinelRef} className="mt-10 flex items-center justify-center py-6">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

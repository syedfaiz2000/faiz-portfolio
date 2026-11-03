import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants";
import { ThemeToggle } from "@/components/theme-toggle";
import { Magnetic } from "@/components/magnetic";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean,
    ) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled ? "glass-strong shadow-soft" : "border border-transparent",
        )}
      >
        <button
          onClick={() => go("#home")}
          className="group flex items-center gap-2.5 font-display text-base font-bold"
          aria-label="Go to home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm text-primary-foreground shadow-glow">
            {SITE.firstName[0]}
            {SITE.lastName[0]}
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => go(link.href)}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Magnetic className="hidden sm:inline-block">
            <button
              onClick={() => go("#contact")}
              className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-glow"
            >
              Hire Me
            </button>
          </Magnetic>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-4 right-4 top-[4.5rem] z-50 lg:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-2xl p-3 shadow-elegant">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                    active === link.href
                      ? "bg-secondary text-primary"
                      : "text-muted-foreground hover:bg-secondary/60",
                  )}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => go("#contact")}
                className="mt-1 rounded-xl bg-brand-gradient px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

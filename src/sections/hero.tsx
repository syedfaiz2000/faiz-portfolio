import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa6";
import { SITE } from "@/constants";
import { Magnetic } from "@/components/magnetic";
import { fadeUp, staggerContainer } from "@/lib/motion";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: FaGithub, href: SITE.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: SITE.socials.instagram, label: "Instagram" },
  { icon: FaDribbble, href: SITE.socials.dribbble, label: "Dribbble" },
];

function useTypewriter(words: readonly string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      );
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(SITE.roles);
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 grid-bg"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="blob animate-float absolute -left-20 top-10 h-72 w-72 bg-brand-gradient opacity-30" />
        <div
          className="blob animate-float-2 absolute right-0 top-1/3 h-80 w-80 opacity-25"
          style={{ background: "var(--brand-2)" }}
        />
        <div className="blob animate-float absolute bottom-0 left-1/3 h-64 w-64 bg-brand-gradient opacity-20" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for new projects
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Hi, I'm <span className="text-gradient">{SITE.firstName}</span>
            <br />
            {SITE.lastName}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 flex h-8 items-center font-mono text-lg font-medium text-primary sm:text-xl"
          >
            {typed}
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary" />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={SITE.resumeUrl}
                download
                className="group flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-glow"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => go("#contact")}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Hire Me
              </button>
            </Magnetic>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-soft"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-brand-gradient opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-elegant">
            <img
              src={profileImg}
              alt={`${SITE.name}, ${SITE.title}`}
              width={896}
              height={1088}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-strong absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 shadow-soft"
          >
            <p className="text-2xl font-bold text-gradient">5+</p>
            <p className="text-xs text-muted-foreground">Years Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass-strong absolute -right-4 top-8 rounded-2xl px-4 py-3 shadow-soft"
          >
            <p className="text-2xl font-bold text-gradient">120+</p>
            <p className="text-xs text-muted-foreground">Projects</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => go("#about")}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-primary"
          />
        </span>
        <ArrowDown className="h-3 w-3" />
      </motion.button>
    </section>
  );
}

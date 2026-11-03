import { FaGithub, FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa6";
import { NAV_LINKS, SITE } from "@/constants";

const socials = [
  { icon: FaGithub, href: SITE.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: SITE.socials.instagram, label: "Instagram" },
  { icon: FaDribbble, href: SITE.socials.dribbble, label: "Dribbble" },
];

export function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <button
            onClick={() => go("#home")}
            className="flex items-center gap-2.5 font-display text-lg font-bold"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-sm text-primary-foreground shadow-glow">
              {SITE.firstName[0]}
              {SITE.lastName[0]}
            </span>
            {SITE.name}
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. Crafted with precision & passion.
          </p>
        </div>
      </div>
    </footer>
  );
}

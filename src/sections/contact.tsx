import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa6";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/constants";
import { fadeUp, viewportOnce } from "@/lib/motion";

const socials = [
  { icon: FaGithub, href: SITE.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: SITE.socials.instagram, label: "Instagram" },
  { icon: FaDribbble, href: SITE.socials.dribbble, label: "Dribbble" },
];

const contactRows = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: SITE.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something great"
          description="Have a project in mind or just want to say hello? My inbox is always open."
        />

        <div className="mt-14 mx-auto grid max-w-xl gap-8">
          {/* Left: contact info + map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {contactRows.map((row) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 card-hover">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                    <row.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {row.label}
                    </p>
                    <p className="text-sm font-medium">{row.value}</p>
                  </div>
                </div>
              );
              return row.href ? (
                <a key={row.label} href={row.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={row.label}>{inner}</div>
              );
            })}

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924189.0478710356!2d66.45616863535035!3d25.19939567705939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb35b7f5bfd6e89%3A0xc463ba9517671d59!2sKarachi%20City%2C%20Pakistan!5e0!3m2!1sen!2s!4v1783128773090!5m2!1sen!2s"
                className="h-52 w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

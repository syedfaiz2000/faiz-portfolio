import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Loader2, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa6";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/constants";
import { fadeUp, viewportOnce } from "@/lib/motion";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(3, "Add a subject").max(120),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

type FormValues = z.infer<typeof schema>;

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
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSendError(false);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          title: values.subject,
          message: values.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendError(true);
      setTimeout(() => setSendError(false), 5000);
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something great"
          description="Have a project in mind or just want to say hello? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
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

          {/* Right: form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-3xl p-6 shadow-soft sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Jane Doe"
                  className={fieldClass}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="jane@company.com"
                  className={fieldClass}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                placeholder="Project inquiry"
                className={fieldClass}
                {...register("subject")}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className={`${fieldClass} resize-none`}
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-glow disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-sm text-green-500"
              >
                <CheckCircle2 className="h-4 w-4" />
                Thanks! I'll get back to you within 24 hours.
              </motion.p>
            )}

            {sendError && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm text-destructive"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

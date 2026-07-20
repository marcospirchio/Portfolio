"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Contacto desde Portfolio - ${formData.name}`
    );
    const body = encodeURIComponent(
      `${formData.message}\n\n(${formData.email})`
    );
    window.location.href = `mailto:pirchiomarcos@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-2xl">
        <SectionHeading
          align="center"
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg">
                  {t("contact.formName")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t("contact.formNamePlaceholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg">
                  {t("contact.formEmail")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t("contact.formEmailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg">
                  {t("contact.formMessage")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={t("contact.formMessagePlaceholder")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Mail className="h-4 w-4" />
                {t("contact.submit")}
              </Button>
            </form>

            <div className="mt-8 border-t border-border pt-6">
              <p className="mb-4 text-center text-sm text-muted">
                {t("contact.orConnect")}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://github.com/marcospirchio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg hover:border-accent hover:text-accent transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcos-pirchio-giani"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg hover:border-accent hover:text-accent transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

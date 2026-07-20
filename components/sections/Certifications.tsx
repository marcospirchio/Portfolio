"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/lib/content/certifications";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Certifications() {
  const { language, t } = useLanguage();

  return (
    <section className="px-4 py-24 md:px-6">
      <div className="container mx-auto">
        <SectionHeading
          align="center"
          eyebrow={t("certifications.eyebrow")}
          title={t("certifications.title")}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title.es}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border bg-bg p-2">
                    <Image
                      src={cert.logo}
                      alt={cert.institution}
                      fill
                      sizes="56px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-fg">{cert.title[language]}</h3>
                    <p className="text-xs text-muted mt-0.5">{cert.institution}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {cert.description[language]}
                </p>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium text-fg hover:border-accent hover:text-accent transition-colors"
                >
                  {t("certifications.viewCertificate")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

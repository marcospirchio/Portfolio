"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { languageSkills } from "@/lib/content/languages";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Languages() {
  const { language, t } = useLanguage();

  return (
    <section className="px-4 py-24 md:px-6">
      <div className="container mx-auto">
        <SectionHeading
          align="center"
          eyebrow={t("languages.eyebrow")}
          title={t("languages.title")}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {languageSkills.map((skill, index) => (
            <motion.div
              key={skill.name.es}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="flex h-full flex-col items-center p-7 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-2xl">
                  {skill.flag}
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-fg">
                  {skill.name[language]}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {skill.level[language]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {skill.description[language]}
                </p>

                {skill.certifications.length > 0 && (
                  <div className="mt-5 flex w-full flex-col gap-2">
                    {skill.certifications.map((cert) => (
                      <a
                        key={cert.name}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium text-fg hover:border-accent hover:text-accent transition-colors"
                      >
                        {cert.name}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

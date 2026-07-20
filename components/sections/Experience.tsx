"use client";

import { motion } from "motion/react";
import { experiences } from "@/lib/content/experience";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t("experience.eyebrow")}
          title={t("experience.title")}
        />

        <div className="mt-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-9"
            >
              {index < experiences.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[5px] top-6 bottom-[-2.5rem] w-px bg-border"
                />
              )}

              <span className="absolute left-0 top-1.5 flex h-[11px] w-[11px] items-center justify-center">
                {exp.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                )}
                <span className="relative inline-flex h-[11px] w-[11px] rounded-full border-2 border-accent bg-bg" />
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  {exp.period[language]}
                </span>
                {exp.current && (
                  <span className="rounded-full bg-success-soft px-2 py-0.5 text-[11px] font-medium text-success">
                    {t("experience.current")}
                  </span>
                )}
              </div>

              <h3 className="mt-2 font-display text-xl font-medium text-fg sm:text-2xl">
                {exp.role[language]} <span className="text-muted">·</span>{" "}
                <span className="text-accent">{exp.company}</span>
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {exp.description[language]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 pb-10">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

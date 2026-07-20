"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { education } from "@/lib/content/education";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  const { language, t } = useLanguage();

  return (
    <section className="px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t("education.eyebrow")}
          title={t("education.title")}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <div className="flex items-center">
            {education.map((item, index) => (
              <Fragment key={item.degree.es}>
                <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                  {item.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  )}
                  <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                </span>

                {index < education.length - 1 && (
                  <div className="h-px flex-1 bg-border mx-3 sm:mx-6" />
                )}
              </Fragment>
            ))}
          </div>

          <div className="mt-3 flex items-start justify-between gap-6">
            {education.map((item) => (
              <div key={item.degree.es} className="flex max-w-[220px] flex-col sm:max-w-xs">
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.period[language]}
                </span>
                <h3 className="mt-1 font-display text-base font-medium leading-snug text-fg sm:text-lg">
                  {item.degree[language]}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <span
                  className={`mt-2 inline-flex w-fit rounded-full px-2 py-0.5 text-[11px] font-medium ${
                    item.current
                      ? "bg-accent-soft text-accent"
                      : "bg-success-soft text-success"
                  }`}
                >
                  {item.status[language]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

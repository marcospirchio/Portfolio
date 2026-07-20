"use client";

import { motion } from "motion/react";
import { techCategories } from "@/lib/content/techStack";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  const { language, t } = useLanguage();

  return (
    <section id="tech" className="px-4 py-24 md:px-6">
      <div className="container mx-auto">
        <SectionHeading
          align="center"
          eyebrow={t("tech.eyebrow")}
          title={t("tech.title")}
          subtitle={t("tech.subtitle")}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name.es}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
                {category.name[language]}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-fg"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: item.colorVar }}
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

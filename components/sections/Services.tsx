"use client";

import { motion } from "motion/react";
import { Database, Lightbulb, Monitor, Zap } from "lucide-react";
import { services } from "@/lib/content/services";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/types/content";

const ICONS: Record<Service["icon"], typeof Monitor> = {
  monitor: Monitor,
  database: Database,
  zap: Zap,
  lightbulb: Lightbulb,
};

export function Services() {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="px-4 py-24 md:px-6">
      <div className="container mx-auto">
        <SectionHeading
          align="center"
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title.es}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-fg">
                    {service.title[language]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description[language]}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

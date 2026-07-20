"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessPath } from "./ProcessPath";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-4 py-24 md:px-6">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              titleClassName="text-4xl md:text-4xl"
            />

            <div className="mt-7 flex items-center gap-4">
              <div className="relative h-30 w-30 shrink-0 overflow-hidden rounded-full border border-border">
                <Image
                  src="/images/profile.jpeg"
                  alt="Marcos Pirchio Giani"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-medium text-fg">Marcos Pirchio Giani</p>
                <p className="text-sm text-muted">Técnico en Desarrollo de Software</p>
                <p className="text-sm text-muted">Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>{t("about.bio1")}</p>
              <p className="whitespace-pre-line">{t("about.bio2")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ProcessPath />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

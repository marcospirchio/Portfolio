"use client";

import { motion } from "motion/react";
import type { CareerId } from "@/types/content";
import { getCareerAverage, getCareerProgress } from "@/lib/estudios/utils";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Card } from "@/components/ui/Card";

export function ProgressStats({ career }: { career: CareerId }) {
  const { t } = useLanguage();
  const { total, approved, percent } = getCareerProgress(career);
  const average = getCareerAverage(career);

  const stats = [
    { label: t("estudios.stats.progress"), value: `${percent}%` },
    { label: t("estudios.stats.subjects"), value: `${approved}/${total}` },
    { label: t("estudios.stats.average"), value: average.toFixed(2) },
    { label: t("estudios.stats.remaining"), value: `${total - approved}` },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <Card className="flex flex-col gap-1 p-4">
            <span className="font-display text-2xl font-medium text-fg sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-xs text-muted">{stat.label}</span>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

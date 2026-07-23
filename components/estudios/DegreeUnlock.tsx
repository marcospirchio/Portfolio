"use client";

import { motion } from "motion/react";
import { GraduationCap, Lock, Sparkles } from "lucide-react";
import { TECNICATURA_PROMEDIO, TECNICATURA_TITULO } from "@/lib/content/estudios";
import { getCareerProgress, isTecnicaturaComplete } from "@/lib/estudios/utils";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Card } from "@/components/ui/Card";

const SPARKLE_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export function DegreeUnlock() {
  const { language, t } = useLanguage();
  const unlocked = isTecnicaturaComplete();
  const { total, approved } = getCareerProgress("tecnicatura");

  return (
    <Card className="relative overflow-hidden p-6 sm:p-8">
      <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
          {unlocked && (
            <motion.span
              initial={{ scale: 0.6, opacity: 0.6 }}
              whileInView={{ scale: [0.6, 1.5, 1.15], opacity: [0.6, 0.15, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-accent"
            />
          )}

          {unlocked &&
            SPARKLE_ANGLES.map((angle, index) => {
              const radians = (angle * Math.PI) / 180;
              const x = Math.cos(radians) * 42;
              const y = Math.sin(radians) * 42;
              return (
                <motion.span
                  key={angle}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  whileInView={{ x, y, opacity: [0, 1, 0], scale: [0, 1, 0.6] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15 + index * 0.03, ease: "easeOut" }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-accent"
                />
              );
            })}

          <motion.div
            initial={{ scale: 0.4, rotate: unlocked ? -35 : 0, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.5 }}
            className={`relative flex h-16 w-16 items-center justify-center rounded-full border-2 ${
              unlocked
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-bg text-muted"
            }`}
          >
            {unlocked ? <GraduationCap className="h-7 w-7" /> : <Lock className="h-6 w-6" />}
          </motion.div>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wide text-accent sm:justify-start">
            <Sparkles className="h-3.5 w-3.5" />
            {t("estudios.unlock.eyebrow")}
          </div>
          <h3 className="mt-1 font-display text-xl font-medium text-fg sm:text-2xl">
            {TECNICATURA_TITULO[language]}
          </h3>
          <p className="mt-1.5 text-sm text-muted">
            <span className={unlocked ? "font-medium text-accent" : "font-medium text-muted"}>
              {unlocked ? t("estudios.unlock.unlocked") : t("estudios.unlock.locked")}
            </span>{" "}
            · {approved}/{total} · {t("estudios.stats.average")} {TECNICATURA_PROMEDIO}
          </p>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted sm:justify-start">
            {t("estudios.unlock.subtitle")}
            <GraduationCap className="h-3.5 w-3.5 text-accent" />
          </p>
        </div>
      </div>
    </Card>
  );
}

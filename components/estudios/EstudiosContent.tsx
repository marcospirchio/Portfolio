"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { INSTITUCION, LICENCIATURA_TITULO } from "@/lib/content/estudios";
import { DegreeUnlock } from "./DegreeUnlock";
import { ProgressStats } from "./ProgressStats";
import { CareerFlow } from "./CareerFlow";

export function EstudiosContent() {
  const { language, t } = useLanguage();

  return (
    <main className="px-4 pb-24 pt-32 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <Link
          href="/#education"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("estudios.back")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("estudios.eyebrow")}
          </div>
          <h1 className="font-display text-3xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
            {t("estudios.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{t("estudios.subtitle")}</p>
        </motion.div>

        <div className="mt-12">
          <DegreeUnlock />
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h2 className="font-display text-xl font-medium text-fg md:text-2xl">
              {LICENCIATURA_TITULO[language]}
            </h2>
            <span className="text-xs font-medium text-muted">{INSTITUCION}</span>
          </div>
          <div className="mt-5">
            <ProgressStats career="licenciatura" />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-xl font-medium text-fg md:text-2xl">
            {t("estudios.flow.title")}
          </h2>
          <div className="mt-6">
            <CareerFlow />
          </div>
        </div>
      </div>
    </main>
  );
}

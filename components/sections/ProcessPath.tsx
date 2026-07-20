"use client";

import { motion } from "motion/react";
import { processSteps } from "@/lib/content/process";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ProcessPath() {
  const { language } = useLanguage();

  return (
    <div>
      {processSteps.map((step, index) => {
        const isLast = index === processSteps.length - 1;

        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface font-display text-sm font-medium text-accent">
                {step.number}
              </div>

              {!isLast && (
                <div className="relative w-px flex-1 min-h-[3.25rem] overflow-hidden bg-border">
                  <div
                    className="animate-flow-line absolute inset-0"
                    style={{ animationDelay: `${index * 0.25}s` }}
                  />
                </div>
              )}
            </div>

            <div className={isLast ? "" : "pb-10"}>
              <h3 className="pt-2 font-display text-lg font-medium text-fg sm:text-xl">
                {step.title[language]}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                {step.description[language]}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

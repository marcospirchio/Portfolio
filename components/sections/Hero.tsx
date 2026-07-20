"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { HeroShowcase } from "./HeroShowcase";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16 md:px-6 md:pt-32"
    >
      <div className="container mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">
              {t("hero.role")}
            </p>

            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl">
              Marcos <span className="text-accent">Pirchio Giani</span>.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                {t("hero.ctaPrimary")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                {t("hero.ctaSecondary")}
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {t("hero.availability")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

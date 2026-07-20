"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState, useSyncExternalStore } from "react";
import { architectureLayers } from "@/lib/content/architecture";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { ArchitectureLabel } from "@/components/hero/ArchitectureLabel";
import type { ArchitectureLayerData } from "@/types/content";

const IMAGE_LIGHT = "/images/capas-header-claro.png";
const IMAGE_DARK = "/images/oooo.png";
const IMAGE_WIDTH = 1122;
const IMAGE_HEIGHT = 1402;

const LABEL_POSITIONS_PCT: Record<ArchitectureLayerData["id"], number> = {
  interface: 17,
  logic: 33,
  integrations: 46,
  data: 59,
  intelligence: 78,
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export function HeroShowcase() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<ArchitectureLayerData["id"] | null>(null);

  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-4 lg:gap-6">
      <div
        className="relative w-[200px] shrink-0 sm:w-[240px] md:h-[400px] md:w-auto lg:h-[480px]"
        style={{ aspectRatio: `${IMAGE_WIDTH} / ${IMAGE_HEIGHT}` }}
      >
        <Image
          src={theme === "dark" ? IMAGE_DARK : IMAGE_LIGHT}
          alt="Arquitectura de software dividida en capas: interfaz, lógica, integraciones, datos e inteligencia"
          fill
          priority
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 220px"
          className="select-none object-contain"
        />
      </div>

      <div className="relative flex w-full max-w-[12rem] flex-col gap-4 md:h-[400px] md:gap-0 lg:h-[480px]">
        {architectureLayers.map((layer, index) => (
          <div
            key={layer.id}
            className="relative md:absolute md:inset-x-0 md:top-[var(--label-top)] md:-translate-y-1/2"
            style={{ "--label-top": `${LABEL_POSITIONS_PCT[layer.id]}%` } as CSSProperties}
          >
            <ArchitectureLabel
              icon={layer.icon}
              title={layer.title[language]}
              description={layer.description[language]}
              delay={0.15 + index * 0.09}
              reducedMotion={reducedMotion}
              isActive={activeId === layer.id}
              onHoverStart={() => setActiveId(layer.id)}
              onHoverEnd={() => setActiveId(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { BrainCircuit, Database, Link2, Monitor, Share2 } from "lucide-react";
import type { ArchitectureLayerData } from "@/types/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS: Record<ArchitectureLayerData["icon"], typeof Monitor> = {
  monitor: Monitor,
  logic: Share2,
  link: Link2,
  database: Database,
  brain: BrainCircuit,
};

interface ArchitectureLabelProps {
  icon: ArchitectureLayerData["icon"];
  title: string;
  description: string;
  delay: number;
  reducedMotion: boolean;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function ArchitectureLabel({
  icon,
  title,
  description,
  delay,
  reducedMotion,
  isActive,
  onHoverStart,
  onHoverEnd,
}: ArchitectureLabelProps) {
  const Icon = ICONS[icon];

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={
        reducedMotion ? { duration: 0.3 } : { delay, duration: 0.4, ease: EASE }
      }
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="flex items-center gap-3"
    >
      <span className="hidden items-center gap-1.5 sm:flex">
        <span
          className={`h-px w-8 transition-colors duration-300 ${
            isActive ? "bg-accent" : "bg-border"
          }`}
        />
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
            isActive ? "bg-accent" : "bg-accent/50"
          }`}
        />
      </span>

      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
          isActive ? "border-accent/40 bg-accent-soft" : "border-border bg-surface"
        }`}
      >
        <Icon className={`h-3.5 w-3.5 ${isActive ? "text-accent" : "text-fg"}`} />
      </div>

      <div>
        <p
          className={`text-[11px] font-semibold uppercase leading-tight tracking-wide transition-colors duration-300 ${
            isActive ? "text-fg/90" : "text-fg"
          }`}
        >
          {title}
        </p>
        <p className="line-clamp-1 text-[10.5px] leading-tight text-muted">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

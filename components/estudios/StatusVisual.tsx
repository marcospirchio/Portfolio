import { CheckCircle2, Circle, Clock3, Lock } from "lucide-react";
import type { DisplayStatus } from "@/lib/estudios/utils";

interface StatusStyle {
  icon: typeof CheckCircle2;
  border: string;
  bg: string;
  text: string;
  dot: string;
}

export const STATUS_STYLES: Record<DisplayStatus, StatusStyle> = {
  aprobada: {
    icon: CheckCircle2,
    border: "border-emerald-600/30 dark:border-emerald-400/30",
    bg: "bg-emerald-50 dark:bg-emerald-400/10",
    text: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-600 dark:bg-emerald-400",
  },
  disponible: {
    icon: Circle,
    border: "border-sky-500/40",
    bg: "bg-sky-500/10",
    text: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-500",
  },
  "final-pendiente": {
    icon: Clock3,
    border: "border-amber-500/40",
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
  },
  bloqueada: {
    icon: Lock,
    border: "border-border",
    bg: "bg-bg",
    text: "text-muted",
    dot: "bg-muted",
  },
};

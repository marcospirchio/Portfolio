import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "success" | "neutral";
}

const tones = {
  accent: "bg-accent-soft text-accent border-accent/30",
  success: "bg-success-soft text-success border-success/30",
  neutral: "bg-surface text-muted border-border",
};

export function Badge({ children, className, tone = "accent" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}

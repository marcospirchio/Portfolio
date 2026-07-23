import { forwardRef } from "react";
import { GraduationCap } from "lucide-react";
import type { Locale, Subject } from "@/types/content";
import type { DisplayStatus } from "@/lib/estudios/utils";
import { STATUS_STYLES } from "./StatusVisual";

interface SubjectCardProps {
  subject: Subject;
  status: DisplayStatus;
  language: Locale;
  isTecnicatura: boolean;
  isSelected: boolean;
  isDimmed: boolean;
  onSelect: (code: string) => void;
}

export const SubjectCard = forwardRef<HTMLButtonElement, SubjectCardProps>(function SubjectCard(
  { subject, status, language, isTecnicatura, isSelected, isDimmed, onSelect },
  ref
) {
  const style = STATUS_STYLES[status];
  const Icon = style.icon;

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onSelect(subject.code)}
      className={`group relative flex w-[168px] shrink-0 flex-col gap-1.5 rounded-xl border p-3 text-left transition-all duration-300 sm:w-[188px] ${style.border} ${style.bg} ${
        isSelected ? "ring-2 ring-accent scale-[1.03]" : ""
      } ${isDimmed ? "opacity-30" : "opacity-100"}`}
    >
      {isTecnicatura && (
        <span
          className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full border border-accent/40 bg-surface text-accent"
          title="Título Técnico"
        >
          <GraduationCap className="h-3 w-3" />
        </span>
      )}

      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] text-muted">{subject.code}</span>
        <Icon className={`h-4 w-4 shrink-0 ${style.text}`} />
      </div>

      <h4 className="text-xs font-medium leading-snug text-fg line-clamp-2">
        {subject.name[language]}
      </h4>

      <div className="flex items-center justify-between text-[11px]">
        <span className="text-muted">{subject.hours} hs.</span>
        {typeof subject.grade === "number" && (
          <span className={`font-display font-medium ${style.text}`}>{subject.grade}</span>
        )}
      </div>
    </button>
  );
});

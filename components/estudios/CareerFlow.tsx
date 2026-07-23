"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { subjects } from "@/lib/content/estudios";
import { getDisplayStatus } from "@/lib/estudios/utils";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SubjectCard } from "./SubjectCard";
import { Legend } from "./Legend";

const YEARS = [1, 2, 3, 4] as const;

interface Edge {
  id: string;
  from: string;
  to: string;
  d: string;
}

export function CareerFlow() {
  const { language, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLButtonElement>());
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const byCode = useMemo(() => new Map(subjects.map((s) => [s.code, s])), []);
  const byYear = useMemo(
    () => YEARS.map((year) => ({ year, items: subjects.filter((s) => s.year === year) })),
    []
  );

  const setNodeRef = useCallback((code: string, el: HTMLButtonElement | null) => {
    if (el) nodeRefs.current.set(code, el);
    else nodeRefs.current.delete(code);
  }, []);

  const recomputeEdges = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const next: Edge[] = [];

    subjects.forEach((subject) => {
      (subject.prerequisites ?? []).forEach((prereqCode) => {
        const fromEl = nodeRefs.current.get(prereqCode);
        const toEl = nodeRefs.current.get(subject.code);
        if (!fromEl || !toEl) return;
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();
        const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
        const y1 = fromRect.bottom - containerRect.top;
        const x2 = toRect.left + toRect.width / 2 - containerRect.left;
        const y2 = toRect.top - containerRect.top;
        const midY = (y1 + y2) / 2;
        next.push({
          id: `${prereqCode}->${subject.code}`,
          from: prereqCode,
          to: subject.code,
          d: `M ${x1} ${y1} C ${x1} ${midY} ${x2} ${midY} ${x2} ${y2}`,
        });
      });
    });

    setEdges(next);
  }, []);

  useEffect(() => {
    recomputeEdges();
    const raf = requestAnimationFrame(recomputeEdges);
    window.addEventListener("resize", recomputeEdges);

    const observer = new ResizeObserver(() => recomputeEdges());
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", recomputeEdges);
      observer.disconnect();
    };
  }, [recomputeEdges, language]);

  const highlighted = useMemo(() => {
    if (!selected) return new Set<string>();
    const set = new Set<string>([selected]);
    const queue = [selected];
    while (queue.length) {
      const code = queue.pop();
      const subject = code ? byCode.get(code) : undefined;
      (subject?.prerequisites ?? []).forEach((prereqCode) => {
        if (!set.has(prereqCode)) {
          set.add(prereqCode);
          queue.push(prereqCode);
        }
      });
    }
    return set;
  }, [selected, byCode]);

  function handleSelect(code: string) {
    setSelected((current) => (current === code ? null : code));
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <p className="max-w-xl text-sm leading-relaxed text-muted">{t("estudios.flow.subtitle")}</p>
        <Legend />
      </div>

      <div className="mt-8 overflow-x-auto pb-4">
        <div ref={containerRef} className="relative inline-flex min-w-full flex-col gap-12 py-2">
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            {edges.map((edge) => {
              const isActive = highlighted.has(edge.from) && highlighted.has(edge.to);
              return (
                <path
                  key={edge.id}
                  d={edge.d}
                  fill="none"
                  stroke={isActive ? "var(--accent)" : "var(--border)"}
                  strokeWidth={isActive ? 2 : 1.5}
                  className="transition-[stroke,stroke-width] duration-300"
                />
              );
            })}
          </svg>

          {byYear.map(({ year, items }) => (
            <div key={year} className="relative flex items-start gap-4">
              <div className="sticky left-0 z-10 flex w-14 shrink-0 flex-col items-center justify-center self-stretch bg-bg/90 backdrop-blur-sm">
                <span className="font-display text-2xl font-medium text-muted">{year}°</span>
                <span className="text-center text-[10px] uppercase tracking-wide text-muted">
                  {t("estudios.flow.year")}
                </span>
              </div>

              {items.map((subject) => (
                <SubjectCard
                  key={subject.code}
                  ref={(el) => setNodeRef(subject.code, el)}
                  subject={subject}
                  status={getDisplayStatus(subject)}
                  language={language}
                  isTecnicatura={Boolean(subject.tecnicaturaYear)}
                  isSelected={selected === subject.code}
                  isDimmed={selected !== null && !highlighted.has(subject.code)}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

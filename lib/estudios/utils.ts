import { subjects, TECNICATURA_PROMEDIO } from "@/lib/content/estudios";
import type { CareerId, Subject } from "@/types/content";

export type DisplayStatus = "aprobada" | "final-pendiente" | "disponible" | "bloqueada";

const subjectsByCode = new Map(subjects.map((subject) => [subject.code, subject]));

export function getSubjectsByCareer(career: CareerId): Subject[] {
  return subjects.filter((subject) => subject.careers.includes(career));
}

/** Estado real "aprobada" o el estado visual derivado a partir de las correlativas. */
export function getDisplayStatus(subject: Subject): DisplayStatus {
  if (subject.status === "aprobada") return "aprobada";
  if (subject.status === "final-pendiente") return "final-pendiente";

  const prerequisites = subject.prerequisites ?? [];
  const unlocked = prerequisites.every((code) => subjectsByCode.get(code)?.status === "aprobada");
  return unlocked ? "disponible" : "bloqueada";
}

export function getCareerProgress(career: CareerId) {
  const list = getSubjectsByCareer(career);
  const approved = list.filter((subject) => subject.status === "aprobada");
  const total = list.length;
  const percent = total === 0 ? 0 : Math.round((approved.length / total) * 100);
  return { total, approved: approved.length, percent };
}

/** Promedio de notas numéricas de materias aprobadas de una carrera. */
export function getCareerAverage(career: CareerId): number {
  if (career === "tecnicatura") return TECNICATURA_PROMEDIO;

  const graded = getSubjectsByCareer(career).filter(
    (subject) => subject.status === "aprobada" && typeof subject.grade === "number"
  );
  if (graded.length === 0) return 0;
  const sum = graded.reduce((acc, subject) => acc + (subject.grade ?? 0), 0);
  return Math.round((sum / graded.length) * 100) / 100;
}

export function isTecnicaturaComplete(): boolean {
  const { total, approved } = getCareerProgress("tecnicatura");
  return total > 0 && total === approved;
}

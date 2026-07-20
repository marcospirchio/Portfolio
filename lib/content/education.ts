import type { Education } from "@/types/content";

export const education: Education[] = [
  {
    degree: {
      es: "Técnico en Desarrollo de Software",
      en: "Software Development Technician",
    },
    institution: "UADE",
    period: { es: "2022 — 2025", en: "2022 — 2025" },
    status: { es: "Completado", en: "Completed" },
  },
  {
    degree: {
      es: "Licenciatura en Gestión de Tecnologías de la Información",
      en: "B.A. in IT Management",
    },
    institution: "UADE",
    period: { es: "2025 — Presente", en: "2025 — Present" },
    status: { es: "En curso", en: "In progress" },
    current: true,
  },
];

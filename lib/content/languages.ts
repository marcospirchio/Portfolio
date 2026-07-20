import type { LanguageSkill } from "@/types/content";

export const languageSkills: LanguageSkill[] = [
  {
    name: { es: "Español", en: "Spanish" },
    level: { es: "Nativo", en: "Native" },
    flag: "🇦🇷",
    description: {
      es: "Lengua materna. Dominio completo del idioma para cualquier contexto profesional y gestión de proyectos.",
      en: "Native language. Full command for any professional context and project management.",
    },
    certifications: [],
  },
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "Avanzado", en: "Advanced" },
    flag: "🇺🇸",
    description: {
      es: "Certificaciones oficiales que respaldan mi capacidad de comunicación técnica y profesional en inglés.",
      en: "Official certifications backing my technical and professional communication skills in English.",
    },
    certifications: [
      {
        name: "Cambridge University B2 First",
        url: "/certificaciones/cambridge-b2-first.pdf",
      },
      {
        name: "EF SET (Bristol, UK): C2 Proficient",
        url: "https://cert.efset.org/rmSCeW",
      },
    ],
  },
  {
    name: { es: "Portugués", en: "Portuguese" },
    level: { es: "Básico a Intermedio", en: "Basic to Intermediate" },
    flag: "🇧🇷",
    description: {
      es: "Habilidad suficiente para entablar conversaciones y leer textos con vocabulario cotidiano.",
      en: "Enough skill to hold conversations and read everyday texts.",
    },
    certifications: [],
  },
];

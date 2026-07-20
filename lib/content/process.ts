import type { ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: { es: "Entender", en: "Understand" },
    description: {
      es: "La necesidad y el contexto",
      en: "The need and the context",
    },
  },
  {
    number: "02",
    title: { es: "Diseñar", en: "Design" },
    description: {
      es: "La solución y la arquitectura",
      en: "The solution and the architecture",
    },
  },
  {
    number: "03",
    title: { es: "Construir", en: "Build" },
    description: {
      es: "El producto y sus integraciones",
      en: "The product and its integrations",
    },
  },
  {
    number: "04",
    title: { es: "Entregar", en: "Deliver" },
    description: {
      es: "Probar, desplegar y mejorar",
      en: "Test, deploy and improve",
    },
  },
];

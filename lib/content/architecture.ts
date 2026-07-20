import type { ArchitectureLayerData } from "@/types/content";

export const architectureLayers: ArchitectureLayerData[] = [
  {
    id: "interface",
    icon: "monitor",
    title: { es: "INTERFAZ", en: "INTERFACE" },
    description: {
      es: "Experiencia de usuario y presentación",
      en: "User experience and presentation",
    },
  },
  {
    id: "logic",
    icon: "logic",
    title: { es: "LÓGICA", en: "LOGIC" },
    description: {
      es: "Reglas, servicios y orquestación",
      en: "Rules, services and orchestration",
    },
  },
  {
    id: "integrations",
    icon: "link",
    title: { es: "INTEGRACIONES", en: "INTEGRATIONS" },
    description: {
      es: "APIs, servicios externos y conectores",
      en: "APIs, external services and connectors",
    },
  },
  {
    id: "data",
    icon: "database",
    title: { es: "DATOS", en: "DATA" },
    description: {
      es: "Almacenamiento, modelado y consultas",
      en: "Storage, modeling and querying",
    },
  },
  {
    id: "intelligence",
    icon: "brain",
    title: { es: "INTELIGENCIA", en: "INTELLIGENCE" },
    description: {
      es: "Automatización, agentes y aprendizaje",
      en: "Automation, agents and learning",
    },
  },
];

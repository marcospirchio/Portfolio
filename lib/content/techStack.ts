import type { TechCategory } from "@/types/content";

export const techCategories: TechCategory[] = [
  {
    name: { es: "Frontend", en: "Frontend" },
    items: [
      { name: "React.js", colorVar: "#61DAFB" },
      { name: "Next.js", colorVar: "#EDEDED" },
      { name: "Tailwind CSS", colorVar: "#38BDF8" },
    ],
  },
  {
    name: { es: "Backend", en: "Backend" },
    items: [
      { name: "Java / Spring Boot", colorVar: "#6DB33F" },
      { name: "Python", colorVar: "#3776AB" },
    ],
  },
  {
    name: { es: "Bases de datos", en: "Databases" },
    items: [
      { name: "PostgreSQL", colorVar: "#4169E1" },
      { name: "MongoDB", colorVar: "#47A248" },
      { name: "SQL Server", colorVar: "#CC2927" },
    ],
  },
  {
    name: { es: "Herramientas", en: "Tools" },
    items: [
      { name: "Docker", colorVar: "#2496ED" },
      { name: "Git / GitHub", colorVar: "#F05032" },
      { name: "Postman", colorVar: "#FF6C37" },
      { name: "n8n", colorVar: "#EA4B71" },
    ],
  },
];

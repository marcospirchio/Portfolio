import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    company: "Impe Alfajores",
    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    period: {
      es: "Diciembre 2025 — Actualidad",
      en: "December 2025 — Present",
    },
    description: {
      es: "Lideré la transformación digital de una pyme del sector alimenticio mediante el desarrollo integral de un SaaS ERP a medida, logrando migrar la gestión operativa del negocio de sistemas manuales en Excel a una arquitectura profesional y escalable. Diseñé e implementé la solución utilizando un stack compuesto por Java (Spring Boot), React y PostgreSQL, encargándome de la migración de datos complejos con Python (Pandas) y la automatización de la gestión de stock a través de n8n e integraciones de IA con WhatsApp API. Este proyecto no solo modernizó la infraestructura técnica, sino que centralizó la información del negocio en dashboards de KPIs operativos, permitiendo una toma de decisiones basada en datos reales y optimizando los flujos de producción de punta a punta.",
      en: "I led the digital transformation of a food-industry SMB by building a custom ERP SaaS end to end, migrating the company's operations from manual Excel-based processes to a professional, scalable architecture. I designed and implemented the solution with a stack of Java (Spring Boot), React, and PostgreSQL, handling complex data migration with Python (Pandas) and automating stock management through n8n and AI integrations with the WhatsApp API. Beyond modernizing the technical infrastructure, the project centralized the business's information into operational KPI dashboards, enabling data-driven decisions and optimizing production workflows end to end.",
    },
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Python", "n8n", "WhatsApp API"],
    current: true,
  },
];

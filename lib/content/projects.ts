import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "autoturnos",
    order: 1,
    title: "AutoTurnos",
    featured: true,
    category: {
      es: "Plataforma SaaS",
      en: "SaaS Platform",
    },
    description: {
      es: "Plataforma SaaS de gestión de turnos para profesionales independientes (nutricionistas, psicólogos, abogados). Reserva online con calendario propio, sincronización con Google Calendar, políticas de cancelación, lista de espera y registro con slug personalizado. Suscripción freemium con cobro integrado vía MercadoPago.",
      en: "SaaS scheduling platform for independent professionals (nutritionists, psychologists, lawyers). Online booking with a custom calendar, Google Calendar sync, cancellation policies, waitlist, and personalized signup slugs. Freemium subscription with MercadoPago billing built in.",
    },
    tech: ["Java", "Spring Boot", "Typescript", "PostgreSQL", "Next.js", "Docker", "n8n"],
    image: "/images/autoturnos-og-image.png",
    imageFit: "contain",
    links: {
      demo: "https://autoturnos.com.ar",
    },
  },
  {
    id: "tribuna-river",
    order: 2,
    title: "Tribuna River",
    secondary: true,
    category: {
      es: "Web App",
      en: "Web App",
    },
    description: {
      es: "Aplicación web para registrar la asistencia a partidos de River, explorar el historial del club y visualizar estadísticas personales. Integra datos históricos obtenidos mediante scraping y actualizaciones automáticas del fixture.",
      en: "Web application to track attendance at River Plate matches, explore the club's history, and visualize personal stats. Integrates historical data gathered through scraping and automatic fixture updates.",
    },
    tech: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "Python"],
    image: "/images/tribunariver.png",
    links: {
      demo: "https://tribunariver.com.ar",
    },
  },
  {
    id: "securehire",
    order: 3,
    title: "SecureHire",
    category: {
      es: "SaaS con IA",
      en: "AI-powered SaaS",
    },
    description: {
      es: "Plataforma de reclutamiento que integra IA para analizar y resumir currículums, evaluar candidatos y asistir la toma de decisiones. Reduce 50% las tareas manuales, mejora 30% la precisión del filtrado y acelera 30% el proceso de contratación.",
      en: "Recruitment platform that uses AI to analyze and summarize resumes, evaluate candidates, and assist hiring decisions. Cuts manual work by 50%, improves filtering accuracy by 30%, and speeds up hiring by 30%.",
    },
    tech: ["Java", "Spring Boot", "MongoDB", "Next.js", "AI"],
    image: "/images/securehire.png",
    links: {
      github: "https://github.com/marcospirchio/SecureHire",
      video: "/video/securehire-demo.mp4",
    },
  },
  {
    id: "river-tickets-bot",
    order: 3.5,
    title: "Bot Entradas River",
    category: {
      es: "Automatización",
      en: "Automation",
    },
    description: {
      es: "Bot que automatiza la compra de entradas para los partidos de River en RiverID: detecta la apertura de la venta y completa todo el flujo de compra en segundos, sin intervención manual. Monitoreo por Telegram con canales separados de salud, errores y resultado de la compra (si consiguió la entrada o hay que terminarla a mano).",
      en: "Bot that automates buying River Plate match tickets on RiverID: detects when sales open and completes the entire purchase flow in seconds, no manual steps. Monitored via Telegram with separate channels for health, errors, and purchase outcome (whether it succeeded or needs to be finished manually).",
    },
    tech: ["Playwright", "TypeScript", "Node.js", "Telegram Bot API"],
    image: "/images/river-bot.png",
    links: {
      video: "/video/river-bot-demo.mp4",
    },
  },
  {
    id: "nordic-home",
    order: 5,
    title: "Nordic Home",
    category: {
      es: "E-commerce",
      en: "E-commerce",
    },
    description: {
      es: "Comercio electrónico para PyMEs y negocios locales: catálogo dinámico, filtros de productos y órdenes que se envían directo al WhatsApp del vendedor, sin pasarelas de pago ni comisiones.",
      en: "E-commerce solution for local businesses: dynamic catalog, product filters, and orders sent straight to the seller's WhatsApp, no payment gateways or fees.",
    },
    tech: ["React", "Next.js"],
    image: "/images/nordic-home.png",
    links: {
      demo: "https://nordic-home-muebles.vercel.app/",
    },
  },
  {
    id: "rutear",
    order: 4,
    title: "RuteAR",
    category: {
      es: "Web App",
      en: "Web App",
    },
    description: {
      es: "Planificador de viajes en auto que calcula el costo total de un recorrido combinando combustible y peajes en tiempo real, usando Google Maps Platform y una base de datos propia de consumo por modelo.",
      en: "Road-trip planner that calculates total trip cost combining fuel and real-time tolls, using the Google Maps Platform and a custom fuel-consumption database by vehicle model.",
    },
    tech: ["React", "Next.js", "Google Maps API"],
    image: "/images/rutear.png",
    links: {
      github: "https://github.com/marcospirchio/CalculadoraDeCombustible",
      demo: "https://rutearapp.com.ar",
    },
  },
  {
    id: "propsuite",
    order: 6,
    title: "Propsuite",
    category: {
      es: "SaaS",
      en: "SaaS",
    },
    description: {
      es: "Aplicación SaaS para gestión integral de edificios y consorcios: unidades, propietarios, inquilinos y reclamos desde una plataforma centralizada.",
      en: "SaaS application for full building and homeowner-association management: units, owners, tenants, and claims from a centralized platform.",
    },
    tech: ["Java", "Spring Boot", "SQL Server", "React"],
    image: "/images/propsuite.png",
    links: {
      github: "https://github.com/marcospirchio/Propsuite",
    },
  },
  {
    id: "autopartes",
    order: 7,
    title: "Sistema de Gestión de Autopartes",
    category: {
      es: "Sistema de gestión",
      en: "Management system",
    },
    description: {
      es: "Aplicación web para administrar inventario de autopartes: control de stock, proveedores, ventas y generación automática de reportes.",
      en: "Web application for managing auto-parts inventory: stock control, suppliers, sales, and automatic report generation.",
    },
    tech: ["Java", "React"],
    image: "/images/autopartes.png",
    links: {
      github: "https://github.com/marcospirchio/SistemaDeGestionDeAutopartes",
    },
  },
];

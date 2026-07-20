import type { Certification } from "@/types/content";

export const certifications: Certification[] = [
  {
    title: {
      es: "Curso Introductorio de Python",
      en: "Introductory Python Course",
    },
    description: {
      es: "Curso sobre Python dictado por la IEEE ITBA Student Branch, finalizado con éxito.",
      en: "Python course taught by the IEEE ITBA Student Branch, successfully completed.",
    },
    institution: "IEEE - ITBA",
    logo: "/images/ieee-itba.png",
    certificateUrl: "/certificaciones/ieee-itba-python-intro.pdf",
  },
  {
    title: {
      es: "Curso de Análisis de Datos en Python",
      en: "Python Data Analysis Course",
    },
    description: {
      es: "Curso de análisis de datos en Python brindado por IEEE - ITBA. Conocimientos adquiridos: librerías Pandas y Matplotlib.",
      en: "Python data-analysis course by IEEE - ITBA. Skills gained: Pandas and Matplotlib libraries.",
    },
    institution: "IEEE - ITBA",
    logo: "/images/ieee-itba.png",
    certificateUrl: "/certificaciones/ieee-itba-python-datos.pdf",
  },
];

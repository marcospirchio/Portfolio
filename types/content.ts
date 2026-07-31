export type Locale = "es" | "en";

export type Bilingual<T = string> = Record<Locale, T>;

export interface ProjectLinks {
  demo?: string;
  github?: string;
  video?: string;
}

export interface Project {
  id: string;
  order: number;
  title: string;
  category: Bilingual;
  description: Bilingual;
  tech: string[];
  image: string | null;
  imageFit?: "cover" | "contain";
  links: ProjectLinks;
  screenshots?: string[];
  featured?: boolean;
  secondary?: boolean;
}

export interface Service {
  icon: "monitor" | "database" | "zap" | "lightbulb";
  title: Bilingual;
  description: Bilingual;
}

export interface LanguageCertification {
  name: string;
  url: string;
}

export interface LanguageSkill {
  name: Bilingual;
  level: Bilingual;
  flag: string;
  description: Bilingual;
  certifications: LanguageCertification[];
}

export interface Certification {
  title: Bilingual;
  description: Bilingual;
  institution: string;
  logo: string;
  certificateUrl: string;
}

export interface TechItem {
  name: string;
  colorVar: string;
}

export interface TechCategory {
  name: Bilingual;
  items: TechItem[];
}

export interface ProcessStep {
  number: string;
  title: Bilingual;
  description: Bilingual;
}

export interface Experience {
  company: string;
  role: Bilingual;
  period: Bilingual;
  description: Bilingual;
  tech: string[];
  current?: boolean;
}

export interface Education {
  degree: Bilingual;
  institution: string;
  period: Bilingual;
  status: Bilingual;
  current?: boolean;
}

export type CareerId = "tecnicatura" | "licenciatura";

/** Estado real de la materia según el sistema académico. */
export type SubjectStatus = "aprobada" | "final-pendiente" | "pendiente";

/** Cómo se aprobó (o se aprobará) la materia. */
export type SubjectMode = "aprobado" | "promocion" | "equivalencia";

export interface Subject {
  /** Código de la materia. Cuando hay equivalencia interna, incluye ambos códigos. */
  code: string;
  name: Bilingual;
  hours: number;
  /** Año dentro del plan de la Licenciatura (1-4), que es el plan completo. */
  year: 1 | 2 | 3 | 4;
  /** Año dentro del plan de la Tecnicatura, solo si la materia forma parte de ese título intermedio. */
  tecnicaturaYear?: 1 | 2 | 3;
  careers: CareerId[];
  status: SubjectStatus;
  grade?: number;
  mode?: SubjectMode;
  note?: Bilingual;
  /** Códigos de materias correlativas previas (aproximado, no es la tabla oficial de correlatividades). */
  prerequisites?: string[];
}

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

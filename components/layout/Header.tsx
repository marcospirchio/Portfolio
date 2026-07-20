"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { Button, LinkButton } from "@/components/ui/Button";

const CV_URLS = {
  es: "/cv/Marcos-Pirchio-Giani-CV-ES.pdf",
  en: "/cv/Marcos-Pirchio-Giani-CV-EN.pdf",
};

const NAV_ITEMS = [
  { id: "projects", key: "nav.work" },
  { id: "experience", key: "nav.experience" },
  { id: "about", key: "nav.about" },
  { id: "tech", key: "nav.tech" },
  { id: "services", key: "nav.services" },
  { id: "contact", key: "nav.contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const cvUrl = CV_URLS[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-display text-xl font-medium text-fg"
          aria-label="Ir al inicio"
        >
          MP
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="md"
              onClick={() => scrollToSection(item.id)}
            >
              {t(item.key)}
            </Button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg hover:border-accent hover:text-accent transition-colors"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            onClick={toggleLanguage}
            aria-label={t("nav.langSwitchLabel")}
            className="flex h-9 items-center rounded-full border border-border px-3 text-xs font-semibold tracking-wide text-fg hover:border-accent hover:text-accent transition-colors"
          >
            <span className={language === "es" ? "text-accent" : ""}>ES</span>
            <span className="mx-1 text-muted">/</span>
            <span className={language === "en" ? "text-accent" : ""}>EN</span>
          </button>
          <LinkButton
            href={cvUrl}
            external
            variant="outline"
            size="md"
            aria-label={t("nav.cvAriaLabel")}
          >
            <FileText className="h-4 w-4" />
            {t("nav.cv")}
          </LinkButton>
          <LinkButton href="#contact" size="md" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
            {t("nav.letsTalk")}
          </LinkButton>
        </div>

        <button
          className="md:hidden flex h-9 w-9 items-center justify-center text-fg"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-border bg-bg px-4 pb-6 pt-2"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="justify-start"
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);
                }}
              >
                {t(item.key)}
              </Button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleLanguage}
              aria-label={t("nav.langSwitchLabel")}
              className="flex h-9 items-center rounded-full border border-border px-3 text-xs font-semibold tracking-wide text-fg"
            >
              <span className={language === "es" ? "text-accent" : ""}>ES</span>
              <span className="mx-1 text-muted">/</span>
              <span className={language === "en" ? "text-accent" : ""}>EN</span>
            </button>
            <LinkButton
              href={cvUrl}
              external
              variant="outline"
              aria-label={t("nav.cvAriaLabel")}
              onClick={() => setMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              {t("nav.cv")}
            </LinkButton>
            <LinkButton
              href="#contact"
              className="flex-1"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setMenuOpen(false);
              }}
            >
              {t("nav.letsTalk")}
            </LinkButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

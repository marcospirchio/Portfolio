"use client";

import { useRouter, usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Button, LinkButton } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const NAV_ITEMS = [
  { id: "projects", key: "nav.work" },
  { id: "experience", key: "nav.experience" },
  { id: "about", key: "nav.about" },
  { id: "tech", key: "nav.tech" },
  { id: "contact", key: "nav.contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const year = new Date().getFullYear();

  function goToSection(id: string) {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
    }
  }

  return (
    <footer className="border-t border-border px-4 py-12 md:px-6">
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-display text-xl font-medium text-fg">MP</span>
            <p className="mt-3 max-w-xs text-sm text-muted leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-fg mb-3">
              {t("footer.linksHeading")}
            </h4>
            <div className="flex flex-col items-start gap-1">
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="justify-start px-0 h-auto py-1 text-muted hover:text-accent"
                  onClick={() => goToSection(item.id)}
                >
                  {t(item.key)}
                </Button>
              ))}
              <LinkButton
                href="/estudios"
                variant="ghost"
                className="justify-start px-0 h-auto py-1 text-muted hover:text-accent"
              >
                {t("nav.estudios")}
              </LinkButton>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-fg mb-3">
              {t("footer.contactHeading")}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/marcospirchio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg hover:border-accent hover:text-accent transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-pirchio-giani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg hover:border-accent hover:text-accent transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:pirchiomarcos@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted">
          © {year} Marcos Pirchio Giani. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ImageOff, Play } from "lucide-react";
import type { Project } from "@/types/content";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { LinkButton, Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectCardProps {
  project: Project;
  onVideoClick: (url: string, title: string, screenshots?: string[]) => void;
}

export function ProjectCard({ project, onVideoClick }: ProjectCardProps) {
  const { language, t } = useLanguage();

  const primaryLink = project.links.demo
    ? { type: "demo" as const, href: project.links.demo }
    : project.links.video
      ? { type: "video" as const, href: project.links.video }
      : project.links.github
        ? { type: "github" as const, href: project.links.github }
        : null;

  const handleImageActivate = () => {
    if (!primaryLink) return;
    if (primaryLink.type === "video") {
      onVideoClick(primaryLink.href, project.title, project.screenshots);
    } else {
      window.open(primaryLink.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        className={`group flex h-full flex-col overflow-hidden ${project.featured
            ? "ring-1 ring-accent/40"
            : project.secondary
              ? "ring-1 ring-accent/20"
              : ""
          }`}
      >
        <div
          role={primaryLink ? "button" : undefined}
          tabIndex={primaryLink ? 0 : undefined}
          onClick={primaryLink ? handleImageActivate : undefined}
          onKeyDown={
            primaryLink
              ? (event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleImageActivate();
                  }
                }
              : undefined
          }
          aria-label={
            primaryLink
              ? primaryLink.type === "demo"
                ? t("projects.viewDemo")
                : primaryLink.type === "github"
                  ? t("projects.viewCode")
                  : t("projects.viewVideo")
              : undefined
          }
          className={`relative shrink- overflow-hidden ${project.featured || project.secondary ? "aspect-[16/10]" : "aspect-[4/3]"
            } ${primaryLink ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg" : ""}`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes={project.featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
              className={`transition-transform duration-500 ${project.imageFit === "contain" ? "object-contain bg-white" : "object-cover"
                } ${project.id === "autoturnos" ? "scale-[1.05] !h-[calc(100%+4px)] !top-[-1px] group-hover:scale-[1.1]" : "group-hover:scale-105"
                }`}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent-soft to-transparent text-muted">
              <ImageOff className="h-6 w-6" />
              <span className="text-xs font-medium">{t("projects.imagePending")}</span>
            </div>
          )}
          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-fg px-3 py-1 text-xs font-semibold text-bg">
              #1
            </span>
          )}
          {project.secondary && (
            <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-fg ring-1 ring-accent/30">
              #2
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            {project.category[language]}
          </span>
          <h3 className="font-display text-xl font-medium text-fg">{project.title}</h3>
          <p className="flex-1 text-sm leading-relaxed text-muted">
            {project.description[language]}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {project.links.demo && (
              <LinkButton href={project.links.demo} external size="md">
                {t("projects.viewDemo")}
              </LinkButton>
            )}
            {project.links.github && (
              <LinkButton
                href={project.links.github}
                external
                variant="outline"
                size="md"
              >
                <GithubIcon className="h-4 w-4" />
                {t("projects.viewCode")}
              </LinkButton>
            )}
            {project.links.video && (
              <Button
                variant="outline"
                size="md"
                onClick={() => onVideoClick(project.links.video!, project.title, project.screenshots)}
              >
                <Play className="h-4 w-4" />
                {t("projects.viewVideo")}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

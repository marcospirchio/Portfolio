"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/lib/content/projects";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { VideoModal } from "./VideoModal";

export function Projects() {
  const { t } = useLanguage();
  const [video, setVideo] = useState<{ url: string; title: string; screenshots?: string[] } | null>(
    null
  );

  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const [featured, secondary, ...rest] = sorted;

  return (
    <section id="projects" className="px-4 py-24 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow={t("projects.eyebrow")}
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
          />
        </motion.div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProjectCard
              project={featured}
              onVideoClick={(url, title, screenshots) => setVideo({ url, title, screenshots })}
            />
          </div>
          <ProjectCard
            project={secondary}
            onVideoClick={(url, title, screenshots) => setVideo({ url, title, screenshots })}
          />
          {rest.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onVideoClick={(url, title, screenshots) => setVideo({ url, title, screenshots })}
            />
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={video !== null}
        onClose={() => setVideo(null)}
        videoUrl={video?.url ?? ""}
        title={video?.title ?? ""}
        screenshots={video?.screenshots}
      />
    </section>
  );
}

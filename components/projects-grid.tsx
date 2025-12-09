"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { VideoModal } from "./video-modal"

const projects = [
  {
    title: "SecureHire",
    description:
      "Plataforma de reclutamiento impulsada por IA. Conecta empresas con candidatos calificados mediante análisis inteligente de CVs y matching automático.",
    tech: ["Java", "Spring Boot", "React", "MongoDB", "AI", "Next.js"],
    image: "/images/SecureHireLogo.png",
    github: "https://github.com/marcospirchio/SecureHire",
    videoUrl: "/securehire_video_demo/demo_securehire.mp4",
  },
  {
    title: "Nordic Home",
    description:
      "E-commerce moderno con diseño minimalista. Carrito de compras, gestión de productos, pasarela de pagos y panel de administración completo.",
    tech: ["React", "Next.js"],
    image: "/images/Nordic-Home-Imagen.png",
    github: "https://github.com/marcospirchio/Nordic-Home-Muebles",
    live: "https://nordic-home-muebles.vercel.app/",
  },
  {
    title: "RuteAR",
    description:
      "Aplicación de optimización de rutas logísticas en Argentina. Calcula las mejores rutas considerando tráfico, distancia y tiempo real.",
    tech: ["React", "Next.js", "Google Maps API"],
    image: "/images/Rutear_Imagen.png",
    github: "https://github.com/marcospirchio/CalculadoraDeCombustible",
    live: "https://calculadora-de-combustible.vercel.app/",
  },
  {
    title: "Propsuite",
    description:
      "Sistema completo de gestión inmobiliaria con módulos de propiedades, clientes, contratos y reportes. Interfaz intuitiva y análisis en tiempo real.",
    tech: ["Java", "Spring Boot", "SQL Server", "React"],
    image: "/images/Propsuite.png",
    github: "https://github.com/marcospirchio/Propsuite",
  },
  {
    title: "Sistema de Gestión de Autopartes",
    description:
      "Aplicación web para administrar inventario de autopartes. Control de stock, proveedores, ventas y generación de reportes automáticos.",
    tech: ["Java","React"],
    image: "/images/autopartes2.png",
    github: "https://github.com/marcospirchio/SistemaDeGestionDeAutopartes",
  },
]

export function ProjectsGrid() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState({ url: "", title: "" })

  const handleVideoClick = (videoUrl: string, title: string) => {
    setSelectedVideo({ url: videoUrl, title })
    setIsVideoModalOpen(true)
  }

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-purple neon-text">Mis Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground">Soluciones innovadoras que he desarrollado</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-card border-border hover:border-neon-blue transition-all duration-300 h-full flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold text-neon-blue">{project.title}</h3>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1 bg-neon-blue hover:bg-neon-blue/80 neon-glow" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Ver Código
                      </a>
                    </Button>

                    {project.live && (
                      <Button
                        variant="outline"
                        className="flex-1 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white bg-transparent"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Demo
                        </a>
                      </Button>
                    )}

                    {project.videoUrl && (
                      <Button
                        variant="outline"
                        className="flex-1 border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-white bg-transparent"
                        onClick={() => handleVideoClick(project.videoUrl!, project.title)}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Video
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      </div>
    </section>
  )
}
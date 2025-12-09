"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Monitor, Database, Zap, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "1. Landing Pages",
    description:
      "Diseño la página web de tu negocio para que tengas presencia oficial en internet. Ideal para mostrar quién sos, qué vendes y dónde encontrarte.",
  },
  {
    icon: Database,
    title: "2. Sistemas de Gestión a Medida",
    description:
      "Creo aplicaciones donde vos y tus clientes pueden interactuar: sistemas de turnos, gestión de stock o paneles de administración. Transformamos tu web en una herramienta de trabajo.",
  },
  {
    icon: Zap,
    title: "3. Automatización de Tareas",
    description:
      "¿Te pasas horas copiando datos o respondiendo lo mismo? Creo pequeños programas que hacen esas tareas repetitivas por vos automáticamente.",
  },
  {
    icon: Lightbulb,
    title: "4. Consultoría y Desarrollo",
    description:
      "¿Tenés una idea única? Analizamos tu problema y construimos una solución tecnológica desde cero, diseñada exclusivamente para tu caso.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-orange neon-text">Soluciones Digitales A Medida</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Desarrollo software adaptado 100% a tus necesidades. Desde una web simple hasta sistemas complejos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-card border-border hover:border-neon-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-neon-blue" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

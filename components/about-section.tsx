"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-orange neon-text">Sobre Mí</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-orange to-neon-blue rounded-full opacity-20 blur-xl"></div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.6)",
                  "0 0 30px rgba(249, 115, 22, 0.8)",
                  "0 0 20px rgba(249, 115, 22, 0.6)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-orange/50" style={{ boxShadow: "0 0 20px rgba(249, 115, 22, 0.6)" }}>
              <Image
                src="/images/imagen.JPEG"
                alt="Marcos Pirchio Giani"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">
              Me llamo Marcos Pirchio Giani, tengo 22 años. Soy{" "}
              <strong className="text-neon-orange">Técnico en Desarrollo de Software</strong>, y actualmente curso la
              Licenciatura en Gestión de Tecnologías de la Información en la Universidad Argentina de la Empresa (UADE).
              A lo largo de mi formación académica, he tenido la oportunidad de trabajar en diversos proyectos, entre
              ellos la creación de <strong className="text-neon-blue">plataformas web dinámicas y APIs RESTful</strong>{" "}
              aplicando buenas prácticas de desarrollo y trabajo en equipo. Estas experiencias me permitieron fortalecer
              mis habilidades técnicas y aprender a resolver desafíos reales en entornos colaborativos.
              </p><p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">Actualmente me encuentro en la búsqueda de <strong className="text-neon-purple">mi primera experiencia laboral</strong>{" "}
              en el área de sistemas, preferentemente en el desarrollo backend, aunque cuento con la capacidad y
              predisposición para adaptarme a diferentes áreas. Estoy plenamente dispuesto a aprender todo lo que sea
              necesario y motivado por aportar valor a proyectos reales, creciendo tanto en lo profesional como en lo
              personal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

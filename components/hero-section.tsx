"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CodingAnimation } from "@/components/coding-animation"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-neon-blue neon-text">Marcos Pirchio Giani</span>
              </h1>
              <p className="text-3xl md:text-4xl font-bold mt-1">
                <span className="text-neon-blue neon-text">Desarrollador Backend & Full Stack</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Creo soluciones digitales, robustas y a medida. Especializado en transformar ideas complejas en sistemas
              funcionales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-neon-blue hover:bg-neon-blue/80 text-white neon-glow"
                onClick={() => scrollToSection("contact")}
              >
                Hablemos
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all bg-transparent"
                onClick={() => scrollToSection("projects")}
              >
                Ver Proyectos
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <CodingAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-neon-blue mb-4">MP</h3>
            <p className="text-muted-foreground">
              Desarrollador Backend especializado en crear soluciones robustas y escalables.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-neon-blue"
                onClick={() => scrollToSection("about")}
              >
                Sobre mí
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-neon-blue"
                onClick={() => scrollToSection("tech")}
              >
                Tecnologías
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-neon-blue"
                onClick={() => scrollToSection("projects")}
              >
                Proyectos
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-white bg-transparent"
                asChild
              >
                <a href="https://github.com/marcospirchio" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full border-neon-purple/30 text-neon-purple hover:bg-neon-purple hover:text-white bg-transparent"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/marcos-pirchio-giani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full border-neon-orange/30 text-neon-orange hover:bg-neon-orange hover:text-white bg-transparent"
                asChild
              >
                <a href="mailto:pirchiomarcos@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">© 2025 Marcos Pirchio Giani. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

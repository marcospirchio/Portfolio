"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-neon-blue neon-text">
            MP
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-neon-blue transition-colors"
            >
              Sobre mí
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("tech")}
              className="text-foreground hover:text-neon-blue transition-colors"
            >
              Tecnologías
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-neon-blue transition-colors"
            >
              Proyectos
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-neon-blue transition-colors"
            >
              Contacto
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

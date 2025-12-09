"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:pirchiomarcos@gmail.com?subject=Contacto desde Portfolio - ${formData.name}&body=${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-blue neon-text">¿Empezamos?</span>
          </h2>
          <p className="text-lg text-muted-foreground">Contame tu idea y trabajemos juntos para hacerla realidad</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Contame sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white neon-glow"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-sm text-muted-foreground mb-4">O conectá conmigo en:</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 bg-transparent"
                  asChild
                >
                  <a href="https://github.com/marcospirchio" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/marcos-pirchio-giani"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

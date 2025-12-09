"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const languages = [
  {
    name: "Español",
    level: "Nativo",
    flag: "🇦🇷",
    description:
      "Lengua materna. Dominio completo del idioma para cualquier contexto profesional y gestión de proyectos.",
    certifications: [],
  },
  {
    name: "Inglés",
    level: "Avanzado",
    flag: "🇺🇸",
    description:
      "Certificaciones oficiales que respaldan mi capacidad de comunicación técnica y profesional en inglés.",
    certifications: [
      {
        name: "Cambridge University B2 First",
        url: "/certificaciones/FirstCertificateExam.pdf",
      },
      {
        name: "EF SET (Bristol, UK): C2 Proficient",
        url: "https://cert.efset.org/rmSCeW",
      },
    ],
  },
  {
    name: "Portugués",
    level: "Básico a Intermedio",
    flag: "🇧🇷",
    description: "Habilidad suficiente para entablar conversaciones y leer textos con vocabulario cotidiano.",
    certifications: [],
  },
]

export function LanguagesSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-blue neon-text">Idiomas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="h-full"
            >
              <Card className="p-6 bg-card border-border hover:border-neon-blue transition-all h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center text-4xl border-2 border-border">
                    {language.flag}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-center">{language.name}</h3>
                <p className="text-neon-purple text-lg mb-4 text-center font-semibold">Nivel: {language.level}</p>

                {language.description && (
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed text-center">{language.description}</p>
                )}

                {language.certifications.length > 0 && (
                  <div className="space-y-2 mt-auto">
                    {language.certifications.map((cert) => (
                      <Button
                        key={cert.name}
                        variant="outline"
                        size="sm"
                        className="w-full border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black bg-transparent transition-all"
                        asChild
                      >
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          {cert.name}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

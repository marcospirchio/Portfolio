"use client"

import Image from 'next/image'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      title: 'Curso Introductorio de Python',
      description: 'Curso sobre Python, dictado por la IEEE ITBA Student Branch, finalizado con éxito.',
      institution: 'IEEE - ITBA',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ieee-itba-N6MQwGxw2z4y1O8M01hTzKBY1z6uNg.png',
      certificateUrl: '/certificaciones/IEEE - ITBA Curso Introductorio de Python.pdf',
    },
    {
      title: 'Curso de Análisis de Datos en Python',
      description: 'Curso de análisis de datos en Python brindado por IEEE - ITBA, completado. Conocimientos adquiridos: Librerías Pandas y Matplotlib',
      institution: 'IEEE - ITBA',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ieee-itba-N6MQwGxw2z4y1O8M01hTzKBY1z6uNg.png',
      certificateUrl: '/certificaciones/%20IEEE%20-%20ITBA%20Curso%20Analisis%20de%20Datos%20en%20Python.pdf',
    },
  ]

  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-blue neon-text">Certificaciones</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="h-full"
            >
              <div className="group bg-dark-secondary/50 backdrop-blur-sm border border-neon-blue/20 rounded-lg p-6 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] h-full flex flex-col">
                <div className="flex items-start gap-6 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center p-3 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.institution}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-neon-blue mb-2 group-hover:text-neon-pink transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="text-sm text-gray-400">
                      <span>{cert.institution}</span>
                    </div>
                  </div>
                </div>
                
                {cert.certificateUrl && (
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black bg-transparent transition-all"
                      asChild
                    >
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Ver Certificado
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

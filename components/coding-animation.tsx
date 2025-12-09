"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CodingAnimation() {
  const [displayedCode, setDisplayedCode] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [particles, setParticles] = useState<Array<{ left: number; top: number; color: string; duration: number }>>([])
  const [mounted, setMounted] = useState(false)

  const codeLines = [
    { text: "import { NextResponse } from 'next/server'", color: "text-purple-400" },
    { text: "", color: "text-gray-500" },
    { text: "export async function POST(request: Request) {", color: "text-blue-400" },
    { text: "  const data = await request.json()", color: "text-gray-300" },
    { text: "  ", color: "text-gray-500" },
    { text: "  // Procesar la solicitud", color: "text-green-500" },
    { text: "  const result = processData(data)", color: "text-gray-300" },
    { text: "  ", color: "text-gray-500" },
    { text: "  return NextResponse.json({", color: "text-blue-400" },
    { text: "    success: true,", color: "text-orange-400" },
    { text: "    data: result", color: "text-orange-400" },
    { text: "  })", color: "text-gray-300" },
    { text: "}", color: "text-blue-400" },
  ]

  // Inicializar partículas solo en el cliente para evitar errores de hidratación
  useEffect(() => {
    setMounted(true)
    setParticles(
      Array.from({ length: 6 }, (_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: i % 2 === 0 ? "#6366f1" : "#8b5cf6",
        duration: 3 + Math.random() * 2,
      }))
    )
  }, [])

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => [...prev, codeLines[currentLine].text])
        setCurrentLine((prev) => prev + 1)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      // Reiniciar después de completar
      const resetTimer = setTimeout(() => {
        setDisplayedCode([])
        setCurrentLine(0)
      }, 3000)
      return () => clearTimeout(resetTimer)
    }
  }, [currentLine])

  return (
    <div className="relative w-full max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Monitor/Ventana del editor de código */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
          {/* Header de la ventana */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-xs text-gray-400 ml-3 font-mono">api/route.ts</div>
          </div>

          {/* Área de código */}
          <div className="p-6 font-mono text-sm min-h-[400px] relative overflow-hidden">
            {displayedCode.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex items-start ${codeLines[index]?.color || "text-gray-300"}`}
              >
                <span className="text-gray-600 select-none mr-4 inline-block w-6 text-right">{index + 1}</span>
                <span className="flex-1">{line || "\u00A0"}</span>
              </motion.div>
            ))}

            {/* Cursor parpadeante */}
            {currentLine < codeLines.length && (
              <motion.div
                className="inline-block w-2 h-5 bg-neon-blue ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              />
            )}

            {/* Efectos de glow en el código activo */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Efectos visuales alrededor del monitor */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange opacity-20 blur-xl -z-10 rounded-lg"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Partículas flotantes de código */}
        {mounted && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              color: particle.color,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          >
            {"</>"}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TypewriterText() {
  const [text, setText] = useState("")
  const fullText = "Técnico en Desarrollo de Software"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-2xl md:text-4xl font-bold text-neon-purple"
    >
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-1 h-8 md:h-10 bg-neon-purple ml-1"
      />
    </motion.h2>
  )
}

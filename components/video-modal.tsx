"use client"

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-dark-secondary border-2 border-neon-blue rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-neon-blue/30 bg-dark-primary/50">
                <h3 className="text-xl font-bold text-neon-blue">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-neon-blue/10 transition-colors group"
                  aria-label="Cerrar modal"
                >
                  <X className="w-6 h-6 text-gray-400 group-hover:text-neon-blue transition-colors" />
                </button>
              </div>
              
              {/* Video Container */}
              <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
                <video
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                  src={videoUrl}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

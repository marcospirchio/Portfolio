"use client"

import { motion } from "framer-motion"
import { SiReact, SiTailwindcss, SiPython, SiMongodb, SiDocker, SiGithub, SiGit, SiPostman } from "react-icons/si"
import { Code2, Database, Server } from "lucide-react"

const techCategories = [
  {
    name: "Frontend",
    icon: Code2,
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: Code2, color: "#007396" },
    ],
  },
  {
    name: "Bases de datos",
    icon: Database,
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL Server", icon: Database, color: "#CC2927" },
    ],
  },
  {
    name: "Herramientas",
    icon: Code2,
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
]

export function TechStack() {
  return (
    <section id="tech" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-blue neon-text">Tecnologías</span>
          </h2>
          <p className="text-xl text-muted-foreground">Stack tecnológico que utilizo para crear soluciones</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-neon-purple" />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-neon-blue transition-all cursor-pointer group"
                  >
                    <div
                      className="p-3 rounded-lg bg-muted group-hover:bg-neon-blue/10 transition-colors"
                      style={{
                        boxShadow: `0 0 20px ${tech.color}40`,
                      }}
                    >
                      <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                    </div>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

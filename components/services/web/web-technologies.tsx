"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// Ikon open source
import { FaReact, FaVuejs, FaNodeJs, FaWordpress, FaPython } from "react-icons/fa"
import { SiNextdotjs, SiNuxtdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function WebTechnologies() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const technologies = [
    { name: "React", description: "Modern UI library for building interactive interfaces", icon: <FaReact className="text-sky-400 text-4xl" /> },
    { name: "Vue", description: "Progressive framework for building user interfaces", icon: <FaVuejs className="text-green-500 text-4xl" /> },
    { name: "Next.js", description: "Full-stack React framework for production applications", icon: <SiNextdotjs className="text-black dark:text-white text-4xl" /> },
    { name: "Nuxt.js", description: "Full-stack Vue framework for production applications", icon: <SiNuxtdotjs className="text-emerald-500 text-4xl" /> },
    { name: "TypeScript", description: "Type-safe JavaScript for better code quality", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid styling", icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
    { name: "Node.js", description: "Server-side JavaScript runtime for backend development", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "WordPress", description: "WordPress for building website (Fast and clean)", icon: <FaWordpress className="text-slate-700 dark:text-white text-4xl" /> },
    { name: "Python", description: "Python for backend development and data analysis", icon: <FaPython className="text-yellow-500 text-4xl" /> },
  ]

  // Auto jalan (loop)
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }, [controls])

  // Geser manual pakai tombol
  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stay up-to-date with the latest technologies to deliver cutting-edge solutions
          </p>
        </div>

        {/* Tombol panah kiri/kanan */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow hover:bg-primary/80 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow hover:bg-primary/80 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Container geser */}
        <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
          <motion.div
            className="flex gap-6 w-max"
            animate={controls}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <Card
                key={index}
                className="border border-border/50 min-w-[250px] hover:border-primary/50 transition-colors duration-300 flex-shrink-0"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

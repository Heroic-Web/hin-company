"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { title } from "process"

export function WebPortfolio() {
  const projects = [
     {
      title: "Cyber Security App",
      description: "Robust cyber security application for threat detection and prevention (SQL Injection, XSS, Cross-Site Scripting) with some fitures like URL Detection, File Detection, and Text Detection",
      image: "/drcyber.jpeg",
      technologies: ["Python", "Django", "JavaScript", "Machine Learning", "HTML", "CSS", "Electron" ],
    },
    {
      title: "SlideShow Creator Tools",
      description: "User-friendly slideshow creation tool with templates and export options",
      image: "/slidetools.jpeg",
      technologies: ["Python", "Fast API", "Docker"],
    },
    {
      title: "Blog Platform",
      description: "Feature-rich blog platform with user authentication and content management",
      image: "/yaedu.png",
      technologies: [],
    },
    
    {
      title: "Travel Agency Website",
      description: "Engaging travel agency site with booking and itinerary management",
      image: "/travel.jpeg",
      technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Ultimate Cyber Protection Suite",
      description: "Comprehensive cyber protection suite for online safety",
      image: "/protectweb.jpeg",
      technologies: ["Python", "Flask", "Vue.js"],
    },
    {
      title: "Cyber Protection Tools",
      description: "Advanced cyber protection tools for threat detection and prevention",
      image: "/cytools.jpeg",
      technologies: ["Python", "Flask", "Vue.js"],
    },
    {
      title: "Seina's Boutique",
      description: "Chic boutique website with product showcases and shopping cart",
      image: "/butik.jpeg",
      technologies: ["WordPress", "WooCommerce"],
    },
    {
      title: "Book Store Website",
      description: "Online bookstore with search and recommendation features",
      image: "/bookstore.jpeg",
      technologies: ["Shopify"],
    },
    {
      title: "E-commerce Platform",
      description: "Modern online shop with payment integration and inventory management",
      image: "/shop.jpeg",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "AISEO Tools App",
      description: "AI-powered SEO tools for website optimization",
      image: "/aiseo.jpeg",
      technologies: ["Shopify", "Liquid", "JavaScript"],
    },
    {
      title: "Premiumn Corporate Fashion Solutions",
      description: "Complete brand identity design for tech startup",
      image: "/corporate-design.jpeg",
      technologies: ["Figma"],
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Portfolio Web Kami
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Lihat  beberapa proyek website terbaru yang telah kami kerjakan dengan berbagai industri
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function WebPortfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with payment integration and inventory management",
      image: "/modern-ecommerce-website.png",
      technologies: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS and blog functionality",
      image: "/corporate-business-website.png",
      technologies: ["React", "Headless CMS", "Tailwind"],
    },
    {
      title: "SaaS Dashboard",
      description: "Complex dashboard with real-time data and analytics",
      image: "/modern-saas-dashboard.png",
      technologies: ["React", "D3.js", "Node.js"],
    },
    {
      title: "Restaurant Website",
      description: "Beautiful restaurant site with online reservation system",
      image: "/restaurant-website-design.png",
      technologies: ["Next.js", "Booking API", "Tailwind"],
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio showcase for digital agency",
      image: "/creative-portfolio-website.png",
      technologies: ["React", "Framer Motion", "CSS"],
    },
    {
      title: "Healthcare Portal",
      description: "Medical practice website with appointment booking",
      image: "/healthcare-website-portal.png",
      technologies: ["Next.js", "Calendar API", "TypeScript"],
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
            Lihat beberapa proyek website terbaru yang telah kami kerjakan dengan berbagai industri
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
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80 self-start">
                  Lihat Proyek
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Lihat Semua Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}

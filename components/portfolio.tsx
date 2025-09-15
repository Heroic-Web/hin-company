"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "Cyber Protection Tools",
      category: "Dekstop Development",
      image: "/cytools.jpeg",
      description: "Advanced cyber protection tools for threat detection and prevention",
    },
    {
      title: "Cyber Security App",
      category: "Web Development",
      image: "/drcyber.jpeg",
      description: "Robust cyber security application for threat detection and prevention (SQL Injection, XSS, Cross-Site Scripting) with some fitures like URL Detection, File Detection, and Text Detection",
    },
    {
      title: "SEO Campaign",
      category: "SEO Optimization",
      image: "/seo-analytics-dashboard.png",
      description: "Comprehensive SEO strategy that increased traffic by 300%",
    },
    {
      title: "Brand Identity",
      category: "Design",
      image: "/brand-identity-design.png",
      description: "Complete brand identity design for tech startup",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore some of our recent projects and see how we help businesses succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
               
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

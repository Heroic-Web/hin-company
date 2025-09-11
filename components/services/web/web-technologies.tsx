"use client"

import { Card, CardContent } from "@/components/ui/card"

export function WebTechnologies() {
  const technologies = [
    { name: "React", description: "Modern UI library for building interactive interfaces" },
    { name: "Next.js", description: "Full-stack React framework for production applications" },
    { name: "TypeScript", description: "Type-safe JavaScript for better code quality" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid styling" },
    { name: "Node.js", description: "Server-side JavaScript runtime for backend development" },
    { name: "MongoDB", description: "NoSQL database for flexible data storage" },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We stay up-to-date with the latest technologies to deliver cutting-edge solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

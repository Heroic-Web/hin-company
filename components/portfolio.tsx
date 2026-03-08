"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const projects = [
    {
      title: "Cyber Security App",
      category: "Cyber Security",
      image: "/drcyber.jpeg",
      description:
        "Robust cyber security application for threat detection and prevention (SQL Injection, XSS, Cross-Site Scripting) with features like URL detection, file detection, and text detection.",
    },
    {
      title: "Book Store Website",
      category: "E-Commerce Website",
      image: "/bookstore.jpeg",
      description: "Online bookstore with search and recommendation features.",
    },
    {
      title: "Blog Platform",
      category: "Web Platform",
      image: "/yaedu.png",
      description:
        "Feature-rich blog platform with user authentication and content management.",
    },
    {
      title: "Travel Agency Website",
      category: "Business Website",
      image: "/travel.jpeg",
      description:
        "Engaging travel agency site with booking and itinerary management.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects and see how we help businesses succeed
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">

                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Portfolio Button */}
        <div className="flex justify-center mt-12">
          <Link href="/portfolio">
            <Button size="lg">
              View All Portfolio
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
"use client"

import { Card, CardContent } from "@/components/ui/card"

export function AboutTimeline() {
  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Heroic Web was established with a vision to transform digital experiences.",
    },
    {
      year: "2024",
      title: "1000+ Projects Completed",
      description: "Reached our first major milestone of 50 successful project deliveries.",
    },
    {
      year: "2025",
      title: "Team Expansion",
      description: "Grew our team to include specialized experts in SEO, design, and development.",
    },
    {
      year: "2025",
      title: "998+ Happy Clients",
      description: "Celebrated serving over 100 satisfied clients across various industries.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Key milestones that have shaped our growth and success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className="text-center border-border/50 relative">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{milestone.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

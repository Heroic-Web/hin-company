"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery & Planning",
      description:
        "We start by understanding your goals, target audience, and project requirements through detailed consultation.",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Design",
      description: "Our team creates a comprehensive strategy and designs that align with your brand and objectives.",
    },
    {
      icon: Code,
      title: "Development & Implementation",
      description: "We bring your project to life using the latest technologies and best practices in the industry.",
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description: "After thorough testing, we launch your project and provide ongoing support and optimization.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A proven methodology that ensures successful project delivery every time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-border/50 relative">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

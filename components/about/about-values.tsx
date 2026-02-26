"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Shield, Users, Zap, Award, Clock } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Helpfulness",
      description:
        "Helping each other and prioritizing the interests of the team and clients, because we believe that success is the result of sincere collaboration and shared commitment.",
    },
    {
      icon: Zap,
      title: "Intelligent Innovation",
      description:
        "We develop solutions based on research, data, and strategic thinking. Innovation is not just an idea, but measurable and effective execution.",
    },
    {
      icon: Award,
      title: "Next Level Thinking",
      description:
        "We think beyond industry standards to create future-ready systems and strategies that keep our clients ahead of the curve.",
    },
    {
      icon: Shield,
      title: "Adaptive Systems",
      description:
        "We build flexible and scalable systems that are designed to evolve with market trends and technological advancements.",
    },
    {
      icon: Users,
      title: "Intelligent Growth",
      description:
        "We do not only build systems, we create structured, sustainable, and strategic growth with clear direction and measurable outcomes.",
    },
  ]

  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Vision</h2>
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 h-full">
                <CardContent className="p-8 flex flex-col items-center justify-center">
                  <Eye className="h-12 w-12 text-primary mb-6" />
                  <p className="text-lg text-foreground leading-relaxed text-center">
                    To become a trusted digital partner and a symbol of modern heroism that provides creative and 
                    innovative solutions, accelerating the global digital revolution and driving clients’ success 
                    with determination and HINAI spirit.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mission */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                  <div className="space-y-4 text-left">
                    <p className="text-lg text-foreground leading-relaxed">
                      1. To overcome every challenge in projects with strong determination and proactive solutions, just like a hero.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      2. To apply the latest technologies to enhance services and become a primary source of information for businesses.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      3. To provide professional services with a focus on customer satisfaction.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      4. To deliver sustainable benefits and profits for stakeholders while creating a positive impact that strengthens mutually beneficial relationships.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              PT. Heroic Inovasi Nusantara
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The core values that shape our culture and define the foundation of HINAI Tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
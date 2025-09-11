"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Shield, Users, Zap, Award, Clock } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Helpfulness",
      description: "Helping each other and prioritizing the interests of the team/clients, because we believe that success is the result of sincere collaboration.",
    },
    {
      icon: Users,
      title: "Empowering",
      description: "Empowering clients and teams with digital solutions and training that make them more confident, independent, and ready to compete in the digital world.",
    },
    {
      icon: Award,
      title: "Reliable",
      description: "Trustworthy in commitment and results, a promise is not just words, but a responsibility we uphold.",
    },
    {
      icon: Zap,
      title: "Open",
      description: "Open to feedback, ideas, and two way communication, because innovation is born from honest and equal dialogue.",
    },
    {
      icon: Clock,
      title: "Impactful",
      description: "Every task must provide value to others, whether small or large, everything should bring change.",
    },
    {
      icon: Shield,
      title: "Courageous",
      description: "Daring to take new steps, try big things, and bring positive change. We don’t just follow the current, we are ready to create the wave.",
    },
  ]

  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Vision</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Eye className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed text-center">
                    To become a trusted digital partner and a symbol of modern heroism that provides creative and innovative solutions, 
                    accelerating the global digital revolution and driving clients’ success with determination and heroic spirit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Mision</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Value</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The core values that drive everything we do at Heroic Web
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

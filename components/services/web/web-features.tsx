"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Zap, Shield, Search, Users } from "lucide-react"

export function WebFeatures() {
  const features = [
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Your website will look perfect on all devices, from mobile phones to desktop computers.",
    },
    {
      icon: Zap,
      title: "Loading Fast",
      description: "Optimized for speed with modern technologies and best practices for performance.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security in mind, ensuring your website and data are always protected.",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Search engine friendly structure and optimization to help you rank higher.",
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Intuitive navigation and user experience designed to convert visitors into customers.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Designed with mobile users in mind, ensuring perfect functionality on all devices.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose Our Web Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine cutting-edge technology with proven design principles to create websites that drive results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

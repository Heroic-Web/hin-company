"use client"

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Search, Palette, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("services.web"),
      description: "Modern, responsive websites built with the latest technologies",
      features: ["Coding / WordPress", "Mobile Friendly", "Performance Optimized", "SEO Ready"],
      link: "/services/web", // halaman web development
    },
    {
      icon: Search,
      title: t("services.seo"),
      description: "High quality SEO content that ranks and converts",
      features: ["Keyword Research", "Content Strategy", "Technical SEO", "Analytics"],
      link: "/services/seo-articles", // halaman artikel seo
    },
    {
      icon: Palette,
      title: t("services.design"),
      description: "Beautiful, user-centered designs that tell your story",
      features: ["Brand Identity", "UI/UX Design", "Graphic Design", "Prototyping"],
      link: "/services/design", // halaman desain
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer comprehensive digital solutions to help your business thrive online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href={service.link}>
                    {t("common.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

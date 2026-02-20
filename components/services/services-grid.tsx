"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Search, Palette, ArrowRight, Globe, Smartphone, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function ServicesGrid() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("services.web"),
      description: "Modern, responsive websites built with cutting-edge technologies",
      features: ["React & Next.js", "Mobile-First Design", "Performance Optimized", "SEO Ready"],
      link: "/services/web",
      highlights: [
        { icon: Globe, text: "Global Reach" },
        { icon: Smartphone, text: "Mobile Optimized" },
        { icon: Zap, text: "Lightning Fast" },
      ],
    },
    {
      icon: Code,
      title: t("services.landingpage"),
      description: "Beautiful, high-converting landing pages tailored to your brand",
      features: ["Custom Design", "Conversion Focused", "Responsive Layouts", "A/B Testing"],
      link: "/services/landing-page",
      highlights: [
        { icon: Globe, text: "Brand Visibility" },
        { icon: Smartphone, text: "Mobile Friendly" },
        { icon: Zap, text: "Fast Loading" },
      ],
    },
    {
      icon: Search,
      title: t("services.seo"),
      description: "Strategic SEO content and optimization that drives organic traffic",
      features: ["Keyword Research", "Content Strategy", "Technical SEO", "Analytics & Reporting"],
      link: "/services/seo",
      highlights: [
        { icon: Globe, text: "Increased Visibility" },
        { icon: Zap, text: "Higher Rankings" },
        { icon: Smartphone, text: "More Traffic" },
      ],
    },
    {
      icon: Palette,
      title: t("services.design"),
      description: "Beautiful, user-centered designs that tell your brand story",
      features: ["Brand Identity", "UI/UX Design", "Graphic Design", "Prototyping"],
      link: "/services/design",
      highlights: [
        { icon: Globe, text: "Brand Recognition" },
        { icon: Smartphone, text: "User Experience" },
        { icon: Zap, text: "Visual Impact" },
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <highlight.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{highlight.text}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.link}>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    {t("common.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

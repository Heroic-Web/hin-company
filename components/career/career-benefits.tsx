"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Zap, Globe, GraduationCap, Coffee, Shield } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CareerBenefits() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, mental health support, and wellness programs for you and your family.",
    },
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and the freedom to work from anywhere in the world.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and mentorship programs to advance your career.",
    },
    {
      icon: Globe,
      title: "Global Team",
      description: "Work with talented professionals from around the world and experience diverse perspectives.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, sabbatical options, and a culture that respects your personal time and boundaries.",
    },
    {
      icon: Shield,
      title: "Financial Security",
      description: "Competitive salary, equity options, retirement planning, and performance-based bonuses.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("career.benefits.title") || "Why Work With Us"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("career.benefits.description") ||
              "We believe in taking care of our team members with comprehensive benefits and a supportive work environment."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  const features = [
    "Expert team of developers and designers",
    "Proven track record of successful projects",
    "Modern technologies and best practices",
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">{t("about.description")}</p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">{t("common.learnMore")}</Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Professional</div>
                <div className="text-lg text-muted-foreground">Web Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Palette, Rocket } from "lucide-react"

export function DesignProcess() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Search,
      step: "01",
      title: t.language === "en" ? "Research & Discovery" : "Riset & Penemuan",
      description:
        t.language === "en"
          ? "We analyze your brand, target audience, and competitors to understand your unique positioning."
          : "Kami menganalisis brand, target audiens, dan kompetitor Anda untuk memahami positioning unik Anda.",
    },
    {
      icon: Lightbulb,
      step: "02",
      title: t.language === "en" ? "Concept Development" : "Pengembangan Konsep",
      description:
        t.language === "en"
          ? "Based on research insights, we develop creative concepts and design strategies."
          : "Berdasarkan wawasan riset, kami mengembangkan konsep kreatif dan strategi desain.",
    },
    {
      icon: Palette,
      step: "03",
      title: t.language === "en" ? "Design Creation" : "Pembuatan Desain",
      description:
        t.language === "en"
          ? "Our designers create stunning visuals that align with your brand and objectives."
          : "Desainer kami menciptakan visual yang menakjubkan yang selaras dengan brand dan tujuan Anda.",
    },
    {
      icon: Rocket,
      step: "04",
      title: t.language === "en" ? "Refinement & Delivery" : "Penyempurnaan & Pengiriman",
      description:
        t.language === "en"
          ? "We refine the designs based on feedback and deliver final files ready for implementation."
          : "Kami menyempurnakan desain berdasarkan feedback dan mengirimkan file final siap implementasi.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.language === "en" ? "Our Design Process" : "Proses Desain Kami"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.language === "en"
              ? "A systematic approach to creating designs that deliver results and exceed expectations."
              : "Pendekatan sistematis untuk menciptakan desain yang memberikan hasil dan melampaui ekspektasi."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 mt-4 group-hover:bg-emerald-600 transition-colors">
                  <step.icon className="w-8 h-8 text-emerald-600 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

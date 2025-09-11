"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileSearch, Wrench, BarChart } from "lucide-react"

export function SEOProcess() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Search,
      step: "01",
      title: "SEO Audit & Analysis",
      description:
        "Comprehensive analysis of your current SEO performance, competitor research, and identification of optimization opportunities.",
    },
    {
      icon: FileSearch,
      step: "02",
      title: "Strategy Development",
      description:
        "Create a customized SEO strategy based on your business goals, target audience, and competitive landscape.",
    },
    {
      icon: Wrench,
      step: "03",
      title: "Implementation",
      description: "Execute on-page and off-page SEO optimizations, content creation, and technical improvements.",
    },
    {
      icon: BarChart,
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuous monitoring, reporting, and optimization to maintain and improve search rankings.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our SEO Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A systematic approach to improving your search engine rankings and driving organic traffic growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

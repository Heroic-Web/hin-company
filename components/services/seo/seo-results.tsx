"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Search, DollarSign } from "lucide-react"

export function SEOResults() {
  const { t } = useLanguage()

  const results = [
    {
      icon: TrendingUp,
      metric: "250%",
      label: "Average Traffic Increase",
      description: "Clients see significant organic traffic growth within 6 months",
    },
    {
      icon: Search,
      metric: "85%",
      label: "Keywords in Top 10",
      description: "Target keywords ranking on the first page of search results",
    },
    {
      icon: Users,
      metric: "180%",
      label: "Lead Generation Boost",
      description: "Increase in qualified leads from organic search traffic",
    },
    {
      icon: DollarSign,
      metric: "320%",
      label: "ROI Improvement",
      description: "Return on investment from SEO campaigns and strategies",
    },
  ]

  const caseStudies = [
    {
      company: "E-commerce Store",
      industry: "Retail",
      result: "400% increase in organic traffic",
      timeframe: "8 months",
    },
    {
      company: "Local Restaurant",
      industry: "Food & Beverage",
      result: "300% more local bookings",
      timeframe: "4 months",
    },
    {
      company: "SaaS Company",
      industry: "Technology",
      result: "250% growth in qualified leads",
      timeframe: "6 months",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Proven SEO Results</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our data-driven SEO strategies deliver measurable results for businesses across various industries.
          </p>
        </div>

        {/* Results Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{result.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{result.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{study.company}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{study.industry}</p>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">{study.result}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">in {study.timeframe}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

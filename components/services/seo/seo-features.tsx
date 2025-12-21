"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, BarChart3, Link, Target, Globe } from "lucide-react"

export function SEOFeatures() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "In-depth keyword analysis to target the right search terms for your business and industry.",
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "SEO-friendly content creation and optimization to improve search engine visibility.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed reporting and analytics to track your SEO progress and ROI.",
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Strategic link building campaigns to increase your domain authority and rankings.",
    },
    {
      icon: Target,
      title: "Local SEO",
      description: "Optimize your business for local search results and Google My Business listings.",
    },
    {
      icon: Globe,
      title: "Technical SEO",
      description: "Website optimization for speed, mobile-friendliness, and search engine crawlability.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive SEO Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our full service SEO approach covers every aspect of search engine optimization to maximize your online
            visibility and drive qualified traffic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

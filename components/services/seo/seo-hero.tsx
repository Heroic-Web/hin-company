"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, TrendingUp } from "lucide-react"

export function SEOHero() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            {t.services?.seo || "SEO Services"}
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Boost Your Search Rankings with
            <span className="text-emerald-600 dark:text-emerald-400"> Expert SEO</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
            Drive organic traffic and increase visibility with our comprehensive SEO strategies. From keyword research
            to content optimization, we help your business rank higher on search engines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              {t.common?.getStarted || "Get Started"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 bg-transparent"
            >
              <TrendingUp className="mr-2 w-5 h-5" />
              {t.common?.viewResults || "View Results"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

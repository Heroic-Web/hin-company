"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function BlogHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t("blog.title")}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            {t("blog.subtitle")}
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t("blog.search")}
              className="pl-10 pr-4 py-3 text-base bg-background border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

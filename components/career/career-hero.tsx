"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CareerHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Users className="h-4 w-4 mr-2" />
                {t("career.hero.badge") || "Join Our Team"}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t("career.hero.title") || "Build Your Career With Us"}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("career.hero.description") ||
                  "Join a dynamic team of creative professionals and help us shape the future of digital experiences. We're always looking for talented individuals who share our passion for innovation."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t("career.hero.viewPositions") || "View Open Positions"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                {t("career.hero.learnMore") || "Learn About Our Culture"}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">{t("career.stats.employees") || "Happy Client"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">{t("career.stats.countries") || "Services"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">{t("career.stats.years") || "Growing"}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/modern-office-team-collaboration-workspace.jpg"
                alt="Career opportunities"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

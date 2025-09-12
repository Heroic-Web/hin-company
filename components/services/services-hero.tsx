"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ServicesHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our {t("nav.services")}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive digital solutions designed to elevate your business and drive measurable results
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link
              href={t("common.getStarted.link")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("common.getStarted")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

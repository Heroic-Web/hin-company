"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WebDevelopmentHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t("services.web")}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              We create modern, responsive websites that not only look stunning but also perform exceptionally well
              across all devices and platforms.
            </p>

            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Modern Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Mobile Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Fast Work</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                size="lg"
              >
                <Link
                  href={t("common.getStarted.link")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common.getStarted")}
                </Link>
              </Button>
            </div>
          </div>

         <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img 
              src="/jasaweb_mufid.png" 
              alt="Jasa Pembuatan Website" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}

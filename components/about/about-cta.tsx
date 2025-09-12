"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function AboutCTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Ready to Work Together?</h2>
        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          Let's discuss how we can help bring your vision to life and achieve your business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
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
          <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
            {t("nav.contact")}
          </Button>
        </div>
      </div>
    </section>
  )
}

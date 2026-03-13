"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
          {t("contact.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Tombol Get Started */}
          <a
            href="https://wa.me/6282144137914?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="px-8 py-3">
              {t("common.getStarted")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

          {/* Tombol Contact */}
          <a
            href="https://wa.me/6282144137914"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              {t("nav.contact")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

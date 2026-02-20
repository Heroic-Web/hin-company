"use client"

import Link from "next/link";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Search, Palette, ChevronLeft, ChevronRight, Smartphone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "/rekomendasi.jpeg",
    "/cepat.jpeg",
    "/leading-company.jpeg",
    "/24jam.jpeg",
    "/mobile-friendly.jpeg",
    "/opennow.jpeg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("hero.title")}
              <span className="block text-primary mt-2">Heroic Web</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-pretty leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* Service icons */}
            <div className="flex justify-center lg:justify-start items-center space-x-8 mb-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{t("services.web")}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{t("services.landingpage")}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{t("services.seo")}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{t("services.design")}</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              {/* Tombol Consult Now (WhatsApp) */}
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

              {/* Tombol Learn More (About) */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 bg-transparent"
              >
                <Link href={t("common.learnMore.link")}>
                  {t("common.learnMore")}
                </Link>
              </Button>
            </div>

          </div>

          {/* Right side - Image carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Hero slide ${index + 1}`}
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-primary" : "bg-background/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">99%</div>
            <div className="text-sm text-muted-foreground">On Time Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

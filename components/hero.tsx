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
    "/jasaweb.jpeg",
    "/affiliate_web.png",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 lg:pt-32">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/95 to-accent/5 pointer-events-none z-0" />

  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] z-0 pointer-events-none" />
    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" />
    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse delay-1000" />
  </div>

  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
      <div className="text-center lg:text-left w-full">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl px-4 py-2 text-sm font-medium text-primary mb-6">
          Trusted Digital & AI Technology Partner
        </div>

        <h1 className="mb-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative inline-flex items-center justify-center">
              <span
                className="
                  absolute
                  -left-7
                  md:-left-10
                  lg:-left-12
                  top-1/2
                  -translate-y-1/2
                  text-5xl
                  md:text-7xl
                  lg:text-8xl
                  font-black
                  text-green-500
                  select-none
                "
                style={{
                  textShadow: "0 0 25px rgba(34,197,94,.6)",
                }}
              >
                [
              </span>

              <div className="text-center lg:text-left w-full">
                <span
                  className="
                    block
                    text-xl
                    md:text-2xl
                    lg:text-3xl
                    font-semibold
                    tracking-[0.25em]
                    uppercase
                    text-muted-foreground
                    mb-3
                  "
                >
                  Welcome To
                </span>

                <span
                  className="
                    block
                    text-5xl
                    md:text-7xl
                    lg:text-8xl
                    xl:text-9xl
                    font-black
                    leading-none
                    bg-gradient-to-r
                    from-green-400
                    via-emerald-500
                    to-green-700
                    bg-clip-text
                    text-transparent
                  "
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(34,197,94,.35))",
                  }}
                >
                  HINAI Tech
                </span>
              </div>

              <span
                className="
                  absolute
                  -right-7
                  md:-right-10
                  lg:-right-12
                  top-1/2
                  -translate-y-1/2
                  text-5xl
                  md:text-7xl
                  lg:text-8xl
                  font-black
                  text-green-500
                  select-none
                "
                style={{
                  textShadow: "0 0 25px rgba(34,197,94,.6)",
                }}
              >
                ]
              </span>
            </div>

            <div className="mt-6 flex flex-nowrap overflow-x-auto gap-3 justify-start lg:justify-start scrollbar-hide">
              <span className="shrink-0 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl px-4 py-2 text-sm font-medium text-primary">
                Digital Innovation Business
              </span>

              <span className="shrink-0 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl px-4 py-2 text-sm font-medium text-primary">
                Growth AI Automation
              </span>

              <span className="shrink-0 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl px-4 py-2 text-sm font-medium text-primary">
                Smart Solutions
              </span>

              <span className="shrink-0 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl px-4 py-2 text-sm font-medium text-primary">
                Technology Partner
              </span>
            </div>
          </div>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 md:mb-10 max-w-xs sm:max-w-xl lg:max-w-2xl leading-relaxed px-4 sm:px-0 text-justify mx-auto lg:mx-0 whitespace-normal break-words">
          {t("hero.subtitle")}
        </p>

      <div className="flex justify-center w-full px-4">
          <div className="flex w-full max-w-xs sm:max-w-sm md:max-w-md gap-2 sm:gap-3">
            
            <Button
              asChild
              className="flex-1 h-11 sm:h-12 rounded-lg sm:rounded-xl border border-primary/20 shadow-sm text-xs sm:text-sm font-medium"
            >
              <Link
                href={t("common.getStarted.link")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("common.getStarted")}
                <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 shrink-0" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="flex-1 h-11 sm:h-12 rounded-lg sm:rounded-xl border border-muted shadow-sm text-xs sm:text-sm font-medium"
            >
              <Link href="/services">
                Our Services
              </Link>
            </Button>

          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-primary/5 rounded-[40px] blur-2xl" />

        <div className="relative z-30 overflow-hidden rounded-[18px] sm:rounded-[28px] md:rounded-[32px] border border-primary/10 bg-transparent shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">

          {/* SLIDES */}
          <div
            className="relative z-20 flex transition-transform duration-500 ease-in-out will-change-transform"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 relative"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Hero slide ${index + 1}`}
                  className="w-full h-[200px] sm:h-[280px] md:h-[520px] object-contain bg-black/0"
                />

                {/* LIGHT OVERLAY BIAR TIDAK KETUTUP BACKGROUND */}
                <div className="absolute inset-0 bg-black/0 sm:bg-black/0 md:bg-black/0 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-background/90 backdrop-blur-md border border-white/10 flex items-center justify-center hover:scale-105 active:scale-95 transition z-30"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-background/90 backdrop-blur-md border border-white/10 flex items-center justify-center hover:scale-105 active:scale-95 transition z-30"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* DOT INDICATOR */}
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-30">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-6 sm:w-8 h-2 sm:h-3 bg-primary"
                    : "w-2.5 sm:w-3 h-2 sm:h-3 bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>

    <div className="mt-14 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 px-2 sm:px-0">
      {[
        { value: "99%", label: "On Time Delivery" },
        { value: "1000+", label: "Happy Clients" },
        { value: "5+", label: "Years Experience" },
        { value: "24/7", label: "Support Service" },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-primary/10 bg-background/60 backdrop-blur-xl p-3 sm:p-6 text-center shadow-md sm:shadow-lg"
        >
          <div className="text-xl sm:text-2xl md:text-4xl font-black text-primary mb-1 sm:mb-2">
            {item.value}
          </div>

          <div className="text-[11px] sm:text-sm text-muted-foreground leading-tight">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { useEffect, useRef } from "react"

export function ClientLogos() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  const clients = [
    { name: "TunasHonda", logo: "/tunashonda.png" },
    { name: "Muana", logo: "/muana.png" },
    { name: "Media Dakwahi", logo: "/Media Dakwahi Logo.png" },
    { namme: "Almufid", logo: "/Almufid-Official.png" },
    { name: "HIN Global News", logo: "/HIN Global News.png" },
    { name: "Blare", logo: "/Blare-Media.png" },
    { name: "Lampung", logo: "/lampung.png" },
    { name: "Darmajaya", logo: "/darmajaya.png" },
    { name: "LPKSkaya", logo: "/LPK_Skaya_Logo.png" },
    { name: "TechCorp", logo: "/techcorp-logo.png" },
    { name: "DigitalFlow", logo: "/digitalflow-logo.jpg" },
    { name: "InnovateLab", logo: "/innovatelab-logo.png" },
    { name: "CloudTech", logo: "/cloudtech-logo.jpg" },
    { name: "DataSync", logo: "/datasync-logo.jpg" },
    { name: "AppMaster", logo: "/appmaster-logo.jpg" },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 1
    const scrollInterval = 30

    const autoScroll = () => {
      scrollAmount += scrollStep
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }

    const interval = setInterval(autoScroll, scrollInterval)

    return () => clearInterval(interval)
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("clients.title")}</h2>
          <p className="text-muted-foreground">{t("clients.subtitle")}</p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-12 w-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

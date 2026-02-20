import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

import { LandingPageHero } from "@/components/services/landing-page/landingpage-hero"
import { LandingPageFeatures } from "@/components/services/landing-page/landingpage-features"
import { LandingPageBenefits } from "@/components/services/landing-page/landingpage-benefits"
import { LandingPagePricing } from "@/components/services/landing-page/landingpage-pricing"
import { LandingPageProcess } from "@/components/services/landing-page/landingpage-process"
import { LandingPagePortfolio } from "@/components/services/landing-page/landingpage-portfolio"
import { LandingPageFAQ } from "@/components/services/landing-page/landingpage-faq"
export const metadata: Metadata = {
  title: "Jasa Pembuatan Landing Page Profesional | Heroic Web",
  description:
    "Jasa landing page murah namun profesional untuk bisnis, UMKM, startup, event, dan launching produk. Gratis domain & hosting, SEO friendly, dan siap iklan Google Ads & FB Pixel.",
  keywords: [
    "jasa landing page",
    "jasa pembuatan website",
    "landing page murah",
    "website bisnis",
    "jasa website profesional",
    "heroic web",
  ],
  openGraph: {
    title: "Jasa Pembuatan Landing Page Profesional | Heroic Web",
    description:
      "Website landing page elegan, cepat, SEO friendly, dan siap iklan. Cocok untuk bisnis, UMKM, startup, event, dan webinar.",
    type: "website",
    locale: "id_ID",
    siteName: "Heroic Web",
  },
}

export default function LandingPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background flex flex-col">
        
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="flex-1">

          {/* Hero */}
          <LandingPageHero />

          {/* Features */}
          <LandingPageFeatures />

          {/* Benefits */}
          <LandingPageBenefits />

          {/* Pricing */}
          <LandingPagePricing />

          {/* Process */}
          <LandingPageProcess />

          {/* Portfolio */}
          <LandingPagePortfolio />

          {/* FAQ */}
          <LandingPageFAQ />

        </main>

      </div>
    </LanguageProvider>
  )
}
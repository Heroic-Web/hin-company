import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessSection } from "@/components/services/process-section"
import { PricingSection } from "@/components/services/pricing-section"

export const metadata = {
  title: "Our Services - Heroic Web",
  description:
    "Professional web development, Article SEO, and design services to help your business succeed online.",
}

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <ServicesHero />
          <ServicesGrid />
          <ProcessSection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

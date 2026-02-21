import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessSection } from "@/components/services/process-section"
import { PricingSection } from "@/components/services/pricing-section"
export const metadata = {
  title: "Our Services - Heroic Web",
  description:
    "We provide professional Website Development, High Converting Landing Pages, SEO Optimized Content, Digital Advertising Solutions, and Creative Design Services to accelerate your business growth in the digital world.",
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
      </div>
    </LanguageProvider>
  )
}

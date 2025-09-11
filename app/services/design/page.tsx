import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { DesignHero } from "@/components/services/design/design-hero"
import { DesignServices } from "@/components/services/design/design-services"
import { DesignProcess } from "@/components/services/design/design-process"
import { DesignPortfolio } from "@/components/services/design/design-portfolio"
import { DesignPricing } from "@/components/services/design/design-pricing"

export const metadata = {
  title: "Design Services - Heroic Web",
  description: "Professional design services including brand identity, UI/UX design, and graphic design.",
}

export default function DesignPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <DesignHero />
          <DesignServices />
          <DesignProcess />
          <DesignPortfolio />
          <DesignPricing />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

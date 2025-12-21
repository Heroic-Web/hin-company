import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { WebDevelopmentHero } from "@/components/services/web/web-hero"
import { WebFeatures } from "@/components/services/web/web-features"
import { WebProcess } from "@/components/services/web/web-process"
import { WebTechnologies } from "@/components/services/web/web-technologies"
import { WebPortfolio } from "@/components/services/web/web-portfolio"
import { WebPricing } from "@/components/services/web/web-pricing"

export const metadata = {
  title: "Web Development Services - Heroic Web",
  description: "Professional web development services using modern technologies like React, Next.js, and more.",
}

export default function WebDevelopmentPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <WebDevelopmentHero />
          <WebFeatures />
          <WebPricing />
          <WebProcess />
          <WebTechnologies />
          <WebPortfolio />
        </main>
      </div>
    </LanguageProvider>
  )
}

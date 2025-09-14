import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { SEOHero } from "@/components/services/seo/seo-hero"
import { SEOFeatures } from "@/components/services/seo/seo-features"
import { SEOProcess } from "@/components/services/seo/seo-process"
import { SEOResults } from "@/components/services/seo/seo-results"
import { SEOPricing } from "@/components/services/seo/seo-pricing"

export const metadata = {
  title: "SEO Services - Heroic Web",
  description: "Professional SEO optimization and content creation services to improve your search engine rankings.",
}

export default function SEOPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <SEOHero />
          <SEOFeatures />
          <SEOProcess />
          <SEOResults />
          <SEOPricing />
        </main>
      </div>
    </LanguageProvider>
  )
}

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { WebPortfolio } from "@/components/services/web/web-portfolio"
import WebDesign from "@/components/services/web-design/web-design"

export const metadata = {
  title: "UI UX Design Services - Heroic Web",
  description: "Professional UI/UX design services using modern tools like Figma, and Adobe XD.",
}

export default function WebDevelopmentPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <WebPortfolio />
          <WebDesign />
        </main>
      </div>
    </LanguageProvider>
  )
}

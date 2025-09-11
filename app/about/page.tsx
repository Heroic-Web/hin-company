import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata = {
  title: "About Us - Heroic Web",
  description:
    "Learn about Heroic's mission, team, and commitment to delivering exceptional web development, SEO, and design services.",
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <AboutHero />
          <AboutStory />
          <AboutValues />
          <AboutTeam />
          <AboutTimeline />
          <AboutCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

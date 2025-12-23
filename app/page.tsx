import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { ClientLogos } from "@/components/client-logos"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { LanguageProvider, LegalitasSection } from "@/components/language-provider"

import BirdsAndClouds from "@/components/animated-background/BirdsAndClouds"
import Cinematic3DBackground from "@/components/animated-background/Cinematic3DBackground"

export default function HomePage() {
  return (
    <LanguageProvider>
      {/* Root container */}
      <div className="relative min-h-screen bg-background overflow-hidden">
        
        <Cinematic3DBackground />

        <Navigation />

        <BirdsAndClouds />

        {/* ===== MAIN CONTENT ===== */}
        <main className="relative z-20">
          <Hero />
          <Services />
          <BirdsAndClouds />
          <About />
          <LegalitasSection />
          <ClientLogos />
          <Portfolio />
          <Testimonials />
          <CTA />
        </main>

        {/* ===== FLOATING ACTION ===== */}
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  )
}

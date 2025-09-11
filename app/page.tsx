import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { ClientLogos } from "@/components/client-logos"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { LanguageProvider } from "@/components/language-provider"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <About />
          <ClientLogos />
          <Portfolio />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  )
}

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { ServicesHero } from "@/components/services/services-hero"
import { PricingSection } from "@/components/services/pricing-section"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata = {
  title: "Our Services - HINAI Tech",
  description:
    "Explore HINAI Tech professional services including Website Development, Landing Page Development, SEO Content Writing, Artificial Intelligence Solutions, Branding & Design, and Digital Transformation services tailored for modern businesses.",
}

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background overflow-hidden">
        <Navigation />

        <main>
          <ServicesHero />

          <PricingSection />

          <ContactForm />
        </main>
      </div>
    </LanguageProvider>
  )
}
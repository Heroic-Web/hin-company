import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFAQ } from "@/components/contact/contact-faq"

export const metadata = {
  title: "Contact Us - Heroic WebS",
  description:
    "Get in touch with Heroic Web for your web development, SEO, and design needs. We're here to help bring your vision to life.",
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <ContactHero />
          <div className="grid lg:grid-cols-2 gap-0">
            <ContactForm />
            <ContactInfo />
          </div>
          <ContactFAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

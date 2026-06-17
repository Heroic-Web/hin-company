import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

import { WhyChooseHero } from "@/components/why-choose-us/why-choose-hero"
import { WhyChooseComparison } from "@/components/why-choose-us/why-choose-comparison"
import { WhyChooseFeatures } from "@/components/why-choose-us/why-choose-features"
import { WhyChooseProcess } from "@/components/why-choose-us/why-choose-process"
import { WhyChooseGuarantee } from "@/components/why-choose-us/why-choose-guarantee"
import { WhyChooseIndustries } from "@/components/why-choose-us/why-choose-industries"
import { WhyChooseCTA } from "@/components/why-choose-us/why-choose-cta"

export const metadata: Metadata = {
  title: "Why Choose Us | HINAI Tech",
  description:
    "Discover why businesses choose HINAI Tech. AI Native Agency with all-in-one digital solutions, fast execution, business-focused strategy, and long-term support.",
}

export default function WhyChooseUsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />

        <main>
          <WhyChooseHero />
          <WhyChooseComparison />
          <WhyChooseFeatures />
          <WhyChooseProcess />
          <WhyChooseGuarantee />
          <WhyChooseIndustries />
          <WhyChooseCTA />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

export default function TermsConditionsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using Heroic Web's services, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
                <p className="mb-4">
                  Heroic Web provides web development, SEO optimization, and design services. We reserve the right
                  to modify or discontinue services at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms will be specified in individual project agreements. All fees are non-refundable unless
                  otherwise specified in writing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  Upon full payment, clients receive ownership of the final deliverables. Heroic Web retains the
                  right to showcase completed work in our portfolio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                  Heroic Web shall not be liable for any indirect, incidental, special, or consequential damages
                  arising from the use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Information</h2>
                <p className="mb-4">
                  For questions regarding these terms, please contact us at cs.heroicweb@gmail.com
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </LanguageProvider>
  )
}

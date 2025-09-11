import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function DisclaimerPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. General Information</h2>
                <p className="mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by
                  law, Heroic Web excludes all representations, warranties, obligations, and liabilities arising
                  out of or in connection with this website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Professional Advice</h2>
                <p className="mb-4">
                  The content on this website is for general information purposes only and should not be considered as
                  professional advice. Always seek professional guidance for specific situations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. External Links</h2>
                <p className="mb-4">
                  This website may contain links to external websites. Heroic Web has no control over the content
                  of external sites and accepts no responsibility for them or for any loss or damage that may arise from
                  your use of them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Accuracy of Information</h2>
                <p className="mb-4">
                  While we strive to ensure the accuracy of information on this website, we make no warranties or
                  representations as to its accuracy and reserve the right to change information at any time without
                  notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this disclaimer, please contact us at cs.heroicweb@gmail.com
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

import { Navigation } from "@/components/navigation"
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
                  All content provided on <strong>Heroic Web</strong> (heroic.web.id) is published for general information,
                  educational, service, and reference purposes only. We strive to provide accurate, up-to-date, and reliable
                  content, but we make no guarantees that all information is always complete, correct, or suitable for your needs.
                  Any action you take based on information found on this website is strictly at your own risk, and Heroic Web will
                  not be liable for any losses or damages in connection with the use of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Disclaimer of Liability</h2>
                <p className="mb-4">
                  Heroic Web makes no warranties of any kind regarding the accuracy, completeness, or suitability of the
                  information provided for any particular purpose. All content may change at any time without prior notice. We
                  shall not be held liable for any loss or damage, direct or indirect, arising from the use of this website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. External Links</h2>
                <p className="mb-4">
                  This website may contain links to third-party websites or external advertisements. While we aim to provide only
                  relevant and trustworthy links, we have no control over the content, privacy policies, or practices of external
                  sites. By clicking external links, you acknowledge that you do so at your own risk, and Heroic Web assumes no
                  responsibility for any loss or damages resulting from the use of third-party services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Advertising & Monetization</h2>
                <p className="mb-4">
                  Heroic Web uses third-party advertising services such as <strong>Google AdSense</strong> and other advertising
                  networks. Ads displayed on this site may use cookies to deliver more relevant content to users. Heroic Web is not
                  responsible for the content, offers, or transactions that occur through the advertisements displayed. Users can
                  manage their ad preferences via browser settings or by visiting{" "}
                  <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
                    Google Ads Settings
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Copyright & Content</h2>
                <p className="mb-4">
                  All articles, images, logos, and other materials published on <strong>Heroic Web</strong> are owned by us or
                  legally licensed from third parties. It is prohibited to copy, reproduce, or republish content from this site
                  without prior written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Consent</h2>
                <p className="mb-4">
                  By using our website, you hereby consent to our Disclaimer and agree to all its terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions or need clarification regarding this Disclaimer, please contact us at: <br />
                  📧 Email: <a href="mailto:cs.heroicweb@gmail.com">cs.heroicweb@gmail.com</a> <br />
                  🌐 Website: <a href="https://heroic.web.id">https://heroic.web.id</a>
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </LanguageProvider>
  )
}

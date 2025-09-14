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
                  The information provided on <strong>Heroic Web (heroic.web.id)</strong> is for general informational 
                  purposes only. While we strive to keep the information accurate and up to date, we make no 
                  representations or warranties of any kind, express or implied, about the completeness, accuracy, 
                  reliability, suitability, or availability of the information, products, services, or related graphics 
                  contained on this website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. External Links Disclaimer</h2>
                <p className="mb-4">
                  Our website may contain links to external websites that are not provided or maintained by us. 
                  Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of 
                  any information on these external websites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Advertising & Affiliate Disclaimer</h2>
                <p className="mb-4">
                  Heroic Web may display advertisements, including Google AdSense or other third-party advertising 
                  networks. These ads help us maintain and grow our website. We are not responsible for the content, 
                  claims, or products promoted in these advertisements. Some links on our site may be affiliate links, 
                  meaning we may earn a commission if you click or make a purchase through them, at no additional cost 
                  to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Professional Disclaimer</h2>
                <p className="mb-4">
                  The information provided on this website does not constitute professional advice. Any reliance you 
                  place on such information is strictly at your own risk. We recommend consulting qualified professionals 
                  before making decisions based on the content of this website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                  Under no circumstances shall Heroic Web or its owners be held liable for any loss or damage, 
                  including indirect or consequential loss, arising out of or in connection with the use of this website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Disclaimer, please contact us at{" "}
                  <a href="mailto:cs.heroicweb@gmail.com" className="text-primary underline">
                    cs.heroicweb@gmail.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </LanguageProvider>
  )
}

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
                  By accessing and using <strong>Heroic Web</strong> (heroic.web.id), you accept and agree to comply with these
                  Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of our website
                  and services immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
                <p className="mb-4">
                  Heroic Web provides web development, SEO optimization, digital design, and related online services. We reserve
                  the right to add, modify, or discontinue services at any time without prior notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Advertising & Monetization</h2>
                <p className="mb-4">
                  Heroic Web may display advertisements from third-party providers such as <strong>Google AdSense</strong> and
                  other advertising networks. These third parties may use cookies to serve ads based on your prior visits to this
                  or other websites. By using our site, you consent to the use of cookies for ad personalization unless you opt
                  out through your browser settings or directly at{" "}
                  <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
                    Google Ads Settings
                  </a>.
                </p>
                <p className="mb-4">
                  Heroic Web is not responsible for the content, offers, products, or services promoted in the displayed
                  advertisements. Any transactions or interactions with advertisers are strictly between you and the third-party
                  provider.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms for specific projects or services will be defined in individual agreements. Unless stated
                  otherwise, all payments are final and non-refundable. Failure to complete payment may result in suspension or
                  termination of services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                <p className="mb-4">
                  All content, trademarks, designs, and materials provided on Heroic Web are protected by intellectual property
                  laws. Upon full payment for commissioned projects, clients receive ownership of the final deliverables. Heroic
                  Web retains the right to showcase completed work in our portfolio for promotional purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. External Links</h2>
                <p className="mb-4">
                  Our website may include links to external websites. We do not control or guarantee the accuracy, relevance, or
                  quality of content found on external websites, and we are not responsible for any damages or losses arising from
                  your use of such third-party resources.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. User Conduct</h2>
                <p className="mb-4">
                  You agree not to misuse our services or engage in activities that may harm, disrupt, or negatively affect the
                  website, its users, or the reputation of Heroic Web. Any violation may result in suspension or termination of
                  access to our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="mb-4">
                  Heroic Web shall not be held liable for any indirect, incidental, special, or consequential damages arising
                  from the use or inability to use our website or services, including but not limited to loss of data, revenue,
                  or business opportunities.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                <p className="mb-4">
                  These Terms & Conditions are governed by and construed in accordance with the applicable laws of Indonesia.
                  Any disputes shall be resolved under the exclusive jurisdiction of the courts in Indonesia.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
                <p className="mb-4">
                  For questions or concerns regarding these Terms & Conditions, please contact us at: <br />
                  📧 Email: <a href="cs.heroicweb@gmail.com">cs.heroicweb@gmail.com</a> <br />
                  
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </LanguageProvider>
  )
}

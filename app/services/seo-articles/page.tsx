import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Search, TrendingUp, Target, BarChart } from "lucide-react"
import Link from "next/link"
import { SEOArticleProcess } from "@/components/services/seo/seo-article-process"
import { SEOArticlePortfolio } from "@/components/services/seo/seo-article-portfolio"
import { SEOArticlePricing } from "@/components/services/seo/seo-article-pricing"
import Image from "next/image"

export const metadata = {
  title: "Artikel SEO Services - Heroic Web",
  description:
    "Professional SEO article writing services to boost your website ranking and organic traffic with quality content.",
}

export default function SEOArticlesPage() {
  const features = [
    { icon: Search, title: "Keyword Research", description: "In-depth keyword analysis and strategy" },
    { icon: TrendingUp, title: "SEO Optimized", description: "Content optimized for search engines" },
    { icon: Target, title: "Targeted Content", description: "Articles that reach your audience" },
    { icon: BarChart, title: "Performance Tracking", description: "Monitor and improve content performance" },
  ]

  const services = [
    "Blog Articles",
    "Product Descriptions",
    "Landing Page Content",
    "Meta Descriptions",
    "Content Strategy",
    "Keyword Optimization",
  ]

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                  Artikel SEO Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
                  Boost your website ranking with high quality, SEO optimized articles that drive organic traffic and
                  engage your audience.
                </p>
               <a
                href="https://wa.me/6282144137914?text=Halo%20saya%20ingin%20order%20artikel%20SEO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Order SEO Articles
                </Button>
              </a>

              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Our SEO Articles Work?</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Our Article SEO Content Services
                  </h2>

                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Start SEO Content
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image Content */}
                <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src="/jasa_seo.png" 
                    alt="SEO Content Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

              </div>
            </div>
          </section>


          <SEOArticlePricing />

          <SEOArticleProcess />

          <SEOArticlePortfolio />

        </main>
        
      </div>
    </LanguageProvider>
  )
}

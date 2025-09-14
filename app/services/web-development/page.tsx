import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Smartphone, Zap, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Web Development Services - Heroic Web",
  description:
    "Professional web development services including responsive websites, web applications, e-commerce solutions, and custom development.",
}

export default function WebDevelopmentPage() {
  const features = [
    { icon: Code, title: "Custom Development", description: "Tailored solutions built from scratch" },
    { icon: Smartphone, title: "Responsive Design", description: "Perfect on all devices and screen sizes" },
    { icon: Zap, title: "Fast Performance", description: "Optimized for speed and user experience" },
    { icon: Shield, title: "Secure & Reliable", description: "Built with security best practices" },
  ]

  const services = [
    "Business Websites",
    "E-commerce Platforms",
    "Web Applications",
    "Landing Pages",
    "Portfolio Websites",
    "PPDB Websites",
    "Travel Agency Websites",
    "Blog Websites",
    "Custom Coding Solutions",
    "Custom CMS Solutions",
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
                  Web Development Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
                  Create powerful, responsive websites that drive results. From simple business sites to complex web
                  applications.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Your Project
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Web Development?</h2>
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
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Web Development Services</h2>
                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link 
                      href="https://wa.me/6282144137914?text=Halo%20saya%20tertarik%20dengan%20layanan%20...." 
                      target="_blank"
                    >
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Order
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                    <Code className="h-32 w-32 text-primary/60" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </LanguageProvider>
  )
}

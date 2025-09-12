"use client"

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WebPricing() {
  const { t } = useLanguage()

  const plans = [
    {
      name: "Landing Page",
      price: "$799",
      description: "Perfect for simple business landing pages",
      features: [
        "1-page responsive design",
        "Mobile-friendly layout",
        "Contact form",
        "Basic SEO setup",
        "1 month support",
        "SSL certificate",
      ],
    },
    {
      name: "Basic Website",
      price: "$1,499",
      description: "Great for small businesses and portfolios",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Contact form integration",
        "Basic SEO optimization",
        "3 months support",
        "SSL certificate included",
        "Google Analytics setup",
      ],
    },
    {
      name: "Business Website",
      price: "$2,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Content management system",
        "Blog functionality",
        "Advanced SEO optimization",
        "Analytics & tracking",
        "6 months support",
        "Performance optimization",
        "Social media integration",
      ],
      popular: true,
    },
    {
      name: "E-commerce Store",
      price: "$4,999",
      description: "Complete online store solution",
      features: [
        "Unlimited product pages",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Inventory management",
        "Order tracking system",
        "Customer accounts",
        "Mobile commerce ready",
        "12 months support",
      ],
    },
    {
      name: "Corporate Portal",
      price: "$7,999",
      description: "Advanced corporate websites",
      features: [
        "Multi-page corporate site",
        "User authentication",
        "Document management",
        "Advanced integrations",
        "Multi-language support",
        "Custom functionality",
        "Security features",
        "18 months support",
      ],
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      description: "Large-scale custom solutions",
      features: [
        "Unlimited pages & features",
        "Custom development",
        "API integrations",
        "Advanced security",
        "Scalable architecture",
        "Dedicated team",
        "24/7 priority support",
        "Lifetime maintenance",
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Paket Harga Website
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pilihan paket website yang fleksibel sesuai kebutuhan dan budget bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative h-full flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg ring-2 ring-primary/20"
                  : "border-border/50 hover:border-primary/30"
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                    Terpopuler
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4 sm:pb-6 flex-shrink-0">
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                <div className="mb-3">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-xs sm:text-sm text-muted-foreground block mt-1">/proyek</span>
                  )}
                </div>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

               <Button
                asChild
                size="sm"
                className={`w-full text-xs sm:text-sm ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                } transition-colors duration-300`}
              >
                <Link
                  href={t("common.getStarted.link")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common.getStarted")}
                </Link>
              </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Butuh Konsultasi Gratis?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Tim ahli kami siap membantu menentukan paket yang tepat untuk bisnis Anda
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Konsultasi Sekarang</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

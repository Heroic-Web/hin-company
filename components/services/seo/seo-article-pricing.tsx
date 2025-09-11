"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

export function SEOArticlePricing() {
  const { t } = useLanguage()

  const pricingPlans = [
    {
      name: t.language === "en" ? "Starter" : "Pemula",
      price: t.language === "en" ? "$50" : "Rp 750.000",
      period: t.language === "en" ? "per article" : "per artikel",
      description:
        t.language === "en"
          ? "Perfect for small businesses starting their content journey"
          : "Sempurna untuk bisnis kecil yang memulai perjalanan konten mereka",
      features: [
        t.language === "en" ? "500-800 words per article" : "500-800 kata per artikel",
        t.language === "en" ? "Basic keyword research" : "Riset kata kunci dasar",
        t.language === "en" ? "SEO optimization" : "Optimisasi SEO",
        t.language === "en" ? "1 revision included" : "1 revisi termasuk",
        t.language === "en" ? "3-5 days delivery" : "Pengiriman 3-5 hari",
        t.language === "en" ? "Meta description" : "Meta description",
      ],
      popular: false,
      icon: Check,
    },
    {
      name: t.language === "en" ? "Professional" : "Profesional",
      price: t.language === "en" ? "$100" : "Rp 1.500.000",
      period: t.language === "en" ? "per article" : "per artikel",
      description:
        t.language === "en"
          ? "Ideal for growing businesses that need quality content regularly"
          : "Ideal untuk bisnis berkembang yang membutuhkan konten berkualitas secara rutin",
      features: [
        t.language === "en" ? "800-1200 words per article" : "800-1200 kata per artikel",
        t.language === "en" ? "Advanced keyword research" : "Riset kata kunci lanjutan",
        t.language === "en" ? "Full SEO optimization" : "Optimisasi SEO lengkap",
        t.language === "en" ? "2 revisions included" : "2 revisi termasuk",
        t.language === "en" ? "2-3 days delivery" : "Pengiriman 2-3 hari",
        t.language === "en" ? "Meta tags & headers" : "Meta tags & headers",
        t.language === "en" ? "Internal linking strategy" : "Strategi internal linking",
        t.language === "en" ? "Content calendar planning" : "Perencanaan kalender konten",
      ],
      popular: true,
      icon: Star,
    },
    {
      name: t.language === "en" ? "Enterprise" : "Enterprise",
      price: t.language === "en" ? "$200" : "Rp 3.000.000",
      period: t.language === "en" ? "per article" : "per artikel",
      description:
        t.language === "en"
          ? "For large businesses requiring premium content and comprehensive SEO strategy"
          : "Untuk bisnis besar yang memerlukan konten premium dan strategi SEO komprehensif",
      features: [
        t.language === "en" ? "1200+ words per article" : "1200+ kata per artikel",
        t.language === "en" ? "Comprehensive keyword research" : "Riset kata kunci komprehensif",
        t.language === "en" ? "Premium SEO optimization" : "Optimisasi SEO premium",
        t.language === "en" ? "Unlimited revisions" : "Revisi unlimited",
        t.language === "en" ? "24-48 hours delivery" : "Pengiriman 24-48 jam",
        t.language === "en" ? "Complete meta optimization" : "Optimisasi meta lengkap",
        t.language === "en" ? "Advanced linking strategy" : "Strategi linking lanjutan",
        t.language === "en" ? "Performance tracking" : "Pelacakan performa",
        t.language === "en" ? "Dedicated account manager" : "Account manager khusus",
        t.language === "en" ? "Monthly strategy consultation" : "Konsultasi strategi bulanan",
      ],
      popular: false,
      icon: Zap,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.language === "en" ? "Article Pricing Packages" : "Paket Harga Artikel"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.language === "en"
              ? "Choose the perfect plan for your SEO content needs"
              : "Pilih paket yang sempurna untuk kebutuhan konten SEO Anda"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${plan.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  {t.language === "en" ? "Most Popular" : "Paling Populer"}
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-background hover:bg-muted text-foreground border border-border"
                  }`}
                  size="lg"
                >
                  {t.language === "en" ? "Choose Plan" : "Pilih Paket"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t.language === "en" ? "Need a Custom Package?" : "Butuh Paket Kustom?"}
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              {t.language === "en"
                ? "We offer flexible pricing for bulk orders and long-term content partnerships. Contact us for a personalized quote."
                : "Kami menawarkan harga fleksibel untuk pesanan dalam jumlah besar dan kemitraan konten jangka panjang. Hubungi kami untuk penawaran personal."}
            </p>
            <Button variant="outline" size="lg">
              {t.language === "en" ? "Contact for Custom Quote" : "Hubungi untuk Penawaran Kustom"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

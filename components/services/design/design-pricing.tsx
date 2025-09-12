"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function DesignPricing() {
  const { t } = useLanguage()

  const pricingPlans = [
    {
      name: t.language === "en" ? "Basic Design" : "Desain Dasar",
      price: t.language === "en" ? "$299" : "Rp 4.500.000",
      period: t.language === "en" ? "/project" : "/proyek",
      description:
        t.language === "en"
          ? "Perfect for small businesses and startups"
          : "Sempurna untuk bisnis kecil dan startup",
      features: [
        t.language === "en" ? "Logo Design" : "Desain Logo",
        t.language === "en" ? "Business Card Design" : "Desain Kartu Nama",
        t.language === "en" ? "3 Design Concepts" : "3 Konsep Desain",
        t.language === "en" ? "2 Revisions" : "2 Revisi",
        t.language === "en" ? "Final Files (PNG, JPG)" : "File Final (PNG, JPG)",
        t.language === "en" ? "7-day Delivery" : "Pengiriman 7 hari",
      ],
      popular: false,
    },
    {
      name: t.language === "en" ? "Professional Design" : "Desain Profesional",
      price: t.language === "en" ? "$599" : "Rp 9.000.000",
      period: t.language === "en" ? "/project" : "/proyek",
      description:
        t.language === "en"
          ? "Comprehensive design solution for growing businesses"
          : "Solusi desain komprehensif untuk bisnis yang berkembang",
      features: [
        t.language === "en" ? "Complete Brand Identity" : "Identitas Brand Lengkap",
        t.language === "en" ? "Logo + Brand Guidelines" : "Logo + Panduan Brand",
        t.language === "en" ? "5 Design Concepts" : "5 Konsep Desain",
        t.language === "en" ? "Unlimited Revisions" : "Revisi Tak Terbatas",
        t.language === "en" ? "All File Formats" : "Semua Format File",
        t.language === "en" ? "Social Media Kit" : "Kit Media Sosial",
        t.language === "en" ? "5-day Delivery" : "Pengiriman 5 hari",
      ],
      popular: true,
    },
    {
      name: t.language === "en" ? "Enterprise Design" : "Desain Enterprise",
      price: t.language === "en" ? "$1299" : "Rp 19.500.000",
      period: t.language === "en" ? "/project" : "/proyek",
      description:
        t.language === "en"
          ? "Full-scale design solution for large organizations"
          : "Solusi desain skala penuh untuk organisasi besar",
      features: [
        t.language === "en" ? "Complete Brand System" : "Sistem Brand Lengkap",
        t.language === "en" ? "UI/UX Design" : "Desain UI/UX",
        t.language === "en" ? "Marketing Materials" : "Materi Pemasaran",
        t.language === "en" ? "Unlimited Concepts" : "Konsep Tak Terbatas",
        t.language === "en" ? "Priority Support" : "Dukungan Prioritas",
        t.language === "en"
          ? "Brand Strategy Consultation"
          : "Konsultasi Strategi Brand",
        t.language === "en" ? "3-day Delivery" : "Pengiriman 3 hari",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.language === "en"
              ? "Design Pricing Plans"
              : "Paket Harga Desain"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.language === "en"
              ? "Choose the perfect design package that fits your needs and budget."
              : "Pilih paket desain yang sempurna sesuai kebutuhan dan anggaran Anda."}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "ring-2 ring-emerald-500 scale-105" : ""
              } hover:shadow-lg transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {t.language === "en" ? "Most Popular" : "Paling Populer"}
                  </div>
                </div>
              )}

              {/* Card Header */}
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-emerald-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {t.language === "en" ? "Get Started" : "Mulai Sekarang"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
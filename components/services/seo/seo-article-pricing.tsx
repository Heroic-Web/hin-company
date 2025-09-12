"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Package, ShoppingBag } from "lucide-react"

export function SEOArticlePricing() {
  const { t, language } = useLanguage()

  // ==================== DATA ====================
  const paketSatuan = [
    // ---------- SATUAN A ----------
    {
      name: language === "en" ? "Single A" : "Satuan A",
      price: "Rp5K",
      period: language === "en" ? "/article" : "/artikel",
      description:
        language === "en"
          ? "Best for short, one-time articles up to 1200 words."
          : "Cocok untuk kebutuhan artikel pendek hingga 1200 kata. Pas untuk blog, website kecil, atau konten cepat.",
      icon: FileText,
      features: [
        { article: "100 Kata", id: "Rp5.000", en: "Rp15.000" },
        { article: "200 Kata", id: "Rp8.000", en: "Rp18.000" },
        { article: "250 Kata", id: "Rp9.000", en: "Rp19.000" },
        { article: "300 Kata", id: "Rp10.000", en: "Rp20.000" },
        { article: "350 Kata", id: "Rp11.000", en: "Rp21.000" },
        { article: "400 Kata", id: "Rp12.000", en: "Rp22.000" },
        { article: "500 Kata", id: "Rp16.000", en: "Rp26.000" },
        { article: "600 Kata", id: "Rp20.000", en: "Rp30.000" },
        { article: "700 Kata", id: "Rp22.000", en: "Rp32.000" },
        { article: "750 Kata", id: "Rp24.000", en: "Rp34.000" },
        { article: "800 Kata", id: "Rp28.000", en: "Rp38.000" },
        { article: "900 Kata", id: "Rp32.000", en: "Rp42.000" },
        { article: "1000 Kata", id: "Rp35.000", en: "Rp45.000" },
        { article: "1100 Kata", id: "Rp38.000", en: "Rp48.000" },
        { article: "1200 Kata", id: "Rp40.000", en: "Rp50.000" },
      ],
    },
    // ---------- SATUAN B ----------
    {
      name: language === "en" ? "Single B" : "Satuan B",
      price: "Rp45K",
      period: language === "en" ? "/article" : "/artikel",
      description:
        language === "en"
          ? "Best for medium-length articles (1300–3000 words)."
          : "Cocok untuk artikel menengah, lebih detail dan komprehensif, antara 1300 hingga 3000 kata.",
      icon: FileText,
      features: [
        { article: "1300 Kata", id: "Rp45.000", en: "Rp55.000" },
        { article: "1400 Kata", id: "Rp50.000", en: "Rp60.000" },
        { article: "1500 Kata", id: "Rp55.000", en: "Rp65.000" },
        { article: "1600 Kata", id: "Rp59.000", en: "Rp69.000" },
        { article: "1700 Kata", id: "Rp64.000", en: "Rp74.000" },
        { article: "1800 Kata", id: "Rp67.000", en: "Rp77.000" },
        { article: "1900 Kata", id: "Rp71.000", en: "Rp81.000" },
        { article: "2000 Kata", id: "Rp80.000", en: "Rp90.000" },
        { article: "2500 Kata", id: "Rp100.000", en: "Rp110.000" },
        { article: "3000 Kata", id: "Rp125.000", en: "Rp135.000" },
      ],
    },
    // ---------- SATUAN C ----------
    {
      name: language === "en" ? "Single C" : "Satuan C",
      price: "Rp150K",
      period: language === "en" ? "/article" : "/artikel",
      description:
        language === "en"
          ? "Best for long, detailed articles (3500–6000 words)."
          : "Cocok untuk artikel panjang, mendalam, dan detail, antara 3500 hingga 6000 kata.",
      icon: FileText,
      features: [
        { article: "3500 Kata", id: "Rp150.000", en: "Rp160.000" },
        { article: "4000 Kata", id: "Rp200.000", en: "Rp210.000" },
        { article: "4500 Kata", id: "Rp235.000", en: "Rp245.000" },
        { article: "5000 Kata", id: "Rp280.000", en: "Rp290.000" },
        { article: "5500 Kata", id: "Rp290.000", en: "Rp300.000" },
        { article: "6000 Kata", id: "Rp350.000", en: "Rp360.000" },
      ],
    },
  ]

  const paketLainnya = [
  // ---------- HEMAT ----------
  {
    name: language === "en" ? "Economy" : "Hemat",
    price: "Rp60K – Rp390K",
    period: language === "en" ? "/10 articles" : "/10 artikel",
    description:
      language === "en"
        ? "Affordable bundles of 10 articles in Indonesian or English with flexible word counts."
        : "Paket hemat 10 artikel dengan pilihan jumlah kata dan bahasa Indonesia atau Inggris.",
    icon: Package,
    features: [
      { article: "10 Artikel 300 Kata", id: "IDR 60.000 (ID)", en: "IDR 100.000 (EN)" },
      { article: "10 Artikel 400 Kata", id: "IDR 90.000 (ID)", en: "IDR 120.000 (EN)" },
      { article: "10 Artikel 500 Kata", id: "IDR 130.000 (ID)", en: "IDR 150.000 (EN)" },
      { article: "10 Artikel 600 Kata", id: "IDR 160.000 (ID)", en: "IDR 180.000 (EN)" },
      { article: "10 Artikel 700 Kata", id: "IDR 170.000 (ID)", en: "IDR 190.000 (EN)" },
      { article: "10 Artikel 800 Kata", id: "IDR 190.000 (ID)", en: "IDR 220.000 (EN)" },
      { article: "10 Artikel 900 Kata", id: "IDR 220.000 (ID)", en: "IDR 280.000 (EN)" },
      { article: "10 Artikel 1000 Kata", id: "IDR 300.000 (ID)", en: "IDR 350.000 (EN)" },
      { article: "10 Artikel 1500 Kata", id: "IDR 350.000 (ID)", en: "IDR 390.000 (EN)" },
    ],
    popular: true,
  },

  // ---------- BORONGAN ----------
  {
    name: language === "en" ? "Bulk" : "Borongan",
    price: "Rp120K – Rp710K",
    period: language === "en" ? "/14–30 days" : "/14–30 hari",
    description:
      language === "en"
        ? "Perfect for agencies & long-term SEO projects. More articles in a fixed schedule."
        : "Cocok untuk kebutuhan skala besar seperti perusahaan, portal berita, atau proyek SEO jangka panjang.",
    icon: ShoppingBag,
    features: [
      { article: "14 Hari 400 Kata", id: "IDR 120.000 (ID)", en: "IDR 150.000 (EN)" },
      { article: "30 Hari 400 Kata", id: "IDR 250.000 (ID)", en: "IDR 280.000 (EN)" },
      { article: "14 Hari 500 Kata", id: "IDR 150.000 (ID)", en: "IDR 180.000 (EN)" },
      { article: "30 Hari 500 Kata", id: "IDR 300.000 (ID)", en: "IDR 350.000 (EN)" },
      { article: "14 Hari 1000 Kata", id: "IDR 350.000 (ID)", en: "IDR 390.000 (EN)" },
      { article: "30 Hari 1000 Kata", id: "IDR 650.000 (ID)", en: "IDR 710.000 (EN)" },
    ],
  },
]

  // ==================== UI ====================
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === "en" ? "Article Pricing Packages" : "Paket Harga Artikel"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en"
              ? "Choose the perfect plan for your SEO content needs"
              : "Pilih paket yang sempurna untuk kebutuhan konten SEO Anda"}
          </p>
        </div>

        {/* Paket Satuan */}
        <h3 className="text-2xl font-bold text-center mb-8">
          {language === "en" ? "Single Packages" : "Paket Artikel Satuan"}
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paketSatuan.map((plan, i) => (
            <PricingCard key={i} plan={plan} t={t} language={language} />
          ))}
        </div>

        {/* Paket Hemat & Borongan */}
        <h3 className="text-2xl font-bold text-center mb-8">
          {language === "en" ? "Bundles" : "Paket Hemat & Borongan"}
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {paketLainnya.map((plan, i) => (
            <PricingCard key={i} plan={plan} t={t} language={language} />
          ))}
        </div>
        {/* Custom Package Section */}  
        <div className="mt-16 text-center">  
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">  
            <h3 className="text-2xl font-bold text-foreground mb-4">  
              {language === "en" ? "Need a Custom Package?" : "Butuh Paket Kustom?"}  
            </h3>  
            <p className="text-muted-foreground text-lg mb-6">  
              {language === "en"  
                ? "We offer flexible pricing for bulk orders and long-term content partnerships. Contact us for a personalized quote."  
                : "Kami menawarkan harga fleksibel untuk pesanan dalam jumlah besar dan kemitraan konten jangka panjang. Hubungi kami untuk penawaran personal."}  
            </p>  
            <Button variant="outline" size="lg">  
              {language === "en" ? "Contact for Custom Quote" : "Hubungi untuk Penawaran Kustom"}  
            </Button>  
          </div>  
        </div>  
 
      </div>
    </section>
  )
}

// ==================== KOMPONEN CARD ====================
type Feature = {
  article: string
  id: string
  en: string
}

type Plan = {
  name: string
  price: string
  period: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: Feature[]
  popular?: boolean
}

function PricingCard({
  plan,
  t,
  language,
}: {
  plan: Plan
  t: any
  language: string
}) {
  return (
    <Card
      className={`relative overflow-hidden ${
        plan.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""
      }`}
    >
      {/* Label Populer */}
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
          {language === "en" ? "Most Popular" : "Paling Populer"}
        </div>
      )}

      {/* Header Paket */}
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

      {/* Tabel Fitur */}
      <CardContent className="px-8 pb-8">
        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-border text-left text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-2 border">
                  {language === "en" ? "Description" : "Keterangan"}
                </th>
                <th className="px-4 py-2 border">Bahasa Indonesia</th>
                <th className="px-4 py-2 border">English</th>
              </tr>
            </thead>
            <tbody>
              {plan.features.map((f, j) => (
                <tr key={j}>
                  <td className="px-4 py-2 border">{f.article}</td>
                  <td className="px-4 py-2 border">{f.id}</td>
                  <td className="px-4 py-2 border">{f.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tombol Pilih Paket */}
        <Button
          className={`w-full ${
            plan.popular
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-background hover:bg-muted text-foreground border border-border"
          }`}
          size="lg"
        >
          {language === "en" ? "Choose Plan" : "Pilih Paket"}
        </Button>
        
      </CardContent>
      
    </Card>
    
  )
}

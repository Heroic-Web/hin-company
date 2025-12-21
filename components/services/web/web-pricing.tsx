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

        {/* Judul utama */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Paket Harga Website
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pilihan paket website yang fleksibel sesuai kebutuhan dan budget bisnis Anda
          </p>
        </div>

        {/* Bagian 1: Paket Landing Page & Web Tanpa Stres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Paket Landing Page */}
          <Card className="relative h-full flex flex-col border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-2">
                Paket Landing Page
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Solusi cepat 1 hari pengerjaan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 sm:space-y-3 mb-6">
                <li className="flex justify-between">
                  <span>Super Sale</span>
                  <span className="font-bold text-primary">Rp 500.000</span>
                </li>
                <li className="flex justify-between">
                  <span>Reguler</span>
                  <span className="font-bold line-through text-muted-foreground">Rp 650.000</span>
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20memesan%20Paket%20Landing%20Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pilih Paket
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Paket Web Tanpa Stres */}
          <Card className="relative h-full flex flex-col border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-2">
                Paket Web Tanpa Stres
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Jasa Pembuatan Web All in One termasuk pembuatan company profile website, artikel seo, serta bonus copywriting dan desain. Buhan hanya itu, kami juga bantu setting dan optimasi website Anda di Google Search Console, Google Analytic, dan Google My Business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 sm:space-y-3 mb-6">
                <li className="flex justify-between">
                  <span>Promo</span>
                  <span className="font-bold text-primary">Rp 5.500.000</span>
                </li>
                <li className="flex justify-between">
                  <span>Reguler</span>
                  <span className="font-bold line-through text-muted-foreground">Rp 11.000.000</span>
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20memesan%20Paket%20Web%20Tanpa%20Stres%20(All%20in%20One)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pilih Paket
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bagian 2: Paket Website (Tabel Perbandingan) */}
        <div className="mb-16">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-foreground mb-8">
            Paket Website
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-border rounded-lg overflow-hidden text-sm sm:text-base">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 border border-border text-left">Fitur</th>
                  <th className="px-4 py-3 border border-border text-center">
                    Ekonomis<br/>
                    <span className="text-primary font-bold">Rp 750.000</span>
                  </th>
                  <th className="px-4 py-3 border border-border text-center">
                    Premium<br/>
                    <span className="text-primary font-bold">Rp 1.500.000</span>
                  </th>
                  <th className="px-4 py-3 border border-border text-center">
                    Business<br/>
                    <span className="text-primary font-bold">Rp 2.250.000</span>
                  </th>
                  <th className="px-4 py-3 border border-border text-center">
                    Profesional<br/>
                    <span className="text-primary font-bold">Rp 3.100.000</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Durasi", "1 Tahun", "1 Tahun", "1 Tahun", "1 Tahun"],
                  ["Jumlah Halaman", "3", "5", "10", "20"],
                  ["Hosting Gratis", "✅", "✅", "✅", "✅"],
                  ["Domain Gratis", ".com", ".com", "Custom", "Custom"],
                  ["Copywriting Gratis", "✅", "✅", "✅", "✅"],
                  ["Artikel Gratis", "❌", "3", "6", "10"],
                  ["Email Bisnis", "❌", "❌", "✅", "✅"],
                  ["Revisi", "3x", "5x", "7x", "8x"],
                  ["Waktu Pengerjaan", "2 Hari", "3 Hari", "7 Hari", "13 Hari"],
                  ["Maintenance", "❌", "✅", "✅", "✅"],
                ].map((row, i) => (
                  <tr key={i} className="even:bg-muted/30">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-3 border border-border ${
                          j === 0 ? "font-medium text-foreground text-left" : "text-center"
                        }`}
                      >
                        {cell === "✅" ? <span className="text-green-600">✅</span> 
                        : cell === "❌" ? <span className="text-red-500">❌</span> 
                        : cell}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Baris tombol WA */}
                <tr className="bg-muted/40">
                  <td className="px-4 py-3 border border-border font-medium text-foreground text-left">
                    Pesan Paket
                  </td>
                  {[
                    "Ekonomis",
                    "Premium",
                    "Business",
                    "Profesional",
                  ].map((pkg, i) => (
                    <td key={i} className="px-4 py-3 border border-border text-center">
                      <Button
                        asChild
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <a
                          href={`https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20memesan%20Paket%20Website%20${pkg}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Pilih Paket
                        </a>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Butuh Konsultasi Gratis?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Tim ahli kami siap membantu menentukan paket yang tepat untuk bisnis Anda
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20terkait%20paket%20website"
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi Sekarang
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>

  )
}

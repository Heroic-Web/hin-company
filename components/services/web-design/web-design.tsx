"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function UiUxPricing() {
  const packages = [
    {
      name: "UI Design Starter",
      tag: "Promo",
      price: "Rp 499.000",
      oldPrice: "Rp 999.000",
      duration: "1 Hari",
      description: "Cocok untuk validasi ide dan MVP sederhana",
      features: [
        "1 Halaman UI Design",
        "Figma Tools",
        "File Design (PDF)",
        "Source File Figma",
        "2x Revisi",
        "Prototype Interaktif",
      ],
    },
    {
      name: "Basic",
      tag: "Best Price",
      price: "Rp 1.500.000",
      duration: "5 Hari",
      description: "Ideal untuk website bisnis kecil atau startup",
      features: [
        "5+ Halaman UI Design",
        "Design System Dasar",
        "File Design (PDF)",
        "Source File Figma",
        "3x Revisi",
        "Prototype Interaktif",
        "User Flow Dasar",
      ],
    },
    {
      name: "Professional",
      tag: "Best Seller",
      price: "Rp 4.500.000",
      duration: "10 Hari",
      popular: true,
      description: "Solusi lengkap untuk produk digital profesional",
      features: [
        "20+ Halaman UI Design",
        "Design System Lengkap",
        "Riset & Analisis User",
        "Analisis Kompetitor",
        "File Design (PDF)",
        "Source File Figma",
        "4x Revisi",
        "Prototype Interaktif",
      ],
    },
    {
      name: "Advanced",
      tag: "Best Offer",
      price: "Rp 9.500.000",
      duration: "20 Hari",
      description: "Untuk produk skala besar & enterprise",
      features: [
        "40+ Halaman UI Design",
        "Design System Advanced",
        "Riset Mendalam User",
        "Analisis Kompetitor Lengkap",
        "User Journey & Persona",
        "Prototype High-Fidelity",
        "Source File Figma",
        "5x Revisi",
      ],
    },
  ]

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Paket UI/UX Design Service
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih paket UI/UX Design sesuai kebutuhan produk digital Anda.
            Semua paket dirancang untuk meningkatkan pengalaman pengguna dan konversi bisnis.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <Card
              key={i}
              className={`relative h-full flex flex-col border-border/60 
              ${pkg.popular ? "ring-2 ring-primary shadow-xl scale-[1.02]" : "hover:shadow-lg"}
              transition-all duration-300`}
            >
              {/* Badge */}
              {pkg.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {pkg.tag}
                </span>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                {/* Harga */}
                <div className="text-center mb-6">
                  {pkg.oldPrice && (
                    <p className="text-sm text-muted-foreground line-through">
                      {pkg.oldPrice}
                    </p>
                  )}
                  <p className="text-2xl font-bold text-primary">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Estimasi pengerjaan {pkg.duration}
                  </p>
                </div>

                {/* Fitur */}
                <ul className="space-y-2 text-sm mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className="mt-auto w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={`https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20memesan%20paket%20UI/UX%20Design%20${pkg.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Konsultasi & Order
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Included */}
        <div className="mt-16">
          <Card className="bg-muted/40 border-border/60">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Semua Paket Sudah Termasuk
              </h3>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>✔ Riset & Analisis User</span>
                <span>✔ Analisis Kompetitor</span>
                <span>✔ Prototype Interaktif</span>
                <span>✔ Konsultasi Gratis</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-3">
            Belum Yakin Pilih Paket?
          </h3>
          <p className="text-muted-foreground mb-6">
            Konsultasikan kebutuhan produk Anda bersama UI/UX Designer kami secara gratis.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href="https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20UI/UX%20Design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Gratis
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}

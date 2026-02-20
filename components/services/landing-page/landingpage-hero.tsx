"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function LandingPageHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Jasa Pembuatan Landing Page <span className="text-primary">Profesional & Elegan</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Heroic Web menghadirkan jasa landing page murah namun tidak murahan.
            Cocok untuk profil perusahaan, event dengan countdown & form registrasi,
            launching produk, webinar, hingga undangan digital.
          </p>

          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5"/>
              <span>Domain pilihan Anda sendiri</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5"/>
              <span>Support tracking Google & FB Pixel</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5"/>
              <span>Maksimalkan konversi bisnis Anda</span>
            </div>
          </div>

          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Link href="https://wa.me/6282144137914" target="_blank">
              Pesan Website Sekarang
            </Link>
          </Button>
        </div>

        <div>
          <img 
            src="/jasaweb_mufid.png"
            alt="Heroic Web Landing Page"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}
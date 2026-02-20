"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Zap, Shield, Search, MessageCircle, BarChart } from "lucide-react"

export function LandingPageFeatures() {

  const features = [
    {
      icon: Globe,
      title: "SEO Friendly",
      desc: "Struktur website ramah mesin pencari agar bisnis lokal Anda tampil maksimal di Google."
    },
    {
      icon: Zap,
      title: "Loading Super Cepat",
      desc: "Website dioptimasi agar loading maksimal 3 detik untuk meningkatkan konversi."
    },
    {
      icon: Shield,
      title: "SSL & Aman",
      desc: "Keamanan maksimal dengan SSL gratis dan proteksi data."
    },
    {
      icon: Search,
      title: "Google Analytics & Tag Manager",
      desc: "Pantau klik WhatsApp, performa iklan Google, dan tracking pengunjung."
    },
    {
      icon: MessageCircle,
      title: "Integrasi WhatsApp",
      desc: "Tombol chat otomatis untuk closing lebih cepat."
    },
    {
      icon: BarChart,
      title: "FB Pixel & Ads Ready",
      desc: "Siap untuk iklan Facebook, Instagram, dan Google Ads."
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <Card key={i} className="p-6 hover:shadow-xl transition">
            <CardContent>
              <f.icon className="w-10 h-10 text-primary mb-4"/>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
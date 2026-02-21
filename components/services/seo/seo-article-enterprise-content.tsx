"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Search,
  PenTool,
  Layers,
  Database,
  Users,
  Megaphone,
  ClipboardList,
  FileText,
  CheckCircle,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"

export function SEOArticleEnterpriseContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const mainServices = [
    {
      icon: Search,
      title: "Jasa Penulisan Artikel SEO",
      desc: "Artikel SEO lengkap dengan riset keyword, struktur heading optimal, internal linking, dan optimasi on-page untuk meningkatkan performa website di mesin pencari.",
    },
    {
      icon: PenTool,
      title: "Jasa Copywriting Konversi Tinggi",
      desc: "Penulisan landing page, sales letter, advertorial hingga ad copy dengan teknik copywriting yang dirancang meningkatkan konversi.",
    },
    {
      icon: Layers,
      title: "Artikel Pilar (2000–10.000 Kata)",
      desc: "Konten panjang dan komprehensif untuk memperkuat pondasi SEO website serta membangun authority brand Anda.",
    },
    {
      icon: Database,
      title: "Stok Artikel Siap Pakai",
      desc: "Bank artikel SEO berbagai niche, orisinal, bebas plagiasi, dan siap publish tanpa menunggu proses penulisan.",
    },
    {
      icon: Users,
      title: "Penulis Outsource Profesional",
      desc: "Sewa penulis berpengalaman untuk kebutuhan konten website maupun sosial media secara temporer atau bulanan.",
    },
    {
      icon: FileText,
      title: "Deskripsi Produk Marketplace",
      desc: "Penulisan deskripsi produk 100–400 kata untuk toko online dan marketplace agar lebih menarik dan meningkatkan konversi.",
    },
    {
      icon: Globe,
      title: "Caption Media Sosial",
      desc: "Penulisan caption kreatif untuk Instagram dan platform lainnya yang informatif dan engaging.",
    },
    {
      icon: Megaphone,
      title: "Media Placement & Press Release",
      desc: "Layanan penulisan dan publikasi artikel di media nasional untuk meningkatkan kredibilitas serta eksposur brand.",
    },
    {
      icon: ClipboardList,
      title: "Jasa Input & Upload Konten",
      desc: "Layanan tambahan untuk membantu penjadwalan dan upload artikel ke website/blog secara berkala.",
    },
  ]

  const categories = [
    "Teknologi","Website","Pendidikan","Otomotif","Musik","Furnitur",
    "Kesehatan","Parenting","Travel","Zakat","Gaya Hidup","Kuliner",
    "Haji & Umroh","Desain Grafis","Keuangan & Investasi",
    "Marketing & Bisnis","Fesyen & Kecantikan","dan lainnya"
  ]

  const faq = [
    {
      q: "Bagaimana cara memesan artikel di Heroic Web?",
      a: "Silakan hubungi tim kami melalui halaman kontak atau WhatsApp resmi untuk konsultasi dan pemesanan.",
    },
    {
      q: "Apakah artikel benar-benar orisinal?",
      a: "Ya. Semua artikel ditulis manual dan melalui pengecekan plagiasi sebelum dikirim.",
    },
    {
      q: "Apakah ada jaminan ranking di Google?",
      a: "Kami mengoptimasi sesuai kaidah SEO, namun ranking dipengaruhi banyak faktor seperti authority domain dan backlink.",
    },
    {
      q: "Apakah bisa pesan satu artikel?",
      a: "Beberapa paket tersedia dalam 1 konten seperti Artikel Pilar atau Copywriting.",
    },
    {
      q: "Berapa lama pengerjaan?",
      a: "Estimasi pengerjaan rata-rata 5–7 hari kerja tergantung jumlah dan jenis paket.",
    },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* FAQ Accordion */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            Pertanyaan Seputar Jasa Artikel SEO
          </h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faq.map((item, index) => (
              <div key={index} className="border rounded-xl p-6 bg-white shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left font-semibold"
                >
                  {item.q}
                  {activeFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFaq === index ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground text-sm">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Gradient Premium */}
        <div className="text-center bg-gradient-to-r from-primary to-accent text-white p-12 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">
            Siap Tingkatkan Trafik Website Anda?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Konsultasikan kebutuhan artikel SEO Anda bersama tim Heroic Web
            dan dapatkan strategi terbaik untuk bisnis Anda.
          </p>

          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Konsultasi Gratis
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
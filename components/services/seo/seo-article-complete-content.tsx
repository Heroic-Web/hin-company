"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileText,
  PenTool,
  Layers,
  Database,
  Users,
  Image as ImageIcon,
  Megaphone,
  ClipboardList,
  CheckCircle,
  ShieldCheck,
  Clock,
  Star,
  BarChart,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"

export function SEOArticleCompleteContent() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index)
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const services = [
    {
      icon: FileText,
      title: "Jasa Artikel SEO Profesional",
      short:
        "Artikel SEO lengkap dengan riset keyword dan optimasi on-page.",
      detail:
        "Kami melakukan riset keyword mendalam, analisis kompetitor, penyusunan struktur heading SEO (H1–H4), internal linking strategis, meta description optimal, serta optimasi readability untuk meningkatkan ranking dan trafik organik. Setiap artikel ditulis oleh penulis berpengalaman yang memahami prinsip SEO terbaru dan tren pencarian untuk memastikan konten Anda relevan dan kompetitif di mesin pencari.",
    },
    {
      icon: PenTool,
      title: "Copywriting Persuasif",
      short:
        "Landing page, sales letter, dan ad copy konversi tinggi.",
      detail:
        "Menggunakan framework AIDA & PAS untuk menghasilkan copy yang mampu meningkatkan engagement, click-through-rate, dan konversi penjualan. Kami menyesuaikan gaya bahasa dengan target audiens Anda, memastikan pesan yang disampaikan tepat sasaran dan efektif dalam mendorong tindakan yang diinginkan.",
    },
    {
      icon: Layers,
      title: "Artikel Pilar (2.000–10.000 Kata)",
      short:
        "Konten panjang untuk membangun authority website.",
      detail:
        "Artikel komprehensif berbasis riset mendalam yang dirancang sebagai cornerstone content untuk memperkuat fondasi SEO jangka panjang. Konten ini tidak hanya memberikan informasi yang lengkap dan bernilai bagi pembaca, tetapi juga dioptimalkan untuk kata kunci utama dan topik terkait guna meningkatkan otoritas domain dan peringkat di mesin pencari.",
    },
    {
      icon: Database,
      title: "Stok Artikel Siap Publish",
      short:
        "Konten SEO-ready yang langsung bisa diposting.",
      detail:
        "Artikel tersedia dalam berbagai niche, sudah dicek plagiasi, dan dapat langsung dipublikasikan tanpa proses produksi tambahan. Solusi cepat untuk kebutuhan konten mendesak atau untuk mengisi kalender editorial dengan konten berkualitas tanpa harus menunggu proses penulisan.",
    },
    {
      icon: Users,
      title: "Penulis Outsource Profesional",
      short:
        "Sewa penulis profesional untuk kebutuhan rutin.",
      detail:
        "Solusi efisien bagi bisnis yang membutuhkan produksi konten konsisten tanpa proses rekrutmen internal. Kami menyediakan penulis berpengalaman yang dapat disewa secara temporer atau bulanan untuk memenuhi kebutuhan konten website maupun sosial media Anda, dengan kualitas yang terjamin dan sesuai dengan standar SEO.",
    },
    {
        icon: ImageIcon,
        title: "Caption Media Sosial",
        short:
          "Konten desain untuk visual marketing.",
        detail:
          "Penulisan teks untuk feed Instagram, poster digital, dan desain promosi dengan gaya bahasa sesuai target audiens. Kami membantu Anda menciptakan caption yang menarik, informatif, dan mampu meningkatkan engagement pada platform media sosial Anda.",
    },
    
    {
      icon: ImageIcon,
      title: "Copywriter untuk Desain Canva",
      short:
        "Konten desain untuk visual marketing.",
      detail:
        "Penulisan teks untuk feed Instagram, poster digital, dan desain promosi dengan gaya bahasa sesuai target audiens. Kami membantu Anda menciptakan caption yang menarik, informatif, dan mampu meningkatkan engagement pada platform media sosial Anda.",
    },
    {
      icon: Megaphone,
      title: "Media Placement",
      short:
        "Press release + publikasi media nasional.",
      detail:
        "Penulisan artikel berita profesional dan distribusi ke media online nasional untuk meningkatkan reputasi brand. Layanan ini dirancang untuk membantu bisnis mendapatkan eksposur yang lebih luas, membangun kredibilitas, dan meningkatkan visibilitas di mata publik melalui publikasi di media terpercaya.",
    },
    {
      icon: ClipboardList,
      title: "Jasa Entry & Upload Konten",
      short:
        "Upload & penjadwalan konten website.",
      detail:
        "Membantu formatting WordPress, internal linking, scheduling publish, dan optimasi dasar sebelum artikel tayang. Layanan ini memastikan bahwa setiap artikel yang dipublikasikan tidak hanya berkualitas tinggi tetapi juga diatur dengan baik untuk mendukung SEO dan memberikan pengalaman pengguna yang optimal di website Anda.",
    },
  ]

  const categories = [
    "Teknologi","Website","Pendidikan","Otomotif","Musik","Furnitur",
    "Kesehatan","Parenting","Travel","Zakat","Gaya Hidup","Kuliner",
    "Haji & Umroh","Desain Grafis","Keuangan & Investasi",
    "Marketing & Bisnis","Fesyen & Kecantikan","Dan banyak lainnya"
  ]

  

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Heroic Web SEO Content Division
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Layanan Penulisan Artikel SEO Profesional
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Kami membantu bisnis dan perusahaan membangun trafik organik
            melalui konten SEO berkualitas dan berorientasi hasil.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.short}
                </p>

                {/* DETAIL */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeService === index
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-muted-foreground border-t pt-4">
                    {service.detail}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleService(index)}
                  className="mt-auto"
                >
                  {activeService === index ? (
                    <>Tutup Detail <ChevronUp className="ml-2 h-4 w-4" /></>
                  ) : (
                    <>Pelajari Detail <ChevronDown className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CATEGORIES */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-10">
            Topik & Kategori yang Bisa Kami Tulis
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((item, index) => (
              <div key={index} className="flex items-center bg-muted p-4 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WHY US */}
        <div className="mb-28 relative">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-2xl opacity-40"></div>

        <div className="relative bg-white/70 backdrop-blur-sm border border-border rounded-3xl p-12">

            {/* Heading */}
            <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Mengapa Memilih Heroic Web?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami bukan sekadar penyedia jasa artikel SEO. Heroic Web menghadirkan
                sistem kerja profesional, standar kualitas tinggi, dan pendekatan
                strategis untuk memastikan setiap konten memberikan dampak nyata.
            </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Item 1 */}
            <div className="group bg-background border rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                <ShieldCheck className="h-6 w-6 text-primary group-hover:text-white transition" />
                </div>
                <h4 className="font-semibold mb-2">Seleksi Ketat & Profesional</h4>
                <p className="text-sm text-muted-foreground">
                Penulis kami melalui proses seleksi ketat dan memiliki pengalaman
                di berbagai industri serta niche bisnis.
                </p>
            </div>

            {/* Item 2 */}
            <div className="group bg-background border rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                <Users className="h-6 w-6 text-primary group-hover:text-white transition" />
                </div>
                <h4 className="font-semibold mb-2">Didampingi Tim Profesional</h4>
                <p className="text-sm text-muted-foreground">
                Setiap proyek didukung editor dan project manager untuk menjaga
                kualitas, struktur SEO, serta ketepatan deadline.
                </p>
            </div>

            {/* Item 3 */}
            <div className="group bg-background border rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                <BarChart className="h-6 w-6 text-primary group-hover:text-white transition" />
                </div>
                <h4 className="font-semibold mb-2">Didukung Tools Premium</h4>
                <p className="text-sm text-muted-foreground">
                Menggunakan tools profesional untuk pengecekan plagiasi, tata bahasa,
                serta analisis struktur konten berbasis SEO.
                </p>
            </div>

            {/* Item 4 */}
            <div className="group bg-background border rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                <Clock className="h-6 w-6 text-primary group-hover:text-white transition" />
                </div>
                <h4 className="font-semibold mb-2">Revisi Fleksibel & Transparan</h4>
                <p className="text-sm text-muted-foreground">
                Sistem revisi yang jelas dan komunikasi terbuka untuk memastikan
                hasil akhir sesuai kebutuhan bisnis Anda.
                </p>
            </div>

            </div>

        </div>
        </div>

      </div>
    </section>
  )
}
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function LandingPagePricing() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Paket Harga Landing Page Heroic Web
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih paket sesuai kebutuhan bisnis Anda. Semua sudah termasuk domain,
            hosting, keamanan, dan support profesional.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LANDING PAGE */}
          <Card className="relative border border-border hover:shadow-2xl transition-all duration-300 bg-background">
            <CardContent className="p-8">

              <h3 className="text-2xl font-bold mb-2">Landing Page</h3>
              <p className="text-4xl font-extrabold text-primary mb-2">
                Rp 500.000
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Renewal: Rp 400.000/tahun
              </p>

              {/* Spesifikasi */}
              <h4 className="font-semibold mb-3">Spesifikasi :</h4>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>1 Halaman Website (Tidak Bisa ditambahkan Halaman Baru)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Gratis Domain my.id atau .com</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Kesempatan Revisi 1 kali (teks, gambar & warna)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Pengerjaan 1 hari kerja</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Masa aktif 1 tahun</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Free Maintenance 30 hari</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>1 Email Bisnis</li>
              </ul>

              {/* Fitur */}
              <h4 className="font-semibold mb-3">Fitur :</h4>
              <ul className="space-y-2 text-sm mb-8">
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Integrasi Sosial Media</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Galeri Produk</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Gratis SSL untuk keamanan website</li>
              </ul>

              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <a
                  href="https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20memesan%20Landing%20Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pesan Website Sekarang
                </a>
              </Button>

            </CardContent>
          </Card>


          {/* TOKO ONLINE LITE */}
          <Card className="relative border-2 border-primary hover:shadow-2xl transition-all duration-300 bg-background">
            <div className="absolute -top-4 left-6 bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold shadow">
              Best Seller
            </div>

            <CardContent className="p-8">

              <h3 className="text-2xl font-bold mb-2">Toko Online Lite</h3>
              <p className="text-4xl font-extrabold text-primary mb-2">
                Rp 750.000
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Renewal: Rp 650.000/tahun
              </p>

              {/* Spesifikasi */}
              <h4 className="font-semibold mb-3">Spesifikasi :</h4>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>1 Halaman Website (Tidak Bisa ditambahkan Halaman Baru)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Gratis Domain my.id atau .com</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Kesempatan Revisi 1 kali (teks, gambar & warna)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Pengerjaan 1 hari kerja</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Masa aktif 1 tahun</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Free Maintenance 30 hari</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Gratis SSL untuk keamanan website</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Gratis Email Perusahaan (Gmail)</li>
              </ul>

              {/* Fitur */}
              <h4 className="font-semibold mb-3">Fitur :</h4>
              <ul className="space-y-2 text-sm mb-8">
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Keranjang Belanja</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Payment Transfer</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Ongkir / Ongkos Kirim</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Chat WhatsApp</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Tombol Order via WhatsApp</li>
              </ul>

              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a
                  href="https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20memesan%20Toko%20Online%20Lite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pesan Toko Online Lite
                </a>
              </Button>

            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  )
}
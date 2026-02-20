"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WebPricing() {
  const { t } = useLanguage()

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Paket Harga Website Heroic Web
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Solusi digital lengkap untuk UMKM dan bisnis yang ingin berkembang secara profesional di era digital.
          </p>
        </div>


        {/* ================= BAGIAN 1 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* ===== BUNDLING UMKM ===== */}
          <Card className="relative h-full flex flex-col border-2 border-primary hover:shadow-2xl transition-all duration-300 bg-background">

            <div className="absolute -top-3 left-6 bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold shadow">
              Paket Terpadu UMKM
            </div>

            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Bundling UMKM
              </CardTitle>

              <CardDescription>
                Solusi digital lengkap untuk UMKM yang ingin naik level dan tampil profesional di era digital.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 text-sm text-muted-foreground">

              {/* Harga */}
              <div>
                <p className="text-3xl font-extrabold text-primary">
                  Rp 5.500.000
                </p>
                <p className="text-xs text-muted-foreground">
                  Investasi lengkap untuk transformasi digital bisnis Anda
                </p>
              </div>

              <p>
                Paket Bundling UMKM dari <span className="font-semibold text-foreground">Heroic Web</span> merupakan solusi terpadu
                yang dirancang khusus untuk membantu pelaku UMKM melakukan digitalisasi secara menyeluruh.
                Tidak hanya sekadar membuat website, tetapi membangun fondasi digital yang kuat
                agar bisnis Anda lebih dipercaya, lebih mudah ditemukan, dan lebih cepat berkembang.
              </p>

              <p>
                Dalam satu paket lengkap, Anda akan mendapatkan:
              </p>

              <ul className="space-y-2">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-green-600"/>
                  Website Company Profile Profesional & Modern
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-green-600"/>
                  Bonus Desain Logo (jika belum memiliki identitas brand)
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-green-600"/>
                  Artikel SEO untuk meningkatkan visibilitas di Google
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-green-600"/>
                  Layanan Manajemen Media Sosial untuk memperkuat branding online
                </li>
              </ul>

              <p>
                Kami juga membantu proses setup dan optimasi agar website Anda benar-benar maksimal,
                termasuk integrasi dan konfigurasi:
              </p>

              <ul className="space-y-2">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-green-600"/>
                  Google Search Console (agar mudah terindeks & terpantau performanya)
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-green-600"/>
                  Google Analytics (monitor pengunjung & perilaku user)
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-green-600"/>
                  Google Business Profile (agar bisnis mudah ditemukan secara lokal)
                </li>
              </ul>

              <p>
                Semua dirancang secara <span className="font-medium text-foreground">strategis, efisien, dan terukur</span>,
                sesuai kebutuhan UMKM yang ingin berkembang secara digital tanpa ribet dan tanpa pusing teknis.
                Anda fokus mengembangkan bisnis, tim Heroic Web yang mengurus sistem digitalnya.
              </p>

              <div className="pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a
                    href="https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20info%20Paket%20Bundling%20UMKM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Konsultasi Sekarang via WhatsApp
                  </a>
                </Button>
              </div>

            </CardContent>
          </Card>

          {/* ===== TOKO ONLINE PREMIUM ===== */}
          <Card className="relative h-full flex flex-col border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">

            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Toko Online Premium
              </CardTitle>
              <CardDescription>
                Solusi e-commerce lengkap dengan fitur profesional.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">

              <div>
                <p className="text-3xl font-bold text-primary">
                  Rp 2.700.000
                </p>
                <p className="text-sm text-muted-foreground">
                  Harga Renewal: Rp 1.700.000/tahun
                </p>
              </div>

              {/* Spesifikasi */}
              <div>
                <h4 className="font-semibold mb-3">Spesifikasi :</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>6 Halaman Website</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Gratis Hosting & Domain</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Revisi 3 kali</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Pengerjaan 7 - 14 hari kerja</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Masa aktif 1 tahun</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Free Maintenance 4 jam/bulan</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Gratis SSL</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Email Perusahaan</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Akses Admin Website</li>
                </ul>
              </div>

              {/* Fitur */}
              <div>
                <h4 className="font-semibold mb-3">Fitur :</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Keranjang Belanja</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Payment Bank Transfer</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Ongkos Kirim</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Chat WhatsApp</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Tombol Order via WhatsApp</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Harga Coret / Diskon</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Kategori Produk</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Variasi Produk</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Laporan Stok</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Laporan Penjualan</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600"/>Upsell + Cross Sell</li>
                </ul>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a
                  href="https://wa.me/6282144137914?text=Halo,%20saya%20ingin%20memesan%20Toko%20Online%20Premium"
                  target="_blank"
                >
                  Pesan Website Sekarang
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

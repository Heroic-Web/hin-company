"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function LandingPageFAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            F.A.Q Jasa Landing Page Heroic Web
          </h2>
          <p className="text-muted-foreground">
            Temukan jawaban dari pertanyaan yang paling sering ditanyakan
            sebelum memesan website landing page.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">

          <AccordionItem value="item-1" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Apa saja yang akan saya dapatkan?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Anda akan mendapatkan website 1 halaman profesional, domain gratis
              (.my.id atau .com), SSL keamanan, email bisnis, akses admin,
              serta maintenance gratis selama 30 hari.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Bagaimana kualitas landing page Heroic Web?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Website dibuat dengan desain modern, responsif, cepat (maksimal 3 detik),
              dan dioptimasi agar mendukung konversi serta performa iklan.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Berapa kali saya bisa melakukan revisi?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Paket landing page mendapatkan 1x revisi untuk perubahan teks,
              gambar, dan warna sesuai ketentuan.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Saya tidak paham website, apakah tetap bisa pesan?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Tentu bisa. Anda hanya perlu kirim konten & kebutuhan.
              Tim Heroic Web akan mengurus semuanya hingga website siap online.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Apakah saya bisa menambah halaman sendiri?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Paket landing page hanya 1 halaman dan tidak bisa ditambah halaman baru.
              Jika ingin website multi-halaman, tersedia paket lainnya.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Saya sudah punya contoh desain, apakah bisa dibuatkan?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Bisa. Kirimkan referensi desain yang Anda inginkan,
              dan tim kami akan menyesuaikan tampilan sesuai kebutuhan Anda.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Apakah bisa custom design?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sangat bisa. Kami menyediakan layanan desain custom
              agar tampilan website benar-benar unik sesuai brand Anda.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Saya sudah punya website, apakah bisa renovasi?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Bisa. Kami melayani redesign atau renovasi website lama
              agar tampil lebih modern dan optimal.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Berapa biaya renovasi website?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Biaya renovasi tergantung tingkat kesulitan dan fitur yang dibutuhkan.
              Silakan konsultasi gratis via WhatsApp untuk estimasi harga.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Saya terbiasa pakai Elementor atau Oxygen Builder, apakah bisa?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Ya, kami dapat menyesuaikan kebutuhan teknis Anda,
              termasuk penggunaan builder tertentu jika diperlukan.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11" className="bg-background rounded-lg px-6 shadow-sm">
            <AccordionTrigger>Bagaimana cara order landing page di Heroic Web?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Hubungi kami via WhatsApp, lakukan pembayaran DP 50%.
              Setelah website selesai dan disetujui, pelunasan 50% dilakukan
              maksimal 7 hari setelah serah terima.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        {/* Footer Note */}
        <div className="mt-12 text-sm text-muted-foreground text-center">
          *Syarat & ketentuan berlaku. Kami tidak menerima pembuatan situs ilegal,
          pinjaman berbunga, atau konten yang melanggar hukum.
        </div>

      </div>
    </section>
  )
}
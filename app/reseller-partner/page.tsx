"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  Globe,
  Search,
  FileText,
  Users,
  TrendingUp,
  Layers,
  Percent,
  Briefcase,
  Download,
  HelpCircle,
} from "lucide-react"

export default function ResellerPartner() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <div className="max-w-4xl mb-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Users className="h-4 w-4" />
            Program Reseller Partner Resmi
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Reseller Website & Article SEO
            <span className="block text-primary">
              Bersama PT Heroic Inovasi Nusantara
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Program kemitraan fleksibel bagi siapa saja yang ingin mendapatkan
            penghasilan tambahan dengan memasarkan layanan digital profesional
            tanpa perlu membangun tim internal.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Daftar Menjadi Reseller
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="#faq">
                Pelajari Detail Program
              </Link>
            </Button>
          </div>
        </div>

        {/* APA ITU RESELLER */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* TEXT */}
            <div>
              <span className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Tentang Program Reseller
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Apa Itu Reseller Partner Program Heroic??
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Program Reseller Heroic adalah skema kemitraan resmi dari
                PT Heroic Inovasi Nusantara yang membuka peluang penghasilan
                tambahan bagi individu maupun pelaku usaha melalui rekomendasi
                layanan website dan artikel profesional.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Seluruh proses teknis, produksi, hingga penyelesaian proyek
                dikelola sepenuhnya oleh tim Heroic. Anda cukup berfokus pada
                membangun relasi, menjalin komunikasi, dan memperluas jaringan
                klien potensial.
              </p>
            </div>

            {/* IMAGE FRAME */}
            <div className="relative">
              {/* FRAME BACKGROUND */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/40 via-green-400/30 to-primary/20 blur-2xl opacity-70" />

              {/* FRAME BORDER */}
              <div className="relative rounded-3xl border bg-background p-3 shadow-xl">
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="/reseller.png"
                    alt="Program Reseller Heroic"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* VALUE */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              icon: TrendingUp,
              title: "Lebih Mudah Closing",
              desc: "Tambahkan layanan digital bernilai tinggi tanpa risiko operasional dan biaya tambahan.",
            },
            {
              icon: CheckCircle,
              title: "Ditangani Tim Ahli",
              desc: "Semua proyek dikerjakan oleh tim berpengalaman dengan standar profesional.",
            },
            {
              icon: Layers,
              title: "Potensi Jangka Panjang",
              desc: "Cocok untuk membangun pendapatan berulang dari klien yang sama.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border p-8 bg-background/70">
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Layanan yang Bisa Dijual Kembali
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Globe, text: "Website Bisnis & Company Profile" },
                { icon: Globe, text: "Website Portofolio Pribadi" },
                { icon: Layers, text: "Website Custom" },
                { icon: Layers, text: "Aplikasi Berbasis Web" },
                { icon: FileText, text: "Penulisan Artikel SEO" },
                { icon: Search, text: "Creative Design & SEO" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border p-4">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-square rounded-3xl overflow-hidden">
            <img
              src="/Jasa Digital by Heroic.png"
              alt="Reseller Heroic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* KOMISI */}
        <div id="komisi" className="mb-32">
          <h2 className="text-3xl font-bold mb-12">
            Skema Komisi Program Reseller
          </h2>

          <p className="max-w-3xl text-muted-foreground mb-12 leading-relaxed">
            Kami menyediakan sistem komisi yang transparan dan fleksibel.
            Semakin besar peran Anda dalam proses penjualan, semakin besar pula
            komisi yang bisa Anda dapatkan.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            
            {/* KOMISI 10% */}
            <div className="rounded-3xl border p-8 bg-background hover:shadow-xl transition">
              <Percent className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Komisi 10%
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Skema ini cocok untuk Anda yang berperan sebagai penghubung awal.
                Cukup merekomendasikan layanan kami kepada calon klien.
                Jika terjadi kesepakatan dan pembayaran, Anda langsung mendapatkan
                komisi sebesar <strong>10% dari total nilai proyek</strong>.
              </p>

              <div className="rounded-xl bg-muted/50 p-4 text-sm leading-relaxed">
                <p className="font-semibold mb-2">NOTE:</p>
                <ul className="space-y-1">
                  <li>✔️ Komisi dibayarkan setelah proyek deal & klien melakukan pembayaran.</li>
                  <li>❌ Tidak ada biaya pendaftaran.</li>
                  <li>❌ Tanpa target penjualan dan tanpa proses yang ribet.</li>
                </ul>
              </div>
            </div>

            {/* KOMISI 20% */}
            <div className="rounded-3xl border p-8 bg-background hover:shadow-xl transition">
              <Percent className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Komisi 20%
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Diperuntukkan bagi reseller yang terlibat lebih aktif,
                mulai dari komunikasi, presentasi layanan, hingga membantu
                proses negosiasi bersama klien.
                Jika proyek berhasil disepakati, Anda berhak memperoleh
                <strong> komisi 20% dari nilai proyek</strong>.
              </p>

              <div className="rounded-xl bg-muted/50 p-4 text-sm leading-relaxed">
                <p className="font-semibold mb-2">NOTE:</p>
                <ul className="space-y-1">
                  <li>✔️ Komisi dibayarkan setelah proyek deal & klien melakukan pembayaran.</li>
                  <li>❌ Tidak ada biaya pendaftaran.</li>
                  <li>❌ Tanpa target penjualan dan tanpa proses yang ribet.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>


        {/* WHO */}
        <div className="mb-32">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            Siapa yang Cocok
            <span className="block text-primary">
              Menjadi Reseller?
            </span>
          </h2>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Freelancer Digital",
              "Mahasiswa",
              "Karyawan",
              "Content Creator",
              "Agen Digital Marketing",
              "Blogger & Influencer",
              "Pemilik Usaha Mikro",
              "Pemilik Agency",
              "Owner Startup",
              "Penggiat Komunitas Online",
              "Pekerja Remote",
              "Siapapun yang Ingin Penghasilan Tambahan",
            ].map((text, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20"
              >
                {/* Glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-green-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 shadow-inner shadow-primary/30 transition-transform duration-500 group-hover:scale-110">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <span className="text-lg font-semibold">
                    {text}
                  </span>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>


        {/* CARA BERGABUNG */}
        <div id="cara-bergabung" className="mb-32">
          <h2 className="text-3xl font-bold mb-6">
            Cara Bergabung Menjadi Reseller Heroic Web
          </h2>

          <p className="max-w-3xl text-muted-foreground mb-12 leading-relaxed">
            Mulai perjalanan Anda sebagai reseller layanan digital premium
            tanpa proses berbelit. Kami siapkan sistemnya, Anda fokus
            memperluas jaringan dan peluang.
          </p>

          <div className="grid md:grid-cols-4 gap-10 perspective-[1200px]">
            {[
              {
                title: "Hubungi Tim Kami",
                desc: "Daftarkan diri Anda dengan menghubungi tim Heroic Web melalui WhatsApp atau email resmi kami.",
              },
              {
                title: "Terima Materi Promosi",
                desc: "Dapatkan aset promosi, price list, dan panduan penawaran siap pakai.",
              },
              {
                title: "Tawarkan ke Klien",
                desc: "Rekomendasikan layanan atau dampingi klien hingga kesepakatan tercapai.",
              },
              {
                title: "Terima Komisi",
                desc: "Komisi ditransfer setelah proyek deal dan pembayaran dikonfirmasi.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  group relative rounded-3xl 
                  bg-gradient-to-br from-background to-muted
                  p-8 border border-border
                  transform-gpu transition-all duration-500
                  hover:-translate-y-3 hover:rotate-x-6 hover:rotate-y-3
                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  hover:shadow-[0_35px_80px_rgba(0,0,0,0.35)]
                "
              >
                {/* Glow layer */}
                <div className="
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20
                  blur-xl
                " />

                {/* Step Number */}
                <div className="
                  relative z-10 w-14 h-14 mb-6
                  flex items-center justify-center
                  rounded-xl bg-primary text-primary-foreground
                  text-xl font-bold
                  shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                  transform group-hover:translate-z-20
                ">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <HelpCircle className="h-7 w-7 text-primary" />
            Pertanyaan yang Sering Diajukan
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Apakah saya harus memiliki latar belakang IT?",
                a: "Tidak sama sekali. Program ini dirancang untuk siapa pun, termasuk yang tidak memiliki pengetahuan teknis. Anda hanya berperan sebagai penghubung klien.",
              },
              {
                q: "Apakah ada biaya pendaftaran atau deposit awal?",
                a: "Tidak ada. Program reseller Heroic sepenuhnya gratis tanpa biaya pendaftaran, deposit, atau kewajiban penjualan minimum.",
              },
              {
                q: "Kapan dan bagaimana komisi dibayarkan?",
                a: "Komisi akan ditransfer maksimal 2 hari kerja setelah klien menyelesaikan pembayaran penuh atas proyek yang berhasil didealkan.",
              },
              {
                q: "Apakah saya akan mendapatkan materi pendukung?",
                a: "Ya. Anda akan memperoleh materi promosi resmi, template penawaran, dan panduan komunikasi untuk membantu proses penjualan.",
              },
              {
                q: "Bisakah saya menggunakan nama brand sendiri saat menawarkan jasa?",
                a: "Bisa. Kami mendukung sistem white-label sehingga Anda dapat menjual layanan atas nama brand atau agency Anda sendiri.",
              },
              {
                q: "Bagaimana cara memantau progres proyek klien saya?",
                a: "Setiap klien yang Anda referensikan akan mendapatkan laporan progres berkala, dan Anda akan selalu diinformasikan status pengerjaannya.",
              },
              {
                q: "Apakah saya bisa menjadi reseller lebih dari satu proyek?",
                a: "Tentu bisa. Tidak ada batasan jumlah klien atau proyek yang dapat Anda referensikan.",
              },
              {
                q: "Apakah komisi berlaku untuk repeat order klien?",
                a: "Ya. Jika klien Anda melakukan pemesanan ulang dan masih dalam periode kerja sama, komisi tetap berlaku sesuai kesepakatan.",
              },
              {
                q: "Apakah ada kontrak jangka panjang yang mengikat?",
                a: "Tidak. Kerja sama bersifat fleksibel tanpa kontrak jangka panjang yang memberatkan.",
              },
              {
                q: "Bagaimana jika klien membatalkan proyek?",
                a: "Jika proyek dibatalkan sebelum pembayaran dilakukan, maka komisi belum dapat diproses karena mengikuti status pembayaran klien.",
              },
              {
                q: "Apakah program ini cocok untuk mahasiswa atau karyawan?",
                a: "Sangat cocok. Program ini fleksibel dan dapat dijalankan sebagai penghasilan sampingan tanpa mengganggu aktivitas utama.",
              },
              {
                q: "Bagaimana jika klien membutuhkan penjelasan teknis mendalam?",
                a: "Tim Heroic siap membantu. Anda dapat menghubungkan klien langsung dengan tim kami untuk diskusi teknis lanjutan.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border p-6 cursor-pointer transition hover:border-primary/40"
              >
                <summary className="flex justify-between items-center font-semibold text-lg">
                  {item.q}
                  <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                    ⌄
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* ASSETS */}
        <div className="relative mb-32 perspective-[1200px]">
          
          {/* Glow layer */}
          <div className="absolute inset-0 -z-10 scale-95 rounded-3xl bg-primary/30 blur-3xl" />

          {/* Card 3D */}
          <div className="group relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)] transform-gpu transition-all duration-500 hover:-translate-y-2 hover:rotate-x-3 hover:rotate-y-3">
            
            {/* Floating Icon */}
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 shadow-lg shadow-primary/30 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
              <Download className="h-10 w-10 text-primary drop-shadow" />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-extrabold mb-4">
              Asset Promosi Reseller
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Dapatkan materi promosi profesional berupa banner, copywriting,
              dan media pendukung untuk meningkatkan konversi penjualan Anda.
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-primary shadow-xl shadow-primary/40 hover:scale-105 transition"
            >
              <Link
                href="https://drive.google.com/drive/folders/1FYQ2ie5GCLL7SGCjlxvAq_QQgBvi02TD?usp=sharing"
                target="_blank"
              >
                Download Asset
              </Link>
            </Button>
          </div>
        </div>


        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-primary to-green-500 p-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Kerja Sama?
          </h2>
          <Button asChild size="lg" className="bg-white text-primary">
            <Link href="/contact">
              Konsultasi Gratis
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}

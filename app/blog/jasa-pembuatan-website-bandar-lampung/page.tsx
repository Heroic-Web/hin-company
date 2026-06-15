import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title: "Layanan Digital Profesional HINAI Tech | PT Heroic Inovasi Nusantara",
  description:
    "HINAI Tech menyediakan layanan website, aplikasi Android/iOS, game, AR/VR, SEO, branding, UI/UX, dan AI solutions untuk bisnis modern di Indonesia.",
  keywords: [
    "Jasa Website",
    "Jasa Aplikasi Android",
    "Jasa Aplikasi iOS",
    "AR VR Development",
    "Game Development Indonesia",
    "SEO Agency",
    "HINAI Tech",
    "PT Heroic Inovasi Nusantara",
  ],
}

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        <main className="pt-32 pb-24">
          <article className="max-w-4xl mx-auto px-6">

            {/* HEADER */}
            <header className="space-y-6 mb-12">
              <span className="inline-flex px-4 py-1 rounded-full bg-black text-white text-sm">
                HINAI Tech • PT Heroic Inovasi Nusantara
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Layanan Digital Profesional untuk Transformasi Bisnis Modern
              </h1>

              <p className="text-gray-600 leading-relaxed text-justify text-lg">
                HINAI Tech adalah perusahaan teknologi di bawah PT Heroic Inovasi Nusantara
                yang berfokus pada pengembangan solusi digital end-to-end. Kami membantu bisnis
                dari tahap awal hingga scale-up melalui teknologi modern seperti website,
                aplikasi mobile, AI system, AR/VR, hingga branding dan SEO profesional.
              </p>
            </header>

            {/* CONTENT */}
            <div className="space-y-14 text-gray-700 leading-relaxed text-justify">

              {/* WEBSITE */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Jasa Pembuatan Website</h2>

                <p>
                  Kami membangun website modern dengan teknologi terbaru seperti Next.js,
                  Tailwind CSS, dan server-side rendering untuk memastikan website cepat,
                  aman, dan SEO friendly. Website bukan hanya tampilan, tetapi aset bisnis
                  yang menghasilkan leads dan penjualan.
                </p>

                <p className="mt-3">
                  Cocok untuk: UMKM, perusahaan, sekolah, startup, hingga instansi pemerintah.
                </p>
              </section>

              {/* MOBILE APP */}
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Jasa Pembuatan Aplikasi Android & iOS
                </h2>

                <p>
                  Kami mengembangkan aplikasi mobile native dan cross-platform untuk kebutuhan
                  bisnis modern. Mulai dari aplikasi marketplace, edukasi, keuangan, hingga
                  sistem internal perusahaan.
                </p>

                <p className="mt-3">
                  Teknologi yang digunakan: Flutter, React Native, Kotlin, Swift.
                </p>
              </section>

              {/* GAME DEV */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Game Development</h2>

                <p>
                  HINAI Tech juga mengembangkan game interaktif untuk edukasi, hiburan,
                  dan marketing. Game dapat digunakan sebagai media branding yang lebih
                  engaging dan viral.
                </p>

                <p>
                  Jenis game: 2D game, 3D game, edukasi, simulasi bisnis, hingga gamification system.
                </p>
              </section>

              {/* AR VR */}
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Jasa Pembuatan Aplikasi AR / VR
                </h2>

                <p>
                  Teknologi Augmented Reality (AR) dan Virtual Reality (VR) digunakan
                  untuk menciptakan pengalaman digital yang imersif. Cocok untuk edukasi,
                  properti, marketing, dan industri kreatif.
                </p>

                <p>
                  Kami membangun AR product preview, virtual tour, dan simulasi interaktif 3D.
                </p>
              </section>

              {/* SEO WRITING */}
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Jasa Penulisan Artikel SEO
                </h2>

                <p>
                  Kami menyediakan layanan konten SEO yang membantu website Anda muncul
                  di halaman pertama Google. Artikel dibuat berdasarkan riset keyword,
                  struktur SEO, dan strategi konten marketing.
                </p>

                <p>
                  Layanan: blog SEO, product description, landing page copy, dan content strategy.
                </p>
              </section>

              {/* AI SOLUTIONS */}
              <section>
                <h2 className="text-2xl font-bold mb-4">AI Solutions & Automation</h2>

                <p>
                  Kami membangun sistem berbasis AI untuk membantu bisnis bekerja lebih efisien.
                  Termasuk chatbot, automation workflow, data analysis, dan machine learning system.
                </p>

                <p>
                  Tujuan utama: mengurangi biaya operasional dan meningkatkan produktivitas bisnis.
                </p>
              </section>

              {/* BRANDING */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Branding & UI/UX Design</h2>

                <p>
                  Branding adalah identitas bisnis. Kami membantu menciptakan desain visual
                  yang profesional, modern, dan sesuai target market.
                </p>

                <p>
                  Layanan: logo design, UI/UX aplikasi, company profile design, hingga marketing assets.
                </p>
              </section>

              {/* WHY CHOOSE US */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Mengapa Memilih HINAI Tech?</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Tim profesional di bidang software engineering & design</li>
                  <li>Teknologi modern + AI integration</li>
                  <li>Fokus pada hasil bisnis, bukan hanya tampilan</li>
                  <li>SEO & performance optimization</li>
                  <li>Support & maintenance jangka panjang</li>
                  <li>Harga fleksibel untuk UMKM hingga enterprise</li>
                </ul>
              </section>

              {/* BUSINESS VALUE */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Nilai yang Kami Berikan</h2>

                <p>
                  HINAI Tech tidak hanya menjual jasa, tetapi membangun ekosistem digital
                  untuk pertumbuhan bisnis jangka panjang. Kami memastikan setiap produk
                  digital mampu menghasilkan value nyata seperti peningkatan penjualan,
                  efisiensi operasional, dan branding yang kuat.
                </p>
              </section>

              {/* CONCLUSION */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>

                <p>
                  HINAI Tech (PT Heroic Inovasi Nusantara) adalah partner teknologi
                  untuk bisnis modern yang ingin berkembang di era digital. Dengan
                  layanan lengkap mulai dari website, aplikasi, AI, hingga branding,
                  kami membantu bisnis Anda naik ke level berikutnya.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-16 p-10 border rounded-2xl text-center bg-gray-50">
              <h3 className="text-3xl font-bold">
                Siap Bangun Sistem Digital Bisnis Anda?
              </h3>

              <p className="text-gray-600 mt-4">
                Konsultasikan kebutuhan Anda bersama HINAI Tech sekarang.
              </p>

              <Link
                href="https://wa.me/6282144137914"
                className="inline-block mt-6 px-8 py-4 bg-black text-white rounded-xl"
              >
                Konsultasi Gratis
              </Link>
            </div>

          </article>
        </main>
      </div>
    </LanguageProvider>
  )
}
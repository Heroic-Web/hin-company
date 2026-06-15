import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title: "AI Automation untuk Bisnis Kecil | Cara Kerja & Manfaat Lengkap | HINAI Tech",
  description:
    "Panduan lengkap AI automation untuk bisnis kecil: cara kerja, manfaat, contoh implementasi, dan bagaimana meningkatkan efisiensi bisnis dengan teknologi AI.",
  keywords: [
    "AI Automation",
    "Bisnis Kecil",
    "Otomatisasi Bisnis",
    "HINAI Tech",
    "PT Heroic Inovasi Nusantara",
    "AI untuk UMKM",
  ],
  openGraph: {
    title: "AI Automation untuk Bisnis Kecil",
    description:
      "Panduan lengkap penggunaan AI untuk otomatisasi bisnis kecil dan UMKM.",
    images: ["/blog/ai-automation-business.jpg"],
  },
}

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        <main className="pt-32 pb-24">
          <article className="max-w-4xl mx-auto px-6">

            {/* HERO */}
            <header className="space-y-6 mb-14">
              <span className="inline-flex px-4 py-1 rounded-full bg-black text-white text-sm">
                HINAI Tech • PT Heroic Inovasi Nusantara
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                AI Automation untuk Bisnis Kecil - Cara Kerja & Manfaat Lengkap
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Artificial Intelligence (AI) bukan lagi teknologi masa depan,
                tetapi sudah menjadi bagian penting dalam operasional bisnis saat ini.
                AI automation membantu bisnis kecil dan UMKM bekerja lebih cepat,
                lebih efisien, dan lebih hemat biaya tanpa harus menambah banyak tenaga kerja.
              </p>
            </header>

            {/* IMAGE */}
            <img
              src="/blog/ai-automation-business.jpg"
              alt="AI Automation HINAI Tech"
              className="w-full rounded-2xl shadow-md mb-14"
            />

            {/* CONTENT */}
            <div className="space-y-10 text-gray-700 leading-relaxed text-justify">

              <section>
                <h2 className="text-2xl font-bold">
                  Apa Itu AI Automation?
                </h2>
                <p>
                  AI Automation adalah penggunaan kecerdasan buatan untuk menjalankan
                  tugas-tugas bisnis secara otomatis tanpa intervensi manusia secara
                  terus-menerus. Contohnya seperti chatbot, email otomatis, analisis data,
                  hingga sistem rekomendasi pelanggan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Kenapa Bisnis Kecil Membutuhkan AI Automation?
                </h2>

                <p>
                  Banyak bisnis kecil mengalami masalah keterbatasan waktu, tenaga,
                  dan efisiensi. AI automation membantu menyelesaikan masalah tersebut
                  dengan cara:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Menghemat waktu operasional</li>
                  <li>Mengurangi biaya karyawan</li>
                  <li>Respons pelanggan lebih cepat</li>
                  <li>Meningkatkan produktivitas</li>
                  <li>Minim human error</li>
                </ul>
              </section>

              {/* TABLE */}
              <section>
                <h2 className="text-2xl font-bold">
                  Contoh AI Automation dalam Bisnis
                </h2>

                <div className="overflow-x-auto border rounded-xl mt-4">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Area Bisnis</th>
                        <th className="p-4">AI Automation</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t">
                        <td className="p-4">Customer Service</td>
                        <td className="p-4">Chatbot WhatsApp otomatis</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Marketing</td>
                        <td className="p-4">Email & iklan otomatis</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Penjualan</td>
                        <td className="p-4">Sistem rekomendasi produk</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4">Administrasi</td>
                        <td className="p-4">Otomatisasi laporan & data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Cara Kerja AI Automation
                </h2>

                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <b>Input Data</b> – Sistem menerima data dari pelanggan atau bisnis.
                  </li>
                  <li>
                    <b>Analisis AI</b> – AI memproses data untuk mengambil keputusan.
                  </li>
                  <li>
                    <b>Eksekusi Otomatis</b> – Sistem menjalankan tindakan otomatis.
                  </li>
                  <li>
                    <b>Output Hasil</b> – Hasil diberikan ke pengguna atau sistem bisnis.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Dampak AI Automation untuk UMKM
                </h2>

                <p>
                  UMKM yang menggunakan AI automation dapat meningkatkan efisiensi
                  hingga 40–70%. Hal ini karena pekerjaan manual yang berulang
                  dapat digantikan oleh sistem otomatis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Solusi AI Automation dari HINAI Tech
                </h2>

                <p>
                  HINAI Tech (PT Heroic Inovasi Nusantara) menyediakan solusi
                  AI automation untuk bisnis kecil dan menengah, termasuk:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Chatbot WhatsApp AI</li>
                  <li>Automasi marketing</li>
                  <li>Sistem CRM otomatis</li>
                  <li>Dashboard bisnis pintar</li>
                  <li>Integrasi website + AI system</li>
                </ul>
              </section>

              {/* CHECKLIST */}
              <section>
                <h2 className="text-2xl font-bold">
                  Checklist Implementasi AI untuk Bisnis
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {[
                    "Identifikasi proses manual",
                    "Pilih sistem AI yang sesuai",
                    "Integrasi dengan website",
                    "Testing workflow otomatis",
                    "Monitoring performa",
                    "Optimasi berkala",
                  ].map((item) => (
                    <div key={item} className="border rounded-lg p-4">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold">Kesimpulan</h2>

                <p>
                  AI automation bukan hanya untuk perusahaan besar. Saat ini,
                  bisnis kecil dan UMKM juga bisa memanfaatkan teknologi ini
                  untuk meningkatkan efisiensi, menghemat biaya, dan meningkatkan
                  penjualan. Dengan dukungan HINAI Tech, transformasi digital
                  bisnis Anda menjadi lebih mudah dan terarah.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-16 p-10 border rounded-2xl bg-gray-50 text-center">
              <h3 className="text-3xl font-bold">
                Siap Menggunakan AI untuk Bisnis Anda?
              </h3>

              <p className="text-gray-600 mt-4">
                Konsultasikan implementasi AI Automation bersama HINAI Tech sekarang.
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
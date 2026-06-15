import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title:
    "Apa Itu Landing Page dan Mengapa Bisnis Anda Membutuhkannya | HINAI Tech",
  description:
    "Panduan lengkap landing page: fungsi, manfaat, cara kerja, strategi konversi, dan kenapa bisnis wajib memilikinya untuk meningkatkan penjualan.",
  keywords: [
    "Landing Page",
    "Digital Marketing",
    "Konversi Penjualan",
    "HINAI Tech",
    "PT Heroic Inovasi Nusantara",
    "Meta Ads Landing Page",
  ],
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
                Apa Itu Landing Page dan Mengapa Bisnis Anda Membutuhkannya?
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Dalam dunia digital marketing modern, landing page bukan sekadar
                halaman website biasa, tetapi merupakan mesin konversi yang dirancang
                khusus untuk mengubah pengunjung menjadi pelanggan. Hampir semua
                bisnis yang sukses dalam iklan digital menggunakan landing page
                sebagai inti strategi marketing mereka.
              </p>
            </header>

            {/* IMAGE */}
            <img
              src="/Jasa Landing Page/1.png"
              alt="Landing Page HINAI Tech"
              className="w-full rounded-2xl shadow-md mb-14"
            />

            {/* CONTENT */}
            <div className="space-y-12 text-gray-700 leading-relaxed text-justify">

              {/* DEFINITION */}
              <section>
                <h2 className="text-2xl font-bold">Apa Itu Landing Page?</h2>
                <p>
                  Landing page adalah halaman website yang dibuat dengan satu tujuan
                  spesifik, seperti menjual produk, mengumpulkan data pelanggan, atau
                  mengarahkan pengunjung untuk melakukan tindakan tertentu (CTA).
                  Tidak seperti website utama yang memiliki banyak menu dan informasi,
                  landing page fokus hanya pada satu tujuan agar tingkat konversi
                  menjadi lebih tinggi.
                </p>
              </section>

              {/* WHY IMPORTANT */}
              <section>
                <h2 className="text-2xl font-bold">Kenapa Landing Page Sangat Penting?</h2>

                <p>
                  Banyak bisnis gagal dalam digital marketing bukan karena iklannya
                  buruk, tetapi karena mereka mengarahkan traffic ke halaman yang
                  salah. Landing page mengatasi masalah ini dengan cara menciptakan
                  pengalaman fokus tanpa distraksi.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Meningkatkan conversion rate hingga 3x lebih tinggi</li>
                  <li>Mengurangi biaya iklan (CPC lebih efisien)</li>
                  <li>Fokus pada satu penawaran (produk/layanan)</li>
                  <li>Mempermudah tracking campaign marketing</li>
                  <li>Ideal untuk Meta Ads & Google Ads</li>
                </ul>
              </section>

              {/* FUNNEL */}
              <section>
                <h2 className="text-2xl font-bold">Cara Kerja Landing Page dalam Funnel Marketing</h2>

                <p>
                  Landing page bekerja sebagai bagian dari funnel marketing:
                </p>

                <ol className="list-decimal pl-6 space-y-2">
                  <li><b>Attention</b> – Pengguna melihat iklan</li>
                  <li><b>Interest</b> – Pengguna klik ke landing page</li>
                  <li><b>Desire</b> – Pengguna tertarik dengan penawaran</li>
                  <li><b>Action</b> – Pengguna melakukan pembelian / kontak</li>
                </ol>
              </section>

              {/* TABLE */}
              <section>
                <h2 className="text-2xl font-bold">Landing Page vs Website Biasa</h2>

                <div className="overflow-x-auto border rounded-xl mt-4">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Aspek</th>
                        <th className="p-4">Website</th>
                        <th className="p-4">Landing Page</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t">
                        <td className="p-4">Tujuan</td>
                        <td className="p-4">Informasi lengkap</td>
                        <td className="p-4 font-semibold">Konversi</td>
                      </tr>

                      <tr className="border-t">
                        <td className="p-4">Fokus</td>
                        <td className="p-4">Multi halaman</td>
                        <td className="p-4 font-semibold">Single goal</td>
                      </tr>

                      <tr className="border-t">
                        <td className="p-4">Distraksi</td>
                        <td className="p-4">Tinggi</td>
                        <td className="p-4 font-semibold">Rendah</td>
                      </tr>

                      <tr className="border-t">
                        <td className="p-4">Konversi</td>
                        <td className="p-4">Rendah</td>
                        <td className="p-4 font-semibold">Tinggi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* PSYCHOLOGY */}
              <section>
                <h2 className="text-2xl font-bold">Psikologi di Balik Landing Page</h2>

                <p>
                  Landing page yang efektif menggunakan prinsip psikologi marketing seperti:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Social proof (testimoni)</li>
                  <li>Urgency (penawaran terbatas)</li>
                  <li>Trust signal (logo, brand, sertifikat)</li>
                  <li>Clear CTA (Call To Action)</li>
                  <li>Simple decision making</li>
                </ul>
              </section>

              {/* USE CASE */}
              <section>
                <h2 className="text-2xl font-bold">Contoh Penggunaan Landing Page</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Iklan Meta Ads untuk produk UMKM</li>
                  <li>Promosi jasa digital marketing</li>
                  <li>Penjualan course online</li>
                  <li>Lead generation bisnis properti</li>
                  <li>Registrasi event atau webinar</li>
                </ul>
              </section>

              {/* SOLUTION */}
              <section>
                <h2 className="text-2xl font-bold">Solusi Landing Page dari HINAI Tech</h2>

                <p>
                  HINAI Tech (PT Heroic Inovasi Nusantara) membangun landing page
                  modern berbasis Next.js yang cepat, SEO friendly, dan dirancang
                  khusus untuk meningkatkan konversi bisnis Anda.
                </p>
              </section>

              {/* CONCLUSION */}
              <section>
                <h2 className="text-2xl font-bold">Kesimpulan</h2>

                <p>
                  Landing page bukan hanya halaman website, tetapi alat utama
                  dalam digital marketing modern. Tanpa landing page, bisnis
                  Anda akan kehilangan banyak peluang konversi dari traffic
                  berbayar maupun organik. Dengan strategi yang tepat dan
                  implementasi profesional dari HINAI Tech, landing page dapat
                  menjadi mesin penjualan otomatis untuk bisnis Anda.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-16 p-10 border rounded-2xl bg-gray-50 text-center">
              <h3 className="text-3xl font-bold">
                Siap Meningkatkan Penjualan Anda?
              </h3>

              <p className="text-gray-600 mt-4">
                Bangun landing page profesional bersama HINAI Tech sekarang juga.
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
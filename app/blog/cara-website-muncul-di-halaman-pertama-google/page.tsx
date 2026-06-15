import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title: "Cara Website Muncul di Halaman Pertama Google (Panduan SEO Lengkap) | HINAI Tech",
  description:
    "Panduan lengkap cara membuat website muncul di halaman pertama Google dengan teknik SEO modern, strategi konten, dan optimasi teknis dari HINAI Tech.",
  keywords: [
    "SEO Google",
    "Halaman pertama Google",
    "Cara ranking Google",
    "HINAI Tech SEO",
    "PT Heroic Inovasi Nusantara",
    "Optimasi website",
  ],
  openGraph: {
    title: "Cara Website Muncul di Halaman Pertama Google",
    description:
      "Panduan SEO lengkap untuk meningkatkan ranking website di Google.",
    images: ["/blog/seo-google-first-page.jpg"],
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
                Cara Website Muncul di Halaman Pertama Google
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Banyak pemilik bisnis membuat website, tetapi tidak mendapatkan
                pengunjung dari Google. Hal ini terjadi karena website belum
                dioptimasi dengan teknik SEO yang benar. Dalam artikel ini,
                HINAI Tech akan menjelaskan secara lengkap bagaimana cara
                membuat website muncul di halaman pertama Google secara organik
                dan berkelanjutan.
              </p>
            </header>

            {/* IMAGE */}
            <img
              src="/artikel/seo-ebook.png "
              alt="SEO Google HINAI Tech"
              className="w-full rounded-2xl shadow-md mb-14"
            />

            {/* CONTENT */}
            <div className="space-y-10 text-gray-700 leading-relaxed text-justify">

              <section>
                <h2 className="text-2xl font-bold">
                  Apa Itu Ranking di Google?
                </h2>
                <p>
                  Ranking Google adalah posisi website Anda pada hasil pencarian.
                  Semakin tinggi posisi website Anda, semakin besar peluang
                  mendapatkan pengunjung. Posisi pertama di Google mendapatkan
                  lebih dari 30% total klik pencarian.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Faktor Utama Website Masuk Halaman Pertama
                </h2>

                <div className="overflow-x-auto border rounded-xl mt-4">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4">Faktor</th>
                        <th className="p-4">Penjelasan</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t">
                        <td className="p-4">SEO On-Page</td>
                        <td className="p-4">Optimasi keyword & struktur konten</td>
                      </tr>

                      <tr className="border-t">
                        <td className="p-4">Kecepatan Website</td>
                        <td className="p-4">Website harus cepat diakses</td>
                      </tr>

                      <tr className="border-t">
                        <td className="p-4">Backlink</td>
                        <td className="p-4">Tautan dari website lain yang relevan</td>
                      </tr>

                      <tr className="border-t">
                        <td className="p-4">Konten Berkualitas</td>
                        <td className="p-4">Artikel panjang, relevan, dan informatif</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Cara Agar Website Muncul di Google
                </h2>

                <ol className="space-y-4 list-decimal pl-6">
                  <li>
                    <b>Riset Keyword</b> : Tentukan kata kunci yang dicari banyak orang.
                  </li>
                  <li>
                    <b>Optimasi Judul</b> : Gunakan keyword di judul utama.
                  </li>
                  <li>
                    <b>Buat Konten Panjang</b> : Minimal 800–1500 kata.
                  </li>
                  <li>
                    <b>Gunakan Heading</b> : H1, H2, H3 harus terstruktur.
                  </li>
                  <li>
                    <b>Optimasi Gambar</b> : Gunakan alt text SEO.
                  </li>
                  <li>
                    <b>Internal Link</b> : Hubungkan antar halaman website.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Kesalahan yang Membuat Website Tidak Ranking
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Konten terlalu pendek</li>
                  <li>Tidak menggunakan keyword</li>
                  <li>Website lambat</li>
                  <li>Tidak mobile friendly</li>
                  <li>Tidak ada update konten</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Solusi SEO dari HINAI Tech
                </h2>

                <p>
                  HINAI Tech (PT Heroic Inovasi Nusantara) menyediakan layanan
                  SEO profesional untuk membantu website bisnis naik ke halaman
                  pertama Google. Kami menggunakan kombinasi strategi:
                  technical SEO, content SEO, dan digital authority building.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">
                  Checklist SEO Website
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Keyword research",
                    "Meta title & description",
                    "Optimasi gambar",
                    "Mobile responsive",
                    "Internal linking",
                    "Kecepatan website",
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
                  Agar website muncul di halaman pertama Google, Anda harus
                  menggabungkan SEO teknis, konten berkualitas, dan strategi
                  jangka panjang. Tanpa itu, website Anda akan sulit bersaing.
                  Dengan bantuan HINAI Tech, bisnis Anda dapat memiliki website
                  yang tidak hanya tampil, tetapi juga menghasilkan traffic
                  dan penjualan nyata.
                </p>
              </section>
                  {/* ADVANCED SEO SECTION */}
                <section>
                <h2 className="text-2xl font-bold">
                    Strategi SEO Lanjutan untuk Mendominasi Google 2026
                </h2>

                <p>
                    Setelah memahami dasar SEO, langkah berikutnya adalah menguasai strategi lanjutan. 
                    Di era algoritma Google 2026, website tidak hanya dinilai dari keyword, tetapi juga dari kualitas pengalaman pengguna, kredibilitas, dan struktur data.
                </p>

                <div className="overflow-x-auto border rounded-xl mt-4">
                    <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="p-4">Strategi</th>
                        <th className="p-4">Penjelasan</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-t">
                        <td className="p-4">EEAT (Experience, Expertise, Authority, Trust)</td>
                        <td className="p-4">Google menilai apakah konten dibuat oleh sumber terpercaya dan berpengalaman</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">Schema Markup</td>
                        <td className="p-4">Struktur data agar Google lebih mudah memahami isi website</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">Internal Linking Strategy</td>
                        <td className="p-4">Menghubungkan halaman untuk meningkatkan SEO score</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">User Experience (UX)</td>
                        <td className="p-4">Semakin nyaman website digunakan, semakin tinggi ranking</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">Core Web Vitals</td>
                        <td className="p-4">Mengukur kecepatan, interaksi, dan stabilitas website</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </section>

                {/* GOOGLE RANKING FACTORS */}
                <section>
                <h2 className="text-2xl font-bold">
                    Faktor Ranking Google Paling Penting Saat Ini
                </h2>

                <p>
                    Google tidak lagi hanya melihat keyword, tetapi juga perilaku pengguna dan kualitas website secara keseluruhan.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Durasi pengunjung di website (dwell time)</li>
                    <li>Click Through Rate (CTR)</li>
                    <li>Bounce rate rendah</li>
                    <li>Kualitas backlink (bukan jumlah)</li>
                    <li>Relevansi konten terhadap search intent</li>
                </ul>
                </section>

                {/* CONTENT STRATEGY */}
                <section>
                <h2 className="text-2xl font-bold">
                    Strategi Konten SEO yang Benar
                </h2>

                <p>
                    Banyak website gagal ranking karena salah strategi konten. Berikut struktur konten SEO yang benar:
                </p>

                <div className="overflow-x-auto border rounded-xl mt-4">
                    <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="p-4">Tahap</th>
                        <th className="p-4">Penjelasan</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-t">
                        <td className="p-4">1. Keyword Research</td>
                        <td className="p-4">Menentukan kata kunci dengan volume tinggi</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">2. Search Intent</td>
                        <td className="p-4">Memahami tujuan pencarian user</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">3. Content Structuring</td>
                        <td className="p-4">Mengatur heading dan alur artikel</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">4. Optimization</td>
                        <td className="p-4">Optimasi gambar, meta, dan internal link</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">5. Distribution</td>
                        <td className="p-4">Menyebarkan konten ke media sosial & backlink</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </section>

                {/* TECHNICAL SEO */}
                <section>
                <h2 className="text-2xl font-bold">
                    Technical SEO yang Wajib Dimiliki Website Modern
                </h2>

                <p>
                    Tanpa technical SEO yang baik, konten bagus pun tidak akan maksimal di Google.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>HTTPS aktif untuk keamanan</li>
                    <li>Mobile-first responsive design</li>
                    <li>Optimasi kecepatan loading</li>
                    <li>Clean URL structure</li>
                    <li>XML sitemap & robots.txt</li>
                    <li>Canonical tag untuk menghindari duplikat</li>
                </ul>
                </section>

                {/* CASE STUDY */}
                <section>
                <h2 className="text-2xl font-bold">
                    Studi Kasus SEO Website Bisnis
                </h2>

                <p>
                    Banyak bisnis lokal yang awalnya tidak mendapatkan traffic, setelah menerapkan SEO yang benar, mengalami peningkatan signifikan.
                </p>

                <div className="overflow-x-auto border rounded-xl mt-4">
                    <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="p-4">Sebelum SEO</th>
                        <th className="p-4">Setelah SEO</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-t">
                        <td className="p-4">0–100 visitor/hari</td>
                        <td className="p-4">1.000–10.000 visitor/hari</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">Tidak ada ranking</td>
                        <td className="p-4">Page 1 Google</td>
                        </tr>

                        <tr className="border-t">
                        <td className="p-4">Tidak ada leads</td>
                        <td className="p-4">Puluhan leads harian</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </section>

                {/* FINAL INSIGHT */}
                <section>
                <h2 className="text-2xl font-bold">
                    Insight Penting SEO 2026
                </h2>

                <p>
                    SEO bukan lagi tentang "menipu Google", tetapi tentang memberikan nilai terbaik untuk user. 
                    Website yang cepat, informatif, dan dipercaya akan selalu menang dalam jangka panjang.
                </p>

                <p>
                    HINAI Tech membantu bisnis membangun sistem SEO yang tidak hanya ranking, tetapi juga menghasilkan konversi nyata.
                </p>
                </section>
            </div>

            {/* CTA */}
            <div className="mt-16 p-10 border rounded-2xl bg-gray-50 text-center">
              <h3 className="text-3xl font-bold">
                Ingin Website Anda Ranking di Google?
              </h3>

              <p className="text-gray-600 mt-4">
                Konsultasikan SEO website Anda bersama HINAI Tech sekarang.
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
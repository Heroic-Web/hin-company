"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  description: string;
  results: string[];
  services: string[];
};

const categories = [
  "All",
  "Website",
  "Landing Page",
  "Design",
  "SEO",
  "Artikel",
  "Digital Ads",
  "Social Media",
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Corporate Website Modern – PT Artha Nusantara",
    category: "Website",
    image: "/portfolio/web1.jpg",
    client: "PT Artha Nusantara",
    year: "2024",
    description:
      "Website company profile premium dengan struktur SEO kuat, performa tinggi, serta desain modern minimalis yang meningkatkan kredibilitas bisnis.",
    results: [
      "Traffic naik 210%",
      "Lead meningkat 3x lipat",
      "Durasi kunjungan naik 48%",
    ],
    services: ["Website Development", "UI/UX", "Technical SEO"],
  },
  {
    id: 2,
    title: "Landing Page High Conversion – Brand Skincare",
    category: "Landing Page",
    image: "/portfolio/lp1.jpg",
    client: "Glow Beauty",
    year: "2023",
    description:
      "Landing page berbasis strategi copywriting persuasif dengan struktur AIDA dan optimasi konversi.",
    results: [
      "Conversion rate 13%",
      "ROAS meningkat 2.5x",
      "CPL turun 37%",
    ],
    services: ["Landing Page", "Copywriting", "Conversion Optimization"],
  },
  {
    id: 3,
    title: "Brand Identity & Logo – Klinik Medika",
    category: "Design",
    image: "/portfolio/design1.jpg",
    client: "Klinik Medika Sehat",
    year: "2024",
    description:
      "Brand identity profesional dengan guideline lengkap untuk menjaga konsistensi visual.",
    results: [
      "Brand awareness meningkat",
      "Visual lebih premium",
      "Konsistensi di semua media",
    ],
    services: ["Logo Design", "Branding", "Visual Identity"],
  },
  {
    id: 4,
    title: "SEO Optimization – Portal Edukasi",
    category: "SEO",
    image: "/portfolio/seo1.jpg",
    client: "EduSmart",
    year: "2024",
    description:
      "Optimasi SEO teknikal dan konten untuk meningkatkan ranking Google.",
    results: [
      "Top 3 Google untuk 12 keyword",
      "Traffic organik naik 180%",
      "Bounce rate turun 32%",
    ],
    services: ["On Page SEO", "Technical SEO", "Keyword Strategy"],
  },
  {
    id: 5,
    title: "Artikel SEO Blog – Industri Properti",
    category: "Artikel",
    image: "/portfolio/seo1.jpg",
    client: "Properti Indonesia",
    year: "2023",
    description:
      "Penulisan artikel SEO dengan riset keyword dan struktur SEO-friendly.",
    results: [
      "Page 1 Google dalam 3 bulan",
      "Organic leads stabil",
      "Authority meningkat",
    ],
    services: ["SEO Article Writing", "Content Strategy"],
  },
];

export default function PortfolioPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-white transition-all duration-300">

      {/* ================= HERO SPLIT SECTION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Portfolio Heroic Web
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Kami tidak hanya membuat website. Kami membangun sistem digital
              yang menghasilkan konversi, meningkatkan kredibilitas, dan
              memperkuat branding bisnis Anda. Setiap project dirancang dengan
              pendekatan strategis dan visual modern.
            </p>
            <div className="flex gap-4">
              <Link
                href="/services/web"
                className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Pesan Website
              </Link>
              <Link
                href="/contact"
                className="border px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>

         
          {/* RIGHT HERO IMAGE */}
            <div className="relative h-80 sm:h-96 w-full">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1">

                <Image
                src="/portfolio-hero.png"
                alt="Portfolio Hero"
                fill
                priority
                className="object-contain sm:object-cover"
                />

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none" />

            </div>
            </div>

        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Jelajahi Berdasarkan Layanan
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-200 dark:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO GRID 3D ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:-rotate-1 bg-white dark:bg-gray-900"
            >
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.client} • {item.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                <button
                  onClick={() =>
                    setActiveId(activeId === item.id ? null : item.id)
                  }
                  className="text-black dark:text-white font-semibold hover:underline"
                >
                  {activeId === item.id
                    ? "Tutup Detail"
                    : "Lihat Hasil & Impact"}
                </button>

                {activeId === item.id && (
                  <div className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {item.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.services.map((s, i) => (
                        <span
                          key={i}
                          className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full text-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

{/* ================= STRATEGY COPYWRITING ================= */}
<section className="py-20 md:py-24 px-4 sm:px-6 bg-gray-50 dark:bg-gray-950">
  <div className="max-w-6xl mx-auto space-y-14 md:space-y-20">

    {/* HEADER */}
    <div className="text-center space-y-6 px-2">
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
        Mengapa Strategi Heroic Web Berbeda?
      </h2>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Kami tidak sekadar membuat tampilan visual yang menarik. Setiap project
        dibangun dengan strategi terukur, pendekatan berbasis data, dan fokus pada
        hasil nyata. Berikut adalah bagaimana kami membangun sistem digital
        yang benar-benar menghasilkan.
      </p>
    </div>

    {/* STRATEGY GRID */}
    <div className="grid md:grid-cols-2 gap-6 md:gap-10">

      {/* STRATEGI DIGITAL */}
      <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
        <div className="mb-4 inline-block bg-gradient-to-r from-black to-gray-700 text-white text-sm px-4 py-1 rounded-full">
          Strategy
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          1. Strategi Digital Berbasis Tujuan Bisnis
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Kami memulai setiap project dengan memahami tujuan utama bisnis Anda:
          apakah untuk meningkatkan leads, memperkuat branding, menaikkan
          penjualan, atau membangun kredibilitas. Dari situ, kami menyusun
          arsitektur website, struktur halaman, dan funnel yang sesuai dengan
          target market.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Contohnya: jika targetnya adalah lead generation, maka kami fokus pada
          halaman landing dengan CTA kuat, formulir strategis, dan positioning
          value proposition yang jelas di atas fold pertama.
        </p>
      </div>

      {/* USER EXPERIENCE */}
      <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
        <div className="mb-4 inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm px-4 py-1 rounded-full">
          User Experience
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          2. Pengalaman Pengguna (User Experience) yang Terstruktur
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          UX bukan hanya soal desain cantik. Kami memastikan navigasi mudah,
          loading cepat, responsif di semua perangkat, serta struktur informasi
          yang tidak membingungkan pengunjung.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Kami menerapkan prinsip:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
            Mobile-first design
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
            Hierarki visual yang jelas
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
            CTA terlihat dalam 3 detik pertama
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
            Struktur konten yang mudah dipindai (scan-friendly)
          </li>
        </ul>
      </div>

      {/* STRUKTUR KONVERSI */}
      <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
        <div className="mb-4 inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm px-4 py-1 rounded-full">
          Conversion
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          3. Struktur Konversi yang Dirancang untuk Closing
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Website tanpa strategi konversi hanyalah brosur digital. Kami
          membangun struktur berbasis AIDA (Attention, Interest, Desire,
          Action) atau funnel konversi modern.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Contoh struktur:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            Headline kuat & value proposition di atas
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            Problem awareness yang relevan dengan target market
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            Social proof / portfolio nyata
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            Benefit-focused copy
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            CTA yang jelas dan berulang secara strategis
          </li>
        </ul>
      </div>

      {/* SEO OPTIMIZATION */}
      <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
        <div className="mb-4 inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-1 rounded-full">
          SEO Optimization
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          4. Optimasi SEO Teknis & Konten
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Kami memastikan website tidak hanya indah, tetapi juga mudah ditemukan
          di Google. Optimasi SEO yang kami lakukan meliputi:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            Struktur heading yang benar (H1-H6)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            Optimasi meta title & meta description
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            Kecepatan loading (Core Web Vitals)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            Schema markup & struktur data
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            Internal linking strategy
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            Riset keyword berdasarkan intent
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Hasilnya bukan hanya ranking, tetapi traffic yang relevan dan siap
          menjadi pelanggan.
        </p>
      </div>

      {/* BRANDING */}
      <div className="md:col-span-2 group bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-10 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
        <div className="mb-4 inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm px-4 py-1 rounded-full">
          Branding Strategy
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          5. Pendekatan Branding yang Kuat & Konsisten
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Branding bukan sekadar logo. Kami membangun persepsi. Mulai dari tone
          komunikasi, visual identity, warna, tipografi, hingga cara brand
          berbicara kepada audiensnya.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Kami memastikan bahwa setiap elemen digital Anda:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            Konsisten di seluruh platform
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            Mencerminkan positioning bisnis
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            Membangun kepercayaan & profesionalitas
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            Berbeda dari kompetitor
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Inilah yang membuat website Heroic Web bukan hanya menarik, tetapi
          memiliki daya tarik psikologis dan kekuatan branding yang tahan lama.
        </p>
      </div>

    </div>

    {/* CLOSING PARAGRAPH */}
    <div className="text-center pt-12 border-t border-gray-200 dark:border-gray-800 px-4">
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Dengan kombinasi strategi bisnis, pengalaman pengguna modern,
        struktur konversi teruji, optimasi SEO menyeluruh, dan branding
        profesional, Heroic Web menghadirkan solusi digital yang bukan hanya
        terlihat bagus — tetapi benar-benar menghasilkan.
      </p>
    </div>

  </div>
</section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Bangun website profesional, landing page konversi tinggi,
            optimasi SEO, desain branding premium, serta artikel SEO
            yang meningkatkan visibilitas bisnis Anda bersama Heroic Web.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/web"
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Pesan Website
            </Link>

            <Link
              href="/services/seo"
              className="border px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Optimasi SEO
            </Link>

            <Link
              href="/services/design"
              className="border px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Jasa Design
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
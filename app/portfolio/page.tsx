"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { id } from "date-fns/locale";
import { title } from "process";

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
  "Application",
  "Design",
  "SEO",
  "Artikel",
  "Digital Ads",
  "Social Media",
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Cyber Security App",
    category: "Website",
    image: "/",
    client: "Internal Project",
    year: "2024",
    description:
      "Robust cyber security application for threat detection and prevention (SQL Injection, XSS, Cross-Site Scripting) with URL Detection, File Detection, and Text Detection features.",
    results: [
      "Threat detection automation",
      "Multi-layer security validation",
      "Improved system vulnerability analysis",
    ],
    services: ["Web App Development", "Cyber Security", "Machine Learning"],
  },
  {
    id: 2,
    title: "SlideShow Creator Tools",
    category: "Website",
    image: "/",
    client: "SaaS Project",
    year: "2024",
    description:
      "User-friendly slideshow creation tool with ready templates and export system built with scalable backend architecture.",
    results: [
      "Automated slide generation",
      "Dockerized deployment",
      "High-speed API processing",
    ],
    services: ["Web Application", "API Development", "Cloud Deployment"],
  },
  {
    id: 3,
    title: "Blog Platform",
    category: "Website",
    image: "/yaedu.png",
    client: "Content Platform",
    year: "2023",
    description:
      "Feature-rich blog platform with authentication system and full content management dashboard.",
    results: [
      "Custom CMS system",
      "Secure authentication",
      "SEO-ready blog structure",
    ],
    services: ["Fullstack Development", "CMS Development"],
  },
  {
    id: 4,
    title: "Travel Agency Website",
    category: "Website",
    image: "/travel.jpeg",
    client: "Travel Company",
    year: "2024",
    description:
      "Modern travel agency website with booking integration and itinerary management system.",
    results: [
      "Integrated booking system",
      "Mobile-first UI",
      "Optimized performance",
    ],
    services: ["Next.js Development", "UI/UX", "Backend Integration"],
  },
  {
    id: 5,
    title: "Ultimate Cyber Protection Suite",
    category: "Website",
    image: "/protectweb.jpeg",
    client: "Security Startup",
    year: "2024",
    description:
      "Comprehensive cyber protection suite designed to enhance online safety with advanced detection algorithms.",
    results: [
      "Real-time monitoring",
      "Advanced threat prevention",
      "Secure system architecture",
    ],
    services: ["Cyber Security System", "Backend Development"],
  },
  {
    id: 6,
    title: "Cyber Protection Tools",
    category: "Application",
    image: "/cytools.jpeg",
    client: "Security Platform",
    year: "2023",
    description:
      "Advanced cyber protection tools for detecting and preventing modern digital threats.",
    results: [
      "Threat pattern recognition",
      "Scalable Flask backend",
      "Vue.js dynamic dashboard",
    ],
    services: ["Web Security", "Dashboard Development"],
  },
  {
    id: 7,
    title: "Seina's Boutique",
    category: "Website",
    image: "/butik.jpeg",
    client: "Fashion Brand",
    year: "2023",
    description:
      "Elegant boutique website with product showcase and integrated shopping cart system.",
    results: [
      "WooCommerce integration",
      "Improved online sales flow",
      "Optimized product layout",
    ],
    services: ["WordPress Development", "E-Commerce Setup"],
  },
  {
    id: 8,
    title: "Book Store Website",
    category: "Website",
    image: "/bookstore.jpeg",
    client: "Online Bookstore",
    year: "2023",
    description:
      "Online bookstore platform with product search and recommendation features.",
    results: [
      "Shopify optimization",
      "Improved product discoverability",
      "Enhanced checkout flow",
    ],
    services: ["Shopify Development", "E-Commerce Optimization"],
  },
  {
    id: 9,
    title: "E-commerce Platform",
    category: "Website",
    image: "/shop.jpeg",
    client: "Retail Brand",
    year: "2023",
    description:
      "Modern online shop with payment integration and inventory management system.",
    results: [
      "Custom payment gateway integration",
      "Inventory automation",
      "Responsive frontend design",
    ],
    services: ["Frontend Development", "E-Commerce System"],
  },
  {
    id: 10,
    title: "AISEO Tools App",
    category: "Application",
    image: "/aiseo.jpeg",
    client: "SEO SaaS",
    year: "2024",
    description:
      "AI-powered SEO tools platform for website optimization and performance tracking.",
    results: [
      "AI-based keyword analysis",
      "SEO automation tools",
      "Performance analytics dashboard",
    ],
    services: ["SEO Tools Development", "AI Integration"],
    },
    {
      id: 11,
      title: "Premium Corporate Fashion Solutions",
      category: "Design",
      image: "/corporate-design.jpeg",
      client: "Corporate Brand",
      year: "2024",
      description:
        "Complete brand identity and visual design system for corporate fashion solutions.",
      results: [
        "Strong brand positioning",
        "Consistent visual identity",
        "Modern corporate look",
      ],
      services: ["Brand Identity", "Figma Design System"],
    },
    {
    id: 12,
    title: "Landing Page SaaS Cyber Monitoring",
    category: "Landing Page",
    image: "/lp-cyber.jpeg",
    client: "SecureWatch",
    year: "2024",
    description:
      "High-converting landing page untuk SaaS cyber monitoring dengan struktur AIDA, visual trust badge, dan funnel lead magnet.",
    results: [
      "Conversion rate 14.8%",
      "CPL turun 42%",
      "Lead masuk 3x lebih cepat",
    ],
    services: ["Landing Page Development", "Copywriting", "Conversion Strategy"],
  },
  {
    id: 13,
    title: "Brand Identity – Tech Startup AI Platform",
    category: "Design",
    image: "/design-ai.jpeg",
    client: "NeuroTech Labs",
    year: "2024",
    description:
      "Complete brand identity system untuk startup AI termasuk logo, typography system, brand color psychology, dan UI design guideline.",
    results: [
      "Brand positioning lebih premium",
      "Visual identity konsisten",
      "Investor-ready presentation",
    ],
    services: ["Brand Strategy", "Logo Design", "Design System"],
  },
  {
    id: 14,
    title: "SEO Optimization – E-Commerce Fashion",
    category: "SEO",
    image: "/",
    client: "Urban Style Co",
    year: "2024",
    description:
      "Optimasi SEO teknikal dan konten untuk meningkatkan organic traffic dan ranking Google di industri fashion.",
    results: [
      "Traffic organik naik 230%",
      "Top 3 Google untuk 18 keyword",
      "Revenue organic naik 2.7x",
    ],
    services: ["Technical SEO", "Keyword Research", "On Page Optimization"],
  },
  {
    id: 15,
    title: "SEO Artikel Series – Industri Properti",
    category: "Artikel",
    image: "/",
    client: "Properti Digital Indonesia",
    year: "2023",
    description:
      "Strategi konten SEO berbasis search intent dengan cluster topic dan internal linking untuk meningkatkan authority domain.",
    results: [
      "Page 1 Google dalam 1 bulan",
      "Organic leads stabil tiap bulan",
      "Domain authority meningkat",
    ],
    services: ["SEO Article Writing", "Content Strategy", "Search Intent Mapping"],
  },
  {
    id: 16,
    title: "Meta Ads Campaign – Skincare Brand",
    category: "Digital Ads",
    image: "/",
    client: "GlowSkin Official",
    year: "2024",
    description:
      "Strategi Meta Ads berbasis funnel (TOF-MOF-BOF) dengan creative testing dan retargeting untuk meningkatkan ROAS.",
    results: [
      "ROAS 3.8x",
      "CPC turun 35%",
      "Penjualan naik 180%",
    ],
    services: ["Meta Ads Strategy", "Creative Testing", "Funnel Optimization"],
  },
  {
    id: 17,
    title: "Social Media Growth – Personal Branding Tech Founder",
    category: "Social Media",
    image: "/",
    client: "Tech Founder Indonesia",
    year: "2024",
    description:
      "Strategi konten LinkedIn & Instagram berbasis authority positioning untuk membangun personal branding di industri teknologi.",
    results: [
      "Follower naik 320% dalam 6 bulan",
      "Engagement rate 9%",
      "Inbound collaboration meningkat",
    ],
    services: ["Content Strategy", "Personal Branding", "Social Media Management"],
  },
  {
    id: 18,
    title: "Website Design - AI Tech Tools",
    category: "Website",
    image: "/aitools.png",
    client: "AI Tech Tools",
    year: "2024",
    description:
      "Desain website modern untuk platform AI tools dengan fokus pada UX yang intuitif dan visual branding yang konsisten.",
    results: [
      "User engagement meningkat 45%",
      "Page load time 3x lebih cepat",
      "Mobile responsiveness optimal",
    ],
    services: ["UI/UX Design", "Responsive Web Design", "Brand Consistency"],
  },
  {
  id: 19,
    title: "Landing Page – Landing Page untuk Perumahan Subsidi",
    category: "Landing Page",
    image: "/rumahsubsidi.png",
    client: "Perumahan Subsidi Lampung",
    year: "2025",
    description:
      "Desain landing page yang menarik dan responsif untuk proyek perumahan subsidi dengan fokus pada konversi dan pengalaman pengguna.",
    results: [
      "Konversi lead meningkat 150%",
      "Page load time optimal",
      "Mobile user experience meningkat",
    ],
    services: ["Landing Page Design", "Conversion Optimization", "Mobile Responsive"],
  },
  {
    id: 20,
    title: "Payment Gateway Integration – School Payment System",
    category: "Website",
    image: "/schoolpay.png",
    client: "School Payment System",
    year: "2026",
    description:
      "Integrasi payment gateway untuk sistem pembayaran sekolah dengan fokus pada keamanan transaksi dan kemudahan penggunaan.",
    results: [
      "Transaksi aman dengan enkripsi SSL",
      "Proses pembayaran lebih cepat",
      "User satisfaction meningkat",
    ],
    services: ["Payment Gateway Integration", "Web Security", "User Experience"],
  },
  {
    id: 21,
    title: "Property Listing Website and Portfolio for Property Developer",
    category: "Landing Page",
    image: "/consultantpro.png",
    client: "Property Developer Indonesia",
    year: "2026",
    description:
      "Website listing properti dengan portfolio yang menarik untuk developer properti, fokus pada visual branding dan pengalaman pengguna.",
    results: [
      "Konversi lead meningkat 120%",
      "Page load time optimal",
      "Mobile user experience meningkat",
    ],
    services: ["Property Listing Website", "Portfolio Design", "Mobile Responsive"],
  },
  {
    id: 22,
    title: "Muana Bimbel Website and Portfolio for Education Consultant",
    category: "Landing Page",
    image: "/muanabimbel.png",
    client: "Muana Bimbel",
    year: "2023",
    description:
      "Website dan portfolio untuk bimbel Muana dengan fokus pada branding yang menarik dan pengalaman pengguna yang optimal.",
    results: [
      "Konversi lead meningkat 110%",
      "Page load time optimal",
      "Mobile user experience meningkat",
    ],
    services: ["Website Design", "Portfolio Design", "Mobile Responsive"],
  },
  {
    id: 23,
    title: "Slideshow Creator – Image Tool Generator",
    category: "Website",
    image: "/",
    client: "Internal SaaS Product",
    year: "2024",
    description:
      "Advanced image processing & slideshow creation application with 8 powerful built-in editing tools. Designed for fast, efficient, and scalable image manipulation using modern backend architecture.",
    results: [
      "8 built-in image processing tools",
      "3x automatic image generation (Dark & Light Style)",
      "Fast API-based processing engine",
      "Docker-ready scalable deployment",
    ],
    services: [
      "SaaS Development",
      "Image Processing System",
      "Backend API Engineering",
      "Docker Deployment",
    ],
  },
  {
    id: 24,
    title: "Online Store for Local Fashion Brand",
    category: "Website",
    image: "/almufid_store.png",
    client: "Local Fashion Brand",
    year: "2025",
    description:
      "E-commerce website untuk brand fesyen lokal dengan fokus pada pengalaman belanja yang menyenangkan dan antarmuka yang ramah pengguna.",
    results: [
      "Konversi penjualan meningkat 130%",
      "User experience optimal",
      "Mobile responsive design",
    ],
    services: ["E-commerce Development", "UI/UX Design", "Mobile Responsive"],
  },
  {
    id: 25,
    title: "WScrapy – Web Scraping & Data Extraction Tool",
    category: "Website",
    image: "/",
    client: "Internal Automation Project",
    year: "2024",
    description:
      "Advanced web scraping tool designed to extract structured and unstructured data from websites and automatically export it into CSV format. Built for automation, research, and scalable data collection workflows.",
    results: [
      "Automated domain & metadata extraction",
      "CSV-based structured data export",
      "Bulk image downloading system",
      "Robust error logging & handling",
    ],
    services: [
      "Web Scraping Automation",
      "Data Extraction System",
      "Python Backend Development",
      "Data Processing Pipeline",
    ],
  },
  {
    id: 26,
    title: "Author Tools – AI Content Generator CLI",
    category: "Application",
    image: "/author-tools.jpeg",
    client: "Internal Automation Product",
    year: "2025",
    description:
      "Terminal based content generation application designed to automate the creation of pantun, puisi, blog articles, and Instagram copywriting. Each generated content is automatically saved into structured local files for efficient workflow management.",
    results: [
      "Automated multi-format content generation",
      "CLI-based lightweight system",
      "Structured local file storage",
      "Faster content production workflow",
    ],
    services: [
      "Automation Tool Development",
      "AI Content System",
      "CLI Application Engineering",
      "Content Workflow Optimization",
    ],
  },
  {
    id: 27,
    title: "SmartLink – URL Shortener & Analytics System",
    category: "Website",
    image: "/",
    client: "Internal SaaS Project",
    year: "2024",
    description:
      "Terminal-based URL shortener application built with Python featuring advanced link management, analytics tracking, QR generation, and custom domain support. Designed for efficient link distribution and performance monitoring.",
    results: [
      "Custom alias & branded short links",
      "Built-in analytics & click tracking",
      "QR Code auto generation",
      "Secure & expiration-based link control",
    ],
    services: [
      "Backend Development",
      "Link Management System",
      "API Integration",
      "Analytics System Engineering",
    ],
  },
  {
    id: 22,
    title: "LiTool – SQL Injection Security Scanner",
    category: "Application",
    image: "/",
    client: "Internal Security Research Tool",
    year: "2025",
    description:
      "LiTool is a lightweight security testing application designed to detect potential SQL Injection vulnerabilities in web applications. Built for ethical security research and vulnerability assessment workflows.",
    results: [
      "Automated SQL Injection vulnerability detection",
      "Structured scan report generation",
      "Exportable TXT & PDF security reports",
    ],
    services: [
      "Security Testing Tool",
      "Vulnerability Assessment",
      "Automation Script Development",
      "Security Reporting System",
    ],
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
              Portfolio HINAI Tech
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
        Mengapa Strategi HINAI Tech Berbeda?
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
          Inilah yang membuat website HINAI Tech bukan hanya menarik, tetapi
          memiliki daya tarik psikologis dan kekuatan branding yang tahan lama.
        </p>
      </div>

    </div>

    {/* CLOSING PARAGRAPH */}
    <div className="text-center pt-12 border-t border-gray-200 dark:border-gray-800 px-4">
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Dengan kombinasi strategi bisnis, pengalaman pengguna modern,
        struktur konversi teruji, optimasi SEO menyeluruh, dan branding
        profesional, HINAI Tech menghadirkan solusi digital yang bukan hanya
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
            yang meningkatkan visibilitas bisnis Anda bersama HINAI Tech.
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
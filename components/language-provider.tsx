"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// --- Dictionary Lengkap ---
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.career": "Career",
    "nav.contact": "Contact",

    // Services
    "services.web": "Web Development",
    "services.seo": "SEO Articles",
    "services.design": "Design",

    // Common
    "common.learnMore": "Learn More",
    "common.learnMore.link": "/about",

    "common.getStarted": "Consult Now",
    "common.getStarted.link": "https://wa.me/6282144137914?text=Hello%2C%20I%27m%20interested%20in%20your%20services",

    "common.readMore": "Read More",
    "common.readMore.link": "/blog",

    // Hero
    "hero.title": "Welcome To",
    "hero.subtitle":
      "Build your dream website quickly and affordably. Top quality for both personal and business needs.",

    // About
    "about.title": "About Heroic Web",
    "about.description":
      "Heroic is an information technology company that offers high quality and premium digital services to meet your needs. Founded by a group of experienced individuals, we have a team of experts in the field of web application development.",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "Ready to start your project? Contact us today for a free consultation.",

    // Clients
    "clients.title": "Our Trusted Clients",
    "clients.subtitle": "Trusted by leading companies worldwide",

    // Career
    "career.hero.badge": "Join Our Team",
    "career.hero.title": "Build Your Career With Us (Cooming Soon)",
    "career.hero.description":
      "Join a dynamic team of creative professionals and help us shape the future of digital experiences. We're always looking for talented individuals who share our passion for innovation.",
    "career.hero.viewPositions": "View Open Positions",
    "career.hero.learnMore": "Learn About Our Culture",
    "career.stats.employees": "Happy Clients",
    "career.stats.countries": "Services",
    "career.stats.years": "Growing",
    "career.positions.title": "Open Positions",
    "career.positions.description":
      "Discover exciting opportunities to grow your career with us. We offer competitive salaries, flexible work arrangements, and a collaborative environment.",
    "career.positions.apply": "Apply Now",
    "career.benefits.title": "Why Work With Us",
    "career.benefits.description":
      "We believe in taking care of our team members with comprehensive benefits and a supportive work environment.",
    "career.culture.title": "Our Culture & Values",
    "career.culture.description":
      "We've built a culture where creativity thrives, ideas are valued, and every team member has the opportunity to make a meaningful impact.",
    "career.application.title": "Ready to Join Us?",
    "career.application.description":
      "Don't see the perfect position? Send us your resume and tell us how you'd like to contribute to our team.",
    "career.application.formTitle": "General Application",
    "career.application.formDescription": "Fill out the form below and we'll get back to you within 48 hours.",
    "career.application.firstName": "First Name",
    "career.application.lastName": "Last Name",
    "career.application.email": "Email Address",
    "career.application.phone": "Phone Number",
    "career.application.position": "Position of Interest",
    "career.application.experience": "Years of Experience",
    "career.application.message": "Tell us about yourself",
    "career.application.resume": "Resume/CV",
    "career.application.uploadText": "Click to upload or drag and drop your resume",
    "career.application.submit": "Submit Application",

    // Blog
    "blog.title": "Our Blog",
    "blog.subtitle": "Insights, tips, and trends in web development, SEO, and design",
    "blog.featured": "Featured Posts",
    "blog.recent": "Recent Posts",
    "blog.categories": "Categories",
    "blog.tags": "Tags",
    "blog.search": "Search articles...",
    "blog.searchResults": "Search Results",
    "blog.noResults": "No articles found matching your search.",
    "blog.readTime": "min read",
    "blog.publishedOn": "Published on",
    "blog.author": "Author",
    "blog.relatedPosts": "Related Posts",
    "blog.shareArticle": "Share Article",
    "blog.backToBlog": "Back to Blog",
    "blog.allCategories": "All Categories",
    "blog.loadMore": "Load More Posts",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.services": "Layanan",
    "nav.blog": "Blog",
    "nav.career": "Karir",
    "nav.contact": "Kontak",

    // Services
    "services.web": "Pengembangan Web",
    "services.seo": "Artikel SEO",
    "services.design": "Desain",

    // Common
    "common.learnMore": "Pelajari Lebih Lanjut",
    "common.learnMore.link": "/about",
    "common.getStarted": "Mulai Sekarang",
    "common.getStarted.link": "https://wa.me/6282144137914?text=Hello%2C%20Saya%20tertarik%20dengan%20layanan%20Anda",
    "common.readMore": "Baca Selengkapnya",
    "common.readMore.link": "/blog",

    // Hero
    "hero.title": "Solusi Web Profesional",
    "hero.subtitle":
      "Kami menciptakan website yang menakjubkan, mengoptimalkan untuk mesin pencari, dan mendesain brand yang berkesan untuk mendorong pertumbuhan bisnis.",

    // About
    "about.title": "Tentang Heroic Web",
    "about.description":
      "Kami adalah tim developer, spesialis SEO, dan desainer yang berdedikasi membantu bisnis sukses secara online.",

    // Contact
    "contact.title": "Hubungi Kami",
    "contact.description": "Siap memulai proyek Anda? Hubungi kami hari ini untuk konsultasi gratis.",

    // Clients
    "clients.title": "Klien Terpercaya Kami",
    "clients.subtitle": "Dipercaya oleh perusahaan terkemuka di seluruh dunia",

    // Career
    "career.hero.badge": "Bergabung dengan Tim Kami",
    "career.hero.title": "Bangun Karir Anda Bersama Kami",
    "career.hero.description":
      "Bergabunglah dengan tim profesional kreatif yang dinamis dan bantu kami membentuk masa depan pengalaman digital. Kami selalu mencari individu berbakat yang berbagi passion untuk inovasi.",
    "career.hero.viewPositions": "Lihat Posisi Terbuka",
    "career.hero.learnMore": "Pelajari Budaya Kami",
    "career.stats.employees": "Anggota Tim",
    "career.stats.countries": "Negara",
    "career.stats.years": "Tahun Berkembang",
    "career.positions.title": "Posisi Terbuka",
    "career.positions.description":
      "Temukan peluang menarik untuk mengembangkan karir Anda bersama kami. Kami menawarkan gaji kompetitif, pengaturan kerja fleksibel, dan lingkungan kolaboratif.",
    "career.positions.apply": "Lamar Sekarang",
    "career.benefits.title": "Mengapa Bekerja dengan Kami",
    "career.benefits.description":
      "Kami percaya dalam merawat anggota tim kami dengan tunjangan komprehensif dan lingkungan kerja yang mendukung.",
    "career.culture.title": "Budaya & Nilai Kami",
    "career.culture.description":
      "Kami telah membangun budaya di mana kreativitas berkembang, ide dihargai, dan setiap anggota tim memiliki kesempatan untuk membuat dampak yang berarti.",
    "career.application.title": "Siap Bergabung dengan Kami?",
    "career.application.description":
      "Tidak melihat posisi yang sempurna? Kirimkan resume Anda dan beri tahu kami bagaimana Anda ingin berkontribusi pada tim kami.",
    "career.application.formTitle": "Aplikasi Umum",
    "career.application.formDescription": "Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 48 jam.",
    "career.application.firstName": "Nama Depan",
    "career.application.lastName": "Nama Belakang",
    "career.application.email": "Alamat Email",
    "career.application.phone": "Nomor Telepon",
    "career.application.position": "Posisi yang Diminati",
    "career.application.experience": "Tahun Pengalaman",
    "career.application.message": "Ceritakan tentang diri Anda",
    "career.application.resume": "Resume/CV",
    "career.application.uploadText": "Klik untuk mengunggah atau seret dan lepas resume Anda",
    "career.application.submit": "Kirim Aplikasi",

    // Blog
    "blog.title": "Blog Kami",
    "blog.subtitle": "Wawasan, tips, dan tren dalam pengembangan web, SEO, dan desain",
    "blog.featured": "Artikel Unggulan",
    "blog.recent": "Artikel Terbaru",
    "blog.categories": "Kategori",
    "blog.tags": "Tag",
    "blog.search": "Cari artikel...",
    "blog.searchResults": "Hasil Pencarian",
    "blog.noResults": "Tidak ada artikel yang ditemukan sesuai pencarian Anda.",
    "blog.readTime": "menit baca",
    "blog.publishedOn": "Diterbitkan pada",
    "blog.author": "Penulis",
    "blog.relatedPosts": "Artikel Terkait",
    "blog.shareArticle": "Bagikan Artikel",
    "blog.backToBlog": "Kembali ke Blog",
    "blog.allCategories": "Semua Kategori",
    "blog.loadMore": "Muat Lebih Banyak",
  },
}

// --- Provider ---
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved === "en" || saved === "id") {
      setLanguage(saved)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// --- Hook ---
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}

// --- Tombol Toggle Bahasa ---
export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggle = () => {
    setLanguage(language === "en" ? "id" : "en")
  }

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {language === "en" ? "🇬🇧 English" : "🇮🇩 Indonesia"}
    </button>
  )
}

// --- Contoh Navbar ---
export function Navbar() {
  const { t } = useLanguage()

  return (
    <nav className="flex gap-4 items-center">
      <span>{t("nav.home")}</span>
      <span>{t("nav.about")}</span>
      <LanguageToggle />
    </nav>
  )
}

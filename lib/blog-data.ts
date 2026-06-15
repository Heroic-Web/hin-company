export type BlogPost = {
  title: string
  excerpt: string
  image: string
  category: "SEO" | "AI" | "Security" | "Marketing" | string
  date: string
  readTime: number
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "Cara Website Muncul di Halaman Pertama Google",
    excerpt:
      "Panduan SEO modern untuk meningkatkan ranking website secara organik dan stabil di Google dengan strategi white-hat SEO terbaru 2026.",
    image: "/artikel/seo-ebook.png",
    category: "SEO",
    date: "2026-01-10",
    readTime: 6,
    slug: "cara-website-muncul-di-halaman-pertama-google",
  },
  {
    title: "AI Automation untuk Bisnis Kecil",
    excerpt:
      "Pemanfaatan AI untuk UMKM dalam meningkatkan efisiensi operasional, menghemat biaya, dan meningkatkan konversi penjualan secara otomatis.",
    image: "/artikel/ai-services.png",
    category: "AI",
    date: "2026-01-08",
    readTime: 7,
    slug: "ai-automation-untuk-bisnis-kecil",
  },
  {
    title: "Cara Melindungi Website dari Hacker",
    excerpt:
      "Panduan lengkap keamanan website modern untuk melindungi bisnis dari serangan siber, malware, dan kebocoran data sensitif perusahaan.",
    image: "/artikel/hacker.png",
    category: "Security",
    date: "2026-01-05",
    readTime: 5,
    slug: "cara-melindungi-website-dari-hacker",
  },
  {
    title: "Apa Itu Landing Page dan Mengapa Penting untuk Bisnis",
    excerpt:
      "Landing page adalah halaman fokus untuk meningkatkan konversi iklan digital seperti Meta Ads dan Google Ads secara maksimal.",
    image: "/Jasa Landing Page/1.png",
    category: "Marketing",
    date: "2026-01-02",
    readTime: 5,
    slug: "apa-itu-landing-page-dan-mengapa-bisnis-anda-membutuhkannya",
  },
]
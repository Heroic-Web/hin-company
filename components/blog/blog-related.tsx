"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function BlogRelated() {
  const { t } = useLanguage()

  const relatedPosts = [
    {
      title: "Jasa Pembuatan Website Bandar Lampung",
      excerpt:
        "Website profesional untuk UMKM, startup, sekolah, hingga perusahaan di Bandar Lampung.",
      image: "Jasa Web/1.png",
      category: "Website Development",
      date: "2026-06-15",
      readTime: 8,
      slug: "jasa-pembuatan-website-bandar-lampung",
    },

    {
      title: "Apa Itu Landing Page dan Mengapa Bisnis Anda Membutuhkannya?",
      excerpt:
        "Pelajari bagaimana landing page meningkatkan konversi iklan dan penjualan bisnis.",
      image: "/Jasa Landing Page/1.png",
      category: "Landing Page",
      date: "2026-06-15",
      readTime: 6,
      slug: "apa-itu-landing-page",
    },

    {
      title: "Cara Website Muncul di Halaman Pertama Google",
      excerpt:
        "Panduan SEO praktis untuk meningkatkan ranking website dan trafik organik.",
      image: "/artikel/seo-ebook.png",
      category: "SEO",
      date: "2026-06-15",
      readTime: 10,
      slug: "cara-website-muncul-di-halaman-pertama-google",
    },

    {
      title: "AI Automation untuk Bisnis Kecil",
      excerpt:
        "Otomatisasi bisnis menggunakan AI untuk meningkatkan produktivitas dan efisiensi.",
      image: "/artikel/ai-services.png",
      category: "Artificial Intelligence",
      date: "2026-06-15",
      readTime: 7,
      slug: "ai-automation-untuk-bisnis-kecil",
    },

    {
      title: "Cara Melindungi Website dari Hacker",
      excerpt:
        "Langkah penting meningkatkan keamanan website agar terhindar dari serangan cyber.",
      image: "/artikel/hacker.png",
      category: "Cyber Security",
      date: "2026-06-15",
      readTime: 9,
      slug: "cara-melindungi-website-dari-hacker",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("blog.relatedPosts")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artikel lain yang mungkin menarik untuk Anda baca.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedPosts.map((post) => (
            <Card
              key={post.slug}
              className="
                group
                overflow-hidden
                border-border/50
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 text-primary px-3 py-1 font-medium">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>
                      {new Date(post.date).toLocaleDateString("id-ID")}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>
                      {post.readTime} {t("blog.readTime")}
                    </span>
                  </div>
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-foreground
                    mb-3
                    line-clamp-2
                    group-hover:text-primary
                    transition-colors
                  "
                >
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`}>
                  <Button
                    variant="ghost"
                    className="
                      p-0
                      h-auto
                      text-primary
                      hover:text-primary/80
                    "
                  >
                    {t("common.readMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
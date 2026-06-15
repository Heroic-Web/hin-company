"use client"

import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import {
Calendar,
Clock,
ArrowRight,
} from "lucide-react"

import { useLanguage } from "@/components/language-provider"

export function BlogFeatured() {
const { t } = useLanguage()

const featuredPosts = [
{
  title:
    "Cara Melindungi Website dari Hacker",
  excerpt:
    "Kenali ancaman cyber security yang sering menyerang website serta langkah-langkah praktis untuk meningkatkan keamanan website bisnis Anda.",
  image: "/artikel/hacker.png",
  category: "Cyber Security",
  date: "2026-06-15",
  readTime: 9,
  href: "/blog/cara-melindungi-website-dari-hacker",
},

{
  title:
    "Cara Website Muncul di Halaman Pertama Google",
  excerpt:
    "Panduan SEO lengkap mulai dari riset keyword, optimasi konten, technical SEO, hingga strategi backlink agar website lebih mudah ditemukan pelanggan.",
  image: "/artikel/seo-ebook.png",
  category: "SEO",
  date: "2026-06-15",
  readTime: 10,
  href: "/blog/cara-website-muncul-di-halaman-pertama-google",
},

]

return ( <section className="py-20 bg-muted/30"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {t("blog.featured")}
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Insight, SEO, Website Development, AI, dan Cyber Security
        untuk membantu bisnis Anda berkembang lebih cepat.
      </p>
    </div>

    {/* Articles */}
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {featuredPosts.map((post) => (
        <Card
          key={post.href}
          className="
            group
            overflow-hidden
            border-border
            hover:border-primary/40
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <Link href={post.href}>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>
          </Link>

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
                  {post.readTime} menit
                </span>
              </div>

            </div>

            <Link href={post.href}>
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
            </Link>

            <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <Link href={post.href}>
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

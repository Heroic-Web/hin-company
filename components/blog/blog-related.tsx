"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function BlogRelated() {
  const { t } = useLanguage()

  const relatedPosts = [
    {
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Learn the essential SEO strategies that will help your website rank higher.",
      image: "/blog-seo-best-practices.png",
      category: "SEO",
      date: "2024-01-10",
      readTime: 6,
      slug: "seo-best-practices-modern-websites",
    },
    {
      title: "How to Optimize Your Website for Core Web Vitals",
      excerpt: "Improve your website's performance and user experience metrics.",
      image: "/blog-core-web-vitals.png",
      category: "Performance",
      date: "2024-01-08",
      readTime: 5,
      slug: "optimize-website-core-web-vitals",
    },
    {
      title: "The Complete Guide to Modern CSS Grid",
      excerpt: "Master CSS Grid layout with practical examples and real-world use cases.",
      image: "/blog-css-grid-guide.png",
      category: "CSS",
      date: "2024-01-05",
      readTime: 7,
      slug: "complete-guide-modern-css-grid",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("blog.relatedPosts")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Continue reading with these related articles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>
                      {post.readTime} {t("blog.readTime")}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 text-balance group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
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

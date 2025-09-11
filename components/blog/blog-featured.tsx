"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function BlogFeatured() {
  const { t } = useLanguage()

  const featuredPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      image: "/blog-web-development-trends.png",
      category: "Web Development",
      date: "2024-01-15",
      readTime: 8,
      slug: "future-web-development-trends-2024",
    },
    {
      title: "SEO Best Practices for Modern Websites",
      excerpt:
        "Learn the essential SEO strategies that will help your website rank higher and attract more organic traffic.",
      image: "/blog-seo-best-practices.png",
      category: "SEO",
      date: "2024-01-10",
      readTime: 6,
      slug: "seo-best-practices-modern-websites",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("blog.featured")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't miss our most popular and insightful articles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {post.readTime} {t("blog.readTime")}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-balance group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{post.excerpt}</p>
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

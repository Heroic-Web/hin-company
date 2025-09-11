"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function BlogGrid() {
  const { t } = useLanguage()

  const posts = [
    {
      title: "How to Optimize Your Website for Core Web Vitals",
      excerpt: "Learn the essential techniques to improve your website's performance and user experience metrics.",
      image: "/blog-core-web-vitals.png",
      category: "Performance",
      date: "2024-01-08",
      readTime: 5,
      slug: "optimize-website-core-web-vitals",
    },
    {
      title: "The Complete Guide to Modern CSS Grid",
      excerpt: "Master CSS Grid layout with practical examples and real-world use cases for responsive design.",
      image: "/blog-css-grid-guide.png",
      category: "CSS",
      date: "2024-01-05",
      readTime: 7,
      slug: "complete-guide-modern-css-grid",
    },
    {
      title: "Building Accessible Web Components",
      excerpt: "Create inclusive web experiences by following accessibility best practices in your components.",
      image: "/blog-accessible-components.png",
      category: "Accessibility",
      date: "2024-01-03",
      readTime: 6,
      slug: "building-accessible-web-components",
    },
    {
      title: "JavaScript Performance Optimization Tips",
      excerpt: "Boost your JavaScript application performance with these proven optimization techniques.",
      image: "/blog-js-performance.png",
      category: "JavaScript",
      date: "2023-12-28",
      readTime: 8,
      slug: "javascript-performance-optimization-tips",
    },
    {
      title: "Design Systems: Building Consistent UI at Scale",
      excerpt: "Learn how to create and maintain design systems that scale across large organizations.",
      image: "/blog-design-systems.png",
      category: "Design",
      date: "2023-12-25",
      readTime: 9,
      slug: "design-systems-consistent-ui-scale",
    },
    {
      title: "The Art of Technical Writing for Developers",
      excerpt: "Improve your technical communication skills and create better documentation for your projects.",
      image: "/blog-technical-writing.png",
      category: "Writing",
      date: "2023-12-22",
      readTime: 4,
      slug: "art-technical-writing-developers",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">{t("blog.recent")}</h2>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:col-span-2 p-6">
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
                  <h3 className="text-xl font-bold text-foreground mb-3 text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      {t("common.readMore")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="bg-transparent">
          {t("blog.loadMore")}
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

export function BlogGrid() {
  const { t } = useLanguage()

  const [showAll, setShowAll] = useState(false)

  // 3 artikel awal
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3)

  // RELATED POSTS (ambil sisanya)
  const relatedPosts = blogPosts.slice(3, 6)

  return (
    <section className="w-full">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {t?.("blog.recent") ?? "Recent Articles"}
        </h2>
      </div>

      {/* MAIN GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

        {visiblePosts.map((post) => (
          <Card
            key={post.slug}
            className="group overflow-hidden rounded-2xl border border-border/50 hover:shadow-xl transition"
          >
            <CardContent className="p-0">

              {/* IMAGE */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">

                <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">

                  <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime} min read</span>
                  </div>

                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="px-0 text-primary">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* TOGGLE BUTTON */}
      {blogPosts.length > 3 && (
        <div className="flex justify-center mt-14">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="px-10"
          >
            {showAll ? "Show Less" : "Read All Articles"}
          </Button>
        </div>
      )}

      {/* RELATED POSTS SECTION */}
      <div className="mt-20">
        <h3 className="text-xl md:text-2xl font-bold mb-6">
          Related Posts
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {relatedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group hover:shadow-lg transition border border-border/50 rounded-xl overflow-hidden">

                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <CardContent className="p-4 space-y-2">

                  <div className="text-xs text-muted-foreground">
                    {post.category}
                  </div>

                  <h4 className="font-semibold group-hover:text-primary transition line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                </CardContent>
              </Card>
            </Link>
          ))}

        </div>
      </div>

    </section>
  )
}
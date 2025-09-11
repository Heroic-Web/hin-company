"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Tag } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function BlogSidebar() {
  const { t } = useLanguage()

  const categories = [
    { name: "Web Development", count: 12 },
    { name: "SEO", count: 8 },
    { name: "Design", count: 6 },
    { name: "Performance", count: 4 },
    { name: "JavaScript", count: 7 },
    { name: "CSS", count: 5 },
  ]

  const tags = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "SEO",
    "Performance",
    "Accessibility",
    "UI/UX",
    "JavaScript",
    "CSS Grid",
    "Responsive Design",
    "Web Vitals",
  ]

  const recentPosts = [
    {
      title: "The Future of Web Development",
      date: "2024-01-15",
      slug: "future-web-development-trends-2024",
    },
    {
      title: "SEO Best Practices",
      date: "2024-01-10",
      slug: "seo-best-practices-modern-websites",
    },
    {
      title: "Core Web Vitals Optimization",
      date: "2024-01-08",
      slug: "optimize-website-core-web-vitals",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Search */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">{t("blog.search")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="text" placeholder={t("blog.search")} className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">{t("blog.categories")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-between p-2 h-auto text-left">
              <span>{t("blog.allCategories")}</span>
              <span className="text-muted-foreground">42</span>
            </Button>
            {categories.map((category, index) => (
              <Button key={index} variant="ghost" className="w-full justify-between p-2 h-auto text-left">
                <span>{category.name}</span>
                <span className="text-muted-foreground">{category.count}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">{t("blog.recent")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="border-b border-border/50 last:border-0 pb-4 last:pb-0">
                <h4 className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer mb-1">
                  {post.title}
                </h4>
                <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Tag className="h-5 w-5" />
            {t("blog.tags")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs bg-transparent hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

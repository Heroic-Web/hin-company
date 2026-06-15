"use client"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Search,
  Tag,
  BookOpen,
  FolderOpen,
} from "lucide-react"

export function BlogSidebar() {
  const categories = [
    {
      name: "Website Development",
      count: 1,
    },
    {
      name: "Landing Page",
      count: 1,
    },
    {
      name: "SEO",
      count: 1,
    },
    {
      name: "Artificial Intelligence",
      count: 1,
    },
    {
      name: "Cyber Security",
      count: 1,
    },
  ]

  const tags = [
    "Website",
    "Landing Page",
    "SEO",
    "Google Ranking",
    "AI Automation",
    "UMKM",
    "Cyber Security",
    "Digital Marketing",
    "Bandar Lampung",
    "Website Bisnis",
  ]

  const recentPosts = [
    {
      title: "Jasa Pembuatan Website Bandar Lampung",
      slug: "/blog/jasa-pembuatan-website-bandar-lampung",
      date: "2026-06-15",
    },
    {
      title:
        "Apa Itu Landing Page dan Mengapa Bisnis Anda Membutuhkannya?",
      slug: "/blog/apa-itu-landing-page",
      date: "2026-06-15",
    },
    {
      title:
        "Cara Website Muncul di Halaman Pertama Google",
      slug:
        "/blog/cara-website-muncul-di-halaman-pertama-google",
      date: "2026-06-15",
    },
    {
      title:
        "AI Automation untuk Bisnis Kecil",
      slug:
        "/blog/ai-automation-untuk-bisnis-kecil",
      date: "2026-06-15",
    },
    {
      title:
        "Cara Melindungi Website dari Hacker",
      slug:
        "/blog/cara-melindungi-website-dari-hacker",
      date: "2026-06-15",
    },
  ]

  return (
    <aside className="space-y-6">

      {/* SEARCH */}

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Search className="h-5 w-5" />
            Cari Artikel
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              type="text"
              placeholder="Cari artikel..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* CATEGORIES */}

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FolderOpen className="h-5 w-5" />
            Kategori
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-2">

            <Button
              variant="ghost"
              className="w-full justify-between"
            >
              <span>Semua Artikel</span>
              <span>5</span>
            </Button>

            {categories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="w-full justify-between"
              >
                <span>{category.name}</span>
                <span>{category.count}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* RECENT POSTS */}

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5" />
            Artikel Terbaru
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">

            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="block border-b border-border/50 pb-4 last:border-0 last:pb-0"
              >
                <h4 className="font-medium text-foreground transition-colors hover:text-primary">
                  {post.title}
                </h4>

                <p className="mt-1 text-sm text-muted-foreground">
                  {new Date(
                    post.date
                  ).toLocaleDateString("id-ID")}
                </p>
              </Link>
            ))}

          </div>
        </CardContent>
      </Card>

      {/* TAGS */}

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Tag className="h-5 w-5" />
            Topik Populer
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">

            {tags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="
                  bg-transparent
                  text-xs
                  hover:bg-primary
                  hover:text-primary-foreground
                "
              >
                {tag}
              </Button>
            ))}

          </div>
        </CardContent>
      </Card>

      {/* CTA */}

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6 text-center">
          <h3 className="mb-2 text-lg font-bold">
            Butuh Website Profesional?
          </h3>

          <p className="mb-4 text-sm text-muted-foreground">
            Konsultasikan kebutuhan website, landing page,
            SEO, atau AI Automation bersama tim HINAI Tech.
          </p>

          <Button asChild className="w-full">
            <Link
              href="https://wa.me/6282144137914"
              target="_blank"
            >
              Konsultasi Gratis
            </Link>
          </Button>
        </CardContent>
      </Card>

    </aside>
  )
}
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export const metadata: Metadata = {
  title: "Blog - HINAI Tech | PT Heroic Inovasi Nusantara",
  description:
    "Artikel terbaru tentang website development, SEO, AI automation, digital marketing, dan teknologi modern dari HINAI Tech.",
  keywords: [
    "Blog HINAI Tech",
    "SEO Indonesia",
    "Web Development",
    "AI Automation",
    "Digital Marketing",
    "PT Heroic Inovasi Nusantara",
  ],
  openGraph: {
    title: "Blog HINAI Tech",
    description:
      "Insights teknologi, SEO, AI, dan digital marketing modern untuk bisnis Indonesia.",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">

        {/* NAVIGATION */}
        <Navigation />

        <main className="w-full">

          {/* HERO SECTION */}
          <section className="w-full">
            <BlogHero />
          </section>

          {/* FEATURED SECTION */}
          <section className="w-full">
            <BlogFeatured />
          </section>

          {/* MAIN BLOG AREA */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* LEFT CONTENT */}
              <div className="lg:col-span-2 space-y-12">

                {/* BLOG GRID */}
                <BlogGrid />

              </div>

              {/* SIDEBAR */}
              <aside className="lg:col-span-1">

                <div className="sticky top-24 space-y-8">

                  <BlogSidebar />

                </div>

              </aside>

            </div>
          </section>

        </main>
      </div>
    </LanguageProvider>
  )
}
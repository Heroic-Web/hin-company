import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export const metadata = {
  title: "Blog - Heroic Web",
  description: "Insights, tips, and trends in web development, SEO, and design from the Heroic Web team.",
}

export default function BlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <BlogHero />
          <BlogFeatured />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <BlogGrid />
              </div>
              <div className="lg:col-span-1">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

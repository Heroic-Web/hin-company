import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { BlogPost } from "@/components/blog/blog-post"
import { BlogRelated } from "@/components/blog/blog-related"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  // In a real app, you'd fetch the post data here
  return {
    title: `Blog Post - Heroic Web`,
    description: "Read our latest insights on web development, SEO, and design.",
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <BlogPost slug={params.slug} />
          <BlogRelated />
        </main>
      </div>
    </LanguageProvider>
  )
}

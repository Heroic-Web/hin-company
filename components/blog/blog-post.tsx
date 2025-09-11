"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

interface BlogPostProps {
  slug: string
}

export function BlogPost({ slug }: BlogPostProps) {
  const { t } = useLanguage()

  // In a real app, you'd fetch the post data based on the slug
  const post = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with websites and applications.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot, ChatGPT, and other AI assistants are helping developers write code faster and more efficiently.</p>
      
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to gain traction as they offer native app-like experiences through web browsers. With improved offline capabilities, push notifications, and device integration, PWAs are becoming a preferred choice for businesses looking to reach users across all platforms.</p>
      
      <h2>3. WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications in the browser by allowing developers to run code written in languages like C++, Rust, and Go at near-native speeds. This opens up new possibilities for complex applications like games, image editors, and scientific simulations.</p>
      
      <h2>4. Serverless Architecture</h2>
      <p>Serverless computing continues to grow, with platforms like Vercel, Netlify, and AWS Lambda making it easier to deploy and scale applications without managing infrastructure. This trend is particularly popular for JAMstack applications.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright, with new technologies making it easier to build faster, more efficient, and more engaging web experiences. Staying updated with these trends will help developers create better applications and advance their careers.</p>
    `,
    excerpt:
      "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    image: "/blog-web-development-trends.png",
    category: "Web Development",
    date: "2024-01-15",
    readTime: 8,
    author: "Rodhi Faisal Mufid",
  }

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to blog */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 p-0 h-auto text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("blog.backToBlog")}
          </Button>
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="aspect-[16/9] mb-8 overflow-hidden rounded-lg">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{post.category}</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {t("blog.publishedOn")} {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                {post.readTime} {t("blog.readTime")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>
                {t("blog.author")}: {post.author}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>

          <div className="flex items-center justify-between">
            <p className="text-lg text-muted-foreground text-pretty">{post.excerpt}</p>
            <Button variant="outline" size="sm" className="bg-transparent">
              <Share2 className="h-4 w-4 mr-2" />
              {t("blog.shareArticle")}
            </Button>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75",
            }}
          />
        </div>

        {/* Author card */}
        <Card className="mt-12 border-border/50">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{post.author}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full-stack developer and founder of Heroic Web with over 8 years of experience in building
                  scalable web applications. Passionate about sharing knowledge and helping developers grow.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Search, TrendingUp, Target, BarChart } from "lucide-react"

export function SEOArticleProcess() {
  const { t } = useLanguage()

  const processes = [
    {
      step: "01",
      icon: Search,
      title: t.language === "en" ? "Keyword Research" : "Riset Kata Kunci",
      description:
        t.language === "en"
          ? "We conduct thorough keyword research to identify the best opportunities for your content to rank high in search results."
          : "Kami melakukan riset kata kunci menyeluruh untuk mengidentifikasi peluang terbaik agar konten Anda dapat ranking tinggi di hasil pencarian.",
    },
    {
      step: "02",
      icon: FileText,
      title: t.language === "en" ? "Content Planning" : "Perencanaan Konten",
      description:
        t.language === "en"
          ? "We create a detailed content outline and strategy that aligns with your business goals and target audience needs."
          : "Kami membuat outline konten dan strategi detail yang selaras dengan tujuan bisnis dan kebutuhan target audiens Anda.",
    },
    {
      step: "03",
      icon: Target,
      title: t.language === "en" ? "SEO Writing" : "Penulisan SEO",
      description:
        t.language === "en"
          ? "Our expert writers create engaging, high-quality content that's optimized for both search engines and human readers."
          : "Penulis ahli kami membuat konten berkualitas tinggi yang menarik dan dioptimalkan untuk mesin pencari dan pembaca manusia.",
    },
    {
      step: "04",
      icon: TrendingUp,
      title: t.language === "en" ? "Optimization" : "Optimisasi",
      description:
        t.language === "en"
          ? "We optimize meta tags, headers, internal links, and other SEO elements to maximize your content's search visibility."
          : "Kami mengoptimalkan meta tag, header, internal link, dan elemen SEO lainnya untuk memaksimalkan visibilitas konten di pencarian.",
    },
    {
      step: "05",
      icon: CheckCircle,
      title: t.language === "en" ? "Quality Review" : "Review Kualitas",
      description:
        t.language === "en"
          ? "Every article goes through our rigorous quality assurance process to ensure it meets our high standards."
          : "Setiap artikel melalui proses quality assurance yang ketat untuk memastikan memenuhi standar tinggi kami.",
    },
    {
      step: "06",
      icon: BarChart,
      title: t.language === "en" ? "Performance Tracking" : "Pelacakan Performa",
      description:
        t.language === "en"
          ? "We monitor your content's performance and provide insights to continuously improve your SEO strategy."
          : "Kami memantau performa konten Anda dan memberikan insight untuk terus meningkatkan strategi SEO Anda.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.language === "en" ? "Our SEO Article Process" : "Proses Artikel SEO Kami"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.language === "en"
              ? "A systematic approach to creating SEO content that drives results"
              : "Pendekatan sistematis untuk membuat konten SEO yang menghasilkan hasil maksimal"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <process.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary/20">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t.language === "en" ? "Quality Guarantee" : "Jaminan Kualitas"}
            </h3>
            <p className="text-muted-foreground text-lg">
              {t.language === "en"
                ? "We guarantee 100% original, SEO-optimized content that helps improve your search rankings and drives organic traffic to your website."
                : "Kami menjamin 100% konten original dan teroptimasi SEO yang membantu meningkatkan ranking pencarian dan mendorong traffic organik ke website Anda."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

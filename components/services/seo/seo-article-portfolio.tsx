"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react"
import Image from "next/image"

export function SEOArticlePortfolio() {
  const { t } = useLanguage()

  const portfolioItems = [
    {
      title: t.language === "en" ? "E-commerce Blog Series" : "Seri Blog E-commerce",
      category: t.language === "en" ? "Retail & E-commerce" : "Retail & E-commerce",
      description:
        t.language === "en"
          ? "50+ SEO articles for online fashion retailer, increased organic traffic by 300%"
          : "50+ artikel SEO untuk retailer fashion online, meningkatkan traffic organik 300%",
      metrics: {
        traffic: "300%",
        keywords: "150+",
        timeframe: t.language === "en" ? "6 months" : "6 bulan",
      },
      image: "/ecommerce-blog-articles.jpg",
    },
    {
      title: t.language === "en" ? "Tech Startup Content" : "Konten Tech Startup",
      category: t.language === "en" ? "Technology" : "Teknologi",
      description:
        t.language === "en"
          ? "Technical blog posts and product descriptions that boosted SaaS conversions by 150%"
          : "Blog post teknis dan deskripsi produk yang meningkatkan konversi SaaS 150%",
      metrics: {
        traffic: "250%",
        keywords: "200+",
        timeframe: t.language === "en" ? "4 months" : "4 bulan",
      },
      image: "/tech-startup-blog.jpg",
    },
    {
      title: t.language === "en" ? "Healthcare Articles" : "Artikel Kesehatan",
      category: t.language === "en" ? "Healthcare" : "Kesehatan",
      description:
        t.language === "en"
          ? "Medical and wellness content that improved clinic's online visibility by 400%"
          : "Konten medis dan wellness yang meningkatkan visibilitas online klinik 400%",
      metrics: {
        traffic: "400%",
        keywords: "100+",
        timeframe: t.language === "en" ? "8 months" : "8 bulan",
      },
      image: "/healthcare-medical-articles.jpg",
    },
    {
      title: t.language === "en" ? "Travel Blog Content" : "Konten Blog Travel",
      category: t.language === "en" ? "Travel & Tourism" : "Travel & Pariwisata",
      description:
        t.language === "en"
          ? "Destination guides and travel tips that generated 500K+ monthly page views"
          : "Panduan destinasi dan tips travel yang menghasilkan 500K+ page views bulanan",
      metrics: {
        traffic: "600%",
        keywords: "300+",
        timeframe: t.language === "en" ? "12 months" : "12 bulan",
      },
      image: "/travel-blog-destination-guides.jpg",
    },
    {
      title: t.language === "en" ? "Financial Services Content" : "Konten Layanan Keuangan",
      category: t.language === "en" ? "Finance" : "Keuangan",
      description:
        t.language === "en"
          ? "Investment and financial planning articles that increased lead generation by 200%"
          : "Artikel investasi dan perencanaan keuangan yang meningkatkan lead generation 200%",
      metrics: {
        traffic: "200%",
        keywords: "120+",
        timeframe: t.language === "en" ? "5 months" : "5 bulan",
      },
      image: "/financial-planning-articles.jpg",
    },
    {
      title: t.language === "en" ? "Food & Recipe Blog" : "Blog Food & Resep",
      category: t.language === "en" ? "Food & Beverage" : "Food & Minuman",
      description:
        t.language === "en"
          ? "Recipe articles and food guides that built a community of 100K+ followers"
          : "Artikel resep dan panduan makanan yang membangun komunitas 100K+ followers",
      metrics: {
        traffic: "450%",
        keywords: "250+",
        timeframe: t.language === "en" ? "10 months" : "10 bulan",
      },
      image: "/food-recipe-blog-articles.jpg",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.language === "en" ? "Our Article Portfolio" : "Portfolio Artikel Kami"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.language === "en"
              ? "Real results from our SEO article campaigns across various industries"
              : "Hasil nyata dari kampanye artikel SEO kami di berbagai industri"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-primary mr-1" />
                    </div>
                    <div className="text-lg font-bold text-primary">+{item.metrics.traffic}</div>
                    <div className="text-xs text-muted-foreground">{t.language === "en" ? "Traffic" : "Traffic"}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-primary mr-1" />
                    </div>
                    <div className="text-lg font-bold text-primary">{item.metrics.keywords}</div>
                    <div className="text-xs text-muted-foreground">{t.language === "en" ? "Keywords" : "Keywords"}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="h-4 w-4 text-primary mr-1" />
                    </div>
                    <div className="text-lg font-bold text-primary">{item.metrics.timeframe}</div>
                    <div className="text-xs text-muted-foreground">{t.language === "en" ? "Duration" : "Durasi"}</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full group bg-transparent">
                  {t.language === "en" ? "View Case Study" : "Lihat Studi Kasus"}
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {t.language === "en" ? "Start Your SEO Content Project" : "Mulai Proyek Konten SEO Anda"}
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function DesignPortfolio() {
  const { t, language } = useLanguage()

  const portfolioItems = [
    {
      title: "TechCorp Brand Identity",
      category: language === "en" ? "Brand Identity" : "Identitas Brand",
      image: "/client-logo-techcorp.jpg",
      description:
        language === "en"
          ? "Complete brand identity for a technology startup"
          : "Identitas brand lengkap untuk startup teknologi",
    },
    {
      title: "E-commerce Mobile App",
      category: language === "en" ? "UI/UX Design" : "Desain UI/UX",
      image: "/mobile-app-interface.png",
      description:
        language === "en"
          ? "Modern mobile app design for online shopping"
          : "Desain aplikasi mobile modern untuk belanja online",
    },
    {
      title: "Restaurant Website",
      category: language === "en" ? "Web Design" : "Desain Web",
      image: "/restaurant-website-design.png",
      description:
        language === "en"
          ? "Elegant website design for fine dining restaurant"
          : "Desain website elegan untuk restoran fine dining",
    },
    {
      title: "Product Packaging",
      category: language === "en" ? "Packaging Design" : "Desain Kemasan",
      image: "/product-packaging-design.png",
      description:
        language === "en"
          ? "Eye-catching packaging for organic skincare products"
          : "Kemasan menarik untuk produk skincare organik",
    },
    {
      title: "Marketing Campaign",
      category: language === "en" ? "Graphic Design" : "Desain Grafis",
      image: "/placeholder-bmdbk.png",
      description:
        language === "en"
          ? "Creative marketing materials for fashion brand"
          : "Materi pemasaran kreatif untuk brand fashion",
    },
    {
      title: "Motion Graphics Video",
      category: language === "en" ? "Motion Graphics" : "Motion Graphics",
      image: "/abstract-motion-graphics.png",
      description: language === "en" ? "Engaging animated explainer video" : "Video explainer animasi yang menarik",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "en" ? "Our Design Portfolio" : "Portfolio Desain Kami"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === "en"
              ? "Explore our recent design projects and see how we bring creative visions to life."
              : "Jelajahi proyek desain terbaru kami dan lihat bagaimana kami mewujudkan visi kreatif."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === "en" ? "View Project" : "Lihat Proyek"}
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            {language === "en" ? "View All Projects" : "Lihat Semua Proyek"}
          </Button>
        </div>
      </div>
    </section>
  )
}

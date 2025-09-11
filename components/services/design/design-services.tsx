"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Monitor, Smartphone, Package, ImageIcon, Zap } from "lucide-react"

export function DesignServices() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Palette,
      title: t.language === "en" ? "Brand Identity" : "Identitas Brand",
      description:
        t.language === "en"
          ? "Complete brand identity design including logo, color palette, typography, and brand guidelines."
          : "Desain identitas brand lengkap termasuk logo, palet warna, tipografi, dan panduan brand.",
    },
    {
      icon: Monitor,
      title: t.language === "en" ? "UI/UX Design" : "Desain UI/UX",
      description:
        t.language === "en"
          ? "User-centered interface design for web and mobile applications with optimal user experience."
          : "Desain antarmuka yang berpusat pada pengguna untuk aplikasi web dan mobile dengan pengalaman pengguna optimal.",
    },
    {
      icon: Smartphone,
      title: t.language === "en" ? "Mobile App Design" : "Desain Aplikasi Mobile",
      description:
        t.language === "en"
          ? "Native and cross-platform mobile app design with modern and intuitive interfaces."
          : "Desain aplikasi mobile native dan cross-platform dengan antarmuka modern dan intuitif.",
    },
    {
      icon: Package,
      title: t.language === "en" ? "Packaging Design" : "Desain Kemasan",
      description:
        t.language === "en"
          ? "Eye-catching packaging design that reflects your brand and attracts customers."
          : "Desain kemasan yang menarik perhatian yang mencerminkan brand Anda dan menarik pelanggan.",
    },
    {
      icon: ImageIcon,
      title: t.language === "en" ? "Graphic Design" : "Desain Grafis",
      description:
        t.language === "en"
          ? "Professional graphic design for marketing materials, social media, and print media."
          : "Desain grafis profesional untuk materi pemasaran, media sosial, dan media cetak.",
    },
    {
      icon: Zap,
      title: t.language === "en" ? "Motion Graphics" : "Motion Graphics",
      description:
        t.language === "en"
          ? "Engaging motion graphics and animations for digital marketing and presentations."
          : "Motion graphics dan animasi yang menarik untuk pemasaran digital dan presentasi.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.language === "en" ? "Our Design Services" : "Layanan Desain Kami"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.language === "en"
              ? "We offer comprehensive design services to help your brand make a lasting impression."
              : "Kami menawarkan layanan desain komprehensif untuk membantu brand Anda membuat kesan yang lasting."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

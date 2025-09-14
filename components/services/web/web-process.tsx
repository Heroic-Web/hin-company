"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageSquare, Palette, Code, TestTube, Rocket } from "lucide-react"

export function WebProcess() {
  const processSteps = [
    {
      icon: MessageSquare,
      title: "Consultation & Analysis",
      titleEn: "Konsultasi & Analisis",
      description:
        "Kami memahami kebutuhan bisnis Anda dan menganalisis target audiens untuk menciptakan strategi yang tepat.",
      descriptionEn: "We understand your business needs and analyze your target audience to create the right strategy.",
      step: "01",
    },
    {
      icon: Palette,
      title: "Product Design",
      titleEn: "Design & Wireframe",
      description:
        "Tim desainer kami membuat mockup dan wireframe yang sesuai dengan brand identity dan user experience terbaik.",
      descriptionEn:
        "Our design team creates mockups and wireframes that align with your brand identity and best user experience.",
      step: "02",
    },
    {
      icon: Code,
      title: "Development",
      titleEn: "Development & Coding",
      description:
        "Pengembangan website menggunakan teknologi terkini dengan kode yang bersih, aman, dan mudah dimaintenance.",
      descriptionEn:
        "Website development using the latest technology with clean, secure, and easily maintainable code.",
      step: "03",
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      titleEn: "Testing & Quality Assurance",
      description:
        "Pengujian menyeluruh pada berbagai device dan browser untuk memastikan website berfungsi dengan sempurna.",
      descriptionEn:
        "Comprehensive testing across various devices and browsers to ensure the website functions perfectly.",
      step: "04",
    },
    {
      icon: Rocket,
      title: "Launch & Deployment",
      titleEn: "Launch & Deployment",
      description:
        "Peluncuran website ke server production dengan konfigurasi optimal dan monitoring performa real-time.",
      descriptionEn:
        "Website launch to production server with optimal configuration and real-time performance monitoring.",
      step: "05",
    },
    {
      icon: CheckCircle,
      title: "Maintenance & Support",
      titleEn: "Maintenance & Support",
      description:
        "Dukungan berkelanjutan, update keamanan, dan maintenance rutin untuk menjaga performa website optimal.",
      descriptionEn: "Ongoing support, security updates, and routine maintenance to keep website performance optimal.",
      step: "06",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Proses Web Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Metodologi pengembangan website yang terstruktur dan terbukti menghasilkan website berkualitas tinggi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="relative border-border/50 hover:shadow-lg transition-all duration-300 group">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>

              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{step.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Garansi Kepuasan 100% atau Uang Kembali</span>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  MessageSquare,
  ClipboardList,
  LayoutGrid,
  Code,
  TestTube,
  Rocket,
  RefreshCcw,
  CheckCircle,
} from "lucide-react"

export function WebProcess() {
  const processSteps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Idea Exploration & Goal Planning",
      description:
        "Tahap awal untuk menggali ide, memahami kebutuhan, serta menetapkan tujuan proyek secara jelas agar pengembangan berjalan terarah dan sesuai ekspektasi.",
    },
    {
      step: "02",
      icon: ClipboardList,
      title: "System Analysis & Planning",
      description:
        "Melakukan analisis kebutuhan sistem, alur kerja, serta perencanaan teknis yang matang untuk memastikan solusi yang efisien dan tepat sasaran.",
    },
    {
      step: "03",
      icon: LayoutGrid,
      title: "System Design & Architecture",
      description:
        "Merancang struktur sistem, arsitektur aplikasi, serta desain antarmuka yang optimal untuk performa, skalabilitas, dan pengalaman pengguna.",
    },
    {
      step: "04",
      icon: Code,
      title: "Development & Execution",
      description:
        "Tahap pengembangan dan implementasi sistem menggunakan teknologi yang sesuai dengan standar kode yang bersih, aman, dan mudah dikembangkan.",
    },
    {
      step: "05",
      icon: TestTube,
      title: "Testing & Quality Control (QC)",
      description:
        "Pengujian menyeluruh untuk memastikan sistem bebas dari bug, berjalan stabil, serta memenuhi standar kualitas sebelum dirilis.",
    },
    {
      step: "06",
      icon: Rocket,
      title: "Deployment & Launch",
      description:
        "Melakukan proses deployment ke server produksi dan peluncuran sistem agar dapat digunakan secara optimal oleh pengguna.",
    },
    {
      step: "07",
      icon: RefreshCcw,
      title: "Maintenance & Evaluation",
      description:
        "Pemeliharaan berkelanjutan, evaluasi performa, serta peningkatan sistem untuk memastikan keberlangsungan dan kualitas jangka panjang.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Web Solutions Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tahapan pengembangan sistem yang terstruktur, sistematis, dan
            berorientasi pada kualitas serta keberlanjutan.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <Card
              key={step.step}
              className="relative border-border/50 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>

              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {step.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">
              Proses Terstruktur untuk Hasil Maksimal
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  MessageCircle,
  FileText,
  Code,
  RefreshCcw,
  CheckCircle2,
  Headphones,
} from "lucide-react"

export function LandingPageProcess() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Konsultasi Awal",
      description:
        "Ceritakan kebutuhan, target market, dan tujuan website Anda. Tim Heroic Web akan memberikan arahan serta solusi terbaik sesuai kebutuhan bisnis Anda.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Pengiriman Proposal",
      description:
        "Kami mengirimkan proposal berisi analisa kebutuhan, detail fitur, estimasi waktu pengerjaan, serta rincian biaya secara transparan.",
    },
    {
      number: "03",
      icon: Code,
      title: "Proses Pengerjaan",
      description:
        "Setelah DP diterima, tim kami mulai mengerjakan website sesuai konsep yang telah disepakati dengan standar desain modern & konversi tinggi.",
    },
    {
      number: "04",
      icon: RefreshCcw,
      title: "Review & Revisi",
      description:
        "Anda dapat memberikan feedback. Kami melakukan revisi sesuai ketentuan agar hasil benar-benar sesuai ekspektasi.",
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: "Serah Terima Website",
      description:
        "Setelah pelunasan, website diserahkan lengkap dengan akses admin, email bisnis, dan panduan penggunaan.",
    },
    {
      number: "06",
      icon: Headphones,
      title: "Support & Maintenance",
      description:
        "Kami tetap mendampingi Anda melalui layanan maintenance dan dukungan teknis agar website tetap optimal.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alur Pengerjaan Landing Page Heroic Web
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proses cepat, transparan, dan profesional. Kami memastikan setiap
            tahap berjalan rapi agar website Anda selesai tepat waktu dan siap menghasilkan.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-background"
            >
              {/* Number Badge */}
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-lg">
                {step.number}
              </div>

              <CardHeader className="pt-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {step.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-primary/10 text-primary px-8 py-4 rounded-full font-medium shadow-sm">
            🚀 Website Bisa Selesai Dalam 1 – 3 Hari Jika Domain Sudah Siap
          </div>
        </div>
      </div>
    </section>
  )
}
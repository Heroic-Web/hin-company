"use client"

import {
  Bot,
  Briefcase,
  CheckCheck,
  CircleDollarSign,
  FileCheck,
  Headphones,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
  Building2,
  GraduationCap,
  HeartHandshake,
} from "lucide-react"

import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Headphones,
    title: "Konsultasi Gratis",
    desc: "Diskusikan kebutuhan bisnis Anda tanpa biaya."
  },
  {
    icon: Layers3,
    title: "Solusi All in One",
    desc: "Website, SEO, desain, AI, dan automasi dalam satu tempat."
  },
  {
    icon: Bot,
    title: "AI Native Agency",
    desc: "Memanfaatkan AI untuk efisiensi dan inovasi."
  },
  {
    icon: Briefcase,
    title: "Fokus pada Hasil Bisnis",
    desc: "Bukan hanya tampilan, tetapi pertumbuhan."
  },
  {
    icon: Rocket,
    title: "Proses Cepat",
    desc: "Workflow modern mempercepat eksekusi proyek."
  },
  {
    icon: CheckCheck,
    title: "Solusi Fleksibel",
    desc: "Disesuaikan dengan kebutuhan dan anggaran."
  },
  {
    icon: ShieldCheck,
    title: "Dukungan Pasca Peluncuran",
    desc: "Pendampingan setelah proyek selesai."
  },
  {
    icon: CircleDollarSign,
    title: "Harga Kompetitif",
    desc: "Investasi efisien dengan hasil maksimal."
  },
  {
    icon: FileCheck,
    title: "Garansi & Pendampingan",
    desc: "Bug fixing dan konsultasi lanjutan."
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    desc: "Optimal di smartphone, tablet, dan desktop."
  },
  {
    icon: Building2,
    title: "Legalitas Resmi",
    desc: "Bernaung di PT Heroic Inovasi Nusantara."
  },
  {
    icon: Users,
    title: "Berbagai Industri",
    desc: "Pengalaman lintas sektor bisnis."
  },
  {
    icon: HeartHandshake,
    title: "Partner Jangka Panjang",
    desc: "Tumbuh bersama bisnis Anda."
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Platform",
    desc: "Berjalan lancar di berbagai perangkat."
  },
  {
    icon: GraduationCap,
    title: "Pelatihan Pengguna",
    desc: "Dokumentasi dan pelatihan lengkap."
  },
]

export function WhyChooseFeatures() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            15 Keunggulan HINAI Tech
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border-border/50 bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 font-semibold">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import type { Metadata } from "next"
import {
  ShieldCheck,
  Clock3,
  Sparkles,
  FileText,
  UploadCloud,
} from "lucide-react"


import { ProjectBriefForm } from "@/components/project-brief-form"

export const metadata: Metadata = {
  title: "Form Kebutuhan Proyek | HINAI Tech",

  description:
    "Isi formulir kebutuhan proyek HINAI Tech untuk membantu tim kami memahami kebutuhan bisnis Anda secara lebih cepat, akurat, dan profesional.",

  keywords: [
    "HINAI Tech",
    "Client Brief",
    "Form Kebutuhan Proyek",
    "Website Development",
    "Landing Page",
    "App Development",
    "Artikel SEO",
    "Desain Grafis",
    "AI Development",
    "Machine Learning",
    "Software House Indonesia",
  ],

  alternates: {
    canonical: "https://hinaitech.com/project-brief",
  },

  openGraph: {
    title: "Form Kebutuhan Proyek | HINAI Tech",

    description:
      "Silakan isi formulir kebutuhan proyek untuk memulai kolaborasi bersama HINAI Tech.",

    url: "https://hinaitech.com/project-brief",

    siteName: "HINAI Tech",

    type: "website",

    locale: "id_ID",
  },

  twitter: {
    card: "summary_large_image",

    title: "Form Kebutuhan Proyek | HINAI Tech",

    description:
      "Isi client brief HINAI Tech untuk memulai proyek digital Anda.",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function ProjectBriefPage() {
  return (
    <main className="project-brief-page relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-3xl" />

        <div className="absolute bottom-[-10%] left-[30%] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="noise-overlay absolute inset-0 opacity-20" />
      </div>

      <section className="container mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
        {/* Hero */}
        <header className="mx-auto mb-10 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Client Brief Form
          </div>

          <h1 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
            FORM KEBUTUHAN PROYEK HINAI TECH
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Terima kasih telah memilih HINAI Tech. Silakan isi formulir ini
            dengan lengkap agar kami dapat memahami kebutuhan Anda dan memulai
            proyek dengan lebih cepat dan tepat.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="glass-chip">
              <Clock3 className="h-4 w-4 text-cyan-400" />
              24 / 7 Service
            </div>

            <div className="glass-chip">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Safe Data
            </div>
          </div>
        </header>

        {/* Info Cards */}
        <section className="mx-auto mb-8 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/5 backdrop-blur-2xl">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 transition-all duration-300 hover:scale-[1.02]">
              <UploadCloud className="mb-3 h-8 w-8 text-cyan-300" />

              <h3 className="mb-2 font-semibold text-cyan-300">
                Siapkan Asset
              </h3>

              <p className="text-sm leading-7 text-slate-300">
                Logo, foto, company profile, katalog, brand guideline, dan
                dokumen pendukung lainnya.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5 transition-all duration-300 hover:scale-[1.02]">
              <FileText className="mb-3 h-8 w-8 text-violet-300" />

              <h3 className="mb-2 font-semibold text-violet-300">
                Jawab Dengan Detail
              </h3>

              <p className="text-sm leading-7 text-slate-300">
                Informasi yang lengkap membantu kami menyusun strategi,
                timeline, dan estimasi yang lebih akurat.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 transition-all duration-300 hover:scale-[1.02]">
              <Clock3 className="mb-3 h-8 w-8 text-blue-300" />

              <h3 className="mb-2 font-semibold text-blue-300">
                Timeline Lebih Cepat
              </h3>

              <p className="text-sm leading-7 text-slate-300">
                Keterlambatan pengiriman materi dapat memengaruhi jadwal
                pengerjaan proyek.
              </p>
            </div>
          </div>
        </section>

        {/* Form Container */}
        <section
          aria-label="Form kebutuhan proyek HINAI Tech"
          className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-[0_0_80px_rgba(6,182,212,0.15)] backdrop-blur-2xl md:p-5"
        >
          <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 md:p-8">
            <ProjectBriefForm />
          </div>
        </section>

        {/* Footer Note */}
        <section className="mx-auto mt-8 max-w-4xl rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 text-center backdrop-blur-xl">
          <p className="text-sm leading-7 text-amber-100">
            Dengan mengirimkan formulir ini, Anda menyetujui bahwa informasi
            yang diberikan akan digunakan oleh tim HINAI Tech untuk kebutuhan
            konsultasi, perencanaan, dan pengerjaan proyek.
          </p>
        </section>
      </section>
    </main>
  )
}
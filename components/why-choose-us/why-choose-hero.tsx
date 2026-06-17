"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"

export function WhyChooseHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.2),transparent_35%)]" />

      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              ✨ Why Choose HINAI Tech
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Lebih dari Sekadar Membuat Website.
              <span className="block bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
                Kami Membangun Pertumbuhan Bisnis Anda.
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              HINAI Tech adalah digital solution agency yang mengintegrasikan strategi, teknologi, SEO, automasi, dan kreativitas untuk menciptakan hasil digital yang terukur dan berdampak.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">
                  <Play className="mr-2 h-4 w-4" />
                  Lihat Portofolio
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-primary/30 to-fuchsia-500/30 blur-3xl" />

            <div className="relative rounded-[40px] border border-white/10 bg-card/80 p-8 backdrop-blur-xl">
              <img
                src="/Motivate.webp"
                alt="Quote of The Day"
                className="w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
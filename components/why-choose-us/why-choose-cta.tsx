"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export function WhyChooseCTA() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="rounded-[32px] border bg-gradient-to-r from-primary to-fuchsia-600 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">
            Bangun Solusi Digital yang Berdampak Nyata
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Tim HINAI Tech siap membantu bisnis Anda tumbuh lebih cepat
            dengan teknologi, AI, dan strategi digital yang tepat.
          </p>

          <Button
            variant="secondary"
            size="lg"
            asChild
          >
            <Link href="/contact">
              Konsultasi Gratis Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
"use client"

import { Button } from "@/components/ui/button"

export function LandingPageCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Siap Memiliki Landing Page Profesional?
        </h2>
        <p className="mb-8">
          Dapatkan website elegan, cepat, dan siap menghasilkan hanya dalam 1–3 hari.
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
          <a
            href="https://wa.me/6282144137914"
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi via WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
"use client"

import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react"

const rows = [
  "Konsultasi Gratis",
  "Solusi All in One",
  "AI Native Agency",
  "Fokus pada Hasil Bisnis",
  "Proses Pengerjaan Cepat",
  "Solusi Disesuaikan",
  "Dukungan Pasca Peluncuran",
  "Harga Kompetitif",
  "Garansi & Pendampingan",
  "Mobile Friendly",
  "Legalitas Resmi",
  "Multi-Platform",
  "Pelatihan Pengguna",
]

// MATRIX REALISTIS (tanpa random)
const comparison = {
  freelancer: [
    "partial",
    "partial",
    "partial",
    "partial",
    "partial",
    "partial",
    "partial",
    "full",
    "partial",
    "partial",
    "partial",
    "partial",
    "partial",
  ],

  agency: [
    "full",
    "full",
    "partial",
    "full",
    "full",
    "partial",
    "full",
    "full",
    "partial",
    "full",
    "full",
    "partial",
    "partial",
  ],

  software: [
    "full",
    "full",
    "partial",
    "full",
    "full",
    "full",
    "full",
    "partial",
    "full",
    "full",
    "full",
    "full",
    "partial",
  ],
}

const renderIcon = (status: string) => {
  if (status === "full") {
    return <CheckCircle2 className="text-green-500" />
  }
  if (status === "partial") {
    return <AlertTriangle className="text-yellow-500" />
  }
  return <XCircle className="text-red-500" />
}

export function WhyChooseComparison() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Perbandingan
          </span>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            HINAI Tech vs Penyedia Jasa Lainnya
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-left">Fitur</th>

                  <th className="bg-primary/10 p-5 text-center text-primary">
                    HINAI Tech
                  </th>

                  <th className="p-5 text-center">
                    Freelancer
                  </th>

                  <th className="p-5 text-center">
                    Agency Umum
                  </th>

                  <th className="p-5 text-center">
                    Software House
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row}
                    className="border-b border-border/50 hover:bg-muted/40 transition"
                  >
                    <td className="p-5 font-medium">{row}</td>

                    {/* HINAI TECH (always full) */}
                    <td className="bg-primary/5">
                      <div className="flex justify-center">
                        <CheckCircle2 className="text-green-500" />
                      </div>
                    </td>

                    {/* Freelancer */}
                    <td>
                      <div className="flex justify-center">
                        {renderIcon(comparison.freelancer[index])}
                      </div>
                    </td>

                    {/* Agency */}
                    <td>
                      <div className="flex justify-center">
                        {renderIcon(comparison.agency[index])}
                      </div>
                    </td>

                    {/* Software House */}
                    <td>
                      <div className="flex justify-center">
                        {renderIcon(comparison.software[index])}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
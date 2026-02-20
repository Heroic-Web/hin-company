'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText,
  Image,
  Minimize2,
  Maximize2,
  QrCode,
  Type,
  Sparkles,
  Rocket,
  ShieldCheck,
  Globe,
} from 'lucide-react';

const tools = [
  {
    title: 'Gabung PDF',
    icon: FileText,
    description:
      'Gabungkan beberapa file PDF menjadi satu dokumen dengan cepat dan tanpa ribet. Cocok untuk penggabungan laporan, dokumen administrasi, atau file kerja.',
    link: 'https://hinaitech.com/dashboard/tools/merge-pdf',
  },
  {
    title: 'PDF to Image',
    icon: Image,
    description:
      'Ubah file PDF menjadi format gambar (JPG/PNG) dengan kualitas tinggi. Ideal untuk preview, presentasi, atau kebutuhan desain.',
    link: 'https://hinaitech.com/dashboard/tools/pdf-to-image',
  },
  {
    title: 'Image to PDF',
    icon: FileText,
    description:
      'Konversi gambar menjadi file PDF dalam hitungan detik. Cocok untuk dokumen scan, tugas, atau arsip digital.',
    link: 'https://hinaitech.com/dashboard/tools/image-to-pdf',
  },
  {
    title: 'Resize Image',
    icon: Minimize2,
    description:
      'Ubah ukuran gambar sesuai kebutuhan tanpa mengurangi kualitas secara signifikan. Cocok untuk upload website atau media sosial.',
    link: 'https://hinaitech.com/dashboard/tools/resize-image',
  },
  {
    title: 'Compress Image',
    icon: Maximize2,
    description:
      'Kompres ukuran file gambar agar lebih ringan dan cepat diakses tanpa kehilangan kualitas yang berarti.',
    link: 'https://hinaitech.com/dashboard/tools/compress-image',
  },
  {
    title: 'QR Code Generator',
    icon: QrCode,
    description:
      'Buat QR Code instan untuk link website, WhatsApp, lokasi Google Maps, atau data lainnya dengan mudah.',
    link: 'https://hinaitech.com/dashboard/tools/generate-qr',
  },
  {
    title: 'Convert Case',
    icon: Type,
    description:
      'Ubah format huruf menjadi UPPERCASE, lowercase, atau Capitalize secara otomatis. Berguna untuk penulisan cepat dan efisien.',
    link: 'https://hinaitech.com/dashboard/tools/convert-case',
  },
];

export default function FreeToolsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-muted py-20 px-6 overflow-hidden">
      
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex justify-center items-center gap-3">
          <Sparkles className="text-primary w-8 h-8 animate-pulse" />
          Free Tools Digital
        </h1>

        <p className="text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
          Kumpulan tools gratis yang bisa membantu pekerjaan digital Anda
          menjadi lebih cepat, efisien, dan profesional. Mulai dari pengolahan
          PDF, optimasi gambar, hingga pembuatan QR Code, semuanya tersedia
          secara praktis dan mudah digunakan.
        </p>

        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Kami memahami bahwa di era digital, kecepatan dan efisiensi adalah
          kunci utama. Karena itu, halaman ini kami sediakan sebagai solusi
          instan untuk kebutuhan administratif, desain, konten, hingga
          keperluan marketing Anda.
        </p>
      </motion.div>

      {/* TOOLS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border"
            >
              <div className="mb-4">
                <Icon className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {tool.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {tool.description}
              </p>

              <Link
                href={tool.link}
                target="_blank"
                className="inline-block bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                Gunakan Sekarang
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* WHY SECTION */}
      <div className="mt-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Kenapa Menggunakan Free Tools Ini?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div>
            <Rocket className="text-primary mb-4" />
            <h4 className="font-semibold mb-2">Cepat & Praktis</h4>
            <p className="text-muted-foreground leading-relaxed">
              Semua tools dapat digunakan langsung tanpa instalasi tambahan.
              Proses konversi dan pengolahan dilakukan dengan cepat dan efisien.
            </p>
          </div>

          <div>
            <ShieldCheck className="text-primary mb-4" />
            <h4 className="font-semibold mb-2">Aman & Terpercaya</h4>
            <p className="text-muted-foreground leading-relaxed">
              Data Anda tidak disimpan secara permanen. Keamanan dan privasi
              pengguna menjadi prioritas utama.
            </p>
          </div>

          <div>
            <Globe className="text-primary mb-4" />
            <h4 className="font-semibold mb-2">Akses Dimana Saja</h4>
            <p className="text-muted-foreground leading-relaxed">
              Bisa digunakan melalui desktop maupun smartphone tanpa batasan.
            </p>
          </div>
        </div>
      </div>

      {/* USE CASE SECTION */}
      <div className="mt-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Siapa yang Cocok Menggunakan Tools Ini?
        </h2>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          Tools ini sangat cocok untuk pelajar yang ingin menggabungkan tugas,
          pekerja kantoran yang sering mengelola dokumen PDF, marketer properti
          yang ingin membuat QR Code untuk brosur, hingga pebisnis online yang
          membutuhkan optimasi gambar untuk website atau marketplace.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Dengan adanya tools ini, proses kerja Anda menjadi lebih cepat,
          hemat waktu, dan lebih profesional tanpa perlu biaya tambahan.
        </p>
      </div>

      {/* CTA SECTION */}
      <div className="mt-28 bg-primary/10 rounded-3xl p-12 max-w-5xl mx-auto text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-6">
          Butuh Website Profesional atau Artikel SEO?
        </h2>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          Jika Anda merasa tools ini membantu, bayangkan bagaimana website
          profesional dengan desain modern dan artikel SEO berkualitas bisa
          meningkatkan bisnis Anda lebih jauh lagi.
        </p>

        <p className="text-muted-foreground mb-10 leading-relaxed">
          Kami menyediakan jasa pembuatan website custom, landing page
          marketing, artikel SEO untuk meningkatkan ranking Google, serta
          desain grafis profesional untuk kebutuhan branding Anda.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/services/web"
            className="bg-primary text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Order Jasa Website
          </Link>

          <Link
            href="/services/seo-articles"
            className="bg-black text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Order Artikel SEO
          </Link>

          <Link
            href="/services/design"
            className="bg-white border px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Order Desain
          </Link>
        </div>
      </div>

    </section>
  );
}
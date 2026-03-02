"use client"

export default function CommitmentSection() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-300 rounded-full blur-[140px] opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-300 rounded-full blur-[140px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Komitmen & Jaminan HINAI Tech
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-20">
          Kami tidak hanya membangun sistem Artificial Intelligence,
          tetapi membangun solusi yang benar-benar berdampak.
          Setiap proyek dikerjakan dengan pendekatan profesional,
          transparan, dan berorientasi pada performa nyata.
        </p>

        {/* Commitment Cards */}
        <div className="grid md:grid-cols-3 gap-10 text-left">

          {/* Card 1 */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white hover:-translate-y-3 hover:shadow-2xl transition duration-300">
            <div className="absolute -top-5 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 text-sm rounded-full shadow">
              01
            </div>
            <h3 className="mt-8 font-semibold text-lg mb-3">
              Transparan & Profesional
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Semua scope pekerjaan, timeline, dan deliverables dijelaskan sejak awal.
              Tidak ada biaya tersembunyi dan seluruh proses terdokumentasi dengan baik.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white hover:-translate-y-3 hover:shadow-2xl transition duration-300">
            <div className="absolute -top-5 left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-sm rounded-full shadow">
              02
            </div>
            <h3 className="mt-8 font-semibold text-lg mb-3">
              Fokus pada Performa & Value
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kami tidak sekadar menyelesaikan kode. Model yang kami bangun
              dioptimalkan berdasarkan metrik evaluasi dan disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white hover:-translate-y-3 hover:shadow-2xl transition duration-300">
            <div className="absolute -top-5 left-6 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 py-2 text-sm rounded-full shadow">
              03
            </div>
            <h3 className="mt-8 font-semibold text-lg mb-3">
              Siap Implementasi & Scalable
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sistem AI yang kami bangun dapat langsung diintegrasikan
              ke website, aplikasi, atau server cloud dengan arsitektur yang scalable.
            </p>
          </div>

        </div>

        {/* Big CTA Box */}
        <div className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Siap Membangun Sistem AI Profesional?
          </h3>

          <p className="opacity-90 mb-8">
            Konsultasikan kebutuhan Machine Learning, AI System,
            atau integrasi AI ke website Anda bersama tim HINAI Tech.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Konsultasi Sekarang
          </a>

        </div>

      </div>
    </section>
  )
}
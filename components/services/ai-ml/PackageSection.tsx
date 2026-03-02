"use client"

export default function PackageSection() {
  return (
    <section id="paket" className="relative py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 rounded-full blur-[140px] opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full blur-[140px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Pricing & Paket Layanan AI
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-20">
          Kami menawarkan layanan Machine Learning & AI Development dengan harga kompetitif,
          transparan, dan scalable sesuai kebutuhan bisnis maupun akademik Anda.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* PAKET 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition duration-300 text-left">
            <h3 className="text-xl font-bold mb-3">
              Pembuatan Model Machine Learning
            </h3>

            <p className="text-3xl font-extrabold text-indigo-600 mb-6">
              Rp1.200.000
            </p>

            <p className="text-sm text-gray-500 mb-6">
              per proyek
            </p>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li>✔ Ceritakan kebutuhan proyek Anda</li>
              <li>✔ Bersama AI Consultant berpengalaman</li>
              <li>✔ Tanya jawab selama 24 jam</li>
              <li>✔ Codingan Jupyter Notebook / Google Colab</li>
              <li>✔ File Model (.pkl / .h5)</li>
              <li>✔ Exploratory Data Analysis (EDA)</li>
              <li>✔ Data Preprocessing & Feature Engineering</li>
              <li>✔ Dokumentasi penggunaan model</li>
            </ul>

            <a
              href="/contact"
              className="block mt-8 bg-indigo-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Pilih Paket Ini
            </a>
          </div>

          {/* PAKET 2 (Highlighted) */}
          <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl scale-105 text-left">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-indigo-600 text-xs font-bold px-4 py-1 rounded-full shadow">
              Most Popular
            </div>

            <h3 className="text-xl font-bold mb-3">
              Deployment & Integrasi AI
            </h3>

            <p className="text-3xl font-extrabold mb-6">
              Rp1.700.000
            </p>

            <p className="text-sm opacity-80 mb-6">
              per aplikasi
            </p>

            <ul className="space-y-3 text-sm">
              <li>✔ Bebas Konsultasi</li>
              <li>✔ Menggunakan Framework Flask / FastAPI</li>
              <li>✔ Saran terkait proyek Machine Learning</li>
              <li>✔ Best practice mendeploy aplikasi ML</li>
              <li>✔ Diajarkan cara step-by-step</li>
              <li>✔ Integrasi dengan server & custom domain</li>
              <li>✔ Setup API endpoint</li>
              <li>✔ Support revisi minor</li>
            </ul>

            <a
              href="/contact"
              className="block mt-8 bg-white text-indigo-600 text-center py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Pilih Paket Ini
            </a>
          </div>

          {/* PAKET 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition duration-300 text-left">
            <h3 className="text-xl font-bold mb-3">
              Custom AI System Development
            </h3>

            <p className="text-3xl font-extrabold text-indigo-600 mb-6">
              Harga Spesial
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Hubungi tim kami
            </p>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li>✔ Rancang bangun sistem AI end-to-end</li>
              <li>✔ Dokumentasi proyek lengkap</li>
              <li>✔ Pembuatan arsitektur aplikasi</li>
              <li>✔ Diajarkan cara ngodingnya</li>
              <li>✔ Pengerjaan deployment ke Cloud</li>
              <li>✔ Revisi minor 3x</li>
              <li>✔ Backend & Frontend development</li>
              <li>✔ Monitoring & maintenance awal</li>
            </ul>

            <a
              href="/contact"
              className="block mt-8 bg-indigo-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Hubungi Tim Kami
            </a>
          </div>

        </div>

        {/* Guarantee Section */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Jaminan Harga Kompetitif
          </h3>
          <p className="text-gray-600">
            Layanan Machine Learning & AI kami tidak hanya memberikan solusi terbaik,
            tetapi juga harga yang transparan dan rasional sesuai value yang Anda dapatkan.
            Kami fokus pada kualitas, performa model, dan keberhasilan implementasi sistem.
          </p>
        </div>

      </div>
    </section>
  )
}
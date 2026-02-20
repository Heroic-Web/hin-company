"use client"

export function LandingPageBenefits() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">
          Kenapa Harus Heroic Web?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="font-bold">Harga Terjangkau</h4>
            <p>Mulai dari Rp 500.000 dengan fitur lengkap dan profesional.</p>
          </div>

          <div>
            <h4 className="font-bold">Desain Modern & Trending</h4>
            <p>Kami mengikuti tren desain terbaru. Bisa kirim referensi.</p>
          </div>

          <div>
            <h4 className="font-bold">Domain & Hosting Gratis</h4>
            <p>Bonus domain & hosting untuk promo terbatas.</p>
          </div>

          <div>
            <h4 className="font-bold">Revisi Fleksibel</h4>
            <p>Cukup kirim poin perubahan, tim kami siap bantu.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
const industries = [
  "UMKM",
  "Startup",
  "Pendidikan",
  "Kesehatan",
  "Properti",
  "Kuliner",
  "Manufaktur",
  "Pemerintahan",
]

export function WhyChooseIndustries() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Siap Melayani Berbagai Industri
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border px-6 py-3"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
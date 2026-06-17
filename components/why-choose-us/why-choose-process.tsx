export function WhyChooseProcess() {
  const steps = [
    "Pahami Kebutuhan Anda",
    "Susun Strategi Terbaik",
    "Bangun Solusi Digital",
    "Luncurkan & Tumbuhkan",
    "Optimalkan Hasil",
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Apakah Anda Tahu?
          </span>

          <h2 className="text-3xl font-bold md:text-5xl">
            5 Langkah Menuju Pertumbuhan Bisnis Anda
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Kami menghadirkan solusi digital yang terstruktur, cepat, dan
            berfokus pada hasil nyata untuk bisnis Anda.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-stretch gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="relative flex-1"
            >
              <div className="h-full rounded-2xl bg-card/60 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center border border-primary/10">
                
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-white font-bold shadow-md">
                  {index + 1}
                </div>

                <h3 className="font-semibold text-base md:text-lg">
                  {step}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Step {index + 1} dari proses transformasi digital Anda
                </p>
              </div>

              {/* connector line (horizontal only on desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-12px] w-6 h-[2px] bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
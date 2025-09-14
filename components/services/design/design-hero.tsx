"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Palette, Sparkles } from "lucide-react"

export function DesignHero() {
  const { t, language } = useLanguage()

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-emerald-950/20 dark:via-background dark:to-emerald-950/20" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Palette className="w-4 h-4" />
            {t("Profesional Design Services")}
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            {t("Creative Design Solutions")}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
            {language === "en"
              ? "From brand identity to UI/UX design, we create visually stunning and user friendly designs that help your business stand out and connect with your audience."
              : "Dari identitas brand hingga desain UI/UX, kami menciptakan desain yang menakjubkan secara visual dan ramah pengguna yang membantu bisnis Anda menonjol dan terhubung dengan audiens."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Sparkles className="w-5 h-5 mr-2" />
            {t("")}
              {language === "en" ? "Get Quote" : "Dapatkan Penawaran"}
            </Button>
          </div>
        </div>
      </div>
      <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
      <Sparkles className="w-5 h-5 mr-2" />
      {t("view_portfolio")}
      </Button>
    <Button size="lg" variant="outline">
    {t("get_quote")}
  </Button>
    </section>
  );
}

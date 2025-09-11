"use client"
import { Users, Target, Lightbulb, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CareerCulture() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve extraordinary results.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client relationships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve complex challenges.",
    },
    {
      icon: Award,
      title: "Growth",
      description: "We invest in our people's growth and celebrate both individual and team achievements.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("career.culture.title") || "Our Culture & Values"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t("career.culture.description") ||
                "We've built a culture where creativity thrives, ideas are valued, and every team member has the opportunity to make a meaningful impact."}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src="/diverse-team-collaboration.png" alt="Team culture" className="w-full h-auto rounded-2xl shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

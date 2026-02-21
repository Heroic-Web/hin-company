"use client"

import { Users, Target, Lightbulb, Award, HeartHandshake, ShieldCheck, MessageCircle, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CareerCulture() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and open communication to achieve extraordinary results.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code quality to client relationships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to solve complex challenges.",
    },
    {
      icon: Award,
      title: "Growth",
      description:
        "We invest in our people's growth and celebrate both individual and team achievements.",
    },
  ]

  const heroicValues = [
    {
      icon: HeartHandshake,
      title: "Helpfulness",
      description:
        "Helping each other and prioritizing the interests of the team and clients, because success is the result of sincere collaboration.",
    },
    {
      icon: Zap,
      title: "Empowering",
      description:
        "Empowering clients and teams with digital solutions and knowledge to help them compete confidently in the digital world.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable",
      description:
        "Trustworthy in commitment and results. A promise is not just words, but responsibility.",
    },
    {
      icon: MessageCircle,
      title: "Open",
      description:
        "Open to feedback, ideas, and honest communication because innovation grows from transparency.",
    },
    {
      icon: Target,
      title: "Impactful",
      description:
        "Every task must bring value. Big or small, everything we do should create meaningful impact.",
    },
    {
      icon: Lightbulb,
      title: "Courageous",
      description:
        "We dare to take bold steps and create waves, not just follow trends.",
    },
  ]

  return (
    <section id="career-culture" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= INTRO ================= */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("career.culture.title") || "Our Culture & Values"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("career.culture.description") ||
              "We've built a culture where creativity thrives, ideas are valued, and every team member has the opportunity to make a meaningful impact."}
          </p>
        </div>

        {/* ================= MAIN VALUES ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-28">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-muted/40 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= HEROIC CORE VALUES ================= */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The core values that drive everything we do at Heroic Web.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {heroicValues.map((value, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 bg-background"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-3">{value.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
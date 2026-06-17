"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Zap,
  Award,
  Sparkles,
  Orbit,
  Rocket,
} from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Helpfulness",
      description:
        "Helping each other and prioritizing the interests of the team and clients, because we believe that success is the result of sincere collaboration and shared commitment.",
    },
    {
      icon: Zap,
      title: "Intelligent Innovation",
      description:
        "We develop solutions based on research, data, and strategic thinking. Innovation is not just an idea, but measurable and effective execution.",
    },
    {
      icon: Award,
      title: "Next Level Thinking",
      description:
        "We think beyond industry standards to create future-ready systems and strategies that keep our clients ahead of the curve.",
    },
    {
      icon: Shield,
      title: "Adaptive Systems",
      description:
        "We build flexible and scalable systems that are designed to evolve with market trends and technological advancements.",
    },
    {
      icon: Users,
      title: "Intelligent Growth",
      description:
        "We do not only build systems, we create structured, sustainable, and strategic growth with clear direction and measurable outcomes.",
    },
  ]

  return (
    <>
      {/* ==================================== */}
      {/* VISION & MISSION PREMIUM 3D */}
      {/* ==================================== */}

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Future Vision & Strategic Mission
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
              Building The Future
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Our vision and mission serve as the foundation of every
              innovation, technology, and strategic solution we create to help
              businesses grow in the digital era.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Vision */}

            <div className="group perspective-[2000px]">
              <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background via-background to-primary/10 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.15),transparent_40%)]" />

                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

                <CardContent className="relative p-10 md:p-12">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary/70 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                      <Eye className="h-10 w-10 text-primary-foreground" />
                    </div>

                    <Orbit className="h-12 w-12 text-primary/30" />
                  </div>

                  <div className="mb-4">
                    <span className="text-primary font-semibold uppercase tracking-[0.25em] text-xs">
                      Vision
                    </span>

                    <h3 className="mt-2 text-3xl md:text-4xl font-black text-foreground">
                      Our Vision
                    </h3>
                  </div>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    To become a trusted digital partner and a symbol of modern
                    heroism that provides creative and innovative solutions,
                    accelerating the global digital revolution and driving
                    clients’ success with determination and HINAI spirit.
                  </p>

                  <div className="mt-10 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      Future-focused digital transformation
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mission */}

            <div className="group perspective-[2000px]">
              <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background via-background to-primary/10 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--primary),0.15),transparent_40%)]" />

                <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

                <CardContent className="relative p-10 md:p-12">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary/70 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                      <Target className="h-10 w-10 text-primary-foreground" />
                    </div>

                    <Rocket className="h-12 w-12 text-primary/30" />
                  </div>

                  <div className="mb-6">
                    <span className="text-primary font-semibold uppercase tracking-[0.25em] text-xs">
                      Mission
                    </span>

                    <h3 className="mt-2 text-3xl md:text-4xl font-black text-foreground">
                      Our Mission
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {[
                      "Overcome every challenge through determination, innovation, and proactive solutions.",
                      "Implement cutting-edge technologies to deliver exceptional business value.",
                      "Provide professional services focused on customer success and satisfaction.",
                      "Create sustainable growth and positive impact for all stakeholders.",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-background/70 p-4 backdrop-blur-sm"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-bold">
                          {index + 1}
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================== */}
      {/* CORE VALUES PREMIUM */}
      {/* ==================================== */}

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

        <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              Core Values
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-black text-foreground">
              PT. Heroic Inovasi
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Nusantara
              </span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that shape our culture, drive innovation, and
              inspire every achievement we create together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary/10 bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-500 hover:-translate-y-4 hover:border-primary/30 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.12),transparent_45%)]" />

                <CardContent className="relative p-8">
                  <div className="mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary/70 shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <value.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      0{index + 1}
                    </span>

                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
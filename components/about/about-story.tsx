"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowDownToLine,
  Sparkles,
  Clock,
  DollarSign,
  Briefcase,
  Rocket,
  Globe,
  ShieldCheck,
} from "lucide-react"

export function AboutStory() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      description:
        "We provide round-the-clock support to ensure your business runs smoothly anytime, anywhere.",
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description:
        "Premium digital solutions with competitive pricing and maximum business value.",
    },
    {
      icon: Briefcase,
      title: "Professional",
      description:
        "Delivered by experienced professionals focused on quality, precision, and measurable results.",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute top-32 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4" />
              About HINAI Tech
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-foreground leading-tight mb-8">
              Our Story of
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Innovation &
                Growth
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                <strong className="text-foreground">HINAI Tech</strong> is a technology
                company operating under the legal entity{" "}
                <strong className="text-foreground">
                  PT. Heroic Inovasi Nusantara
                </strong>
                . The name <strong className="text-foreground">HINAI</strong> represents
                the company's identity and vision, where{" "}
                <strong className="text-foreground">HIN</strong> stands for{" "}
                <strong className="text-foreground">
                  Heroic Inovasi Nusantara
                </strong>
                , reflecting our commitment to innovation, courage, and impactful digital
                transformation across Indonesia and beyond.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                The <strong className="text-foreground">AI</strong> in HINAI represents
                our focus on <strong className="text-foreground">Artificial Intelligence</strong>,
                intelligent automation, and data-driven innovation. We help businesses
                leverage AI-powered solutions to improve operational efficiency, automate
                repetitive processes, enhance customer experiences, and unlock new growth
                opportunities in the digital era.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                Meanwhile, the word{" "}
                <strong className="text-foreground">Tech</strong> reflects our foundation
                as a technology-driven company. We specialize in developing modern digital
                solutions ranging from web applications, business systems, AI integration,
                cloud-based platforms, digital marketing technologies, SEO optimization,
                branding, and custom software development tailored to the needs of modern
                organizations.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                Founded in 2023, HINAI Tech began as a team of passionate innovators,
                developers, designers, and digital strategists who shared a common goal:
                helping businesses adapt, grow, and thrive in an increasingly competitive
                digital landscape through practical and scalable technology solutions.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                What started as a vision to bridge creativity, business strategy, and
                advanced technology has evolved into a full-service technology company that
                has successfully supported more than 100 businesses, organizations, and
                entrepreneurs in accelerating their digital transformation journey.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                Today, HINAI Tech continues to push the boundaries of innovation by
                combining artificial intelligence, modern software engineering, digital
                marketing expertise, and strategic consulting to create solutions that are
                not only technologically advanced but also practical, measurable, and
                results-oriented.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                We are committed to delivering professional services with integrity,
                responsibility, and long-term value. Every project is approached with a
                focus on quality, efficiency, and sustainable growth to ensure that our
                clients receive solutions that truly support their business objectives.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                As technology continues to evolve, our mission remains clear: to become a
                trusted technology partner that empowers businesses through innovation,
                artificial intelligence, and digital transformation while creating
                meaningful impact for clients, communities, and the broader digital
                ecosystem.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                With a future-focused mindset and a commitment to continuous innovation,
                our team is always ready to help organizations navigate the challenges of
                the digital era through intelligent, effective, and scalable solutions
                designed for long-term success.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl shadow-lg shadow-primary/20"
              >
                <Link
                  href="https://drive.google.com/file/d/1aecHaHY5lCinLb235iCFrQG8twLK9HUQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowDownToLine className="mr-2 h-5 w-5" />
                  Download Company Profile
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-xl group"
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Premium 3D Image Section */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl" />

            <div className="relative group">
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 opacity-60 blur-xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-background/80 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

                <img
                  src="/about_hero.png"
                  alt="HINAI Tech"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Floating Cards */}
                <div className="absolute top-5 left-5 md:top-8 md:left-8">
                  <div className="rounded-2xl border border-white/20 bg-background/80 backdrop-blur-xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <Rocket className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Innovation
                        </p>
                        <p className="font-semibold text-sm">
                          Future Ready
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8">
                  <div className="rounded-2xl border border-white/20 bg-background/80 backdrop-blur-xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Trusted By
                        </p>
                        <p className="font-semibold text-sm">
                          100+ Businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-3xl bg-primary shadow-2xl flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/10 bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.12),transparent_45%)]" />

              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6 shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <feature.icon className="h-10 w-10 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
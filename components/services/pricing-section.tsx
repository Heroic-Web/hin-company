"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Globe,
  LayoutTemplate,
  Search,
  Palette,
  Brain,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

export function PricingSection() {
  const services = [
    {
      title: "Website Development",
      description:
        "Professional websites and web applications built with modern technologies for businesses, schools, organizations, and startups.",
      icon: Globe,
      features: [
        "Company Profile Website",
        "Business Website",
        "Custom Web Application",
        "CMS Development",
        "Responsive Design",
      ],
      link: "/services/web",
    },
    {
      title: "Landing Page Development",
      description:
        "High-converting landing pages designed to maximize leads, sales, and marketing campaign performance.",
      icon: LayoutTemplate,
      features: [
        "Custom Landing Page",
        "Conversion Focused Design",
        "Fast Loading Speed",
        "Lead Generation Form",
        "SEO Friendly Structure",
      ],
      link: "/services/landing-page",
    },
    {
      title: "SEO Content Writing",
      description:
        "SEO-optimized content that helps improve rankings, traffic, and business visibility in search engines.",
      icon: Search,
      features: [
        "SEO Articles",
        "Keyword Research",
        "Website Content",
        "Product Descriptions",
        "Content Optimization",
      ],
      link: "/services/seo-articles",
    },
    {
      title: "AI Solutions",
      description:
        "Artificial Intelligence and automation solutions to improve efficiency and accelerate business growth.",
      icon: Brain,
      features: [
        "AI Integration",
        "Business Automation",
        "AI Consultation",
        "Workflow Optimization",
        "Custom AI Solutions",
      ],
      link: "/services/ai-ml",
    },
    {
      title: "Branding & Design",
      description:
        "Creative design services that strengthen your brand identity and customer engagement.",
      icon: Palette,
      features: [
        "Logo Design",
        "Brand Identity",
        "UI/UX Design",
        "Marketing Design",
        "Social Media Design",
      ],
      link: "/services/design",
    },
  ]

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            Professional Digital Solutions
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Explore Our
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Every business has unique requirements. Explore our services and
            find the right solution tailored to your goals and digital growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-primary/10 bg-background/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]"
            >
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                <CardTitle className="text-2xl">
                  {service.title}
                </CardTitle>

                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full rounded-xl">
                  <Link href={service.link}>
                    View Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Quote?
            </h3>

            <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
              Pricing depends on project scope, features, complexity, and
              business requirements. Contact our team for a personalized
              consultation and quotation.
            </p>

            <Button asChild size="lg" className="rounded-xl">
              <Link href="/contact">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
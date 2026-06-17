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
  Rocket,
  Bot,
  PenTool,
  MonitorSmartphone,
  BadgeCheck,
} from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Professional website and web application development tailored for businesses, organizations, schools, startups, and personal brands.",
      features: [
        "Company Profile Website",
        "Business Website",
        "School & Education Website",
        "Custom Web Application",
        "CMS Development",
        "Mobile Responsive Design",
      ],
      link: "/services/web",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: LayoutTemplate,
      title: "Landing Page Development",
      description:
        "Conversion-focused landing pages designed to maximize leads, sales, registrations, and campaign performance.",
      features: [
        "Sales Landing Page",
        "Lead Generation Page",
        "Product Showcase",
        "Marketing Campaign Page",
        "Fast Performance",
        "SEO Friendly Structure",
      ],
      link: "/services/landing-page",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Search,
      title: "SEO Content Writing",
      description:
        "Professional SEO writing services to improve search rankings, attract organic traffic, and increase online visibility.",
      features: [
        "SEO Articles",
        "Keyword Research",
        "Website Content",
        "Blog Writing",
        "Content Optimization",
        "Product Descriptions",
      ],
      link: "/services/seo-articles",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description:
        "Artificial Intelligence solutions that help businesses automate workflows, improve efficiency, and accelerate growth.",
      features: [
        "AI Integration",
        "Business Automation",
        "AI Consultation",
        "Custom AI Solutions",
        "Workflow Automation",
        "Chatbot Development",
      ],
      link: "/services/ai-ml",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description:
        "Creative branding and visual design services to strengthen your business identity and customer engagement.",
      features: [
        "Logo Design",
        "Brand Identity",
        "UI/UX Design",
        "Social Media Design",
        "Marketing Design",
        "Document Design",
      ],
      link: "/services/design",
      color: "from-fuchsia-500/20 to-violet-500/20",
    },
  ]

  const serviceHighlights = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient project execution with clear milestones.",
    },
    {
      icon: Bot,
      title: "AI-Powered Innovation",
      description: "Leveraging modern AI technology for business growth.",
    },
    {
      icon: PenTool,
      title: "Custom Solutions",
      description: "Every service is tailored to your unique needs.",
    },
    {
      icon: MonitorSmartphone,
      title: "Modern Technology",
      description: "Built using scalable and future-ready technologies.",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            HINAI Tech Professional Services
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Digital Solutions
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Built For Growth
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            We help businesses, organizations, startups, and institutions grow
            through innovative digital solutions powered by technology,
            creativity, and artificial intelligence.
          </p>
        </div>

        {/* Service Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/10 bg-background/80 backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <CardHeader className="relative">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg">
                  <service.icon className="h-8 w-8" />
                </div>

                <CardTitle className="text-2xl">
                  {service.title}
                </CardTitle>

                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
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
                    Explore Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Highlights */}

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose HINAI Tech?
            </h3>

            <p className="max-w-2xl mx-auto text-muted-foreground">
              More than just a service provider, we become your technology
              partner in achieving sustainable digital growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((item, index) => (
              <Card
                key={index}
                className="border-primary/10 bg-background/70 backdrop-blur-sm text-center"
              >
                <CardContent className="p-8">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h4 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.08),transparent_45%)]" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 mb-4 text-primary">
                <BadgeCheck className="h-5 w-5" />
                Trusted Digital Partner
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>

              <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                Let's discuss your business goals and build the right digital
                solution together.
              </p>

              <Button asChild size="lg" className="rounded-xl">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
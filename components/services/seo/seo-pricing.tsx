"use client"

import Link from "next/link";
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

export function SEOPricing() {
  const { t } = useLanguage()

  const plans = [
    {
      name: "Starter SEO",
      price: "$799",
      period: "/month",
      description: "Perfect for small businesses starting their SEO journey",
      features: [
        "Keyword research (up to 20 keywords)",
        "On-page optimization (5 pages)",
        "Monthly SEO report",
        "Basic competitor analysis",
        "Google My Business optimization",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional SEO",
      price: "$1,499",
      period: "/month",
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Keyword research (up to 50 keywords)",
        "On-page optimization (15 pages)",
        "Content creation (4 articles/month)",
        "Link building campaign",
        "Technical SEO audit",
        "Bi-weekly reports",
        "Phone & email support",
      ],
      popular: true,
    },
    {
      name: "Enterprise SEO",
      price: "$2,999",
      period: "/month",
      description: "Advanced SEO solutions for large businesses",
      features: [
        "Unlimited keyword research",
        "Full website optimization",
        "Content creation (8 articles/month)",
        "Advanced link building",
        "Technical SEO implementation",
        "Weekly reports & calls",
        "Dedicated SEO manager",
        "Priority support",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">SEO Pricing Plans</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect SEO package for your business needs. All plans include our proven SEO methodology and
            dedicated support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? "ring-2 ring-emerald-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-white hover:bg-gray-50 text-emerald-600 border border-emerald-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-emerald-400"
                  }`}
                  size="lg"
                >
                  <Link
                    href={t("common.getStarted.link")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("common.getStarted")}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom SEO solution? We offer tailored packages for unique business requirements.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 bg-transparent"
          >
            {t("common.contactUs") || "Contact Us"}
          </Button>
        </div>
      </div>
    </section>
  )
}

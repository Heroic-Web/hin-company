"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function PricingSection() {
  const { t } = useLanguage()

  const plans = [
    {
      name: "Starter",
      price: "$999",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "Mobile-friendly design",
        "3 months support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,499",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "Content management system",
        "E-commerce integration",
        "Analytics setup",
        "6 months support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Performance optimization",
        "Security features",
        "12 months support",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the perfect plan for your business needs. All plans include our quality guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : "border-border/50"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
                >
                  {t("common.getStarted")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

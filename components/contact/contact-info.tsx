"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["cs.heroicweb@gmail.com", "info@heroic.web.id"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+62 821 4413 7914"],
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Jl. Trisnomaju III, Negerikaton, Pesawaran, Lampung, 35353"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 01:00 PM"],
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We'd love to hear from you. Choose the most convenient way to reach us, and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Response Guarantee</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We understand that time is valuable. That's why we guarantee a response to all inquiries within 24 hours
                during business days. For urgent matters, don't hesitate to call us directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

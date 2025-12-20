"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useRef } from "react"
import { useLanguage } from "@/components/language-provider"

export function Testimonials() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials = [
     {
      name: "Ferdiansyah",
      company: "Electical Engineer",
      content:
        "He is a diligent and hardworking person, and willing learn new things. Initially, i was only his client in creating a website and social media for my institutio, but now he is my partner in setting up a business together and establishing an institution.",
      rating: 5,
    },
    {
      name: "Siti Khomsiyah",
      company: "Entepreneur",
      content:
        "The service is friendly and responsible in completing the tasks until they are finished.",
      rating: 5,
    },
    {
      name: "Seina Umar",
      company: "Proefessional Teacher and Tutor",
      content:
        "Good work, and good website. Thank You",
      rating: 5,
    },
    {
      name: "Afifah Khoirunnisa",
      company: "Student",
      content:
        "The service is friendly and responsible in completing the tasks until they are finished.",
      rating: 5,
    },
    {
      name: "Adam from Canada",
      company: "Owner",
      content:
        "The design is cool, and the research paper project is also completed well. Thank you",
      rating: 5,
    },
    {
      name: "Nertile Dika",
      company: "North Macedonia",
      content:
        "The service is friendly and responsible in completing the tasks until they are finished.",
      rating: 5,
    },
    {
      name: "Steve Taylor",
      company: "Minneapolis (USA)",
      content:
        "Our website is now faster and more user friendly. Thank you for your hard work!",
      rating: 5,
    },
    {
      name: "Sarah",
      company: "Tech Startup",
      content:
        "Heroic Web transformed our online presence completely. The website they built is not only beautiful but also performs exceptionally well.",
      rating: 5,
    },
    {
      name: "Michael",
      company: "E-commerce Business",
      content:
        "Their SEO expertise helped us increase our organic traffic by 250% in just 6 months. Highly recommended!",
      rating: 5,
    },
    {
      name: "Lisa Ro",
      company: "Design Agency",
      content:
        "Professional, creative, and reliable. They delivered exactly what we needed and more. Great communication throughout the project.",
      rating: 5,
    },
    {
      name: "David",
      company: "Restaurant Chain",
      content: "Amazing work on our mobile app design. The user experience is seamless and our customers love it!",
      rating: 5,
    },
    {
      name: "Emma Williams",
      company: "Healthcare Startup",
      content: "Fast delivery, excellent communication, and outstanding results. Will definitely work with them again.",
      rating: 5,
    },
  ]

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl font-bold text-primary mr-2">4.9</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-6">Ulasan dari 52 Pelanggan</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div className="text-sm text-muted-foreground">Kecepatan Respon</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">Layanan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">Keterampilan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Sepadan Harga</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Kualitas Aplikasi</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-3 shadow-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-80 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-3 shadow-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

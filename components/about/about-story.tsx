"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Lightbulb } from "lucide-react"

export function AboutStory() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              Heroic is an information technology company that offers high-quality and premium digital services to meet your needs. Founded by a group of experienced individuals, we have a team of experts in the field of web application development.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              Founded in 2023, Heroic Web began as a small team of passionate developers and designers who believed
              that every business deserves a powerful online presence.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              What started as a vision to bridge the gap between beautiful design and functional technology has grown
              into a full-service digital agency that has helped over 100 businesses transform their online presence.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              Today, we continue to push the boundaries of what's possible in web development, SEO, and design, always
              putting our clients' success at the heart of everything we do.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              We are committed to providing the best services to the community, including a variety of writing solutions, design, web applications, problem-solving, and customer inquiry responses. With dedication and responsibility, we handle each project meticulously to ensure the satisfaction of Heroic's clients.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              One of our visions is to be a bridge between the business world and the workforce. Given the rapid technological advancements, we believe that businesses must adapt to these changes. As intermediaries, we help businesses attract customers and foster good relationships between business owners and clients, thereby enhancing business potential amidst the growing market demands.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              Our team is always ready to assist you with all your digital business needs, providing the right and effective solutions for your success.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">100+</div>
                <div className="text-xl text-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-border/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with exceptional digital solutions that drive growth, enhance user experience, and
                create lasting impact in the digital landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading digital agency that transforms ideas into powerful online experiences, setting new
                standards for innovation and excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quality, integrity, and client success drive everything we do. We believe in building long-term
                partnerships based on trust and exceptional results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

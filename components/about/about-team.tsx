"use client"

import { Card, CardContent } from "@/components/ui/card"

export function AboutTeam() {
  const team = [
    {
      name: "Rodhi Faisal Mufid",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300&text=Alex",
      bio: "Full-stack developer with 4+ years of experience in building scalable web applications, and articles seo.",
    },
    {
      name: "Afifah Khoirunnisa",
      role: "Chief Operating Officer",
      image: "/placeholder.svg?height=300&width=300&text=Siti",
      bio: "Operations expert with a strong background in process optimization, team leadership, and project management.",
    },
    {
      name: "Seina Umar",
      role: "Chief Finansial Officer",
      image: "/placeholder.svg?height=300&width=300&text=Seina",
      bio: "Financial strategist with expertise in budgeting, forecasting, and financial planning to drive business growth.",
    },
    {
      name: "Ilham Muhammad Jayadi Gunawan",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300&text=Ilham",
      bio: "Creative designer specializing in user experience and brand identity with a passion for innovation.",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The talented individuals behind Heroic Web's success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

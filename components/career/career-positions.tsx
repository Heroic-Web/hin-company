"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CareerPositions() {
  const { t } = useLanguage()

  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / Jakarta",
      type: "Full-time",
      salary: "$60,000 - $80,000",
      description:
        "Join our frontend team to build amazing user experiences using React, Next.js, and modern web technologies.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX design skills"],
    },
    {
      title: "SEO Content Specialist",
      department: "Marketing",
      location: "Remote / Bandung",
      type: "Full-time",
      salary: "$40,000 - $55,000",
      description:
        "Create compelling SEO-optimized content that drives organic traffic and engages our target audience.",
      requirements: ["3+ years SEO experience", "Content writing skills", "Analytics knowledge"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Surabaya",
      type: "Full-time",
      salary: "$45,000 - $65,000",
      description:
        "Design intuitive and beautiful user interfaces that enhance user experience across web and mobile platforms.",
      requirements: ["4+ years design experience", "Figma proficiency", "User research skills"],
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote / Jakarta",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      description: "Build scalable backend systems and APIs that power our web applications and services.",
      requirements: ["4+ years backend experience", "Node.js/Python skills", "Database expertise"],
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote / Yogyakarta",
      type: "Full-time",
      salary: "$50,000 - $70,000",
      description: "Lead our digital marketing efforts across multiple channels to drive growth and brand awareness.",
      requirements: ["5+ years marketing experience", "Campaign management", "Analytics expertise"],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote / Bali",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      description: "Coordinate cross-functional teams to deliver high quality projects on time and within budget.",
      requirements: ["4+ years PM experience", "Agile methodology", "Team leadership skills"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("career.positions.title") || "Open Positions"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("career.positions.description") ||
              "Discover exciting opportunities to grow your career with us. We offer competitive salaries, flexible work arrangements, and a collaborative environment."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{position.department}</Badge>
                  <Badge variant="outline">{position.type}</Badge>
                </div>
                <CardTitle className="text-xl">{position.title}</CardTitle>
                <CardDescription className="text-sm">{position.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {position.salary}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  {t("career.positions.apply") || "Apply Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase } from "lucide-react"

interface CareerPositionsProps {
  onSelectPosition?: (position: string) => void
}

export function CareerPositions({ onSelectPosition }: CareerPositionsProps) {

  const positions = [
    {
      title: "Co-Founder",
      department: "Executive",
      location: "Remote / Bandar Lampung",
      type: "Equity Partnership",
      compensation: "Equity Stake + Performance Bonus",
      description:
        "Join as a Co-Founder to shape the long-term vision and growth of Heroic Web.",
      requirements: [
        "Entrepreneurial experience",
        "Leadership capability",
        "Strategic mindset",
        "Growth-oriented personality",
      ],
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Package (Based on Skill & Evaluation)",
      description:
        "Develop scalable and modern web interfaces using React and Next.js.",
      requirements: [
        "1.5+ year React experience",
        "TypeScript knowledge",
        "Understanding of UI/UX",
      ],
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Package (Based on Skill & Evaluation)",
      description:
        "Build robust backend systems and APIs to power our web applications.",
      requirements: [
        "Node.js experience",
        "Database knowledge",
        "API security understanding",
      ],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Compensation (Portfolio Review Based)",
      description:
        "Design clean and conversion-focused digital experiences.",
      requirements: [
        "Figma proficiency",
        "Strong design sense",
        "UX thinking mindset",
      ],
    },
    {
      title: "Social Media Specialist",
      department: "Marketing",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Package + Performance Bonus",
      description:
        "Manage and grow our social media presence strategically.",
      requirements: [
        "Social media tools knowledge",
        "Creative content creation",
        "Analytics understanding",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Package + Performance Bonus",
      description:
        "Execute performance-driven digital marketing campaigns.",
      requirements: [
        "Google Ads experience",
        "Meta Ads experience",
        "Analytical mindset",
      ],
    },
    {
      title: "Content Writer",
      department: "Content",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Compensation (Skill-Based)",
      description:
        "Write engaging and SEO-friendly content for web and clients.",
      requirements: [
        "Strong writing skill",
        "SEO understanding",
        "Research capability",
      ],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Package + Performance Bonus",
      description:
        "Oversee project execution and ensure client satisfaction.",
      requirements: [
        "PM experience",
        "Organizational skill",
        "Communication skill",
      ],
    },
  ]

  const handleApply = (title: string) => {

    // SAFE CALL (tidak error walau undefined)
    if (onSelectPosition) {
      onSelectPosition(title)
    }

    const formSection = document.getElementById("career-application-form")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="career-positions" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Build your future with Heroic Web and grow in a performance-driven digital environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((job, index) => (
            <Card key={index} className="hover:shadow-xl transition duration-300 border">
              <CardHeader>
                <div className="flex justify-between mb-3">
                  <Badge variant="secondary">{job.department}</Badge>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.compensation}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Requirements</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i}>• {req}</li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full"
                  onClick={() => handleApply(job.title)}
                >
                  Apply Now
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
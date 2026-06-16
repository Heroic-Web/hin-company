"use client"

import { Briefcase, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CareerPositionsProps {
  onSelectPosition?: (position: string) => void
}

interface TechStack {
  mobile?: string
  web?: string
  backend?: {
    smallProject?: string
    mediumLargeProject?: string
    customProject?: {
      fastapi?: string
      django?: string
    }
  }
  database?: string[]
}

interface Position {
  title: string
  department: string
  location: string
  type: string
  compensation: string
  description: string
  requirements: string[]
  responsibilities?: string[]
  techStack?: TechStack
}

export function CareerPositions({
  onSelectPosition,
}: CareerPositionsProps) {
  const positions: Position[] = [
    {
      title: "Co-Founder & Chief Growth Officer (CGO)",
      department: "Executive",
      location: "Remote / Bandar Lampung",
      type: "Equity Partnership",
      compensation: "Equity Stake + Performance Bonus",
      description:
        "Lead business growth initiatives and work closely with the founder to scale HINAI Tech sustainably.",
      responsibilities: [
        "Mendapatkan klien secara konsisten",
        "Membangun jaringan dan kemitraan",
        "Menyusun strategi penjualan",
        "Mengembangkan channel pemasaran",
        "Meningkatkan pendapatan perusahaan",
        "Mencari peluang kolaborasi",
        "Membuka peluang bisnis baru",
      ],
      requirements: [
        "Entrepreneurial experience",
        "Leadership capability",
        "Strategic mindset",
        "Growth-oriented personality",
        "Komitmen jangka panjang",
        "Kemampuan yang melengkapi founder",
        "Kemauan bekerja dengan kompensasi awal yang fleksibel",
      ],
    },

    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation:
        "Competitive Package (Based on Skill & Evaluation)",
      description:
        "Build and maintain scalable web and mobile applications across the entire technology stack.",
      responsibilities: [
        "Mengembangkan aplikasi web dan mobile",
        "Membangun REST API dan integrasi pihak ketiga",
        "Mengelola database dan deployment",
        "Menjaga performa, keamanan, dan skalabilitas aplikasi",
        "Berkolaborasi dengan designer dan project manager",
      ],
      requirements: [
        "2+ years of full stack development experience",
        "Strong knowledge of React.js and TypeScript",
        "Experience with Next.js and Tailwind CSS",
        "Experience building mobile apps with React Native + Expo",
        "Experience with Node.js, Express.js, and NestJS",
        "Experience with Prisma ORM and Redis",
        "Experience with Python (FastAPI and Django)",
        "Knowledge of PostgreSQL and MySQL",
        "Understanding of API security and authentication",
        "Familiarity with Git and CI/CD workflows",
      ],
      techStack: {
        mobile: "React Native + Expo (Android & iOS)",
        web: "Next.js + TypeScript + Tailwind CSS",
        backend: {
          smallProject: "Express.js + Node.js",
          mediumLargeProject: "NestJS + Prisma ORM + Redis",
          customProject: {
            fastapi:
              "AI, Cyber Security, OCR, Machine Learning, Data Processing",
            django:
              "Inventory System, Academic System, Government System",
          },
        },
      },
    },

    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Package + Performance Bonus",
      description:
        "Oversee project execution and ensure client satisfaction.",
      responsibilities: [
        "Mengatur timeline proyek",
        "Follow-up klien",
        "Mengelola freelancer",
        "Membuat SOP",
        "Menjaga proyek selesai tepat waktu",
      ],
      requirements: [
        "PM experience",
        "Organizational skill",
        "Communication skill",
      ],
    },

    {
      title: "Social Media Specialist",
      department: "Marketing",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation: "Competitive Package + Performance Bonus",
      description:
        "Manage, grow, and optimize HINAI Tech's social media presence across multiple platforms through strategic and data-driven content initiatives.",

      responsibilities: [
        "Membuat dan menjadwalkan konten media sosial",
        "Mengelola akun Instagram, Facebook, LinkedIn, TikTok, dan platform lainnya",
        "Meningkatkan engagement dan pertumbuhan audiens",
        "Berinteraksi dengan audiens dan merespons pesan atau komentar",
        "Berkolaborasi dengan Content Writer dan Designer",
        "Menganalisis performa konten dan membuat laporan bulanan",
        "Mengikuti tren media sosial dan mengembangkan ide konten kreatif",
        "Mendukung kampanye branding, promosi, dan peluncuran produk",
      ],

      requirements: [
        "Social media tools knowledge",
        "Creative content creation",
        "Analytics understanding",
        "Experience managing business social media accounts",
        "Familiarity with Meta Business Suite, Buffer, Hootsuite, or similar tools",
        "Basic copywriting and storytelling skills",
        "Understanding of social media algorithms and trends",
        "Ability to analyze insights and optimize content performance",
        "Basic design skills using Canva or Figma are a plus",
      ],
    },

    {
      title: "Frontend Developer (Internship)",
      department: "Engineering",
      location: "Remote / Bandar Lampung",
      type: "Internship",
      compensation:
        "Certificate + Mentorship + Performance-Based Incentive",
      description:
        "Assist in developing modern, responsive, and scalable web interfaces using React and Next.js while gaining hands-on industry experience.",

      responsibilities: [
        "Membantu mengembangkan antarmuka web menggunakan React dan Next.js",
        "Menerjemahkan desain UI/UX menjadi komponen yang responsif",
        "Melakukan perbaikan bug dan optimasi performa",
        "Berpartisipasi dalam code review dan diskusi tim",
        "Menulis kode yang bersih dan mudah dipelihara",
        "Berkolaborasi dengan designer dan backend developer",
        "Mempelajari praktik terbaik pengembangan frontend modern",
      ],

      requirements: [
        "Memahami dasar HTML, CSS, dan JavaScript",
        "Memiliki pengalaman menggunakan React.js",
        "Memahami dasar Next.js dan TypeScript",
        "Memahami konsep responsive design",
        "Memahami dasar Git dan GitHub",
        "Memiliki pemahaman dasar UI/UX",
        "Memiliki kemauan belajar yang tinggi",
        "Memiliki portfolio, GitHub, atau project pribadi menjadi nilai tambah",
      ],
    },

    {
      title: "Backend Developer (Internship)",
      department: "Engineering",
      location: "Remote / Bandar Lampung",
      type: "Internship",
      compensation:
        "Certificate + Mentorship + Performance-Based Incentive",
      description:
        "Assist in building secure and scalable backend systems, APIs, and databases while learning industry best practices.",

      responsibilities: [
        "Membantu mengembangkan REST API",
        "Membantu integrasi frontend dengan backend",
        "Membantu desain dan pengelolaan database",
        "Melakukan testing dan debugging aplikasi",
        "Membantu menulis dokumentasi API",
        "Mempelajari keamanan API dan autentikasi",
        "Berkolaborasi dengan frontend developer dan project manager",
      ],

      requirements: [
        "Memahami dasar JavaScript atau TypeScript",
        "Memiliki pengalaman dasar menggunakan Node.js",
        "Memahami konsep REST API",
        "Memahami dasar database SQL seperti PostgreSQL atau MySQL",
        "Memahami dasar Git dan GitHub",
        "Memiliki ketertarikan pada Express.js, NestJS, atau Python",
        "Memiliki kemampuan problem solving yang baik",
        "Memiliki kemauan belajar yang tinggi",
        "Memiliki portfolio, GitHub, atau project pribadi menjadi nilai tambah",
      ],
    },

    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation:
        "Competitive Compensation (Portfolio Review Based)",
      description:
        "Design intuitive, modern, and conversion-focused digital experiences for web and mobile applications.",

      responsibilities: [
        "Membuat wireframe, user flow, dan sitemap",
        "Mendesain antarmuka website dan aplikasi mobile",
        "Membuat desain yang responsif dan user-friendly",
        "Menyusun design system dan komponen UI yang konsisten",
        "Berkolaborasi dengan frontend developer dan project manager",
        "Melakukan riset pengguna dan analisis kebutuhan bisnis",
        "Meningkatkan pengalaman pengguna berdasarkan feedback dan data",
        "Membuat prototype interaktif untuk validasi ide dan presentasi klien",
      ],

      requirements: [
        "Figma proficiency",
        "Strong design sense",
        "UX thinking mindset",
        "Understanding of user flow and information architecture",
        "Experience creating wireframes, prototypes, and design systems",
        "Knowledge of responsive design principles",
        "Understanding of accessibility and usability best practices",
        "Ability to collaborate effectively with developers",
        "Strong communication and presentation skills",
        "Portfolio showcasing web or mobile design projects",
      ],
    },

    {
      title: "Content Writer",
      department: "Content",
      location: "Remote / Bandar Lampung",
      type: "Full-time",
      compensation:
        "Competitive Compensation (Skill-Based)",
      description:
        "Create engaging, conversion-focused, and SEO-friendly content for clients and company branding.",
      responsibilities: [
        "Menulis artikel SEO",
        "Membuat konten website klien",
        "Membuat konten media sosial",
        "Mengembangkan portofolio perusahaan",
        "Menyusun email marketing",
      ],
      requirements: [
        "Strong writing skill",
        "SEO understanding",
        "Research capability",
      ],
    },
  ]

  const handleApply = (title: string) => {
    onSelectPosition?.(title)

    document
      .getElementById("career-application-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }

  return (
    <section id="career-positions" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Open Positions
          </h2>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            Build your future with HINAI Tech and grow in a
            performance driven digital environment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((job) => (
            <Card
              key={job.title}
              className="flex h-full flex-col border transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="mb-3 flex flex-wrap justify-between gap-2">
                  <Badge variant="secondary">
                    {job.department}
                  </Badge>

                  <Badge variant="outline">
                    {job.type}
                  </Badge>
                </div>

                <CardTitle className="text-xl">
                  {job.title}
                </CardTitle>

                <CardDescription>
                  {job.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col space-y-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 shrink-0" />
                    {job.location}
                  </div>

                  <div className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4 shrink-0" />
                    {job.compensation}
                  </div>
                </div>

                {job.responsibilities?.length ? (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Responsibilities
                    </h4>

                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {job.responsibilities.map(
                        (responsibility) => (
                          <li key={responsibility}>
                            • {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ) : null}

                <div>
                  <h4 className="mb-2 text-sm font-semibold">
                    Requirements
                  </h4>

                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {job.requirements.map((requirement) => (
                      <li key={requirement}>
                        • {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                {job.techStack?.database?.length ? (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Database
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {job.techStack.database.map((db) => (
                        <Badge key={db} variant="secondary">
                          {db}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-auto pt-2">
                  <Button
                    className="w-full"
                    onClick={() => handleApply(job.title)}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


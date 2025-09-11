import { CareerHero } from "@/components/career/career-hero"
import { CareerPositions } from "@/components/career/career-positions"
import { CareerBenefits } from "@/components/career/career-benefits"
import { CareerCulture } from "@/components/career/career-culture"
import { CareerApplication } from "@/components/career/career-application"

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <CareerPositions />
      <CareerBenefits />
      <CareerCulture />
      <CareerApplication />
    </main>
  )
}

import { notFound } from "next/navigation"
import { resellers } from "@/data/resellers"
import ResellerHero from "@/components/reseller/ResellerHero"
import ServiceGrid from "@/components/reseller/ServiceGrid"
import FloatingWA from "@/components/reseller/FloatingWA"

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {

  const reseller = resellers.find((r) => r.slug === params.slug)

  if (!reseller) {
    return notFound()
  }

  return (

    <div>

      {/* HERO RESELLER */}

      <ResellerHero reseller={reseller} />

      {/* SERVICES */}

      <div className="max-w-6xl mx-auto px-4 py-10">

        <ServiceGrid
          phone={reseller.phone}
          reseller={reseller.slug}
        />

      </div>

      {/* FLOATING WA */}

      <FloatingWA phone={reseller.phone} />

    </div>

  )

}
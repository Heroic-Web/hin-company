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

export const metadata = {
title: "Reseller Hinai Tech",
description: "Mitra resmi Hinai Tech yang menyediakan layanan website, SEO, AI development dan digital marketing."
}

export default function Page({ params }: PageProps) {

const reseller = resellers.find((r)=>r.slug === params.slug)

if(!reseller){
return notFound()
}

return(

<div className="min-h-screen">

{/* HERO RESELLER */}

<ResellerHero reseller={reseller} />

{/* SERVICES */}

<div className="max-w-6xl mx-auto px-4 md:px-6 py-10">

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
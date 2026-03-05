"use client"

import Image from "next/image"
import QRReseller from "./QRReseller"
import { Phone, Mail } from "lucide-react"

interface Props {
  reseller: {
    name: string
    phone: string
    email?: string
    photo: string
    sold: number
  }
}

export default function ResellerHero({ reseller }: Props) {

return (

<section className="bg-yellow-400 pt-28 pb-16">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-3 gap-10 items-center">

{/* ================= LEFT PROFILE ================= */}

<div className="flex flex-col items-center lg:items-start text-center lg:text-left">

<div className="w-44 h-44 rounded-full border-4 border-white overflow-hidden shadow-lg">

<Image
src={reseller.photo}
alt={reseller.name}
width={200}
height={200}
className="object-cover"
/>

</div>

<h1 className="text-4xl font-bold mt-6">

{reseller.name}

</h1>

<div className="bg-white px-4 py-1 rounded shadow text-sm mt-2">

Reseller Partner

</div>

<p className="mt-4 text-black/80 max-w-sm">

<b>HINAI Tech</b>

</p>

</div>


{/* ================= ABOUT ================= */}

<div className="text-center lg:text-left">

<h3 className="text-2xl font-bold mb-3">

Tentang

</h3>

<p className="text-lg text-black/80">

Mitra resmi Hinai Tech yang membantu bisnis
mendapatkan layanan digital terbaik seperti
website, landing page, SEO, AI dan desain profesional.

</p>

</div>


{/* ================= RIGHT SIDE ================= */}

<div className="flex flex-col items-center lg:items-end gap-6">

{/* STATS */}

<div className="flex gap-6">

<div className="bg-white w-28 h-28 rounded-full flex flex-col justify-center items-center shadow">

<p className="text-3xl font-bold">
{reseller.sold}
</p>

<p className="text-gray-600 text-sm">
Project
</p>

</div>

<div className="bg-white w-28 h-28 rounded-full flex flex-col justify-center items-center shadow">

<p className="text-3xl font-bold">
500+
</p>

<p className="text-gray-600 text-sm">
Klien
</p>

</div>

<div className="bg-white w-28 h-28 rounded-full flex flex-col justify-center items-center shadow">

<p className="text-3xl font-bold">
5★
</p>

<p className="text-gray-600 text-sm">
Rating
</p>

</div>

</div>


{/* BUTTON */}

<div className="flex flex-col gap-4 w-full lg:w-auto">

<a
href={`https://wa.me/${reseller.phone}`}
className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-3 rounded-xl shadow hover:bg-green-600 transition"
>

<Phone size={18}/>
WhatsApp

</a>

<a
href={`mailto:${reseller.email || "admin@hinaitech.com"}`}
className="flex items-center justify-center gap-3 bg-white px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition"
>

<Mail size={18}/>
Email Agen

</a>

</div>


{/* QR */}

<QRReseller phone={reseller.phone}/>

</div>

</div>

</div>

</section>

)

}
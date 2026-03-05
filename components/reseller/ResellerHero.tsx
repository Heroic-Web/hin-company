"use client"

import Image from "next/image"
import QRReseller from "./QRReseller"
import { Phone, Mail, Star } from "lucide-react"

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

<section className="bg-yellow-400 pt-28 pb-20">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-12 gap-8 lg:gap-3 items-center">

{/* ================= LEFT PROFILE ================= */}

<div className="lg:col-span-5 flex items-center gap-3">

<div className="w-44 h-44 rounded-full border-4 border-white overflow-hidden shadow-xl flex-shrink-0">

<Image
src={reseller.photo}
alt={reseller.name}
width={200}
height={200}
className="object-cover w-full h-full"
/>

</div>

<div>

<h1 className="text-4xl font-bold text-black">
{reseller.name}
</h1>

<p className="text-lg mt-1 text-black/80">
HINAI Technology
</p>

<div className="inline-block bg-white px-4 py-1 rounded-lg shadow text-sm mt-2">
<b>Reseller Partner</b>
</div>

</div>

</div>


{/* ================= ABOUT ================= */}

<div className="lg:col-span-3 lg:-ml-6 mt-8 lg:mt-0">

<h3 className="text-2xl font-bold mb-3">
Tentang
</h3>

<p className="text-lg text-black/80 leading-relaxed max-w-md">

Mitra resmi Hinai Tech yang siap membantu bisnis Anda berkembang
melalui layanan digital profesional seperti pembuatan website,
landing page, SEO, pengembangan AI, dan desain kreatif.

</p>

</div>


{/* ================= RIGHT SIDE ================= */}

<div className="lg:col-span-4 flex flex-col items-end gap-6">

{/* STATS */}

<div className="flex gap-5">

<div className="bg-white w-28 h-28 rounded-full flex flex-col justify-center items-center shadow-lg">

<p className="text-3xl font-bold">
{reseller.sold}
</p>

<p className="text-gray-600 text-sm">
Project
</p>

</div>

<div className="bg-white w-28 h-28 rounded-full flex flex-col justify-center items-center shadow-lg">

<p className="text-3xl font-bold">
30+
</p>

<p className="text-gray-600 text-sm">
Klien
</p>

</div>

<div className="bg-white w-28 h-28 rounded-full flex flex-col justify-center items-center shadow-lg">

<div className="flex text-yellow-500 mb-1">

<Star size={18} fill="currentColor"/>
<Star size={18} fill="currentColor"/>
<Star size={18} fill="currentColor"/>
<Star size={18} fill="currentColor"/>
<Star size={18} fill="currentColor"/>

</div>

<p className="text-gray-600 text-sm">
Rating
</p>

</div>

</div>


{/* BUTTON + QR */}

<div className="flex items-center gap-6">

<div className="flex flex-col gap-3">

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
Email

</a>

</div>

<QRReseller phone={reseller.phone}/>

</div>

</div>

</div>

</div>

</section>

)

}
"use client"

import Image from "next/image"
import QRReseller from "./QRReseller"
import StatCircle from "./StatCircle"
import VerifiedBadge from "./VerifiedBadge"
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

<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

{/* PROFILE */}

<div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">

<div className="relative">

<div className="
absolute
-inset-1
rounded-full
bg-gradient-to-r
from-yellow-200
to-yellow-500
blur
opacity-40
"/>

<div className="
relative
w-36
h-36
sm:w-44
sm:h-44
rounded-full
border-4
border-white
overflow-hidden
shadow-xl
">

<Image
src={reseller.photo}
alt={reseller.name}
width={200}
height={200}
className="object-cover w-full h-full"
/>

</div>

</div>

<div>

<h1 className="text-3xl sm:text-4xl font-bold text-black">
{reseller.name}
</h1>

<p className="text-lg mt-1 text-black/80">
HINAI Technology
</p>

<VerifiedBadge/>

</div>

</div>


{/* ABOUT */}

<div className="lg:col-span-3">

<h3 className="text-2xl font-bold mb-3 text-center lg:text-left">
Tentang
</h3>

<p className="text-lg text-black/80 leading-relaxed text-center lg:text-left">

Mitra resmi Hinai Tech yang siap membantu bisnis Anda berkembang
melalui layanan digital profesional seperti pembuatan website,
landing page, SEO, pengembangan AI, dan desain kreatif.

</p>

</div>


{/* RIGHT SIDE */}

<div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6">

{/* STATS */}

<div className="flex gap-5">

<StatCircle
value={reseller.sold}
label="Project"
/>

<StatCircle
value={30}
label="Klien+"
/>

{/* RATING */}

<div className="
bg-white
w-24
h-24
sm:w-28
sm:h-28
rounded-full
flex
flex-col
justify-center
items-center
shadow-lg
hover:scale-105
hover:shadow-2xl
transition
duration-300
">

<div className="flex text-yellow-500 mb-1">

<Star fill="currentColor" size={16}/>
<Star fill="currentColor" size={16}/>
<Star fill="currentColor" size={16}/>
<Star fill="currentColor" size={16}/>
<Star fill="currentColor" size={16}/>

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
className="
flex
items-center
justify-center
gap-3
bg-green-500
text-white
px-6
py-3
rounded-xl
shadow
hover:bg-green-600
transition
">

<Phone size={18}/>
WhatsApp

</a>

<a
href={`mailto:${reseller.email || "admin@hinaitech.com"}`}
className="
flex
items-center
justify-center
gap-3
bg-white
px-6
py-3
rounded-xl
shadow
hover:bg-gray-100
transition
">

<Mail size={18}/>
Email

</a>

</div>

<div className="flex justify-center w-full">

<QRReseller phone={reseller.phone}/>

</div>

</div>

</div>

</div>

</div>

</section>

)

}
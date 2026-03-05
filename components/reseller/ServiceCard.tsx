"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { createWA } from "@/lib/whatsapp"
import { trackClick } from "@/lib/analytics"
import { ChevronLeft,ChevronRight } from "lucide-react"

interface Props{
service:any
phone:string
reseller:string
}

export default function ServiceCard({service,phone,reseller}:Props){

const [open,setOpen] = useState(false)
const [index,setIndex] = useState(0)

const next=()=>{

setIndex((prev)=>
prev === service.images.length-1 ? 0 : prev+1
)

}

const prev=()=>{

setIndex((prev)=>
prev === 0 ? service.images.length-1 : prev-1
)

}

return(

<motion.div
whileHover={{scale:1.03}}
className="bg-white rounded-xl shadow-xl overflow-hidden"
>

{/* IMAGE SLIDER */}

<div className="relative h-48">

<Image
src={service.images[index]}
alt={service.title}
fill
className="object-cover"
/>

<button
onClick={prev}
className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow"
>

<ChevronLeft size={18}/>

</button>

<button
onClick={next}
className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow"
>

<ChevronRight size={18}/>

</button>

</div>


<div className="p-4">

<h3 className="font-bold text-lg">
{service.title}
</h3>

<p className="text-gray-600 text-sm mt-1">
{service.description}
</p>

<button
onClick={()=>setOpen(!open)}
className="text-blue-500 text-sm mt-3"
>

{open ? "Tutup Detail" : "Detail Paket"}

</button>


{open && (

<div className="mt-4 space-y-4">

{service.packages.map((pkg:any,i:number)=>(

<div
key={i}
className="border rounded-lg p-4"
>

<h4 className="font-bold">
{pkg.name}
</h4>

<p className="text-yellow-600 font-semibold">
{pkg.price}
</p>

<ul className="text-sm mt-2">

{pkg.features.map((f:any,j:number)=>(
<li key={j}>✔ {f}</li>
))}

</ul>

<a
href={createWA(phone,service.title+" - "+pkg.name)}
target="_blank"
onClick={()=>trackClick(service.title,reseller)}
className="block bg-green-500 text-white text-center py-2 rounded mt-3"
>

{pkg.button}

</a>

</div>

))}

</div>

)}

</div>

</motion.div>

)

}
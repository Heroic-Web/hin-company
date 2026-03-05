"use client"

import { ShieldCheck } from "lucide-react"

export default function VerifiedBadge(){

return(

<div className="
inline-flex
items-center
gap-2
bg-white
px-3
py-1
rounded-lg
shadow
text-sm
mt-2
">

<ShieldCheck
size={16}
className="text-green-600"
/>

<span className="font-semibold">

Verified Reseller

</span>

</div>

)

}
"use client"

import QRCode from "react-qr-code"

interface Props{
phone:string
}

export default function QRReseller({phone}:Props){

const link = `https://wa.me/${phone}`

return(

<div className="bg-white p-4 rounded-xl shadow-lg text-center">

<QRCode
value={link}
size={130}
/>

<p className="text-xs mt-2">
Scan untuk chat reseller
</p>

</div>

)

}
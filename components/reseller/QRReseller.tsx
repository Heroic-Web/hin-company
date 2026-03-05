"use client"

import QRCode from "react-qr-code"

interface Props{
phone:string
}

export default function QRReseller({phone}:Props){

const url = `https://wa.me/${phone}`

return(

<div className="
bg-white
p-3
rounded-xl
shadow-lg
w-[120px]
h-[120px]
flex
items-center
justify-center
">

<QRCode
value={url}
size={100}
style={{ width:"100%", height:"100%" }}
/>

</div>

)

}
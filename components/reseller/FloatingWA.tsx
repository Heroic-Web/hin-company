"use client"

export default function FloatingWA({phone}:{phone:string}){

return(

<a
href={`https://wa.me/${phone}`}
className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl z-50"
>

<img src="/icons/whatsapp.svg" className="w-6"/>

</a>

)

}
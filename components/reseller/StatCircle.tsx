"use client"

import CountUp from "react-countup"

interface Props {
value:number
label:string
}

export default function StatCircle({value,label}:Props){

const isPlus = label.includes("+")

return(

<div className="
bg-white
w-28 h-28
rounded-full
flex flex-col
justify-center
items-center
shadow-lg
hover:scale-105
hover:shadow-2xl
transition
duration-300
">

<p className="text-3xl font-bold">

<CountUp end={value} duration={2}/>{isPlus && "+"}

</p>

<p className="text-gray-600 text-sm">

{label.replace("+","")}

</p>

</div>

)

}
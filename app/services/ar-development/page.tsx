"use client";

import { useState } from "react";
import Link from "next/link";

import {
Box,
Gamepad2,
Smartphone,
Rocket,
BadgeCheck,
BrainCircuit,
MonitorPlay,
Layers3,
Globe,
Building2,
GraduationCap,
Building,
ShoppingBag,
Shield,
Cloud,
Cpu,
Database,
Sparkles,
Users,
Star,
Clock,
CheckCircle,
ChevronDown
} from "lucide-react";

export default function ARDevelopmentPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const industries = [

{
icon:<GraduationCap size={35}/>,
title:"Pendidikan",
desc:"Media pembelajaran AR interaktif untuk SD, SMP, SMA, SMK, kampus, dan pelatihan."
},

{
icon:<Building2 size={35}/>,
title:"Properti",
desc:"Visualisasi rumah, gedung, interior dan simulasi proyek 3D."
},

{
icon:<Building size={35}/>,
title:"Kesehatan",
desc:"Visualisasi anatomi, simulasi medis, dan pembelajaran kesehatan."
},

{
icon:<ShoppingBag size={35}/>,
title:"Retail",
desc:"Virtual produk interaktif dan pengalaman belanja digital."
},

{
icon:<Cpu size={35}/>,
title:"Industri",
desc:"Pelatihan operasional dan simulasi mesin industri."
},

{
icon:<Globe size={35}/>,
title:"Pariwisata",
desc:"Virtual tour dan pengalaman lokasi interaktif."
}

]

const technologies=[

"NextJS",
"React",
"ThreeJS",
"React Three Fiber",
"ARCore",
"ARKit",
"Unity",
"TypeScript",
"Tailwind",
"Firebase",
"Supabase",
"Tensorflow",
"Python",
"NodeJS",
"MongoDB",
"MySQL"

]

const statistics=[

{
number:"150+",
label:"Project Selesai"
},

{
number:"50+",
label:"Client"
},

{
number:"99%",
label:"Client Satisfaction"
},

{
number:"24/7",
label:"Support"
}

]

const testimonials=[

{
name:"Ahmad Rizki",
job:"Guru SMK",
comment:"Aplikasi AR pendidikan sangat membantu siswa memahami materi lebih cepat."
},

{
name:"Dina Permata",
job:"Startup Founder",
comment:"Pengembangan sangat cepat dan desain visualnya menarik."
},

{
name:"Budi Santoso",
job:"CEO Perusahaan",
comment:"Integrasi AR dan dashboard admin berjalan sangat baik."
}

]

const faqs=[

{
question:"Apa jenis AR yang dapat dibuat?",
answer:"Kami dapat membuat Marker Based AR, Markerless AR, WebAR, Face Filter AR, hingga Location Based AR."
},

{
question:"Berapa lama pengerjaan?",
answer:"Rata-rata 2 hingga 8 minggu tergantung kompleksitas proyek."
},

{
question:"Apakah bisa publish Play Store?",
answer:"Ya, aplikasi Android maupun iOS dapat dipublikasikan."
},

{
question:"Apakah bisa custom?",
answer:"Semua proyek dapat disesuaikan kebutuhan bisnis maupun pendidikan."
}

]

const packages = [

{
name:"Starter AR",
price:"Rp 5.000.000",
description:"Cocok untuk media pembelajaran, promosi produk, dan AR sederhana.",
features:[
"Marker-based AR Experience",
"3 Scene Interaktif",
"Unlimited konten halaman",
"Integrasi ke aplikasi existing",
"Support 1 bulan",
"Estimasi 2-3 minggu"
]
},

{
name:"Advanced Interactive",
price:"Rp 8.000.000",
popular:true,
description:"Cocok untuk aplikasi edukasi, simulasi dan game interaktif.",
features:[
"Aplikasi 2D / 3D Custom",
"3 Level Interaktif",
"Integrasi monetisasi & analytics",
"Publish PlayStore/AppStore",
"Support 3 bulan",
"Estimasi 4-6 minggu"
]
},

{
name:"Enterprise XR",
price:"Rp 10.000.000+",
description:"Solusi skala besar untuk institusi, perusahaan, dan industri.",
features:[
"AR / VR kompleks",
"Multi-user Experience",
"Integrasi API & Database",
"Dashboard Admin",
"Dedicated Team",
"Support 6-12 bulan"
]
}

]

const cubeStyle = `
.cube3d{
position:relative;
width:140px;
height:140px;
transform-style:preserve-3d;
animation:rotateCube 10s linear infinite;
}

.face{
position:absolute;
width:140px;
height:140px;
display:flex;
align-items:center;
justify-content:center;
background:rgba(255,255,255,0.08);
border:1px solid rgba(255,255,255,.2);
backdrop-filter:blur(10px);
border-radius:20px;
color:white;
box-shadow:0 0 30px rgba(0,255,255,.2);
}

.front{
transform:translateZ(70px);
}

.back{
transform:rotateY(180deg) translateZ(70px);
}

.right{
transform:rotateY(90deg) translateZ(70px);
}

.left{
transform:rotateY(-90deg) translateZ(70px);
}

.top{
transform:rotateX(90deg) translateZ(70px);
}

.bottom{
transform:rotateX(-90deg) translateZ(70px);
}

@keyframes rotateCube{

0%{
transform:rotateX(0deg) rotateY(0deg);
}

50%{
transform:rotateX(180deg) rotateY(180deg);
}

100%{
transform:rotateX(360deg) rotateY(360deg);
}

}
`;

return (

<>

<style>{cubeStyle}</style>

<div className="bg-slate-950 text-white">

{/* HERO */}

<section className="relative overflow-hidden py-28">

<div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-600 opacity-30"/>

<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid lg:grid-cols-2 gap-10 items-center">

<div>

<div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-300 mb-6">

🚀 Pengembangan Augmented Reality

</div>

<h1 className="text-5xl font-bold leading-tight mb-6">

Bangun Pengalaman Digital Yang Hidup Dengan

<span className="text-cyan-400">

{" "}Augmented Reality

</span>

</h1>

<p className="text-gray-300 text-lg mb-8">

Kami membantu bisnis, sekolah,
startup, institusi dan perusahaan
menciptakan pengalaman digital
berbasis AR, VR, AI, Game serta visualisasi 3D modern.

</p>

<div className="flex flex-wrap gap-4">

{/* WA Konsultasi */}

<Link
href="https://wa.me/6282144137914?text=Halo%20HINAI%20Tech,%20saya%20ingin%20memesan%20aplikasi%20AR.%20Boleh%20konsultasi%20lebih%20lanjut?"
target="_blank"
className="
bg-cyan-500
px-7
py-4
rounded-xl
font-semibold
hover:scale-105
hover:shadow-[0_0_30px_rgba(6,182,212,.6)]
duration-300
transition
"
>

Konsultasi Gratis

</Link>

{/* Scroll ke Paket Harga */}

<button
onClick={()=>{
document
.getElementById("pricing")
?.scrollIntoView({
behavior:"smooth"
})
}}
className="
border
border-white
px-7
py-4
rounded-xl
hover:bg-white
hover:text-black
duration-300
transition
"
>

Pricelist

</button>

</div>

</div>

<div>

<div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-purple-700 to-cyan-600 p-10 rounded-3xl shadow-2xl border border-cyan-400/20">

<div className="absolute w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full -top-10 -left-10"/>

<div className="absolute w-72 h-72 bg-purple-500/20 blur-[100px] rounded-full bottom-0 right-0"/>

<div className="relative z-10 flex flex-col items-center">

<div
className="mb-10"
style={{
perspective:"1000px"
}}
>

<div className="cube3d">

<div className="face front">
<Box size={70}/>
</div>

<div className="face back">
<Cpu size={70}/>
</div>

<div className="face right">
<BrainCircuit size={70}/>
</div>

<div className="face left">
<Layers3 size={70}/>
</div>

<div className="face top">
<Cloud size={70}/>
</div>

<div className="face bottom">
<Database size={70}/>
</div>

</div>

</div>

<h2 className="text-4xl font-bold text-center">

Immersive Digital Experience

</h2>

<p className="mt-5 text-gray-200 text-center leading-8">

Mengubah ide menjadi pengalaman interaktif modern
berbasis Augmented Reality, Virtual Reality,
Artificial Intelligence, visualisasi 3D,
dan teknologi imersif lintas platform.

</p>

<div className="flex flex-wrap gap-3 mt-8 justify-center">

<div className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500">

AR Experience

</div>

<div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500">

AI Integration

</div>

<div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500">

Real-time 3D

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</section>


{/* PENCAPAIAN */}

<section className="py-24 relative overflow-hidden">

<div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"/>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"/>

<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-16">

<div className="
inline-flex
px-5
py-2
rounded-full
bg-purple-500/20
border
border-purple-500
text-purple-300
mb-5
">

🚀 Pencapaian Kami

</div>

<h2 className="text-5xl font-bold">

Kepercayaan Dibangun Dari Hasil

</h2>

<p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">

Setiap proyek adalah mesin kecil yang bergerak menuju pengalaman digital yang lebih imersif. Dari pendidikan hingga industri, kami membantu ide berkembang menjadi produk nyata.

</p>

</div>


<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

{[

{
icon:<Rocket size={40}/>,
number:"150+",
title:"Project Berhasil",
desc:"Website, AR, VR, AI dan aplikasi interaktif."
},

{
icon:<Users size={40}/>,
number:"50+",
title:"Partner & Client",
desc:"Sekolah, startup, UMKM dan perusahaan."
},

{
icon:<Star size={40}/>,
number:"99%",
title:"Kepuasan Client",
desc:"Fokus pada kualitas dan pengalaman pengguna."
},

{
icon:<Clock size={40}/>,
number:"24/7",
title:"Technical Support",
desc:"Tim siap membantu saat dibutuhkan."
}

].map((item,index)=>(

<div
key={index}
className="
group
relative
overflow-hidden
bg-slate-900
rounded-[30px]
border
border-slate-800
p-8
hover:border-cyan-500
transition-all
duration-500
hover:-translate-y-2
"
>

<div className="
absolute
top-0
right-0
w-40
h-40
bg-cyan-500/10
blur-[70px]
rounded-full
group-hover:bg-purple-500/20
transition-all
duration-700
"/>

<div className="relative z-10">

<div className="
w-16
h-16
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-purple-600
flex
items-center
justify-center
mb-6
group-hover:rotate-12
transition
duration-500
">

{item.icon}

</div>

<h2 className="
text-5xl
font-extrabold
bg-gradient-to-r
from-cyan-400
to-purple-400
bg-clip-text
text-transparent
">

{item.number}

</h2>

<h3 className="mt-5 text-2xl font-bold">

{item.title}

</h3>

<p className="mt-4 text-gray-400 leading-7">

{item.desc}

</p>

</div>

</div>

))}

</div>


<div className="
mt-16
bg-gradient-to-r
from-cyan-600
via-blue-600
to-purple-600
rounded-[35px]
p-10
text-center
shadow-2xl
">

<h2 className="text-4xl font-bold">

🌌 Membangun Masa Depan Digital Interaktif

</h2>

<p className="mt-6 max-w-4xl mx-auto text-gray-100 leading-8">

Teknologi bukan sekadar kode yang disusun baris demi baris. Kami mengubah ide menjadi pengalaman yang dapat disentuh, dilihat, dan dirasakan melalui AR, AI, visualisasi 3D, serta solusi lintas platform.

</p>

</div>

</div>

</section>


{/* FITUR */}

<section className="py-20 bg-slate-900">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-4xl font-bold mb-16">

Keunggulan Layanan Kami

</h2>

<div className="grid md:grid-cols-3 gap-8">

{

[

{
icon:<Box/>,
title:"Visual 3D",
desc:"Model 3D realistis dan animasi modern"
},

{
icon:<Smartphone/>,
title:"Multi Platform",
desc:"Android, iOS, Desktop, WebAR"
},

{
icon:<Gamepad2/>,
title:"Game Development",
desc:"Game edukasi dan game interaktif"
},

{
icon:<MonitorPlay/>,
title:"AR Education",
desc:"Media belajar modern"
},

{
icon:<BrainCircuit/>,
title:"AI Integration",
desc:"AI, chatbot dan machine learning"
},

{
icon:<Layers3/>,
title:"Integrasi Sistem",
desc:"API, Dashboard dan Database"

}

].map((item,index)=>(

<div
key={index}
className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition"
>

<div className="text-cyan-400">

{item.icon}

</div>

<h3 className="font-bold text-xl mt-5">

{item.title}

</h3>

<p className="text-gray-400 mt-3">

{item.desc}

</p>

</div>

))

}

</div>

</div>

</section>


{/* INDUSTRI */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-4xl font-bold mb-14">

Solusi Berbagai Industri

</h2>

<div className="grid md:grid-cols-3 gap-8">

{

industries.map((item,index)=>(

<div
key={index}
className="bg-slate-900 p-8 rounded-3xl"
>

<div className="text-cyan-400">

{item.icon}

</div>

<h3 className="font-bold text-2xl mt-5">

{item.title}

</h3>

<p className="text-gray-400 mt-4">

{item.desc}

</p>

</div>

))

}

</div>

</div>

</section>


{/* MENGAPA MEMILIH KAMI */}

<section className="py-24 bg-slate-900 relative overflow-hidden">

<div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"/>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"/>

<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-16">

<div className="
inline-flex
px-5
py-2
rounded-full
bg-cyan-500/20
border
border-cyan-500
text-cyan-300
mb-5
">

✨ Mengapa Memilih Kami

</div>

<h2 className="text-5xl font-bold">

Lebih Dari Sekadar Developer

</h2>

<p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

Kami tidak hanya membuat aplikasi.
Kami membangun pengalaman digital interaktif dengan
AR, AI, Game dan visualisasi 3D modern yang cepat,
menarik dan scalable.

</p>

</div>


{/* CARD FITUR */}

<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">

{[

{
icon:<Rocket size={35}/>,
title:"Pengerjaan Cepat",
desc:"Timeline terstruktur dengan proses development modern."
},

{
icon:<Shield size={35}/>,
title:"Keamanan Tinggi",
desc:"Sistem aman menggunakan best practice development."
},

{
icon:<Sparkles size={35}/>,
title:"Desain Premium",
desc:"UI modern dengan animasi dan visual interaktif."
},

{
icon:<Users size={35}/>,
title:"Tim Berpengalaman",
desc:"Developer, designer dan AR engineer berpengalaman."
},

{
icon:<Cloud size={35}/>,
title:"Cloud Integration",
desc:"Integrasi cloud, database dan API real-time."
},

{
icon:<Cpu size={35}/>,
title:"Teknologi Modern",
desc:"Menggunakan stack dan teknologi terbaru."
}

].map((item,index)=>(

<div
key={index}
className="
group
bg-slate-950
p-8
rounded-3xl
border
border-slate-800
hover:border-cyan-500
transition-all
duration-500
hover:-translate-y-2
"
>

<div
className="
w-16
h-16
rounded-2xl
flex
items-center
justify-center
bg-gradient-to-r
from-cyan-500
to-purple-600
mb-6
group-hover:rotate-12
transition
duration-500
"
>

{item.icon}

</div>

<h3 className="font-bold text-2xl">

{item.title}

</h3>

<p className="text-gray-400 mt-4 leading-8">

{item.desc}

</p>

</div>

))

}

</div>


{/* TABEL PERBANDINGAN */}

<div className="
bg-slate-950
rounded-[35px]
border
border-slate-800
overflow-hidden
shadow-2xl
">

<div className="
bg-gradient-to-r
from-cyan-600
via-blue-600
to-purple-600
p-6
">

<h2 className="text-3xl font-bold">

Perbandingan Layanan

</h2>

</div>

<div className="overflow-x-auto">

<table className="w-full">

<thead>

<tr className="border-b border-slate-800">

<th className="p-6 text-left">

Fitur

</th>

<th className="p-6 text-center text-cyan-400">

Kami

</th>

<th className="p-6 text-center text-gray-500">

Kompetitor Umum

</th>

</tr>

</thead>

<tbody>

<tr className="border-b border-slate-800">

<td className="p-6">

Desain UI Modern

</td>

<td className="text-center">

✅

</td>

<td className="text-center">

⚪

</td>

</tr>

<tr className="border-b border-slate-800">

<td className="p-6">

Visual 3D Interaktif

</td>

<td className="text-center">

✅

</td>

<td className="text-center">

⚪

</td>

</tr>

<tr className="border-b border-slate-800">

<td className="p-6">

AI Integration

</td>

<td className="text-center">

✅

</td>

<td className="text-center">

❌

</td>

</tr>

<tr className="border-b border-slate-800">

<td className="p-6">

Support Setelah Launch

</td>

<td className="text-center">

✅

</td>

<td className="text-center">

⚪

</td>

</tr>

<tr>

<td className="p-6">

Custom Development

</td>

<td className="text-center">

✅

</td>

<td className="text-center">

⚪

</td>

</tr>

</tbody>

</table>

</div>

</div>


{/* BOTTOM INFO */}

<div className="
grid
md:grid-cols-3
gap-6
mt-16
">

<div className="
bg-gradient-to-r
from-cyan-600
to-blue-600
p-8
rounded-3xl
text-center
">

<h2 className="text-5xl font-bold">

150+

</h2>

<p className="mt-3">

Project Selesai

</p>

</div>


<div className="
bg-gradient-to-r
from-purple-600
to-pink-600
p-8
rounded-3xl
text-center
">

<h2 className="text-5xl font-bold">

50+

</h2>

<p className="mt-3">

Client Aktif

</p>

</div>


<div className="
bg-gradient-to-r
from-green-600
to-emerald-600
p-8
rounded-3xl
text-center
">

<h2 className="text-5xl font-bold">

99%

</h2>

<p className="mt-3">

Client Satisfaction

</p>

</div>

</div>

</div>

</section>


{/* PAKET */}

<section
id="pricing"
className="py-20"
>

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-4xl font-bold mb-16">

Paket Layanan

</h2>

<div className="grid lg:grid-cols-3 gap-8">

{

packages.map((pkg,index)=>(

<div
key={index}
className={`rounded-3xl p-8 ${
pkg.popular
?
"bg-gradient-to-b from-cyan-500 to-blue-700"
:
"bg-slate-900"
}`}
>

<h3 className="text-2xl font-bold">

{pkg.name}

</h3>

<p className="text-4xl font-bold my-5">

{pkg.price}

</p>

<p className="text-gray-300 mb-5">

{pkg.description}

</p>

<div className="space-y-3">

{

pkg.features.map((feature,i)=>(

<div
key={i}
className="flex gap-3"
>

<BadgeCheck className="text-green-400"/>

<span>

{feature}

</span>

</div>

))

}

</div>

</div>

))

}

</div>

</div>

</section>


{/* TESTIMONI */}

<section className="py-20 bg-slate-900">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-4xl font-bold mb-14">

Testimoni

</h2>

<div className="grid md:grid-cols-3 gap-6">

{

testimonials.map((item,index)=>(

<div
key={index}
className="bg-slate-950 p-8 rounded-3xl"
>

<Star className="text-yellow-400"/>

<p className="mt-5">

"{item.comment}"

</p>

<h3 className="font-bold mt-6">

{item.name}

</h3>

<p className="text-gray-500">

{item.job}

</p>

</div>

))

}

</div>

</div>

</section>


{/* FAQ */}

<section className="py-20 bg-slate-900">

<div className="max-w-4xl mx-auto px-6">

<h2 className="text-center text-4xl font-bold mb-14">

Pertanyaan Umum

</h2>

<div className="space-y-5">

{

faqs.map((item,index)=>(

<div
key={index}
className="
bg-slate-950
rounded-2xl
border
border-slate-800
overflow-hidden
transition-all
duration-500
hover:border-cyan-500
"
>

<button
onClick={()=>
setOpenFaq(
openFaq===index
?
null
:
index
)
}
className="
w-full
flex
items-center
justify-between
p-6
text-left
"
>

<h3 className="font-bold text-lg">

{item.question}

</h3>

<ChevronDown
className={`
transition-transform
duration-500
text-cyan-400
${
openFaq===index
?
"rotate-180"
:
"rotate-0"
}
`}
/>

</button>

<div
className={`
transition-all
duration-500
overflow-hidden
${
openFaq===index
?
"max-h-96 opacity-100"
:
"max-h-0 opacity-0"
}
`}
>

<div className="px-6 pb-6">

<p className="text-gray-400 leading-8">

{item.answer}

</p>

</div>

</div>

</div>

))

}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-500 text-center">

<h2 className="text-5xl font-bold">

Siap Membangun Aplikasi AR Anda?

</h2>

<p className="mt-6 mb-10">

Remote • Onsite • Hybrid

</p>

<Link
href="https://hinaitech.com/contact"
target="_blank"
className="
inline-block
bg-white
text-black
px-10
py-4
rounded-xl
font-bold
hover:scale-105
hover:shadow-2xl
transition-all
duration-300
"
>

Hubungi Kami

</Link>

</section>

</div>
</>
)
}
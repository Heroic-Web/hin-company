export interface ServicePackage {
  name: string
  price: string
  button: string
  features: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  images: string[]
  packages: ServicePackage[]
}

export const services: Service[] = [

/* ================= WEBSITE ================= */

{
id:"website",
title:"Jasa Pembuatan Website",
description:"Website profesional untuk bisnis, perusahaan, UMKM, maupun personal brand.",
images:[
"/services/web1.jpg",
"/services/web2.jpg",
"/services/web3.jpg"
],
packages:[

{
name:"Ekonomis",
price:"Rp 750.000",
button:"Pilih Paket Ekonomis",
features:[
"Durasi 1 Tahun",
"3 Halaman Website",
"Hosting Gratis",
"Domain Gratis .com",
"Copywriting Gratis",
"Artikel Gratis ❌",
"Email Bisnis ❌",
"Revisi 3x",
"Waktu Pengerjaan 2 Hari",
"Maintenance ❌"
]
},

{
name:"Premium",
price:"Rp 1.500.000",
button:"Pilih Paket Premium",
features:[
"Durasi 1 Tahun",
"5 Halaman Website",
"Hosting Gratis",
"Domain Gratis .com",
"Copywriting Gratis",
"3 Artikel Gratis",
"Email Bisnis ❌",
"Revisi 5x",
"Waktu Pengerjaan 3 Hari",
"Maintenance ✔"
]
},

{
name:"Business",
price:"Rp 2.250.000",
button:"Pilih Paket Business",
features:[
"Durasi 1 Tahun",
"10 Halaman Website",
"Hosting Gratis",
"Domain Custom",
"Copywriting Gratis",
"6 Artikel Gratis",
"Email Bisnis ✔",
"Revisi 7x",
"Waktu Pengerjaan 7 Hari",
"Maintenance ✔"
]
},

{
name:"Profesional",
price:"Rp 3.100.000",
button:"Pilih Paket Profesional",
features:[
"Durasi 1 Tahun",
"20 Halaman Website",
"Hosting Gratis",
"Domain Custom",
"Copywriting Gratis",
"10 Artikel Gratis",
"Email Bisnis ✔",
"Revisi 8x",
"Waktu Pengerjaan 13 Hari",
"Maintenance ✔"
]
}

]
},

/* ================= LANDING PAGE ================= */

{
id:"landing",
title:"Jasa Landing Page",
description:"Landing page profesional untuk meningkatkan konversi penjualan dan kampanye marketing.",
images:[
"/services/landing1.jpg",
"/services/landing2.jpg",
"/services/landing3.jpg"
],
packages:[

{
name:"Landing Page",
price:"Rp 500.000",
button:"Pesan Website Sekarang",
features:[
"1 Halaman Website",
"Gratis Domain my.id / .com",
"Revisi 1x",
"Pengerjaan 1 Hari",
"Masa Aktif 1 Tahun",
"Maintenance 30 Hari",
"1 Email Bisnis",
"Integrasi Sosial Media",
"Galeri Produk",
"Gratis SSL"
]
},

{
name:"Toko Online Lite",
price:"Rp 750.000",
button:"Pesan Toko Online Lite",
features:[
"1 Halaman Website",
"Gratis Domain my.id / .com",
"Revisi 1x",
"Pengerjaan 1 Hari",
"Masa Aktif 1 Tahun",
"Maintenance 30 Hari",
"SSL Gratis",
"Email Perusahaan Gmail",
"Keranjang Belanja",
"Payment Transfer",
"Ongkir / Shipping",
"Chat WhatsApp",
"Tombol Order WhatsApp"
]
}

]
},

/* ================= SEO ARTICLE ================= */

{
id:"seo",
title:"Jasa Artikel SEO",
description:"Artikel SEO berkualitas untuk meningkatkan ranking website di Google.",
images:[
"/services/seo1.jpg",
"/services/seo2.jpg"
],
packages:[

{
name:"Economy Bundle",
price:"Rp60K - Rp390K",
button:"Choose Plan",
features:[
"10 Artikel 300 Kata - Rp60.000",
"10 Artikel 400 Kata - Rp90.000",
"10 Artikel 500 Kata - Rp130.000",
"10 Artikel 600 Kata - Rp160.000",
"10 Artikel 700 Kata - Rp170.000",
"10 Artikel 800 Kata - Rp190.000",
"10 Artikel 900 Kata - Rp220.000",
"10 Artikel 1000 Kata - Rp300.000",
"10 Artikel 1500 Kata - Rp350.000"
]
},

{
name:"Bulk SEO Articles",
price:"Rp120K - Rp710K",
button:"Choose Plan",
features:[
"14 Hari 400 Kata - Rp120.000",
"30 Hari 400 Kata - Rp250.000",
"14 Hari 500 Kata - Rp150.000",
"30 Hari 500 Kata - Rp300.000",
"14 Hari 1000 Kata - Rp350.000",
"30 Hari 1000 Kata - Rp650.000"
]
}

]
},

/* ================= AI ================= */

{
id:"ai",
title:"Machine Learning & AI Development",
description:"Pengembangan sistem AI dan Machine Learning untuk kebutuhan bisnis, startup, maupun penelitian.",
images:[
"/services/ai1.jpg",
"/services/ai2.jpg"
],
packages:[

{
name:"Model Machine Learning",
price:"Rp1.200.000",
button:"Pilih Paket Ini",
features:[
"Konsultasi proyek",
"AI Consultant",
"Tanya jawab 24 jam",
"Jupyter Notebook / Colab",
"File Model (.pkl / .h5)",
"EDA",
"Data Preprocessing",
"Feature Engineering",
"Dokumentasi Model"
]
},

{
name:"Deployment AI",
price:"Rp1.700.000",
button:"Pilih Paket Ini",
features:[
"Konsultasi bebas",
"Framework Flask / FastAPI",
"Saran proyek ML",
"Best Practice Deployment",
"Step by Step Guide",
"Integrasi Server",
"API Endpoint",
"Support Revisi Minor"
]
},

{
name:"Custom AI System",
price:"Harga Spesial",
button:"Hubungi Tim Kami",
features:[
"Sistem AI end-to-end",
"Dokumentasi lengkap",
"Arsitektur aplikasi",
"Deployment Cloud",
"Backend & Frontend Development",
"Monitoring awal",
"Revisi minor 3x"
]
}

]
},

/* ================= DESIGN ================= */

{
id:"design",
title:"Jasa Desain Grafis",
description:"Layanan desain profesional untuk branding, marketing, dan kebutuhan bisnis.",
images:[
"/services/design1.jpg",
"/services/design2.jpg"
],
packages:[

{
name:"Proposal Bisnis",
price:"Rp250.000",
button:"Pesan Sekarang",
features:[
"Output PPT / Word",
"Export JPG PNG",
"Export PDF"
]
},

{
name:"Company Profile",
price:"Rp150.000 - Rp250.000",
button:"Pesan Sekarang",
features:[
"5-20 halaman",
"Output PPT / Word",
"Export JPG PNG",
"Export PDF"
]
},

{
name:"Desain Logo",
price:"Rp50.000 - Rp250.000",
button:"Pesan Sekarang",
features:[
"PNG Transparan",
"JPG",
"PDF",
"Source File Opsional"
]
},

{
name:"Feed Instagram",
price:"Rp10.000 - Rp25.000 / slide",
button:"Pesan Sekarang",
features:[
"Desain feed sosial media",
"Format JPG PNG",
"Export PDF opsional"
]
}

]
}

]
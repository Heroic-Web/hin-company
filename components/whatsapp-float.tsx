"use client"

import { MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"

export function WhatsAppFloat() {

  const pathname = usePathname()

  // Jika halaman reseller → jangan tampilkan
  if (pathname.startsWith("/reseller")) {
    return null
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "6288210404399"

    const message =
      "Halo! Saya tertarik dengan layanan HINAI Tech. Perkenalkan nama saya ... ingin berkonsultasi tentang ..."

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Ring Effect */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-70 animate-ping"></span>

      <button
        onClick={handleWhatsAppClick}
        className="
        relative
        bg-green-500
        hover:bg-green-600
        text-white
        rounded-full
        p-4
        shadow-xl
        transition
        duration-300
        hover:scale-110
        animate-[float_3s_ease-in-out_infinite]
        "
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </div>
  )
}
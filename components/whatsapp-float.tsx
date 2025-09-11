"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282144137914" 
    const message = "Halo! Saya tertarik dengan layanan Heroic Web. Perkenalkan nama saya ... ingin berkonsultasi tentang ..."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}

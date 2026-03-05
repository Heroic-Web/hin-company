"use client"

import { MessageCircle } from "lucide-react"

export default function FloatingWA({ phone }: { phone: string }) {

  const handleClick = () => {

    const message =
      "Halo saya tertarik dengan layanan Hinai Tech melalui reseller."

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")

  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
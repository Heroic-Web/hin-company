"use client"

import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    const subject = "Newsletter Subscription - HINAI Tech"
    const body = `New Newsletter Subscriber:\n\nEmail: ${email}`

    const mailtoLink = `mailto:cs.hintech@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    // Open mail client
    window.location.href = mailtoLink

    // Show success notification (simulasi berhasil)
    setSuccess(true)
    setEmail("")

    setTimeout(() => {
      setSuccess(false)
    }, 4000)
  }

  return (
    <section className="relative py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white opacity-10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white opacity-10 rounded-full blur-[120px]"></div>

      <div className="relative max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-6">
          Dapatkan Update & Insight AI
        </h2>

        <p className="mb-10 opacity-90">
          Update teknologi terbaru, promo layanan, dan insight Artificial Intelligence langsung ke email Anda.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Email Anda"
            className="px-6 py-4 rounded-xl text-black w-full md:w-auto flex-1 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Subscribe
          </button>

        </form>

        {/* Success Notification */}
        {success && (
          <div className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-xl shadow-lg inline-block animate-pulse">
            ✅ Berhasil Berlangganan! Terima kasih.
          </div>
        )}

      </div>
    </section>
  )
}
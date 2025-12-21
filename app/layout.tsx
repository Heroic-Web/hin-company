import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { LanguageProvider } from "@/components/language-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

export const metadata: Metadata = {
  title: "Heroic Web - Web Development, SEO & Design Services",
  description:
    "Heroic Web, SEO optimization, and design services. We create modern, responsive websites that drive results for your business.",
  keywords: ["web development", "SEO", "design", "website creation", "digital marketing"],
  authors: [{ name: "Heroic Web" }],
  openGraph: {
    title: "Heroic - Web Development, SEO & Design Services",
    description: "b development, SEO optimization, and design services.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              {/* ✅ Navbar selalu tampil */}
              <Navigation />

              {/* ✅ Konten halaman */}
              <main>{children}</main>

              {/* ✅ Footer & WhatsApp selalu tampil */}
              <Footer />
              <WhatsAppFloat />
            </LanguageProvider>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

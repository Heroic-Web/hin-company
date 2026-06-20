import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import PurchaseNotification from "@/components/PurchaseNotification"

// @ts-ignore
import "./globals.css"

export const metadata: Metadata = {
  title:
    "HINAI Tech - Web App Development, Article SEO & Design Services",

  description:
    "HINAI Tech menyediakan layanan pengembangan website, aplikasi, artikel SEO, dan desain profesional untuk membantu bisnis Anda berkembang secara digital.",

  keywords: [
    "web development",
    "app development",
    "SEO",
    "artikel SEO",
    "design",
    "website creation",
    "digital marketing",
    "landing page",
    "AI development",
    "HINAI Tech",
  ],

  authors: [
    {
      name: "HINAI Tech",
    },
  ],

  openGraph: {
    title:
      "HINAI Tech - Web App Development, Article SEO & Design Services",

    description:
      "Pengembangan website, aplikasi, SEO, dan desain profesional untuk bisnis modern.",

    type: "website",

    locale: "id_ID",

    siteName: "HINAI Tech",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "HINAI Tech - Web App Development, Article SEO & Design Services",

    description:
      "Pengembangan website, aplikasi, SEO, dan desain profesional untuk bisnis modern.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
    >
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              <Navigation />

              <main>{children}</main>

              <Footer />

              <WhatsAppFloat />

              <PurchaseNotification />

              <Toaster
                position="top-right"
                richColors
                closeButton
                duration={4000}
                expand={true}
                visibleToasts={5}
                toastOptions={{
                  className: "font-medium",
                }}
              />
            </LanguageProvider>
          </ThemeProvider>
        </Suspense>

        <Analytics />
      </body>
    </html>
  )
}
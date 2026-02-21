"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
             <Link href="/" className="flex items-center">
              <Image
                src="/Heroic_Logo.png"
                alt="Heroic Web Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
            <p className="text-muted-foreground mb-4 text-pretty">
              We provide professional Website Development, High Converting Landing Pages, SEO Optimized Content, Digital Advertising Solutions, and Creative Design Services to accelerate your business growth in the digital world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.web")}
                </Link>
              </li>
              
              <li>
                <Link href="/services/landing-page" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.landingpage")}
                </Link>
              </li>
              <li>
                <Link href="/services/seo-articles" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.seo")}
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.design")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
            <ul className="flex justify-center gap-6 mb-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>

            <p className="text-muted-foreground text-sm">
              © 2025 PT. Heroic Inovasi Nusantara. All rights reserved. Built with ♥️ and Sincerity by Heroic Team.
            </p>
          </div>
        </div>
    </footer>
  )
}

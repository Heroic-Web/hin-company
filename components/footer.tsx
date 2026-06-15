
"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa"

export function Footer() {
  const { t } = useLanguage()

  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/HINAI_Tech_Logo.png"
                alt="HINAI Tech Logo"
                width={220}
                height={70}
                className="h-auto w-auto max-h-20 object-contain"
                priority
              />
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              HINAI Tech provides professional Website Development,
              Landing Pages, SEO Content, Digital Advertising,
              Artificial Intelligence Solutions, Mobile Applications,
              and Creative Design Services to accelerate business growth
              in the digital era.
            </p>

            {/* CONTACT */}
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hi@hinaitech.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+62 821 4413 7914</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Indonesia</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-6 flex items-center gap-4">

              <Link
                href="https://instagram.com/hinaitech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram HINAI Tech"
                className="
                  rounded-xl
                  border
                  border-border
                  p-2.5
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:text-primary
                  hover:-translate-y-1
                "
              >
                <FaInstagram className="h-4 w-4" />
              </Link>

              <Link
                href="https://linkedin.com/company/heroic-website"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn HINAI Tech"
                className="
                  rounded-xl
                  border
                  border-border
                  p-2.5
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:text-primary
                  hover:-translate-y-1
                "
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>

              <Link
                href="https://medium.com/hinai-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium HINAI Tech"
                className="
                  rounded-xl
                  border
                  border-border
                  p-2.5
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:text-primary
                  hover:-translate-y-1
                "
              >
                <FaMedium className="h-4 w-4" />
              </Link>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/services/web"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("services.web")}
                </Link>
              </li>

              <li>
                <Link
                  href="/services/landing-page"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("services.landingpage")}
                </Link>
              </li>

              <li>
                <Link
                  href="/services/seo-articles"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("services.seo")}
                </Link>
              </li>

              <li>
                <Link
                  href="/services/ai-ml"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/services/design"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("services.design")}
                </Link>
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.blog")}
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-border py-6">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="flex flex-wrap gap-5 text-sm">

              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-conditions"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/disclaimer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Disclaimer
              </Link>

            </div>

            <p className="text-sm text-muted-foreground">
              © {year} PT. Heroic Inovasi Nusantara. All Rights Reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}

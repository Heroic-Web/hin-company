"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  Users,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  // ⬇️ navItems HARUS di dalam komponen
  const navItems = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/about", label: t("nav.about"), icon: User },
    {
      href: "/services",
      label: t("nav.services"),
      icon: Briefcase,
      submenu: [
        { href: "/services/web", label: t("services.web") },
        { href: "/services/seo-articles", label: t("services.seo") },
        { href: "/services/design", label: t("services.design") },
      ],
    },
    { href: "/blog", label: t("nav.blog"), icon: BookOpen },
    { href: "/career", label: t("nav.career"), icon: Users },
    { href: "/contact", label: t("nav.contact"), icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Heroic_Logo.png"
              alt="Heroic Web Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-2"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute left-0 top-full mt-2 bg-background border border-border rounded-lg shadow-lg min-w-[200px]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setLanguage("en")
                  }}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setLanguage("id")
                  }}
                >
                  Bahasa Indonesia
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link
                href={t("common.getStarted.link")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("common.getStarted")}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-6 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                              onClick={() => {
                                setIsOpen(false)
                                setIsServicesOpen(false)
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span className="uppercase">{language}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onSelect={(e) => {
                        e.preventDefault()
                        setLanguage("en")
                      }}
                    >
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={(e) => {
                        e.preventDefault()
                        setLanguage("id")
                      }}
                    >
                      Bahasa Indonesia
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link
                    href={t("common.getStarted.link")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("common.getStarted")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

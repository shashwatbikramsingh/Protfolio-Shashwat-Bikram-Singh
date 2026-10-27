"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X, Terminal } from "lucide-react"
import { PERSONAL_INFO } from "@/data/profile"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C1E18] text-[#FAF6F0] shadow-sm transition-all duration-300 group-hover:bg-[#B87333]">
            <Terminal className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-[#2C1E18] text-lg">
              {PERSONAL_INFO.name}
            </span>
          </div>
        </Link>

        {/* Desktop Multi-Page Route Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#E6D8CC]/70 bg-[#FFFFFF]/60 p-1.5 shadow-xs backdrop-blur-md md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#2C1E18] text-[#FAF6F0] shadow-sm"
                    : "text-[#573B2C] hover:text-[#2C1E18] hover:bg-[#F5EFEB]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#CEB8A5] bg-[#FAF6F0] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#2C1E18] transition-all duration-200 hover:border-[#2C1E18] hover:bg-[#2C1E18] hover:text-[#FAF6F0]"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E6D8CC] bg-[#FFFFFF] text-[#2C1E18] md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E6D8CC] bg-[#FAF6F0]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium ${
                    active
                      ? "bg-[#2C1E18] text-[#FAF6F0]"
                      : "text-[#573B2C] hover:bg-[#F5EFEB] hover:text-[#2C1E18]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </Link>
              )
            })}
            <div className="mt-4 pt-4 border-t border-[#E6D8CC]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2C1E18] py-3 text-sm font-medium text-[#FAF6F0]"
              >
                <span>Initiate Conversation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home",           href: "/" },
  { name: "Products",       href: "/products" },
  { name: "About",          href: "/about" },
  { name: "Process",        href: "/process" },
  { name: "Certifications", href: "/certifications" },
  { name: "Blog",           href: "/blog" },
  { name: "Contact",        href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-soft" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-xl flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-6 h-6 fill-white">
              <path d="M18 4C11 4 6 10 6 10s3 8 12 8 12-8 12-8S25 4 18 4z"/>
              <path d="M18 18c-5 0-10 4-10 4s2 6 10 6 10-6 10-6-5-4-10-4z" opacity=".7"/>
            </svg>
          </div>
          <div>
            <span className="font-bold text-teal-600 text-lg leading-none">De'hydra</span>
            <span className="block text-[10px] text-gray-400 leading-none">Food Venture</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === l.href
                  ? "text-teal-500 border-b-2 border-teal-500 pb-0.5"
                  : "text-gray-600 hover:text-teal-500"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm">
            Request a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-teal-50"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-xl py-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {l.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

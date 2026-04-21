'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/projects', label: 'Projets' },
  { href: '/about', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav shadow-glass'
            : 'bg-primary/80 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Mikena Services Logo"
                width={800}
                height={800}
                className={`h-48 w-auto transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
                priority
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-headline font-bold text-sm uppercase tracking-widest transition-colors duration-200 group ${
                      isActive 
                        ? 'text-secondary-container' 
                        : isScrolled 
                          ? 'text-on-surface hover:text-primary'
                          : 'text-white hover:text-secondary-container'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isActive 
                          ? 'w-full bg-secondary-container' 
                          : 'w-0 group-hover:w-full bg-secondary-container'
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/contact" 
                className={`btn-primary transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-secondary hover:bg-secondary/90'
                }`}
              >
                Demander un Devis
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'bg-surface-container text-primary'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
        
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-surface shadow-elevation-2 transition-transform duration-500 ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-8 pt-24">
            <div className="space-y-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between p-4 rounded-lg font-headline font-bold text-sm uppercase tracking-widest transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-on-surface hover:bg-surface-container-low'
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                )
              })}
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

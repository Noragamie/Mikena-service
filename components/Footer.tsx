import Link from 'next/link'
import Image from 'next/image'
import { Mail, Share2, MapPin, Phone, Clock } from 'lucide-react'

const footerLinks = {
  solutions: [
    { label: 'Ingénierie Informatique', href: '/services' },
    { label: 'Énergie Solaire', href: '/services' },
    { label: 'Fibre Optique', href: '/services' },
    { label: 'Audits & Études', href: '/services' },
  ],
  company: [
    { label: 'À Propos', href: '/about' },
    { label: 'Projets', href: '/projects' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Politique de Confidentialité', href: '#' },
    { label: "Conditions d'Utilisation", href: '#' },
    { label: 'Impact Environnemental', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-lines opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary-container to-secondary" />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary-container/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-3">
        {/* Logo et contact en haut */}
        <div className="mb-6">
          <div className="lg:col-span-2 space-y-3">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-2 w-fit">
                <Image
                  src="/images/logo.png"
                  alt="Mikena Services Logo"
                  width={250}
                  height={250}
                  className="h-20 w-auto brightness-0 invert"
                  priority
                />
              </Link>
              <p className="text-white/60 text-xs leading-relaxed max-w-xs">
                Transformant les blueprints en jalons. Nos services d&apos;ingénierie fournissent les fondations pour un avenir durable.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <MapPin className="w-3 h-3 text-secondary shrink-0" />
                <span>Cotonou, Bénin</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Mail className="w-3 h-3 text-secondary shrink-0" />
                <span>contact@mikenaservices.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Clock className="w-3 h-3 text-secondary shrink-0" />
                <span>Lun–Ven : 08h–18h</span>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="#"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-colors duration-200"
              >
                <Share2 className="w-3 h-3 text-white" />
              </a>
              <a
                href="mailto:contact@mikenaservices.com"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="w-3 h-3 text-white" />
              </a>
              <a
                href="tel:+22900000000"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-colors duration-200"
              >
                <Phone className="w-3 h-3 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Liens en bas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 border-t border-white/10 pt-4">

          {/* Solutions */}
          <div>
            <h4 className="text-white font-headline font-bold text-xs uppercase tracking-widest mb-3">
              Solutions
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-xs hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-headline font-bold text-xs uppercase tracking-widest mb-3">
              Entreprise
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-xs hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-headline font-bold text-xs uppercase tracking-widest mb-3">
              Légal
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-xs hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © 2024 Mikena Services. Précision Architecturale en Ingénierie.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
            <span>Fournisseur d&apos;Infrastructure Certifié</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

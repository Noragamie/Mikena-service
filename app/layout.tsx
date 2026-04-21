import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import Chatbot from '@/components/Chatbot'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Mikena Services — Ingénierie & IT de Classe Mondiale au Bénin',
    template: '%s | Mikena Services',
  },
  description: 'Mikena Services offre des solutions d\'ingénierie de classe mondiale au Bénin et en Afrique de l\'Ouest : informatique, solaire, fibre optique, formation, environnement et plus encore. 6+ ans d\'expérience, 50+ projets réalisés.',
  keywords: [
    'ingénierie Bénin',
    'fibre optique Bénin',
    'énergie solaire Bénin',
    'informatique Bénin',
    'formation technique',
    'Mikena Services',
    'IT Afrique',
    'infrastructure réseau',
    'audit SI',
    'maintenance informatique',
    'Cotonou',
    'Afrique de l\'Ouest',
  ],
  authors: [{ name: 'Mikena Services' }],
  creator: 'Mikena Services',
  publisher: 'Mikena Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Mikena Services — Ingénierie & IT de Classe Mondiale',
    description: 'Solutions d\'ingénierie et IT de classe mondiale au Bénin : informatique, solaire, fibre optique, formation. 6+ ans d\'expérience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mikena Services - Ingénierie & IT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikena Services — Ingénierie & IT de Classe Mondiale',
    description: 'Solutions d\'ingénierie et IT de classe mondiale au Bénin',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google-search-console',
    // yandex: 'votre-code-yandex',
    // bing: 'votre-code-bing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased">
        <StructuredData />
        <Navbar />
        <main className="page-enter">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}

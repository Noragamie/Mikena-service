'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Ingénierie Informatique',
    subtitle: 'Solutions IT de Classe Mondiale',
    description: 'Infrastructure cloud, développement logiciel et intégration système pour votre entreprise.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    cta: 'Découvrir',
    link: '/services/ingenierie-informatique',
  },
  {
    id: 2,
    title: 'Énergie Solaire & Électrique',
    subtitle: 'Transition Énergétique Durable',
    description: 'Conception et installation de systèmes solaires pour un avenir plus vert.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80',
    cta: 'Nos Solutions',
    link: '/services/ingenierie-solaire-electrique',
  },
  {
    id: 3,
    title: 'Fibre Optique',
    subtitle: 'Connectivité Haute Performance',
    description: 'Déploiement de réseaux fibre optique pour une connectivité maximale.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80',
    cta: 'En Savoir Plus',
    link: '/services/fibre-optique',
  },
  {
    id: 4,
    title: 'Formations Techniques',
    subtitle: 'Développez Vos Compétences',
    description: 'Programmes de certification technique et ateliers de sécurité pour ingénieurs.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
    cta: 'Nos Formations',
    link: '/services/formations-techniques',
  },
  {
    id: 5,
    title: 'Gestion de l\'Environnement',
    subtitle: 'Solutions Durables',
    description: 'Conformité réglementaire et stratégies d\'utilisation durable des terres.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80',
    cta: 'Découvrir',
    link: '/services/gestion-environnement',
  },
  {
    id: 6,
    title: 'Études & Audits SI',
    subtitle: 'Sécurité Informatique',
    description: 'Évaluations de vulnérabilité et contrôles d\'intégrité pour vos systèmes.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    cta: 'Nos Audits',
    link: '/services/etudes-audits-si',
  },
  {
    id: 7,
    title: 'Vente de Matériels',
    subtitle: 'Équipements Professionnels',
    description: 'Fourniture d\'outils d\'ingénierie IT, matériels et composants solaires spécialisés.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&q=80',
    cta: 'Notre Catalogue',
    link: '/services/vente-materiels',
  },
  {
    id: 8,
    title: 'Réseaux',
    subtitle: 'Architecture Réseau d\'Entreprise',
    description: 'Architecture LAN/WAN d\'entreprise, déploiements mesh et infrastructure sans fil.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    cta: 'Nos Solutions',
    link: '/services/reseaux',
  },
  {
    id: 9,
    title: 'Maintenance',
    subtitle: 'Support Technique 24/7',
    description: 'Surveillance proactive et support technique rapide pour actifs mission-critiques.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
    cta: 'En Savoir Plus',
    link: '/services/maintenance',
  },
  {
    id: 10,
    title: 'Évènementiels',
    subtitle: 'Support Technique pour Événements',
    description: 'Gestion technique pour symposiums industriels et sommets d\'ingénierie d\'entreprise.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80',
    cta: 'Nos Services',
    link: '/services/evenementiels',
  },
  {
    id: 11,
    title: 'Communication',
    subtitle: 'Solutions de Communication Unifiées',
    description: 'Conception et déploiement de canaux de communication interne unifiés.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    cta: 'Découvrir',
    link: '/services/communication',
  },
  {
    id: 12,
    title: 'Domaine Agricole',
    subtitle: 'Agriculture Intelligente',
    description: 'Agriculture intelligente, irrigation automatisée et solutions d\'ingénierie agricole.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80',
    cta: 'Nos Solutions',
    link: '/services/domaine-agricole',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/10 z-10" />
          
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-2xl">
                <div
                  className={`transition-all duration-700 delay-300 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                >
                  <span className="inline-block bg-secondary/20 text-secondary-container border border-secondary-container/30 rounded-full px-4 py-2 text-xs font-headline font-bold uppercase tracking-widest mb-6">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-[1.05] tracking-tight mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.link}
                    className="btn-primary bg-secondary hover:bg-secondary/80 inline-flex"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-secondary'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-30 text-white/60 font-headline font-bold text-sm">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  )
}

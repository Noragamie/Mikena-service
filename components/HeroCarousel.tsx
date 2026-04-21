'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Ingénierie Informatique',
    subtitle: 'Solutions IT de Classe Mondiale',
    description: 'Infrastructure cloud, développement logiciel et intégration système pour votre entreprise.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    cta: 'Découvrir',
    link: '/services',
  },
  {
    id: 2,
    title: 'Énergie Solaire & Électrique',
    subtitle: 'Transition Énergétique Durable',
    description: 'Conception et installation de systèmes solaires pour un avenir plus vert.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80',
    cta: 'Nos Solutions',
    link: '/services',
  },
  {
    id: 3,
    title: 'Fibre Optique',
    subtitle: 'Connectivité Haute Performance',
    description: 'Déploiement de réseaux fibre optique pour une connectivité maximale.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&q=80',
    cta: 'En Savoir Plus',
    link: '/services',
  },
  {
    id: 4,
    title: '50+ Projets Réalisés',
    subtitle: '6 Ans d\'Excellence',
    description: 'Faites confiance à notre expertise pour vos projets d\'ingénierie.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80',
    cta: 'Voir Nos Projets',
    link: '/projects',
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
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/10 z-10" />
          
          {/* Real Image from Unsplash */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content */}
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

      {/* Navigation Arrows */}
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

      {/* Dots Navigation */}
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

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-30 text-white/60 font-headline font-bold text-sm">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  )
}

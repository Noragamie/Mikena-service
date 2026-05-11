import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import Counter from '@/components/Counter'
import HeroCarousel from '@/components/HeroCarousel'
import PartnerLogo from '@/components/PartnerLogo'
import { getFirstSixServices, services } from '@/lib/services'
import {
  ArrowRight, ChevronRight, Shield, Zap, Globe2, Award
} from 'lucide-react'

const displayedServices = getFirstSixServices()

const stats = [
  { value: 6, suffix: '+', label: 'Années d\'Expérience' },
  { value: 10, suffix: '+', label: 'Projets Livrés' },
  { value: 25, suffix: '+', label: 'Experts Certifiés' },
  { value: 99, suffix: '.9%', label: 'Fiabilité Opérationnelle' },
]

const commitments = [
  {
    icon: Shield,
    number: '01',
    title: 'Approche Architecture-First',
    description: 'Chaque service commence par un blueprint technique rigoureux, garantissant un déploiement zéro-défaut dans tous les secteurs IT et électriques.',
  },
  {
    icon: Globe2,
    number: '02',
    title: 'Standards de Sécurité Mondiaux',
    description: 'Respect strict des protocoles de sécurité internationaux et des directives de durabilité environnementale.',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Cycle de Vie End-to-End',
    description: 'De l\'audit initial à la maintenance prédictive continue, nous gérons l\'intégralité du cycle de vie des actifs.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ============ HERO CAROUSEL ============ */}
      <HeroCarousel />

      {/* ============ SERVICES MARQUEE ============ */}
      <div className="bg-surface-container-low py-5 overflow-hidden border-y border-outline-variant/20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, batch) =>
            services.map((s, i) => (
              <span
                key={`${batch}-${i}`}
                className="inline-flex items-center gap-3 mx-8 text-on-surface-variant font-headline font-bold text-sm uppercase tracking-widest"
              >
                <s.icon className="w-4 h-4 text-secondary" />
                {s.title}
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
              </span>
            ))
          )}
        </div>
      </div>

      {/* ============ SERVICES GRID ============ */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label mb-4 block">Notre Expertise</span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-6">
              Solutions de Précision pour<br />
              <span className="text-gradient-primary">l&apos;Infrastructure Moderne</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Déploiement de services d&apos;ingénierie et IT de classe mondiale avec une précision architecturale.
              De la fibre optique à la gestion environnementale.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <Link href={`/services/${service.slug}`}>
                  <div className="service-card-hover bg-surface-container-lowest rounded-xl p-8 shadow-elevation-1 cursor-pointer h-full transition-all duration-300 hover:shadow-elevation-4 hover:-translate-y-1">
                    <div className={`card-icon w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-6 transition-all duration-400`}>
                      <service.icon className={`w-6 h-6 ${service.iconColor} transition-colors duration-400`} />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-primary mb-3 transition-colors duration-400">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 transition-colors duration-400">
                      {service.description}
                    </p>
                    <div className="flex items-center text-secondary font-headline font-bold text-sm">
                      En savoir plus
                      <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* En savoir plus button */}
          <AnimatedSection className="text-center mt-16">
            <Link href="/services" className="btn-primary bg-secondary hover:bg-secondary/80">
              Découvrir tous nos services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ PERFORMANCE & RELIABILITY ============ */}
      <section className="py-28 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left content */}
            <div className="lg:w-1/2">
              <AnimatedSection direction="left">
                <span className="section-label mb-4 block">Performance Structurelle</span>
                <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-12">
                  Performance &<br />Fiabilité Structurelle
                </h2>
              </AnimatedSection>

              <div className="space-y-10">
                {commitments.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 150} direction="left">
                    <div className="flex gap-6">
                      <span className="font-headline font-black text-3xl text-secondary/30 leading-none mt-1">
                        {item.number}
                      </span>
                      <div>
                        <h4 className="text-xl font-headline font-bold text-primary mb-2">
                          {item.title}
                        </h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Right - Stats visual */}
            <div className="lg:w-1/2 relative">
              <AnimatedSection direction="right">
                <div className="relative">
                  {/* Dark background card */}
                  <div className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 blueprint-lines opacity-10" />
                    <div className="relative z-10">
                      <div className="text-7xl font-headline font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-white">
                        <Counter target={99} suffix=".9%" />
                      </div>
                      <div className="text-white/60 text-sm uppercase tracking-widest font-headline font-bold mb-8">
                        Fiabilité Opérationnelle
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-3xl font-headline font-black text-secondary-container mb-1">
                            <Counter target={10} suffix="+" />
                          </div>
                          <div className="text-white/50 text-xs uppercase tracking-wider">Projets</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-3xl font-headline font-black text-secondary-container mb-1">
                            <Counter target={12} suffix="+" />
                          </div>
                          <div className="text-white/50 text-xs uppercase tracking-wider">Années</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative element */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-secondary-container/20 blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNERS SECTION ============ */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-20">
            <span className="section-label mb-4 block">Nos Partenaires</span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-6">
              Partenaires de Confiance<br />
              <span className="text-gradient-primary">pour l&apos;Excellence</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Nous collaborons avec les leaders technologiques mondiaux pour vous offrir les meilleures solutions d'ingénierie.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Cisco Systems', 
                description: 'Solutions réseau et sécurité',
                logo: 'https://www.cisco.com/favicon.ico',
                initials: 'CS'
              },
              { 
                name: 'Microsoft Azure', 
                description: 'Infrastructure cloud',
                logo: 'https://www.microsoft.com/favicon.ico',
                initials: 'MA'
              },
              { 
                name: 'Huawei', 
                description: 'Télécommunications',
                logo: 'https://www.huawei.com/favicon.ico',
                initials: 'HW'
              },
              { 
                name: 'SunPower', 
                description: 'Énergie solaire',
                logo: 'https://www.sunpower.com/favicon.ico',
                initials: 'SP'
              },
              { 
                name: 'Dell Technologies', 
                description: 'Serveurs et infrastructure IT',
                logo: 'https://www.dell.com/favicon.ico',
                initials: 'DT'
              },
              { 
                name: 'Amazon Web Services', 
                description: 'Services cloud',
                logo: 'https://aws.amazon.com/favicon.ico',
                initials: 'AWS'
              },
              { 
                name: 'Siemens', 
                description: 'Automatisation industrielle',
                logo: 'https://www.siemens.com/favicon.ico',
                initials: 'SM'
              },
              { 
                name: 'Schneider Electric', 
                description: 'Solutions d\'énergie',
                logo: 'https://www.se.com/favicon.ico',
                initials: 'SE'
              },
            ].map((partner, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="group h-40 rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/20 shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 hover:border-secondary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 flex flex-col items-center justify-center p-6 relative">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-primary via-secondary to-primary transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center w-full flex flex-col items-center justify-center">
                    {/* Logo Container */}
                    <div className="h-14 mb-3 flex items-center justify-center">
                      <PartnerLogo 
                        src={partner.logo} 
                        alt={partner.name}
                        initials={partner.initials}
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-on-surface-variant/70 group-hover:text-on-surface-variant transition-colors duration-300 line-clamp-2">
                      {partner.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-outline-variant/20">
        <div className="absolute inset-0 architectural-grid opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Support 24/7
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">
              Support Terrain d&apos;Urgence ?
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">
              Nos équipes d&apos;intervention rapide sont disponibles 24h/7j pour les besoins d&apos;infrastructure critiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-secondary hover:bg-secondary/80">
                Contacter la Hotline
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/expertise" className="btn-secondary border-outline-variant text-primary hover:bg-surface-container">
                Notre Expertise
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

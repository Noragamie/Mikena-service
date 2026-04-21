import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import Counter from '@/components/Counter'
import HeroCarousel from '@/components/HeroCarousel'
import {
  Monitor, Sun, Radio, GraduationCap, Leaf, Search,
  ShoppingCart, Network, Wrench, Calendar, Wifi, Tractor,
  ArrowRight, ChevronRight, Shield, Zap, Globe2, Award
} from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Ingénierie Informatique',
    description: 'Développement logiciel, infrastructure cloud et stratégies d\'intégration pour l\'industrie lourde.',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
  },
  {
    icon: Sun,
    title: 'Ingénierie Solaire & Électrique',
    description: 'Conception de réseaux d\'énergie durable et installations électriques haute tension.',
    color: 'bg-emerald-50',
    iconColor: 'text-secondary',
  },
  {
    icon: Radio,
    title: 'Fibre Optique',
    description: 'Installation de backbone de données haute vitesse et architecture réseau étendu.',
    color: 'bg-slate-50',
    iconColor: 'text-primary',
  },
  {
    icon: GraduationCap,
    title: 'Formations',
    description: 'Programmes de certification technique et ateliers de sécurité pour ingénieurs.',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
  },
  {
    icon: Leaf,
    title: 'Gestion de l\'Environnement',
    description: 'Conformité réglementaire et stratégies d\'utilisation durable des terres.',
    color: 'bg-emerald-50',
    iconColor: 'text-secondary',
  },
  {
    icon: Search,
    title: 'Études & Audits SI',
    description: 'Évaluations de vulnérabilité et contrôles d\'intégrité structurelle pour systèmes legacy.',
    color: 'bg-slate-50',
    iconColor: 'text-primary',
  },
  {
    icon: ShoppingCart,
    title: 'Vente de Matériels',
    description: 'Fourniture d\'outils d\'ingénierie IT, matériels et composants solaires spécialisés.',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
  },
  {
    icon: Network,
    title: 'Réseaux',
    description: 'Architecture LAN/WAN d\'entreprise, déploiements mesh et infrastructure sans fil.',
    color: 'bg-emerald-50',
    iconColor: 'text-secondary',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Surveillance proactive et support technique rapide pour actifs mission-critiques.',
    color: 'bg-slate-50',
    iconColor: 'text-primary',
  },
  {
    icon: Calendar,
    title: 'Évènementiels',
    description: 'Gestion technique pour symposiums industriels et sommets d\'ingénierie d\'entreprise.',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
  },
  {
    icon: Wifi,
    title: 'Communication',
    description: 'Conception et déploiement de canaux de communication interne unifiés.',
    color: 'bg-emerald-50',
    iconColor: 'text-secondary',
  },
  {
    icon: Tractor,
    title: 'Domaine Agricole',
    description: 'Agriculture intelligente, irrigation automatisée et solutions d\'ingénierie agricole.',
    color: 'bg-slate-50',
    iconColor: 'text-secondary',
  },
]

const stats = [
  { value: 6, suffix: '+', label: 'Années d\'Expérience' },
  { value: 50, suffix: '+', label: 'Projets Livrés' },
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
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="service-card-hover bg-surface-container-lowest rounded-xl p-8 shadow-elevation-1 cursor-pointer h-full">
                  <div className={`card-icon w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-6 transition-all duration-400`}>
                    <service.icon className={`w-6 h-6 ${service.iconColor} transition-colors duration-400`} />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary mb-3 transition-colors duration-400">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 transition-colors duration-400">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                            <Counter target={50} suffix="+" />
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

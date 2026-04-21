import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import {
  Monitor, Sun, Radio, GraduationCap, Leaf, Search,
  ShoppingCart, Network, Wrench, Calendar, Wifi, Tractor,
  ArrowRight, CheckCircle2
} from 'lucide-react'

export const metadata = {
  title: 'Services — Mikena Services',
  description: 'Découvrez nos 12 domaines d\'expertise en ingénierie : informatique, solaire, fibre optique, formation et plus.',
}

const heroImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80',
]

const services = [
  {
    icon: Monitor,
    title: 'Ingénierie Informatique',
    description: 'Développement logiciel sur mesure, infrastructure cloud et stratégies d\'intégration adaptées à l\'industrie lourde et aux entreprises commerciales.',
    highlights: ['Développement logiciel custom', 'Infrastructure cloud & réseau', 'Intégration systèmes enterprise', 'Cybersécurité & conformité'],
    tag: 'IT & Digital',
    featured: true,
  },
  {
    icon: Sun,
    title: 'Ingénierie Solaire & Électrique',
    description: 'Conception de réseaux d\'énergie durable et installations électriques haute tension pour sites industriels modernes.',
    highlights: ['Parcs solaires résidentiels & industriels', 'Installations haute tension', 'Systèmes de stockage d\'énergie', 'Audit & maintenance électrique'],
    tag: 'Énergie Durable',
    featured: true,
  },
  {
    icon: Radio,
    title: 'Ingénierie Fibre Optique',
    description: 'Installation de backbone de données haute vitesse, splicing de précision et architecture réseau étendu pour connectivité maximale.',
    highlights: ['Déploiement fibre FTTH/FTTB', 'Splicing & test de câbles', 'Architecture wide-area network', 'Maintenance infrastructure télécom'],
    tag: 'Télécommunications',
    featured: true,
  },
  {
    icon: GraduationCap,
    title: 'Formations Techniques',
    description: 'Programmes de certification technique spécialisés et ateliers de sécurité pour les professionnels de l\'ingénierie.',
    highlights: ['Certifications professionnelles', 'Ateliers sécurité chantier', 'Formation continue IT', 'Accompagnement sur mesure'],
    tag: 'Formation',
  },
  {
    icon: Leaf,
    title: 'Gestion de l\'Environnement',
    description: 'Conformité réglementaire et stratégies d\'utilisation durable des terres pour une ingénierie responsable.',
    highlights: ['Études d\'impact environnemental', 'Conformité réglementaire', 'Gestion durable des ressources', 'Conseil en développement durable'],
    tag: 'Environnement',
  },
  {
    icon: Search,
    title: 'Études & Audits Système d\'Information',
    description: 'Évaluations complètes de vulnérabilité et contrôles d\'intégrité structurelle pour systèmes legacy et modernes.',
    highlights: ['Audit de sécurité SI', 'Analyse de vulnérabilités', 'Tests de pénétration', 'Rapport de conformité ISO'],
    tag: 'Sécurité & Audit',
  },
  {
    icon: ShoppingCart,
    title: 'Vente de Matériels Informatique',
    description: 'Fourniture d\'outils d\'ingénierie IT de haute qualité, matériels informatiques et composants solaires spécialisés.',
    highlights: ['Équipements réseau Cisco/HP', 'Serveurs & postes de travail', 'Panneaux solaires & batteries', 'Support et garantie inclus'],
    tag: 'Commerce',
  },
  {
    icon: Network,
    title: 'Réseaux',
    description: 'Architecture LAN/WAN d\'entreprise de qualité, déploiements mesh sécurisés et infrastructure sans fil optimisée.',
    highlights: ['Réseaux d\'entreprise LAN/WAN', 'WiFi & mesh déploiements', 'SD-WAN & virtualisation réseau', 'Supervision & NOC'],
    tag: 'Infrastructure',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Surveillance proactive des systèmes et support technique rapide pour les actifs mission-critiques de vos opérations.',
    highlights: ['Contrats de maintenance préventive', 'Support 24/7 pour sites actifs', 'Remplacement de pièces critique', 'Rapports d\'état détaillés'],
    tag: 'Maintenance',
  },
  {
    icon: Calendar,
    title: 'Évènementiels',
    description: 'Gestion technique complète pour symposiums industriels, expositions et sommets d\'ingénierie d\'entreprise.',
    highlights: ['Infrastructure technique événements', 'Systèmes A/V & diffusion', 'Réseaux temporaires événementiels', 'Support technique on-site'],
    tag: 'Événements',
  },
  {
    icon: Wifi,
    title: 'Communication',
    description: 'Conception et déploiement de canaux de communication interne unifiés pour optimiser votre organisation.',
    highlights: ['Systèmes de communication unifiée', 'Téléphonie IP & VoIP', 'Vidéoconférence d\'entreprise', 'Messagerie & collaboration'],
    tag: 'Communication',
  },
  {
    icon: Tractor,
    title: 'Domaine Agricole',
    description: 'Agriculture intelligente, irrigation de précision automatisée et solutions d\'ingénierie agricole pour un rendement durable.',
    highlights: ['Systèmes d\'irrigation intelligents', 'Capteurs IoT agricoles', 'Automatisation des cultures', 'Monitoring & data farming'],
    tag: 'Agritech',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative bg-gradient-hero pt-40 pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <span className="inline-block bg-secondary/20 text-secondary-container border border-secondary-container/20 rounded-full px-4 py-1.5 text-xs font-headline font-bold uppercase tracking-widest mb-6">
              Notre Expertise
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-[1.05] tracking-tight mb-6">
              Solutions de Précision<br />
              pour l&apos;<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-secondary">Infrastructure</span><br />
              Moderne
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Déployant des services d&apos;ingénierie et IT de classe mondiale avec une précision architecturale. 
              De la fibre optique à la gestion environnementale, nous construisons l&apos;avenir de l&apos;industrie.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Featured 3 */}
          <AnimatedSection className="mb-6">
            <span className="section-label mb-2 block">Services Phares</span>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {services.filter(s => s.featured).map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="service-card-hover bg-surface-container-lowest rounded-xl p-8 shadow-elevation-1 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center card-icon transition-all duration-400">
                      <service.icon className="w-7 h-7 text-primary transition-colors duration-400" />
                    </div>
                    <span className="text-xs font-headline font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary mb-3 transition-colors duration-400">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1 transition-colors duration-400">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-on-surface-variant transition-colors duration-400">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 transition-colors duration-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(s => !s.featured).map((service, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="service-card-hover bg-surface-container-lowest rounded-xl p-6 shadow-elevation-1 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center card-icon transition-all duration-400">
                      <service.icon className="w-5 h-5 text-primary transition-colors duration-400" />
                    </div>
                    <span className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-headline font-bold text-primary mb-2 transition-colors duration-400">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed flex-1 transition-colors duration-400">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6">
              Devis Gratuit
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-on-surface-variant text-lg mb-8">
              Contactez nos ingénieurs pour une consultation personnalisée et un devis sur mesure.
            </p>
            <Link href="/contact" className="btn-primary">
              Demander un Devis Gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

import AnimatedSection from '@/components/AnimatedSection'
import Counter from '@/components/Counter'
import Link from 'next/link'
import { Sun, Radio, Building2, ArrowRight, CheckCircle2, Tag } from 'lucide-react'

export const metadata = {
  title: 'Projets — Mikena Services',
  description: 'Découvrez notre portfolio de projets d\'ingénierie : solaire, fibre optique, infrastructure industrielle.',
}

const projects = [
  {
    category: 'Énergie Solaire',
    title: 'Installation Panneaux Solaires - Entreprise Locale',
    description: 'Installation de 15kW de panneaux solaires pour une PME à Cotonou, réduction de 60% de la facture électrique.',
    tag: 'SOLAIRE',
    tagColor: 'bg-secondary text-white',
    icon: Sun,
    stat: '15kW',
    statLabel: 'Capacité Installée',
    featured: true,
  },
  {
    category: 'Informatique',
    title: 'Réseau Local & Serveur - Cabinet Médical',
    description: 'Mise en place d\'un réseau informatique sécurisé avec serveur de données pour un cabinet médical.',
    tag: 'IT',
    tagColor: 'bg-primary text-white',
    icon: Building2,
    featured: true,
  },
  {
    category: 'Fibre Optique',
    title: 'Câblage Fibre - Immeuble de Bureaux',
    description: 'Installation de câblage fibre optique pour connecter 3 étages d\'un immeuble commercial.',
    tag: 'FIBRE',
    tagColor: 'bg-surface-container text-on-surface',
    icon: Radio,
    featured: true,
  },
  {
    category: 'Vente Matériel',
    title: 'Fourniture Équipements Réseau',
    description: 'Vente et installation de switches, routeurs et équipements réseau pour plusieurs clients.',
    tag: 'VENTE',
    tagColor: 'bg-secondary text-white',
    icon: Building2,
    featured: true,
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Étude & Devis',
    description: 'Analyse de vos besoins, visite sur site et proposition d\'une solution adaptée à votre budget.',
    icon: '📐',
  },
  {
    number: '02',
    title: 'Installation',
    description: 'Mise en place des équipements par nos techniciens qualifiés avec respect des normes de sécurité.',
    icon: '⚙️',
  },
  {
    number: '03',
    title: 'Formation & Suivi',
    description: 'Formation de vos équipes à l\'utilisation et maintenance préventive pour assurer la durabilité.',
    icon: '✅',
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative bg-gradient-hero pt-40 pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Projets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <span className="inline-block bg-secondary/20 text-secondary-container border border-secondary-container/20 rounded-full px-4 py-1.5 text-xs font-headline font-bold uppercase tracking-widest mb-6">
              Portfolio d&apos;Excellence
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-[1.05] tracking-tight mb-6">
              Précision Ingénierique<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-secondary italic">
                à l&apos;Échelle
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
              Installations solaires, réseaux informatiques, câblage fibre optique et vente de matériel. 
              Des solutions concrètes pour les entreprises et institutions au Bénin.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex gap-12">
              <div className="border-l-2 border-secondary-container/40 pl-6">
                <div className="text-4xl font-headline font-black text-white">
                  <Counter target={50} suffix="+" />
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider font-headline font-bold">Projets Livrés</div>
              </div>
              <div className="border-l-2 border-secondary-container/40 pl-6">
                <div className="text-4xl font-headline font-black text-white">
                  <Counter target={6} suffix="+" />
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider font-headline font-bold">Années d&apos;Expertise</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Coming Soon */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
            <div>
              <AnimatedSection direction="left">
                <span className="section-label mb-4 block">Domaines de Projets</span>
                <h2 className="text-4xl font-headline font-black text-primary">
                  Exemples de Nos Réalisations
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection direction="right">
              <p className="text-on-surface-variant max-w-sm leading-relaxed">
                Découvrez quelques exemples de nos réalisations récentes dans différents domaines d&apos;activité.
              </p>
            </AnimatedSection>
          </div>

          {/* Featured projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Large featured project */}
            <AnimatedSection className="md:row-span-1">
              <div className="relative bg-gradient-to-br from-primary to-primary-container rounded-2xl overflow-hidden h-72 group cursor-pointer hover-lift">
                <div className="absolute inset-0 blueprint-lines opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Sun className="w-48 h-48 text-secondary-container" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block bg-secondary text-white text-xs font-headline font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit">
                    Énergie Solaire
                  </span>
                  <h3 className="text-2xl font-headline font-black text-white mb-2">
                    Installation Panneaux Solaires - Entreprise Locale
                  </h3>
                  <p className="text-white/60 text-sm">
                    Installation de 15kW pour une PME à Cotonou, réduction de 60% de la facture électrique.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              <AnimatedSection delay={100}>
                <div className="bg-primary rounded-xl p-8 group hover-lift cursor-pointer h-32 flex items-center gap-6">
                  <Building2 className="w-10 h-10 text-secondary-container shrink-0" />
                  <div>
                    <h3 className="font-headline font-bold text-white text-lg mb-1">Réseau Local - Cabinet Médical</h3>
                    <p className="text-white/60 text-sm">Réseau informatique sécurisé avec serveur de données.</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="relative bg-surface-container-low rounded-xl overflow-hidden h-40 group hover-lift cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Radio className="w-32 h-32 text-primary" />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-headline font-bold text-primary text-lg">Câblage Fibre - Immeuble</h3>
                    <p className="text-on-surface-variant text-sm">Installation fibre optique pour 3 étages de bureaux.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="relative bg-surface-container-low rounded-xl overflow-hidden h-48 group hover-lift cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Radio className="w-32 h-32 text-primary" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-headline font-bold text-primary text-xl">Câblage Fibre - Immeuble</h3>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative rounded-xl overflow-hidden h-48 group hover-lift cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-high" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Building2 className="w-32 h-32 text-primary" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block bg-secondary text-white text-xs font-headline font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit">
                    Vente Matériel
                  </span>
                  <h3 className="font-headline font-bold text-primary text-xl">Fourniture Équipements Réseau</h3>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left visual */}
            <div className="lg:w-2/5">
              <AnimatedSection direction="left">
                <div className="relative bg-gradient-to-br from-primary to-primary-container rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 blueprint-lines opacity-20" />
                  <div className="relative z-10 text-center p-12">
                    <div className="text-6xl font-headline font-black text-white mb-2">
                      <Counter target={100} suffix="%" />
                    </div>
                    <div className="text-secondary-container text-sm font-headline font-bold uppercase tracking-widest">
                      Satisfaction Client
                    </div>
                    <div className="mt-6 w-20 h-0.5 bg-gradient-to-r from-secondary-container to-secondary mx-auto" />
                    <p className="text-white/50 text-sm mt-4">
                      Nous accompagnons nos clients de A à Z pour garantir leur satisfaction.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right content */}
            <div className="lg:w-3/5">
              <AnimatedSection direction="right">
                <span className="section-label mb-4 block">Notre Méthode</span>
                <h2 className="text-4xl font-headline font-black text-primary mb-12">
                  Comment Nous Travaillons<br />Sur Vos Projets
                </h2>
              </AnimatedSection>

              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <AnimatedSection key={i} delay={i * 150} direction="right">
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                        <span className="text-xl">{step.icon}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-secondary font-headline font-black text-sm">{step.number}</span>
                          <h4 className="font-headline font-bold text-primary text-lg">{step.title}</h4>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-outline-variant/20">
        <div className="absolute inset-0 architectural-grid opacity-5" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6">
              Votre Projet
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">
              Prêt à démarrer{' '}
              <span className="text-secondary">
                votre projet ?
              </span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">
              Contactez Mikena Services pour discuter de votre projet. Nous vous proposons des solutions adaptées à vos besoins et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-secondary hover:bg-secondary/80">
                Discuter de Votre Projet <ArrowRight className="w-4 h-4" />
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

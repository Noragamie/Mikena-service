import AnimatedSection from '@/components/AnimatedSection'
import Counter from '@/components/Counter'
import Link from 'next/link'
import {
  Sun,
  Radio,
  Cpu,
  Package,
  ArrowRight,
  CheckCircle2,
  MapPin,
  User,
  Award,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'
import { projects, getCategories, getProjectsByCategory, getFeaturedProjects } from '@/lib/projects'

export const metadata = {
  title: 'Nos Projets — Mikena Services',
  description: 'Découvrez notre portfolio complet de projets réalisés : énergie solaire, fibre optique, infrastructure IT et équipements.',
}

const categoryIcons = {
  'Énergie Solaire': Sun,
  'Fibre Optique': Radio,
  'Informatique': Cpu,
  'Vente & Installation': Package,
}

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
  const categories = getCategories()
  const featuredProjects = getFeaturedProjects()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-40 pb-28 overflow-hidden">
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
              6 Ans d&apos;Expertise<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-secondary italic">
                50+ Projets Réalisés
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
              De l&apos;énergie solaire à la fibre optique, découvrez les projets que nous avons menés avec succès pour 
              nos clients au Bénin et dans la région.
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

      {/* Featured Projects */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <AnimatedSection direction="left">
              <span className="section-label mb-4 block">Projets Phares</span>
              <h2 className="text-4xl font-headline font-black text-primary">
                Réalisations Majeures
              </h2>
            </AnimatedSection>
          </div>

          {/* Featured projects - 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {featuredProjects.map((project, index) => {
              const Icon = categoryIcons[project.category as keyof typeof categoryIcons]
              return (
                <AnimatedSection key={project.id} delay={index * 100}>
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-96 flex flex-col">
                      {/* Background Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                      {/* Content */}
                      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                        {/* Top */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3 bg-secondary/20 backdrop-blur px-3 py-1.5 rounded-full w-fit">
                            <Icon className="w-4 h-4 text-secondary-container" />
                            <span className="text-secondary-container text-xs font-headline font-bold uppercase tracking-widest">
                              {project.category}
                            </span>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                            <ArrowUpRight className="w-5 h-5 text-secondary-container" />
                          </div>
                        </div>

                        {/* Bottom */}
                        <div>
                          <h3 className="text-xl font-headline font-black text-white mb-2 line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>

                          {/* Stats */}
                          <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                            {project.highlights.slice(0, 2).map((h, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-secondary text-sm font-headline font-bold">{h.value}</span>
                                <span className="text-white/50 text-xs">{h.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {categories.map((category, categoryIndex) => {
            const categoryProjects = getProjectsByCategory(category)
            const Icon = categoryIcons[category as keyof typeof categoryIcons]

            return (
              <div key={category} className="mb-32">
                {/* Category Header */}
                <AnimatedSection delay={categoryIndex * 150} className="mb-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-secondary-container" />
                    </div>
                    <div>
                      <span className="section-label block mb-1">{categoryProjects.length} Projets</span>
                      <h3 className="text-3xl font-headline font-black text-primary">{category}</h3>
                    </div>
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-secondary-container to-secondary rounded-full" />
                </AnimatedSection>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryProjects.map((project, projectIndex) => (
                    <AnimatedSection key={project.id} delay={categoryIndex * 150 + projectIndex * 50}>
                      <Link href={`/projects/${project.slug}`}>
                        <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer hover-lift h-full flex flex-col">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden bg-surface-container">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col flex-grow">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-block bg-secondary/10 text-secondary-container text-xs font-headline font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Title */}
                            <h4 className="text-lg font-headline font-black text-primary mb-3 group-hover:text-secondary-container transition-colors line-clamp-2">
                              {project.title}
                            </h4>

                            {/* Description */}
                            <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-grow">{project.description}</p>

                            {/* Project Info */}
                            <div className="space-y-3 border-t border-outline-variant/20 pt-4 mb-4">
                              {/* Client */}
                              <div className="flex items-start gap-3">
                                <User className="w-4 h-4 text-secondary-container mt-0.5 shrink-0" />
                                <div className="flex-grow">
                                  <div className="text-xs text-on-surface-variant uppercase font-headline font-bold">Client</div>
                                  <div className="text-sm font-medium text-primary">{project.client}</div>
                                </div>
                              </div>

                              {/* Location */}
                              <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-secondary-container mt-0.5 shrink-0" />
                                <div className="flex-grow">
                                  <div className="text-xs text-on-surface-variant uppercase font-headline font-bold">Localisation</div>
                                  <div className="text-sm font-medium text-primary">{project.location}</div>
                                </div>
                              </div>

                              {/* Duration */}
                              <div className="flex items-start gap-3">
                                <Award className="w-4 h-4 text-secondary-container mt-0.5 shrink-0" />
                                <div className="flex-grow">
                                  <div className="text-xs text-on-surface-variant uppercase font-headline font-bold">Durée</div>
                                  <div className="text-sm font-medium text-primary">{project.duration}</div>
                                </div>
                              </div>
                            </div>

                            {/* Highlights */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                              {project.highlights.map((h, i) => (
                                <div key={i} className="bg-surface-container-highest rounded-lg p-3 text-center">
                                  <div className="text-base font-headline font-bold text-secondary-container mb-1">{h.value}</div>
                                  <div className="text-xs text-on-surface-variant font-medium">{h.label}</div>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-secondary-container font-headline font-bold text-sm group-hover:gap-3 transition-all">
                              Voir les détails <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="absolute inset-0 blueprint-lines opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-4">
                Notre Impact en Chiffres
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Découvrez l&apos;impact réel de nos projets sur nos clients et leurs entreprises.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: 50, label: 'Projets Réalisés', icon: '🏗️' },
              { number: 6, label: 'Années d\'Expertise', icon: '⏱️' },
              { number: 98, label: 'Satisfaction Client', suffix: '%', icon: '⭐' },
              { number: 150, label: 'Experts Mobilisés', suffix: '+', icon: '👥' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} direction="up">
                <div className="text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-headline font-black text-white mb-2">
                    <Counter target={stat.number} suffix={stat.suffix || ''} />
                  </div>
                  <div className="text-white/70 font-headline font-bold">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-16">
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


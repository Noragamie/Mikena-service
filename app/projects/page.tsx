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
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
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
                10+ Projets Réalisés
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
              <span className="section-label mb-4 block">Nos Réalisations</span>
              <h2 className="text-4xl font-headline font-black text-primary">
                Projets Réalisés
              </h2>
            </AnimatedSection>
          </div>

          {/* All projects - stylized cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <AnimatedSection key={project.id} delay={index * 50}>
                  <div className="group relative bg-gradient-to-br from-white to-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/20 hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2 cursor-pointer h-full">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Icon with animated background */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-secondary/10 group-hover:border-secondary/30">
                          <IconComponent className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-headline font-bold text-primary group-hover:text-secondary transition-colors duration-300 leading-tight mb-4 flex-grow">
                        {project.title}
                      </h3>
                      
                      {/* Category badge */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/10 group-hover:border-secondary/20 transition-colors duration-300">
                        <span className="text-xs font-headline font-bold text-on-surface-variant/60 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-3xl border-2 border-secondary/20 animate-pulse" />
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
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
              { number: 10, label: 'Projets Réalisés', icon: '🏗️' },
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


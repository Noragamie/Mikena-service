import AnimatedSection from '@/components/AnimatedSection'
import Counter from '@/components/Counter'
import Link from 'next/link'
import { Eye, Rocket, Diamond, Award, Users, Lightbulb, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'À Propos — Mikena Services',
  description: 'Découvrez Mikena Services, votre partenaire en ingénierie structurelle et technologique en Afrique de l\'Ouest.',
}

const teamValues = [
  {
    icon: Shield,
    title: 'Intégrité dans la Conception',
    description: 'Chaque projet est exécuté avec les plus hauts standards éthiques et techniques.',
  },
  {
    icon: Users,
    title: 'Logique Collaborative',
    description: 'Nos équipes pluridisciplinaires travaillent en synergie pour des solutions optimales.',
  },
  {
    icon: Award,
    title: 'Responsabilité Radicale',
    description: 'Nous assumons pleinement la responsabilité de chaque livrable, sans exception.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Continue',
    description: 'Nous intégrons les dernières avancées technologiques pour rester à la pointe.',
  },
]

const milestones = [
  { year: '2020', title: 'Fondation', description: 'Création de Mikena Services à Cotonou, Bénin.' },
  { year: '2021', title: 'Expansion IT', description: 'Lancement des services d\'ingénierie informatique et réseaux.' },
  { year: '2022', title: 'Énergie Verte', description: 'Déploiement des premiers projets solaires industriels.' },
  { year: '2023', title: 'Fibre Optique', description: 'Contrats de déploiement fibre à grande échelle.' },
  { year: '2024', title: 'Certification ISO', description: 'Obtention des certifications de qualité internationales.' },
  { year: '2026', title: 'Aujourd\'hui', description: '10+ projets livrés, 25+ experts, présence régionale.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative bg-gradient-hero pt-40 pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
            alt="À Propos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-end gap-16">
            <div className="lg:w-2/3">
              <AnimatedSection>
                <span className="inline-block bg-secondary/20 text-secondary-container border border-secondary-container/20 rounded-full px-4 py-1.5 text-xs font-headline font-bold uppercase tracking-widest mb-6">
                  Notre Héritage
                </span>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-[1.05] tracking-tight mb-6">
                  Précision dans<br />
                  Chaque{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-secondary">
                    Détail Structurel.
                  </span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                  Mikena Services se trouve à l&apos;intersection de la vision architecturale et de la réalité ingénierique. 
                  Nous livrons des solutions d&apos;infrastructure complexes qui redéfinissent la stabilité et l&apos;efficacité de conception.
                </p>
              </AnimatedSection>
            </div>
            <div className="lg:w-1/3 grid grid-cols-2 gap-4">
              {[
                { value: 6, suffix: '+', label: 'Années' },
                { value: 10, suffix: '+', label: 'Projets' },
                { value: 25, suffix: '+', label: 'Experts' },
                { value: 10, suffix: '+', label: 'Pays' },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={300 + i * 100}>
                  <div className="glass-card border border-white/10 rounded-xl p-5 text-center">
                    <div className="text-3xl font-headline font-black text-white mb-1">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wider font-headline">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <AnimatedSection direction="left">
                <span className="section-label mb-4 block">Qui Sommes-Nous</span>
                <h2 className="text-4xl font-headline font-black text-primary mb-6">
                  Notre ADN : Maîtrise Technique
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Fondée sur le principe que l&apos;ingénierie est un art de la logique, Mikena Services a évolué d&apos;un 
                  cabinet de conseil structural spécialisé vers une véritable centrale d&apos;ingénierie multidisciplinaire. 
                  Nous ne construisons pas seulement, nous ingénierisons la longévité.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Basés à Cotonou, Bénin, avec une présence croissante en Afrique de l&apos;Ouest, nos équipes combinent 
                  expertise locale et standards internationaux pour livrer des projets d&apos;exception.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-2xl font-headline font-black text-primary mb-1">PHDs</div>
                    <div className="text-on-surface-variant text-sm">Docteurs & Ingénieurs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-headline font-black text-primary mb-1">ISO</div>
                    <div className="text-on-surface-variant text-sm">Certifiés Qualité</div>
                  </div>
                  <div>
                    <div className="text-2xl font-headline font-black text-primary mb-1">24/7</div>
                    <div className="text-on-surface-variant text-sm">Support Sites Actifs</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {teamValues.map((value, i) => (
                <AnimatedSection key={i} delay={i * 100} direction="right">
                  <div className="bg-surface-container-low rounded-xl p-6 h-full hover-lift">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-headline font-bold text-primary text-sm mb-2">{value.title}</h4>
                    <p className="text-on-surface-variant text-xs leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label mb-4 block">Notre Parcours</span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary">
              Une Décennie d&apos;Excellence
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-primary-container hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-surface rounded-xl p-6 shadow-elevation-1 hover-lift">
                        <span className="text-secondary font-headline font-black text-4xl block mb-2">{milestone.year}</span>
                        <h4 className="font-headline font-bold text-primary text-lg mb-2">{milestone.title}</h4>
                        <p className="text-on-surface-variant text-sm">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-secondary border-4 border-surface shrink-0 z-10" />

                    <div className="md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary">Notre Boussole Stratégique</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                color: 'border-primary',
                iconColor: 'text-primary',
                bg: 'bg-primary/5',
                title: 'Notre Vision',
                content: 'Être la référence mondiale pour l\'infrastructure qui harmonise le progrès humain avec la durabilité planétaire.',
              },
              {
                icon: Rocket,
                color: 'border-secondary',
                iconColor: 'text-secondary',
                bg: 'bg-secondary/5',
                title: 'Notre Mission',
                content: 'Fournir des services d\'ingénierie d\'élite via une modélisation innovante, des pratiques de travail éthiques et une précision technique sans compromis.',
              },
              {
                icon: Diamond,
                color: 'border-secondary-container',
                iconColor: 'text-on-secondary-container',
                bg: 'bg-secondary-container/20',
                title: 'Nos Valeurs',
                content: null,
                values: ['Intégrité dans la Conception', 'Logique Collaborative', 'Responsabilité Radicale', 'Innovation Continue'],
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className={`bg-surface rounded-xl p-10 shadow-elevation-1 border-t-4 ${card.color} hover-lift h-full`}>
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-6`}>
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-4">{card.title}</h3>
                  {card.content ? (
                    <p className="text-on-surface-variant leading-relaxed">{card.content}</p>
                  ) : (
                    <ul className="space-y-3">
                      {card.values?.map((v, j) => (
                        <li key={j} className="flex items-center gap-3 text-on-surface-variant">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-outline-variant/20">
        <div className="absolute inset-0 architectural-grid opacity-5" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6">
              Collaboration
            </div>
            <h2 className="text-4xl font-headline font-black text-primary mb-4">
              Construisons Ensemble
            </h2>
            <p className="text-on-surface-variant text-lg mb-8">
              Rejoignez les centaines d&apos;entreprises qui font confiance à Mikena Services pour leurs projets critiques.
            </p>
            <Link href="/contact" className="btn-primary bg-secondary hover:bg-secondary/80">
              Démarrer un Projet <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

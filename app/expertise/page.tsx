import AnimatedSection from '@/components/AnimatedSection'
import Counter from '@/components/Counter'
import Link from 'next/link'
import { 
  Award, Shield, Zap, Users, Target, TrendingUp, 
  CheckCircle2, ArrowRight, Briefcase, GraduationCap 
} from 'lucide-react'

export const metadata = {
  title: 'Expertise — Mikena Services',
  description: 'Découvrez notre expertise technique et nos certifications en ingénierie.',
}

const expertiseAreas = [
  {
    icon: Shield,
    title: 'Sécurité & Conformité',
    description: 'Certifications ISO et respect des normes internationales de sécurité.',
    certifications: ['ISO 9001', 'ISO 27001', 'OHSAS 18001'],
  },
  {
    icon: Zap,
    title: 'Innovation Technologique',
    description: 'Adoption des dernières technologies pour des solutions d\'avant-garde.',
    certifications: ['Cloud Native', 'IoT', 'AI/ML'],
  },
  {
    icon: Users,
    title: 'Équipe Multidisciplinaire',
    description: 'Experts certifiés dans tous les domaines de l\'ingénierie.',
    certifications: ['120+ Ingénieurs', 'PHDs', 'Certifications Pro'],
  },
  {
    icon: Target,
    title: 'Précision d\'Exécution',
    description: 'Méthodologie rigoureuse garantissant des résultats optimaux.',
    certifications: ['Agile', 'PRINCE2', 'PMP'],
  },
]

const stats = [
  { value: 10, suffix: '+', label: 'Projets Réussis', icon: Briefcase },
  { value: 25, suffix: '+', label: 'Experts Certifiés', icon: Users },
  { value: 6, suffix: '+', label: 'Années d\'Expérience', icon: TrendingUp },
  { value: 99, suffix: '.9%', label: 'Taux de Satisfaction', icon: Award },
]

export default function ExpertisePage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative bg-gradient-hero pt-40 pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Expertise"
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
              Excellence Technique<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-secondary">
                & Savoir-Faire
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Une équipe d&apos;experts certifiés, des méthodologies éprouvées et un engagement 
              sans faille envers l&apos;excellence technique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-elevation-1 text-center hover-lift">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-headline font-black text-primary mb-2">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-on-surface-variant text-sm font-headline font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label mb-4 block">Domaines d&apos;Excellence</span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-6">
              Notre Expertise Technique
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-surface rounded-xl p-8 shadow-elevation-1 h-full hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.certifications.map((cert, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-xs font-headline font-bold"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {cert}
                      </span>
                    ))}
                  </div>
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
              Contactez-Nous
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">
              Travaillons Ensemble
            </h2>
            <p className="text-on-surface-variant text-lg mb-8">
              Bénéficiez de notre expertise pour votre prochain projet d&apos;ingénierie.
            </p>
            <Link href="/contact" className="btn-primary bg-secondary hover:bg-secondary/80">
              Contactez-Nous
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

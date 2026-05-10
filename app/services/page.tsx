import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import { services } from '@/lib/services'
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Services — Mikena Services',
  description: 'Découvrez nos 12 domaines d\'expertise en ingénierie : informatique, solaire, fibre optique, formation et plus.',
}

// Get unique tags for filtering
const categories = Array.from(new Set(services.map(s => s.tag))).sort()

export default function ServicesPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative bg-gradient-hero pt-40 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <span className="inline-block bg-secondary/20 text-secondary-container border border-secondary-container/20 rounded-full px-4 py-1.5 text-xs font-headline font-bold uppercase tracking-widest mb-6">
              Notre Expertise Complète
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-6xl font-headline font-black text-white leading-[1.1] tracking-tight mb-6">
              12 Domaines d&apos;<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-secondary">Excellence</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              De l'informatique à l'agriculture, découvrez comment nous transformons votre infrastructure 
              avec des solutions innovantes et sur mesure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Services Phares - Premium Section */}
          <div className="mb-20">
            <AnimatedSection className="mb-12">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-headline font-black text-primary mb-3">
                    Services Phares
                  </h2>
                  <p className="text-on-surface-variant">
                    Nos services les plus demandés et reconnus dans l'industrie
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.filter(s => s.featured).map((service, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <Link href={`/services/${service.slug}`}>
                    <div className="group relative h-full">
                      {/* Card Background Gradient */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary-container rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur-lg" />
                      
                      <div className="relative bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-10 h-full flex flex-col transition-all duration-500 group-hover:border-secondary/40 group-hover:shadow-elevation-4 group-hover:shadow-secondary/10">
                        {/* Icon & Tag */}
                        <div className="flex items-start justify-between mb-8">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-secondary/10 group-hover:to-secondary/5 transition duration-300">
                            <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition duration-300" />
                          </div>
                          <span className="text-xs font-headline font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                            {service.tag}
                          </span>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-headline font-black text-primary mb-4 group-hover:text-secondary transition duration-300 line-clamp-2">
                          {service.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Highlights */}
                        {service.highlights && (
                          <div className="mb-8 space-y-3">
                            {service.highlights.slice(0, 3).map((h, j) => (
                              <div key={j} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <span className="text-xs text-on-surface-variant leading-snug">{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CTA Button */}
                        <div className="flex items-center gap-2 text-secondary font-headline font-bold text-sm group-hover:gap-3 transition-all duration-300">
                          Découvrir ce service
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* All Services - Organized by Category */}
          <div>
            <AnimatedSection className="mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-black text-primary mb-3">
                  Tous nos services
                </h2>
                <p className="text-on-surface-variant">
                  Explorez notre portefeuille complet de {services.length} solutions d'ingénierie
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter(s => !s.featured).map((service, i) => (
                <AnimatedSection key={i} delay={(i % 9) * 50}>
                  <Link href={`/services/${service.slug}`}>
                    <div className="group h-full">
                      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-7 h-full flex flex-col transition-all duration-400 group-hover:border-secondary/30 group-hover:shadow-elevation-3 group-hover:shadow-secondary/5">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-secondary/5 transition duration-300">
                            <service.icon className="w-6 h-6 text-primary group-hover:text-secondary transition duration-300" />
                          </div>
                          <span className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant px-2 py-1 rounded-md bg-surface-container">
                            {service.tag}
                          </span>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-headline font-bold text-primary mb-3 group-hover:text-secondary transition duration-300 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">
                          {service.description}
                        </p>

                        {/* Footer with Arrow */}
                        <div className="flex items-center gap-2 text-secondary font-headline font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                          En savoir plus
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white relative overflow-hidden border-t border-outline-variant/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 architectural-grid" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-6">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
              Nos ingénieurs expérimentés sont prêts à vous aider à transformer votre vision en réalité. 
              Contactez-nous pour une consultation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-secondary hover:bg-secondary/80">
                Demander un Devis Gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/#expertise" className="btn-secondary border-outline-variant text-primary hover:bg-surface-container">
                En savoir plus
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug, services } from '@/lib/services'
import AnimatedSection from '@/components/AnimatedSection'
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service non trouvé',
    }
  }

  return {
    title: `${service.title} — Mikena Services`,
    description: service.fullDescription || service.description,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  // Get related services (next 2 services)
  const serviceIndex = services.findIndex((s) => s.slug === params.slug)
  const relatedServices = services
    .slice(serviceIndex + 1, serviceIndex + 3)
    .concat(services.slice(0, Math.max(0, 3 - (services.length - serviceIndex - 1))))

  return (
    <>
      {/* ============ BREADCRUMB & HERO ============ */}
      <section className="pt-24 pb-12 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <Link href="/services" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour aux services
            </Link>

            <div className="flex items-start gap-6 mb-8">
              <div className={`${service.color} rounded-2xl p-6 flex items-center justify-center`}>
                <service.icon className={`w-12 h-12 ${service.iconColor}`} />
              </div>
              <div>
                {service.tag && (
                  <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-headline font-bold uppercase tracking-wider mb-4">
                    {service.tag}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">
                  {service.title}
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {service.fullDescription || service.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      {service.highlights && service.highlights.length > 0 && (
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <AnimatedSection className="mb-12">
              <h2 className="text-3xl font-headline font-bold text-primary mb-2">
                Ce que nous offrons
              </h2>
              <p className="text-on-surface-variant">
                Découvrez les caractéristiques et avantages de ce service
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.highlights.map((highlight, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-elevation-1 hover:shadow-elevation-4 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-headline font-bold text-primary mb-2">
                          {highlight}
                        </h3>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ CTA SECTION ============ */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="bg-gradient-to-r from-primary to-primary-container rounded-2xl p-12 md:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-headline font-black mb-4">
              Prêt à transformer votre infrastructure ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl">
              Nos experts en {service.title.toLowerCase()} sont disponibles pour discuter de votre projet et trouver la solution parfaite pour vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-white/90">
                Contacter nos experts
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary border-white/30 text-white hover:bg-white/10">
                Voir les autres services
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              Services complémentaires
            </h2>
            <p className="text-on-surface-variant">
              Découvrez nos autres domaines d'expertise
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relatedService, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link href={`/services/${relatedService.slug}`}>
                  <div className="service-card-hover bg-surface-container-lowest rounded-xl p-8 shadow-elevation-1 cursor-pointer h-full transition-all duration-300 hover:shadow-elevation-4 hover:-translate-y-1">
                    <div className={`card-icon w-12 h-12 rounded-lg ${relatedService.color} flex items-center justify-center mb-6 transition-all duration-400`}>
                      <relatedService.icon className={`w-6 h-6 ${relatedService.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-primary mb-3">
                      {relatedService.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {relatedService.description}
                    </p>
                    <div className="flex items-center text-secondary font-headline font-bold text-sm mt-6">
                      En savoir plus
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  DollarSign,
  User,
  Award,
  Zap,
  CheckCircle2,
  TrendingUp,
  Code,
} from 'lucide-react'
import { projects, getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  return {
    title: `${project.title} — Mikena Services`,
    description: project.fullDescription,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2)

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative pt-28 pb-12 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <AnimatedSection className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-secondary-container hover:text-secondary font-headline font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux projets
            </Link>
          </AnimatedSection>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left - Project Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span className="inline-block bg-secondary/10 text-secondary-container border border-secondary-container/20 rounded-full px-4 py-1.5 text-xs font-headline font-bold uppercase tracking-widest mb-6">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  {project.fullDescription}
                </p>
              </AnimatedSection>

              {/* Key Info */}
              <AnimatedSection delay={100} className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: User, label: 'Client', value: project.client },
                    { icon: MapPin, label: 'Localisation', value: project.location },
                    { icon: Calendar, label: 'Durée', value: project.duration },
                    { icon: DollarSign, label: 'Budget', value: project.budget },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4 text-secondary-container" />
                          <span className="text-xs text-on-surface-variant uppercase font-headline font-bold">
                            {item.label}
                          </span>
                        </div>
                        <div className="text-sm font-headline font-bold text-primary">{item.value}</div>
                      </div>
                    )
                  })}
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Quick Stats */}
            <div>
              <AnimatedSection delay={150} className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-8 text-white sticky top-28">
                <h3 className="font-headline font-black text-lg mb-6">Points Clés</h3>
                <div className="space-y-6">
                  {project.highlights.map((h, i) => (
                    <div key={i}>
                      <div className="text-3xl font-headline font-black mb-2">{h.value}</div>
                      <div className="text-white/70 text-sm">{h.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Project Image */}
          <AnimatedSection delay={200}>
            <div className="relative rounded-2xl overflow-hidden bg-surface-container-highest h-96 md:h-[500px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Challenge */}
            <AnimatedSection direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-headline font-black text-primary">Le Défi</h3>
                </div>
                <p className="text-lg text-on-surface-variant leading-relaxed">{project.challenge}</p>
              </div>
            </AnimatedSection>

            {/* Solution */}
            <AnimatedSection direction="right" delay={100}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-headline font-black text-primary">Notre Solution</h3>
                </div>
                <p className="text-lg text-on-surface-variant leading-relaxed">{project.solution}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <AnimatedSection>
              <span className="section-label mb-4 block">Impact Mesuré</span>
              <h2 className="text-4xl font-headline font-black text-primary">Résultats Obtenus</h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results.map((result, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-headline font-bold text-primary flex-grow pr-4">{result.title}</h4>
                    <TrendingUp className="w-6 h-6 text-secondary-container shrink-0" />
                  </div>
                  <div className="text-4xl font-headline font-black text-secondary-container mb-3">{result.value}</div>
                  <p className="text-on-surface-variant text-sm">{result.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <AnimatedSection>
              <span className="section-label mb-4 block">Infrastructure</span>
              <h2 className="text-4xl font-headline font-black text-primary mb-4">Technologies Utilisées</h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.technologies.map((tech, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="border-2 border-outline-variant/20 rounded-xl p-6 flex items-center gap-4 hover:border-secondary-container/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Code className="w-5 h-5 text-secondary-container" />
                  </div>
                  <span className="font-headline font-bold text-primary text-sm">{tech}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-28 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16">
              <AnimatedSection>
                <span className="section-label mb-4 block">Explorez aussi</span>
                <h2 className="text-4xl font-headline font-black text-primary">Projets Similaires</h2>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((relProject, i) => (
                <AnimatedSection key={relProject.id} delay={i * 100}>
                  <Link href={`/projects/${relProject.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer hover-lift h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relProject.image}
                          alt={relProject.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="inline-block bg-secondary/10 text-secondary-container text-xs font-headline font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
                          {relProject.category}
                        </span>
                        <h4 className="text-lg font-headline font-bold text-primary mb-2 group-hover:text-secondary-container transition-colors">
                          {relProject.title}
                        </h4>
                        <p className="text-on-surface-variant text-sm mb-4 flex-grow">{relProject.description}</p>
                        <div className="flex items-center gap-2 text-secondary-container font-headline font-bold text-sm">
                          Découvrir <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
        <div className="absolute inset-0 blueprint-lines opacity-5" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-6">
              Intéressé par un projet similaire ?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour discuter de votre besoin. Nous vous proposons une consultation gratuite et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-white/90">
                Demander une Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/expertise" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
                Notre Expertise
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

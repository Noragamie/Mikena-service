'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { MapPin, Mail, Phone, Clock, Send, ChevronDown } from 'lucide-react'

const services = [
  'Ingénierie Informatique',
  'Ingénierie Solaire & Électrique',
  'Ingénierie Fibre Optique',
  'Formations Techniques',
  "Gestion de l'Environnement",
  'Études & Audits SI',
  'Vente de Matériels',
  'Réseaux',
  'Maintenance',
  'Évènementiels',
  'Communication',
  'Domaine Agricole',
  'Autre',
]

const contactInfo = [
  {
    icon: MapPin,
    title: 'Siège Principal',
    lines: ['Cotonou, Bénin', 'Afrique de l\'Ouest'],
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Mail,
    title: 'Support Technique',
    lines: ['contact@mikenaservices.com', '+229 XX XX XX XX'],
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Clock,
    title: 'Heures Opérationnelles',
    lines: ['Lun — Ven : 08h00 - 18h00 WAT', 'Support 24/7 pour Sites Actifs'],
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 architectural-grid" />
        <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <span className="section-label mb-4 block">Contactez Nos Ingénieurs</span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-6xl font-headline font-black text-primary leading-[1.05] tracking-tight mb-6">
              Construisons le Futur<br />
              <span className="text-gradient-primary">Ensemble.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
              De projets d&apos;infrastructure mondiale au conseil technique spécialisé, notre équipe est prête 
              à fournir la précision structurelle que votre projet exige.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-surface-container-lowest rounded-2xl shadow-elevation-1 p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative top line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-secondary-container rounded-t-2xl" />

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                        <Send className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-headline font-black text-primary mb-3">
                        Demande Envoyée !
                      </h3>
                      <p className="text-on-surface-variant mb-6">
                        Merci pour votre intérêt. Notre équipe vous répondra dans les 24 heures ouvrées.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', service: '', details: '' }) }}
                        className="btn-secondary"
                      >
                        Nouvelle Demande
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full name */}
                        <div>
                          <label className="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                            Nom Complet
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Jean Dupont"
                            required
                            className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/40 text-sm px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-200"
                          />
                        </div>
                        {/* Email */}
                        <div>
                          <label className="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                            Adresse Email
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="j.dupont@entreprise.com"
                            required
                            className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/40 text-sm px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Service */}
                        <div>
                          <label className="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                            Service d&apos;Intérêt
                          </label>
                          <div className="relative">
                            <select
                              value={formData.service}
                              onChange={e => setFormData({ ...formData, service: e.target.value })}
                              required
                              className="w-full bg-surface-container-low text-on-surface text-sm px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-200 appearance-none cursor-pointer"
                            >
                              <option value="">Sélectionner...</option>
                              {services.map(s => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
                          </div>
                        </div>
                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+229 XX XX XX XX"
                            className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/40 text-sm px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                          Détails du Projet
                        </label>
                        <textarea
                          value={formData.details}
                          onChange={e => setFormData({ ...formData, details: e.target.value })}
                          placeholder="Décrivez brièvement vos besoins en ingénierie..."
                          rows={5}
                          required
                          className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/40 text-sm px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center py-4 text-base"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Initialiser la Demande
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info, i) => (
                <AnimatedSection key={i} delay={i * 100} direction="right">
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-elevation-1 hover-lift flex items-start gap-4 border-l-4 border-outline-variant/20">
                    <div className={`w-10 h-10 rounded-lg ${info.bg} flex items-center justify-center shrink-0`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-primary text-sm uppercase tracking-wide mb-2">
                        {info.title}
                      </h4>
                      {info.lines.map((line, j) => (
                        <p key={j} className="text-on-surface-variant text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Map placeholder */}
              <AnimatedSection delay={400} direction="right">
                <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-br from-primary to-primary-container">
                  <div className="absolute inset-0 blueprint-lines opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
                    <MapPin className="w-12 h-12 text-secondary-container mb-3" />
                    <h4 className="font-headline font-bold text-lg">Visiter le Hub</h4>
                    <p className="text-white/60 text-sm text-center px-8 mt-2">
                      Situé au cœur du district technologique, notre studio est là où la précision rencontre l&apos;innovation.
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-secondary-container text-sm font-headline font-bold uppercase tracking-wide flex items-center gap-2 hover:text-white transition-colors"
                    >
                      Obtenir l&apos;Itinéraire →
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="py-16 bg-white relative overflow-hidden border-t border-outline-variant/20">
        <div className="absolute inset-0 architectural-grid opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl p-8 md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1.5 rounded-full text-xs font-headline font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Disponible 24/7
              </div>
              <h2 className="text-3xl font-headline font-black text-primary mb-2">
                Support Terrain d&apos;Urgence ?
              </h2>
              <p className="text-on-surface-variant">
                Nos équipes d&apos;intervention rapide sont disponibles 24h/7j pour les besoins d&apos;infrastructure critiques.
              </p>
            </div>
            <a href="tel:+22900000000" className="btn-primary bg-secondary hover:bg-secondary/80 whitespace-nowrap">
              <Phone className="w-4 h-4" />
              Contacter la Hotline
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

import {
  Monitor, Sun, Radio, GraduationCap, Leaf, Search,
  ShoppingCart, Network, Wrench, Calendar, Wifi, Tractor,
} from 'lucide-react'

export interface Service {
  id: string
  slug: string
  icon: any
  title: string
  description: string
  shortDescription: string
  color: string
  iconColor: string
  fullDescription?: string
  highlights?: string[]
  tag?: string
  featured?: boolean
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'ingenierie-informatique',
    icon: Monitor,
    title: 'Ingénierie Informatique',
    description: 'Développement logiciel, infrastructure cloud et stratégies d\'intégration pour l\'industrie lourde.',
    shortDescription: 'Solutions IT complètes pour l\'industrie',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
    fullDescription: 'Développement logiciel sur mesure, infrastructure cloud et stratégies d\'intégration adaptées à l\'industrie lourde et aux entreprises commerciales. Nos solutions informatiques sont conçues pour optimiser vos opérations.',
    highlights: ['Développement logiciel custom', 'Infrastructure cloud & réseau', 'Intégration systèmes enterprise', 'Cybersécurité & conformité'],
    tag: 'IT & Digital',
    featured: true,
  },
  {
    id: '2',
    slug: 'ingenierie-solaire-electrique',
    icon: Sun,
    title: 'Ingénierie Solaire & Électrique',
    description: 'Conception de réseaux d\'énergie durable et installations électriques haute tension.',
    shortDescription: 'Solutions énergétiques durables',
    color: 'bg-emerald-50',
    iconColor: 'text-secondary',
    fullDescription: 'Conception de réseaux d\'énergie durable et installations électriques haute tension pour sites industriels modernes. Nous offrons des solutions complètes en énergie renouvelable et électricité.',
    highlights: ['Parcs solaires résidentiels & industriels', 'Installations haute tension', 'Systèmes de stockage d\'énergie', 'Audit & maintenance électrique'],
    tag: 'Énergie Durable',
    featured: true,
  },
  {
    id: '3',
    slug: 'fibre-optique',
    icon: Radio,
    title: 'Ingénierie Fibre Optique',
    description: 'Installation de backbone de données haute vitesse et architecture réseau étendu.',
    shortDescription: 'Infrastructure réseau haute vitesse',
    color: 'bg-slate-50',
    iconColor: 'text-primary',
    fullDescription: 'Installation de backbone de données haute vitesse, splicing de précision et architecture réseau étendu pour connectivité maximale. Solutions complètes pour votre infrastructure de communication.',
    highlights: ['Déploiement fibre FTTH/FTTB', 'Splicing & test de câbles', 'Architecture wide-area network', 'Maintenance infrastructure télécom'],
    tag: 'Télécommunications',
    featured: true,
  },
  {
    id: '4',
    slug: 'formations-techniques',
    icon: GraduationCap,
    title: 'Formations Techniques',
    description: 'Programmes de certification technique et ateliers de sécurité pour ingénieurs.',
    shortDescription: 'Programmes de certification professionnels',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
    fullDescription: 'Programmes de certification technique spécialisés et ateliers de sécurité pour les professionnels de l\'ingénierie. Développez vos compétences avec nos formations certifiées.',
    highlights: ['Certifications professionnelles', 'Ateliers sécurité chantier', 'Formation continue IT', 'Accompagnement sur mesure'],
    tag: 'Éducation',
    featured: false,
  },
  {
    id: '5',
    slug: 'gestion-environnement',
    icon: Leaf,
    title: 'Gestion de l\'Environnement',
    description: 'Conformité réglementaire et stratégies d\'utilisation durable des terres.',
    shortDescription: 'Solutions environnementales durables',
    color: 'bg-emerald-50',
    iconColor: 'text-secondary',
    fullDescription: 'Conformité réglementaire et stratégies d\'utilisation durable des terres. Nous vous accompagnons dans la transition écologique de votre infrastructure.',
    highlights: ['Audit environnemental', 'Conformité réglementaire', 'Stratégies durables', 'Rapports ESG'],
    tag: 'Durabilité',
    featured: false,
  },
  {
    id: '6',
    slug: 'etudes-audits-si',
    icon: Search,
    title: 'Études & Audits SI',
    description: 'Évaluations de vulnérabilité et contrôles d\'intégrité structurelle pour systèmes legacy.',
    shortDescription: 'Audits de sécurité informatique',
    color: 'bg-slate-50',
    iconColor: 'text-primary',
    fullDescription: 'Évaluations de vulnérabilité et contrôles d\'intégrité structurelle pour systèmes legacy. Identifiez et résolvez les risques de sécurité de vos systèmes d\'information.',
    highlights: ['Audit de sécurité SI', 'Test de vulnérabilité', 'Conformité RGPD', 'Rapports détaillés'],
    tag: 'Sécurité IT',
    featured: false,
  },
  {
    id: '7',
    slug: 'vente-materiels',
    icon: ShoppingCart,
    title: 'Vente de Matériels',
    description: 'Fourniture d\'outils d\'ingénierie IT, matériels et composants solaires spécialisés.',
    shortDescription: 'Fourniture de matériels spécialisés',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
    fullDescription: 'Fourniture d\'outils d\'ingénierie IT, matériels et composants solaires spécialisés. Accédez à nos partenaires de confiance et à nos solutions matérielles de qualité.',
    highlights: ['Matériels IT professionnels', 'Composants solaires', 'Équipement réseau', 'Support technique'],
    tag: 'Fourniture',
    featured: false,
  },
  {
    id: '8',
    slug: 'reseaux',
    icon: Network,
    title: 'Réseaux',
    description: 'Architecture LAN/WAN d\'entreprise, déploiements mesh et infrastructure sans fil.',
    shortDescription: 'Architecture réseau d\'entreprise',
    color: 'bg-emerald-50',
    iconColor: 'text-secondary',
    fullDescription: 'Architecture LAN/WAN d\'entreprise, déploiements mesh et infrastructure sans fil. Solutions réseau complètes pour votre organisation.',
    highlights: ['Architecture LAN/WAN', 'Réseaux sans fil', 'VPN et sécurité', 'Support 24/7'],
    tag: 'Infrastructure',
    featured: false,
  },
  {
    id: '9',
    slug: 'maintenance',
    icon: Wrench,
    title: 'Maintenance',
    description: 'Surveillance proactive et support technique rapide pour actifs mission-critiques.',
    shortDescription: 'Support technique et maintenance',
    color: 'bg-slate-50',
    iconColor: 'text-primary',
    fullDescription: 'Surveillance proactive et support technique rapide pour actifs mission-critiques. Garantissez la continuité opérationnelle de votre infrastructure.',
    highlights: ['Maintenance préventive', 'Support 24/7', 'Monitoring continu', 'SLA garantis'],
    tag: 'Support',
    featured: false,
  },
  {
    id: '10',
    slug: 'evenementiels',
    icon: Calendar,
    title: 'Évènementiels',
    description: 'Gestion technique pour symposiums industriels et sommets d\'ingénierie d\'entreprise.',
    shortDescription: 'Support technique pour événements',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
    fullDescription: 'Gestion technique complète pour symposiums industriels et sommets d\'ingénierie d\'entreprise. Nous assurons le succès technique de vos événements.',
    highlights: ['Infrastructure événementielle', 'Audiovisuel professionnel', 'Connectivité haute disponibilité', 'Support sur site'],
    tag: 'Événements',
    featured: false,
  },
  {
    id: '11',
    slug: 'communication',
    icon: Wifi,
    title: 'Communication',
    description: 'Conception et déploiement de canaux de communication interne unifiés.',
    shortDescription: 'Solutions de communication unifiées',
    color: 'bg-emerald-50',
    iconColor: 'text-secondary',
    fullDescription: 'Conception et déploiement de canaux de communication interne unifiés. Améliorez la collaboration interne avec nos solutions de communication.',
    highlights: ['Systèmes téléphoniques', 'Messagerie unifiée', 'Visioconférence', 'Collaboration cloud'],
    tag: 'Communication',
    featured: false,
  },
  {
    id: '12',
    slug: 'domaine-agricole',
    icon: Tractor,
    title: 'Domaine Agricole',
    description: 'Agriculture intelligente, irrigation automatisée et solutions d\'ingénierie agricole.',
    shortDescription: 'Solutions agricoles intelligentes',
    color: 'bg-slate-50',
    iconColor: 'text-secondary',
    fullDescription: 'Agriculture intelligente, irrigation automatisée et solutions d\'ingénierie agricole. Modernisez vos opérations agricoles avec notre expertise.',
    highlights: ['Agriculture de précision', 'Systèmes d\'irrigation', 'Automatisation agricole', 'IoT agricole'],
    tag: 'Agriculture',
    featured: false,
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug)
}

export const getFirstSixServices = (): Service[] => {
  return services.slice(0, 6)
}

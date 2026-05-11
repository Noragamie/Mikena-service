import { 
  Sun, Radio, Cpu, Package, MapPin, User, Award, TrendingUp,
  Shield, Network, Server, Radio as RadioTower, Cable, 
  Building2, Phone, FileText, Heart, Globe
} from 'lucide-react'

export interface ProjectHighlight {
  icon: string
  label: string
  value: string
}

export interface Project {
  id: string
  slug: string
  title: string
  category: 'Énergie Solaire' | 'Fibre Optique' | 'Informatique' | 'Vente & Installation'
  description: string
  fullDescription: string
  client: string
  clientType: string
  location: string
  duration: string
  budget: string
  image: string
  icon: any // Changed to any to accept Lucide icon components
  tags: string[]
  highlights: ProjectHighlight[]
  results: {
    title: string
    value: string
    description: string
  }[]
  challenge: string
  solution: string
  technologies: string[]
  featured: boolean
}

export const projects: Project[] = [
  // PROJET 1
  {
    id: 'gov-001',
    slug: 'plan-continuite-ministere-numerique',
    title: 'Réalisation du Plan de Continuité des Activités du Ministère du Numérique',
    category: 'Informatique',
    description: 'Réalisation du Plan de Continuité des Activités (PCA) pour assurer la résilience opérationnelle du Ministère.',
    fullDescription:
      'Mikena Services a élaboré un Plan de Continuité des Activités complet pour le Ministère du Numérique et de la Digitalisation, incluant l\'analyse des risques, la définition des procédures de secours et la mise en place de solutions de reprise après sinistre.',
    client: 'Ministère du Numérique et de la Digitalisation',
    clientType: 'Administration Publique',
    location: 'Cotonou, Bénin',
    duration: '4 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    icon: Shield,
    tags: ['PCA', 'Gouvernance', 'Résilience'],
    highlights: [
      { icon: '📋', label: 'Type', value: 'PCA' },
      { icon: '🏛️', label: 'Secteur', value: 'Public' },
      { icon: '✅', label: 'Statut', value: 'Livré' },
    ],
    results: [
      {
        title: 'Résilience opérationnelle',
        value: '100%',
        description: 'Continuité des services critiques garantie',
      },
      {
        title: 'Procédures documentées',
        value: '50+',
        description: 'Procédures de secours et de reprise',
      },
      {
        title: 'Formation du personnel',
        value: '30+',
        description: 'Agents formés aux procédures PCA',
      },
    ],
    challenge:
      'Le Ministère avait besoin d\'un plan structuré pour assurer la continuité de ses services en cas de sinistre ou d\'incident majeur.',
    solution:
      'Élaboration d\'un PCA complet avec analyse des risques, définition des RTO/RPO, procédures de secours et plan de formation.',
    technologies: ['Analyse de risques', 'Documentation', 'Formation', 'Tests de reprise'],
    featured: true,
  },

  // PROJET 2
  {
    id: 'gov-002',
    slug: 'maintenance-equipements-ministere-numerique',
    title: 'Maintenance des Équipements Réseaux des pylônes et des ordinateurs du Ministère du numérique et de la Digitalisation',
    category: 'Informatique',
    description: 'Maintenance préventive et curative des équipements réseaux des pylônes et des ordinateurs du Ministère.',
    fullDescription:
      'Contrat de maintenance annuelle couvrant l\'ensemble des équipements réseaux installés sur les pylônes ainsi que le parc informatique du Ministère du Numérique et de la Digitalisation.',
    client: 'Ministère du Numérique et de la Digitalisation',
    clientType: 'Administration Publique',
    location: 'Cotonou, Bénin',
    duration: '12 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
    icon: Server,
    tags: ['Maintenance', 'Support', 'Infrastructure'],
    highlights: [
      { icon: '🔧', label: 'Type', value: 'Maintenance' },
      { icon: '📡', label: 'Pylônes', value: 'Multiple' },
      { icon: '�', label: 'Postes', value: '100+' },
    ],
    results: [
      {
        title: 'Disponibilité réseau',
        value: '99.5%',
        description: 'Uptime maintenu sur toute la période',
      },
      {
        title: 'Interventions',
        value: '150+',
        description: 'Interventions préventives et curatives',
      },
      {
        title: 'Temps de réponse',
        value: '< 4h',
        description: 'Intervention rapide en cas de panne',
      },
    ],
    challenge:
      'Assurer la disponibilité continue des équipements critiques du Ministère avec un parc informatique étendu.',
    solution:
      'Mise en place d\'un contrat de maintenance avec interventions programmées et support réactif 24/7.',
    technologies: ['Équipements Cisco', 'Serveurs', 'Postes de travail', 'Monitoring'],
    featured: false,
  },

  // PROJET 3
  {
    id: 'gov-003',
    slug: 'deplacement-backbone-rna-asin',
    title: 'Déplacement et réinstallation du backbone (RNA) du Gouvernement du Bénin vers un nouveau site pour ASIN',
    category: 'Fibre Optique',
    description: 'Déplacement et réinstallation du backbone (RNA) du Gouvernement du Bénin vers un nouveau site pour ASIN.',
    fullDescription:
      'Projet complexe de migration du backbone RNA (Réseau National Administratif) vers un nouveau datacenter sécurisé, incluant le démontage, le transport et la réinstallation complète de l\'infrastructure.',
    client: 'ASIN (Agence des Systèmes d\'Information et du Numérique)',
    clientType: 'Administration Publique',
    location: 'Cotonou, Bénin',
    duration: '2 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    icon: Package,
    tags: ['RNA', 'Migration', 'Infrastructure'],
    highlights: [
      { icon: '�', label: 'Type', value: 'Migration' },
      { icon: '🏛️', label: 'Client', value: 'ASIN' },
      { icon: '⚡', label: 'Downtime', value: 'Minimal' },
    ],
    results: [
      {
        title: 'Migration réussie',
        value: '100%',
        description: 'Aucune perte de données',
      },
      {
        title: 'Temps d\'arrêt',
        value: '< 6h',
        description: 'Downtime minimal pendant la migration',
      },
      {
        title: 'Performance',
        value: '+30%',
        description: 'Amélioration des performances réseau',
      },
    ],
    challenge:
      'Migrer une infrastructure critique sans interruption majeure des services gouvernementaux.',
    solution:
      'Planification minutieuse avec migration par phases, tests préalables et équipe d\'intervention 24/7.',
    technologies: ['Fibre optique', 'Équipements réseau', 'Serveurs', 'Systèmes de sécurité'],
    featured: true,
  },

  // PROJET 4
  {
    id: 'gov-004',
    slug: 'deploiement-pylones-radio-rna',
    title: 'Déploiement des pylônes et Radio RNA',
    category: 'Fibre Optique',
    description: 'Installation et déploiement des pylônes et équipements radio pour le Réseau National Administratif.',
    fullDescription:
      'Déploiement d\'infrastructure de télécommunication incluant l\'installation de pylônes et d\'équipements radio pour étendre la couverture du RNA sur le territoire national.',
    client: 'Gouvernement du Bénin',
    clientType: 'Administration Publique',
    location: 'National, Bénin',
    duration: '6 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
    icon: RadioTower,
    tags: ['Pylônes', 'Radio', 'RNA'],
    highlights: [
      { icon: '📡', label: 'Pylônes', value: 'Multiple' },
      { icon: '🌐', label: 'Couverture', value: 'Nationale' },
      { icon: '📶', label: 'Signal', value: 'Optimal' },
    ],
    results: [
      {
        title: 'Couverture étendue',
        value: '+40%',
        description: 'Extension de la couverture RNA',
      },
      {
        title: 'Qualité signal',
        value: '95%',
        description: 'Qualité de signal maintenue',
      },
      {
        title: 'Sites déployés',
        value: '10+',
        description: 'Nouveaux sites opérationnels',
      },
    ],
    challenge:
      'Étendre la couverture du RNA dans des zones difficiles d\'accès avec des contraintes logistiques importantes.',
    solution:
      'Déploiement progressif avec études de site préalables et équipements adaptés aux conditions locales.',
    technologies: ['Pylônes télescopiques', 'Équipements radio', 'Antennes', 'Systèmes d\'alimentation'],
    featured: false,
  },

  // PROJET 5
  {
    id: 'gov-005',
    slug: 'deploiement-fibre-optique-rna-nss',
    title: 'Déploiement de la fibre optique RNA-NSS',
    category: 'Fibre Optique',
    description: 'Déploiement de la fibre optique pour interconnecter le RNA et le NSS (Nouveau Siège Social).',
    fullDescription:
      'Projet de câblage en fibre optique pour relier le Réseau National Administratif au Nouveau Siège Social, assurant une connectivité haut débit sécurisée.',
    client: 'Gouvernement du Bénin',
    clientType: 'Administration Publique',
    location: 'Cotonou, Bénin',
    duration: '3 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    icon: Cable,
    tags: ['Fibre', 'RNA', 'Connectivité'],
    highlights: [
      { icon: '�', label: 'Débit', value: '10 Gbps' },
      { icon: '📏', label: 'Distance', value: '5+ km' },
      { icon: '�', label: 'Sécurité', value: 'Maximale' },
    ],
    results: [
      {
        title: 'Bande passante',
        value: '10 Gbps',
        description: 'Connectivité haut débit symétrique',
      },
      {
        title: 'Latence',
        value: '< 1ms',
        description: 'Latence ultra-faible',
      },
      {
        title: 'Disponibilité',
        value: '99.9%',
        description: 'Infrastructure redondante',
      },
    ],
    challenge:
      'Établir une liaison fibre optique sécurisée et performante entre deux sites stratégiques.',
    solution:
      'Déploiement de fibre optique monomode avec redondance et protection physique renforcée.',
    technologies: ['Fibre monomode', 'Équipements DWDM', 'Chambres de tirage', 'Protection mécanique'],
    featured: true,
  },

  // PROJET 6
  {
    id: 'gov-006',
    slug: 'cablage-reseau-ministere-affaires-etrangeres',
    title: 'Reprise du câblage réseau ancien et nouveau bâtiment du Ministère des affaires étrangères',
    category: 'Informatique',
    description: 'Reprise complète du câblage réseau ancien et nouveau bâtiment du Ministère des Affaires Étrangères.',
    fullDescription:
      'Projet de restructuration complète du câblage réseau couvrant l\'ancien et le nouveau bâtiment du Ministère, avec mise aux normes et optimisation de l\'infrastructure.',
    client: 'Ministère des Affaires Étrangères',
    clientType: 'Administration Publique',
    location: 'Cotonou, Bénin',
    duration: '4 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    icon: Network,
    tags: ['Câblage', 'Réseau', 'Rénovation'],
    highlights: [
      { icon: '🏢', label: 'Bâtiments', value: '2' },
      { icon: '�', label: 'Points', value: '200+' },
      { icon: '✅', label: 'Normes', value: 'Cat 6A' },
    ],
    results: [
      {
        title: 'Points réseau',
        value: '200+',
        description: 'Points réseau installés et certifiés',
      },
      {
        title: 'Performance',
        value: '10 Gbps',
        description: 'Capacité réseau par point',
      },
      {
        title: 'Certification',
        value: '100%',
        description: 'Tous les liens certifiés',
      },
    ],
    challenge:
      'Moderniser une infrastructure vieillissante tout en maintenant les services diplomatiques opérationnels.',
    solution:
      'Reprise complète du câblage avec travaux par phases pour minimiser les interruptions de service.',
    technologies: ['Câble Cat 6A', 'Baies de brassage', 'Panneaux de brassage', 'Tests de certification'],
    featured: false,
  },

  // PROJET 7
  {
    id: 'gov-007',
    slug: 'telephonie-ip-ministere-communication',
    title: 'Déploiement installation et configuration de la téléphonie sur IP pour le Ministère de la communication',
    category: 'Informatique',
    description: 'Déploiement, installation et configuration de la téléphonie sur IP pour le Ministère de la Communication.',
    fullDescription:
      'Mise en place d\'une solution de téléphonie sur IP complète incluant IPBX, téléphones IP, configuration des extensions et formation des utilisateurs.',
    client: 'Ministère de la Communication',
    clientType: 'Administration Publique',
    location: 'Cotonou, Bénin',
    duration: '2 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    icon: Phone,
    tags: ['VoIP', 'Téléphonie', 'Communication'],
    highlights: [
      { icon: '☎️', label: 'Extensions', value: '100+' },
      { icon: '📞', label: 'Type', value: 'VoIP' },
      { icon: '💰', label: 'Économies', value: '40%' },
    ],
    results: [
      {
        title: 'Réduction des coûts',
        value: '40%',
        description: 'Économies sur les communications',
      },
      {
        title: 'Extensions déployées',
        value: '100+',
        description: 'Postes téléphoniques configurés',
      },
      {
        title: 'Qualité audio',
        value: 'HD',
        description: 'Qualité voix haute définition',
      },
    ],
    challenge:
      'Remplacer un système téléphonique obsolète par une solution moderne et économique.',
    solution:
      'Déploiement d\'une solution VoIP avec IPBX centralisé et téléphones IP professionnels.',
    technologies: ['IPBX', 'Téléphones IP Cisco', 'SIP Trunking', 'QoS réseau'],
    featured: false,
  },

  // PROJET 8
  {
    id: 'gov-008',
    slug: 'schema-directeur-si-ministere-communication',
    title: 'Réalisation du schéma directeur des systèmes d\'information du Ministère de la communication',
    category: 'Informatique',
    description: 'Réalisation du schéma directeur des systèmes d\'information du Ministère de la Communication.',
    fullDescription:
      'Élaboration d\'un schéma directeur SI complet définissant la stratégie informatique à 5 ans, incluant l\'audit de l\'existant, la définition de la cible et le plan de transformation.',
    client: 'Ministère de la Communication',
    clientType: 'Administration Publique',
    location: 'Cotonou, Bénin',
    duration: '5 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    icon: FileText,
    tags: ['SDSI', 'Stratégie', 'Gouvernance'],
    highlights: [
      { icon: '📊', label: 'Type', value: 'SDSI' },
      { icon: '🎯', label: 'Horizon', value: '5 ans' },
      { icon: '📋', label: 'Livrables', value: '10+' },
    ],
    results: [
      {
        title: 'Vision stratégique',
        value: '5 ans',
        description: 'Feuille de route SI à 5 ans',
      },
      {
        title: 'Projets identifiés',
        value: '25+',
        description: 'Projets SI priorisés',
      },
      {
        title: 'Budget estimé',
        value: 'Défini',
        description: 'Budget pluriannuel établi',
      },
    ],
    challenge:
      'Définir une stratégie SI cohérente alignée sur les objectifs métier du Ministère.',
    solution:
      'Méthodologie structurée avec audit, ateliers participatifs et définition d\'une cible réaliste.',
    technologies: ['Audit SI', 'Cartographie', 'Urbanisation', 'Gouvernance'],
    featured: true,
  },

  // PROJET 9
  {
    id: 'gov-009',
    slug: 'maintenance-centre-transfusion-sanguine',
    title: 'Maintenance des ordinateurs et copieurs du Centre de Transfusion sanguine du département de l\'Oueme',
    category: 'Informatique',
    description: 'Maintenance des ordinateurs et copieurs du Centre de Transfusion Sanguine du département de l\'Ouémé.',
    fullDescription:
      'Contrat de maintenance préventive et curative du parc informatique et des équipements d\'impression du Centre de Transfusion Sanguine.',
    client: 'Centre de Transfusion Sanguine de l\'Ouémé',
    clientType: 'Santé Publique',
    location: 'Porto-Novo, Bénin',
    duration: '12 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop',
    icon: Heart,
    tags: ['Maintenance', 'Santé', 'Support'],
    highlights: [
      { icon: '💻', label: 'Postes', value: '30+' },
      { icon: '🖨️', label: 'Copieurs', value: '5' },
      { icon: '⚕️', label: 'Secteur', value: 'Santé' },
    ],
    results: [
      {
        title: 'Disponibilité',
        value: '98%',
        description: 'Taux de disponibilité des équipements',
      },
      {
        title: 'Interventions',
        value: '80+',
        description: 'Interventions réalisées',
      },
      {
        title: 'Satisfaction',
        value: '95%',
        description: 'Taux de satisfaction client',
      },
    ],
    challenge:
      'Assurer la disponibilité continue des équipements informatiques critiques pour les activités de transfusion.',
    solution:
      'Maintenance préventive régulière et support réactif avec pièces de rechange en stock.',
    technologies: ['Postes de travail', 'Copieurs multifonctions', 'Logiciels métier', 'Outils de diagnostic'],
    featured: false,
  },

  // PROJET 10
  {
    id: 'gov-010',
    slug: 'site-web-ministere-communication-poste',
    title: 'Réalisation du site web de l\'Ex Ministère de la communication et de la Poste',
    category: 'Informatique',
    description: 'Conception et développement du site web officiel de l\'Ex Ministère de la communication et de la Poste.',
    fullDescription:
      'Conception, développement et mise en ligne du site web institutionnel de l\'Ex Ministère de la communication et de la Poste avec système de gestion de contenu.',
    client: 'Ex Ministère de la Communication et de la Poste',
    clientType: 'Administration Publique',
    location: 'Cotonou, Bénin',
    duration: '3 mois',
    budget: 'Confidentiel',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
    icon: Globe,
    tags: ['Web', 'Développement', 'CMS'],
    highlights: [
      { icon: '🌐', label: 'Type', value: 'Site Web' },
      { icon: '📱', label: 'Responsive', value: 'Oui' },
      { icon: '🔒', label: 'Sécurité', value: 'SSL' },
    ],
    results: [
      {
        title: 'Pages développées',
        value: '20+',
        description: 'Pages et sections du site',
      },
      {
        title: 'Temps de chargement',
        value: '< 2s',
        description: 'Performance optimale',
      },
      {
        title: 'Accessibilité',
        value: 'WCAG 2.1',
        description: 'Conformité aux standards',
      },
    ],
    challenge:
      'Créer un site web moderne et accessible représentant l\'institution avec un système de gestion de contenu facile à utiliser.',
    solution:
      'Développement d\'un site web responsive avec CMS intégré permettant une mise à jour autonome du contenu.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CMS', 'Hébergement sécurisé'],
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getCategories(): Project['category'][] {
  return ['Énergie Solaire', 'Fibre Optique', 'Informatique', 'Vente & Installation']
}

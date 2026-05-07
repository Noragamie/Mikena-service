import { Sun, Radio, Cpu, Package, MapPin, User, Award, TrendingUp } from 'lucide-react'

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
  icon: string
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
  // ÉNERGIE SOLAIRE
  {
    id: 'solar-001',
    slug: 'installation-solaire-pme-cotonou',
    title: 'Installation Solaire Complète - PME Cotonou',
    category: 'Énergie Solaire',
    description: 'Installation de panneaux solaires de 15kW pour une PME manufacturière avec batterie de stockage.',
    fullDescription:
      'Mikena Services a réalisé une installation solaire complète pour une PME manufacturière à Cotonou. Le projet incluait l\'installation de 40 panneaux solaires de 400W, un onduleur 15kW, un système de batterie LiFePO4 de 50kWh, et un système de monitoring intelligent.',
    client: 'Entreprise Manufacturière ABC',
    clientType: 'PME',
    location: 'Cotonou, Bénin',
    duration: '3 mois',
    budget: '45 000 000 FCFA',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    icon: 'sun',
    tags: ['Solaire', 'Énergie', 'Durabilité'],
    highlights: [
      { icon: '⚡', label: 'Capacité', value: '15kW' },
      { icon: '🔋', label: 'Stockage', value: '50kWh' },
      { icon: '📉', label: 'Réduction', value: '60%' },
    ],
    results: [
      {
        title: 'Réduction de consommation électrique',
        value: '60%',
        description: 'Économies mensuelles de 8 000 000 FCFA sur les factures électriques',
      },
      {
        title: 'Autonomie énergétique',
        value: '18h',
        description: 'Couverture complète des besoins énergétiques pendant 18h en stockage',
      },
      {
        title: 'Retour sur investissement',
        value: '5 ans',
        description: 'Amortissement complet estimé en 5 ans avec les économies réalisées',
      },
    ],
    challenge:
      'L\'entreprise souffrait de coupures d\'électricité fréquentes et de factures énergétiques très élevées impactant sa rentabilité.',
    solution:
      'Nous avons conçu un système hybride solaire-batterie dimensionné pour couvrir la totalité des besoins énergétiques de jour et stocker l\'énergie pour la nuit.',
    technologies: ['Panneaux Solaires Bifaciaux', 'Onduleur Growatt', 'Batterie LiFePO4', 'Smart Monitoring', 'Rails de fixation'],
    featured: true,
  },
  {
    id: 'solar-002',
    slug: 'solaire-institution-educative',
    title: 'Projet Solaire pour Institution Éducative',
    category: 'Énergie Solaire',
    description: 'Installation solaire de 8kW pour un complexe scolaire avec système autonome.',
    fullDescription:
      'Projet de solarisation d\'une institution éducative pour réduire les coûts énergétiques et assurer la continuité pédagogique en cas de délestage.',
    client: 'Groupe Scolaire Privé Excellence',
    clientType: 'Institution Éducative',
    location: 'Porto-Novo, Bénin',
    duration: '2 mois',
    budget: '24 000 000 FCFA',
    image: 'https://images.unsplash.com/photo-1509391366360-2e938d440220?w=600&h=400&fit=crop',
    icon: 'sun',
    tags: ['Solaire', 'Éducation', 'Économique'],
    highlights: [
      { icon: '⚡', label: 'Puissance', value: '8kW' },
      { icon: '🏫', label: 'Salles', value: '12+' },
      { icon: '💡', label: 'Autonomie', value: '24h' },
    ],
    results: [
      {
        title: 'Réduction des coûts opérationnels',
        value: '50%',
        description: 'Économies annuelles de 4 800 000 FCFA',
      },
      {
        title: 'Continuité pédagogique',
        value: '100%',
        description: 'Élimination des interruptions de cours liées au manque d\'électricité',
      },
      {
        title: 'Sécurité énergétique',
        value: '24/7',
        description: 'Disponibilité d\'électricité 24h/24 pour les activités de l\'école',
      },
    ],
    challenge:
      'L\'école devait stopper les cours à cause des délestages fréquents, impactant la qualité de l\'éducation.',
    solution:
      'Installation d\'un système solaire avec batterie offrant une autonomie complète pour les horaires scolaires et les urgences.',
    technologies: ['Panneaux Monocristallins', 'Batterie Gel', 'Système de distribution', 'Parafoudres'],
    featured: false,
  },

  // FIBRE OPTIQUE
  {
    id: 'fiber-001',
    slug: 'reseau-fibre-immeuble-bureaux',
    title: 'Câblage Fibre Optique - Immeuble Moderne',
    category: 'Fibre Optique',
    description: 'Installation complète de fibre optique pour un immeuble de bureaux de 8 étages.',
    fullDescription:
      'Projet de câblage en fibre optique distribuée sur 8 étages d\'un immeuble moderne à Cotonou, reliant 45 postes de travail avec une connectivité ultra-rapide.',
    client: 'Immeuble Professionnel Horizon',
    clientType: 'Immobilier Commercial',
    location: 'Cotonou, Bénin',
    duration: '5 semaines',
    budget: '18 000 000 FCFA',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    icon: 'radio',
    tags: ['Fibre', 'Connectivité', 'Haut Débit'],
    highlights: [
      { icon: '🔌', label: 'Débits', value: '1Gbps' },
      { icon: '📍', label: 'Points', value: '45' },
      { icon: '🏢', label: 'Étages', value: '8' },
    ],
    results: [
      {
        title: 'Vitesse de connexion',
        value: '1 Gbps',
        description: 'Haut débit symétrique pour tous les postes de travail',
      },
      {
        title: 'Disponibilité réseau',
        value: '99.9%',
        description: 'Uptime garanti avec infrastructure redondante',
      },
      {
        title: 'Couverture',
        value: '100%',
        description: 'Tous les bureaux et espaces communs connectés',
      },
    ],
    challenge:
      'L\'immeuble avait besoin d\'une infrastructure réseau performante pour accueillir des entreprises technologiques exigeantes.',
    solution:
      'Déploiement d\'une architecture fibre complète avec câblage vertical multi-fibre et chambres de distribution professionnelles.',
    technologies: ['Fibre Monomode', 'Connecteurs LC', 'Câbles de descente', 'Baies de brassage', 'Panneaux de fusion'],
    featured: true,
  },
  {
    id: 'fiber-002',
    slug: 'fibre-optique-complexe-hospitalier',
    title: 'Réseau Fibre pour Complexe Hospitalier',
    category: 'Fibre Optique',
    description: 'Infrastructure fibre optique pour un complexe médical multi-sites.',
    fullDescription:
      'Interconnexion en fibre optique de 3 bâtiments d\'un complexe hospitalier permettant une transmission de données médicales sécurisée et rapide.',
    client: 'Complexe Médical Central',
    clientType: 'Santé',
    location: 'Cotonou, Bénin',
    duration: '4 semaines',
    budget: '12 000 000 FCFA',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    icon: 'radio',
    tags: ['Fibre', 'Médical', 'Sécurité'],
    highlights: [
      { icon: '🏥', label: 'Bâtiments', value: '3' },
      { icon: '⚕️', label: 'Sécurité', value: 'HIPAA' },
      { icon: '🔒', label: 'Chiffrement', value: 'AES-256' },
    ],
    results: [
      {
        title: 'Transmission données médicales',
        value: '1 Gbps',
        description: 'Transfer d\'imagerie médicale en temps réel',
      },
      {
        title: 'Latence maximale',
        value: '1ms',
        description: 'Communication temps réel pour les systèmes critiques',
      },
      {
        title: 'Sécurité des données',
        value: '100%',
        description: 'Conformité HIPAA et chiffrement bout-en-bout',
      },
    ],
    challenge:
      'L\'établissement avait besoin d\'une connectivité ultra-fiable et sécurisée pour les données de santé sensibles.',
    solution:
      'Réseau fibre optique dédié avec redondance complète et chiffrement des données en transit.',
    technologies: ['Fibre Monomode 9/125μm', 'OTDRs', 'Fusion splice', 'Armoires de distribution', 'Modules SFP+'],
    featured: false,
  },

  // INFORMATIQUE
  {
    id: 'it-001',
    slug: 'infrastructure-it-cabinet-medical',
    title: 'Infrastructure IT Complète - Cabinet Médical',
    category: 'Informatique',
    description: 'Mise en place d\'une infrastructure IT sécurisée pour un cabinet médical de 15 employés.',
    fullDescription:
      'Projet de déploiement informatique intégré incluant serveur, réseau, stockage sécurisé et système de sauvegarde pour un cabinet médical privé.',
    client: 'Cabinet Médical Saint-Pierre',
    clientType: 'Santé',
    location: 'Cotonou, Bénin',
    duration: '3 semaines',
    budget: '16 000 000 FCFA',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    icon: 'cpu',
    tags: ['IT', 'Infrastructure', 'Sécurité'],
    highlights: [
      { icon: '💾', label: 'Stockage', value: '8TB' },
      { icon: '🖥️', label: 'Serveur', value: 'Professionnel' },
      { icon: '🔐', label: 'Backup', value: 'Automatisé' },
    ],
    results: [
      {
        title: 'Accélération des opérations',
        value: '70%',
        description: 'Augmentation de la productivité du personnel',
      },
      {
        title: 'Sécurité des dossiers',
        value: '100%',
        description: 'Chiffrement AES-256 de tous les dossiers patients',
      },
      {
        title: 'Récupération en cas sinistre',
        value: '1h',
        description: 'RTO inférieur à 1h en cas de défaillance',
      },
    ],
    challenge:
      'Le cabinet gérait ses dossiers manuellement avec risque de perte de données et absence de sauvegarde.',
    solution:
      'Serveur dédié avec RAID 5, système de backup automatisé quotidien et application de gestion médicale centralisée.',
    technologies: ['Serveur HP ProLiant', 'Windows Server 2022', 'Synology NAS', 'Veeam Backup', 'Firewalls'],
    featured: true,
  },
  {
    id: 'it-002',
    slug: 'reseau-local-entreprise-industrielle',
    title: 'Réseau Informatique - Entreprise Industrielle',
    category: 'Informatique',
    description: 'Déploiement de réseau informatique pour une usine avec 50 postes de travail.',
    fullDescription:
      'Infrastructure réseau et informatique pour une usine manufacturière incluant stations de travail, serveur production et système de monitoring.',
    client: 'Usine Manufacturière Nationale',
    clientType: 'Industrie',
    location: 'Abomey-Calavi, Bénin',
    duration: '4 semaines',
    budget: '22 000 000 FCFA',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    icon: 'cpu',
    tags: ['IT', 'Industrie', 'Productivité'],
    highlights: [
      { icon: '💼', label: 'Postes', value: '50+' },
      { icon: '🔄', label: 'Uptime', value: '99.8%' },
      { icon: '📊', label: 'Monitoring', value: '24/7' },
    ],
    results: [
      {
        title: 'Efficacité opérationnelle',
        value: '+45%',
        description: 'Amélioration de la productivité et réduction des temps d\'arrêt',
      },
      {
        title: 'Coûts de maintenance',
        value: '-30%',
        description: 'Réduction grâce à la maintenance préventive',
      },
      {
        title: 'Disponibilité système',
        value: '99.8%',
        description: 'Downtime inférieur à 2h par an',
      },
    ],
    challenge:
      'L\'usine avait des systèmes informatiques fragmentés et peu fiables impactant la production.',
    solution:
      'Infrastructure réseau unifiée avec serveurs robustes, redondance et monitoring 24/7 pour assurer la continuité produit.',
    technologies: ['Switches Cisco', 'Serveurs HP', 'Onduleurs', 'Nagios Monitoring', 'VPN Professionnel'],
    featured: false,
  },

  // VENTE ET INSTALLATION
  {
    id: 'sales-001',
    slug: 'fourniture-equipements-reseau-hotels',
    title: 'Fourniture Équipements Réseau - Chaîne Hôtelière',
    category: 'Vente & Installation',
    description: 'Fourniture et installation d\'équipements réseau pour une chaîne de 3 hôtels.',
    fullDescription:
      'Fourniture de switches, routeurs, firewalls et points d\'accès WiFi pour 3 établissements hôteliers avec installation et configuration complète.',
    client: 'Chaîne Hôtelière Caribbean Resort',
    clientType: 'Hôtellerie',
    location: 'Cotonou & Nokoué, Bénin',
    duration: '2 semaines',
    budget: '14 000 000 FCFA',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
    icon: 'package',
    tags: ['Équipements', 'Réseau', 'Hôtellerie'],
    highlights: [
      { icon: '🏨', label: 'Hôtels', value: '3' },
      { icon: '📶', label: 'WiFi AP', value: '25+' },
      { icon: '🌐', label: 'Débit', value: '10 Gbps' },
    ],
    results: [
      {
        title: 'Satisfaction clients hôtel',
        value: '95%',
        description: 'Service WiFi fiable apprécié par les résidents',
      },
      {
        title: 'Couverture WiFi',
        value: '100%',
        description: 'Couverture complète de tous les espaces',
      },
      {
        title: 'Support technique',
        value: '24/7',
        description: 'Support inclus avec remplacement d\'équipements',
      },
    ],
    challenge:
      'Les hôtels avaient besoin d\'une infrastructure réseau moderne capable de gérer des centaines de clients simultanés.',
    solution:
      'Déploiement d\'équipements professionnels Cisco/Arista avec points d\'accès WiFi 6 pour garantir performance et fiabilité.',
    technologies: ['Switches Cisco Catalyst', 'Routeurs ISR', 'Firewalls ASA', 'WiFi 6 Access Points', 'Contrôleur unifiéé'],
    featured: true,
  },
  {
    id: 'sales-002',
    slug: 'equipements-it-startups-tech',
    title: 'Équipements IT pour Incubateur Startups',
    category: 'Vente & Installation',
    description: 'Fourniture d\'équipements informatiques pour 10 startups technologiques.',
    fullDescription:
      'Fourniture et installation d\'ordinateurs de bureau, serveurs et équipements réseau pour un incubateur accueillant 10 startups tech.',
    client: 'Incubateur de Startups TechHub',
    clientType: 'Technologie',
    location: 'Cotonou, Bénin',
    duration: '1 semaine',
    budget: '8 000 000 FCFA',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    icon: 'package',
    tags: ['Équipements', 'IT', 'Startup'],
    highlights: [
      { icon: '💻', label: 'Postes', value: '30+' },
      { icon: '🚀', label: 'Startups', value: '10' },
      { icon: '⚙️', label: 'Config', value: 'Pro' },
    ],
    results: [
      {
        title: 'Équipements configurés',
        value: '30+',
        description: 'Tous les postes prêts à l\'emploi et optimisés',
      },
      {
        title: 'Temps d\'activation',
        value: '1 jour',
        description: 'Les startups ont pu commencer immédiatement',
      },
      {
        title: 'Support continu',
        value: '6 mois',
        description: 'Support technique inclus la première année',
      },
    ],
    challenge:
      'L\'incubateur avait besoin d\'équiper rapidement 10 startups avec des matériels professionnels et fiables.',
    solution:
      'Fourniture groupée d\'équipements standardisés avec configuration pré-installée et support technique dédié.',
    technologies: ['Ordinateurs HP/Dell', 'Routeurs TP-Link', 'Serveurs NAS', 'Onduleurs', 'Supports'],
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

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
  etudes?: string[]
  audits?: string[]
  materielsInformatiques?: string[]
  piecesRechange?: string[]
  materielsReseaux?: string[]
  fibreOptique?: string[]
  licences?: string[]
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
    fullDescription: 'Formations de sensibilisation aux bonnes pratiques IT du personnel et sur la sécurité informatique dans les entreprises. Nous proposons des formations aux entreprises qui veulent sensibiliser leurs personnels sur les bonnes pratiques à avoir dans une entreprise quand on utilise l\'outil informatique. Que ce soit sur les ordinateurs, sur les applications, sur le réseau informatique, sur internet, sur les imprimantes, sur les copieurs, face aux mails et sur tout matériel IT qui entre dans le fonctionnement ou dans la chaine de production d\'une entreprise. Cette gamme de formation met un accent particulier sur la sécurité informatique au sein d\'une entreprise. Aujourd\'hui la multiplication des menaces numériques doit rendre chaque acteur quelque soit la position qu\'il occupe dans une entreprise avant-gardiste des questions liées à la cybercriminalité. Une entreprise dont le personnel est mieux formé aux défis du numérique est une entreprise forte, gagnante et résiliente à tous les chocs. L\'humain est la clé de la réussite de toute entreprise.',
    highlights: [
      'Formations de sensibilisation aux bonnes pratiques IT - Pour collaborateurs, personnels et décideurs. Modules d\'une semaine, deux semaines et plus adaptés aux besoins',
      'Formation en Maintenance Informatique et Réseaux - Durée: 1 ou 2 ans. Maintenance préventive/curative, câblage réseau LAN, configuration équipements CISCO/MIKROTIK, déploiement wifi',
      'Formation à la réalisation des sites web - Durée: 09 mois. Devenir webmaster confirmé capable de créer des sites attractifs avec design professionnel',
      'Formation à la conception et réalisation des applications intégrées - Durée: 12 mois. Créer des applications Tout-en-un avec plusieurs fonctionnalités',
      'Formation en déploiement de la Fibre optique - Durée: 18 mois. FTTH/FTTO/FTTB, équipements (soudeuse, cliveuse), soudure et épissure de fibre',
      'Formation configuration équipements CISCO - Durée: 12 mois. Switchs, Routeurs, pare-feu. Préparation certification CCNA',
      'Formation mise en place pare-feu Fortigate - Durée: 8 semaines. Configuration des pare-feux Fortigate Nouvelle Génération',
      'Formation déploiement téléphonie sur IP - Durée: 90 jours. VoIP/ToIP CISCO, protocoles SIP/H.323, Asterisk, Call Manager',
      'Préparation certification CCNA, CCNP - Durée: 6 mois. CCNA 200-301 (routage, commutation, sécurité) et CCNP (réseaux complexes, BGP, OSPF)',
      'Formation suite Microsoft Office - Durée: 4 semaines. Mise à niveau avancée Word, Excel, Outlook, PowerPoint, Teams, Access et Windows'
    ],
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
    fullDescription: 'Pour toutes vos activités de protection de l\'environnement, nous vous proposons nos services tels que :',
    highlights: [
      'Gestion des déchets (gestion des déchets solides et liquides)',
      'Gestion des déchets biomédicaux et dangereux',
      'Gestion des déchets électroménagers',
      'Protection de l\'eau (gestion intégrée de l\'eau) incluant la sensibilisation',
      'Le nettoyage des infrastructures de base',
      'Aménagement paysager et embellissement artistique (incluant l\'aménagement des places publiques, des parcs etc.)',
      'Gestion de l\'éclairage public (installation, maintenance, modernisation, sécurité et surveillance)',
      'Mise en œuvre d\'un PGES et suivi-évaluation des normes HSE dans un projet'
    ],
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
    fullDescription: 'Nous vous élaborons pour toutes nos études et audits un rapport détaillé avec des recommandations d\'amélioration, le chiffrage des solutions et une estimation du retour sur investissement. Nous sommes spécialisés dans l\'élaborations des Plans liés au systèmes d\'information.',
    etudes: [
      'Le Plan Stratégique (ou Schéma Directeur des SI - SDSI) - Plan à long terme (3 à 5 ans) validé par la direction générale qui définit la vision cible du SI en fonction de la stratégie de l\'entreprise. Analyse de l\'existant, besoins futurs en infrastructures, cartographie applicative cible, feuille de route des grands projets',
      'Le Plan de Continuité d\'Activité (PCA) - Plan essentiel pour la gestion des risques et la résilience du SI. Ensemble documenté de procédures permettant de maintenir les activités critiques en fonctionnement permanent et de fonctionner en "mode dégradé" lors d\'une crise majeure (incendie, cyberattaque, pandémie, catastrophe naturelle)',
      'Le Plan de Reprise d\'Activité (PRA) - Ensemble de procédures documentées permettant de rétablir rapidement les systèmes informatiques et activités critiques après un sinistre majeur (cyberattaque, incendie, panne serveur). Vise à limiter les pertes financières et de données',
      'Le Plan Opérationnel (Plan Annuel) - Document de planification stratégique qui traduit les objectifs à long terme en actions concrètes et mesurables sur une année. Détaille activités, calendriers, responsables, et ressources nécessaires pour chaque département',
      'Le Plan de Sécurité des Systèmes d\'Information (PSSI / SDSSI) - Document stratégique et opérationnel décrivant les mesures techniques, organisationnelles, juridiques et humaines visant à protéger les données et l\'infrastructure informatique contre les cybermenaces. Assure confidentialité, intégrité, disponibilité et traçabilité',
      'Le Plan d\'Urbanisation (ou d\'Architecture) - Démarche stratégique visant à cartographier et réorganiser le paysage applicatif et technique. Structure le SI en Zones (domaines fonctionnels), Quartiers (domaines métiers), Îlots (applications) pour le rendre plus modulaire, cohérent et aligné avec les besoins métiers',
      'Cartographie des systèmes d\'information - Représentation graphique et structurée de l\'ensemble des composants informatiques (logiciels, matériels, réseaux, flux de données). Permet de visualiser la structure actuelle, identifier les interactions et optimiser l\'infrastructure. Utile pour cybersécurité, gestion des risques et prise de décision'
    ],
    audits: [
      'Audit des systèmes d\'information - Évaluation méthodique et indépendante de l\'infrastructure informatique. Vise à vérifier la sécurité, la fiabilité, la performance et la conformité des outils informatiques, réseaux et données, afin d\'identifier des failles et proposer des améliorations',
      'Audit de sécurité des systèmes d\'information - Évaluation rigoureuse pour identifier les vulnérabilités, failles techniques et organisationnelles. Vérification de la conformité aux bonnes pratiques pour protéger les données contre les cybermenaces. Évalue confidentialité, intégrité et disponibilité des données',
      'Audit de système électrique des bâtiments ou des data centers - Analyse approfondie de l\'infrastructure électrique pour évaluer sécurité, conformité, fiabilité et efficacité énergétique. Garantit 0 panne électrique, identifie les gaspillages, évalue la vétusté des équipements (onduleurs, disjoncteurs) pour planifier leur remplacement'
    ],
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
    materielsInformatiques: [
      'Ordinateurs portatifs DELL, HP, Acer',
      'Ordinateurs de bureau DELL, HP',
      'Des serveurs DELL et HP',
      'Des tablettes',
      'Imprimantes',
      'Onduleurs',
      'Écran pour ordinateur de bureau',
      'Régulateurs',
      'Scanners',
      'Copieurs',
      'Des postes téléviseurs numériques (smart)'
    ],
    piecesRechange: [
      'Disques durs HDD, SSD interne et externe',
      'Des mémoires pour ordinateur portatif et de bureau',
      'Des mémoires pour serveurs',
      'Des disques durs pour serveurs',
      'Écran pour portatif',
      'Des batteries pour portatifs',
      'Des clés USB',
      'Des convertisseur 1-8, 1-11, 1-15'
    ],
    materielsReseaux: [
      'Switch CISCO neufs comme d\'occasion : WS-9500 16 ports X (neufs), WS-9200 24 ports Gigabits PoE (occasion), WS-2960 24 ports PoE Gigabits (neufs), WS- CBS-350 24 ports PoE Gigabits neufs (neufs), WS-2960 24 ports Gigabits (neufs), WS-2960 48 ports (Occasion)',
      'Pare-feu CISCO ASA et FORTIGATE : Pare-feu ASA (occasion), Fortigate 30E (occasion)',
      'ROUTEURS CISCO',
      'SERVEURS HP',
      'DES RACKS 42U',
      'DES PANNEAUX DE BRASSAGE CAT 6A',
      'DES EMBASES CAT 6A',
      'DES CODONS CAT 6A 3 m LEGRAND',
      'DES CODONS CAT 6A 1,5 m LEGRAND',
      'DES CODONS CAT 6A 1 m LEGRAND',
      'DES ROULEAUX DE CABLES CAT 6A',
      'DES COFFRETS',
      'DES PRISES RJ45 CAT 6A LEGRAND',
      'DES POINTS D\'ACCES'
    ],
    fibreOptique: [
      'Jarretière Fibre optique monomode SC/SC; LC/SC; LC/LC de 1m de 3m de 5m de 10m de 15m de 30m et de 50m',
      'Panneaux optiques Legrand',
      'Jarretière Fibre optique multimode SC/SC; LC/SC; LC/LC de 1m de 3m de 5m de 10m de 15m de 30m et de 50m',
      'Des modules SFP monomode et multimode CISCO',
      'Des pigtails',
      'Des smoovs',
      'Des rouleaux de fibre optique monomode tous les brins',
      'Des rouleaux fibre optique multimodes tous les brins'
    ],
    licences: [
      'des licences Microsoft office quelque soient l\'édition',
      'des licence pour Windows poste et serveurs',
      'des licence antivirus poste et réseau'
    ],
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
    fullDescription: 'Nous déployons toutes les solutions de câblage réseau informatique, installation et configuration d\'équipements réseau dans les normes et standards internationaux.',
    highlights: [
      'le Tirage de la fibre optique',
      'le déploiement d\'infrastructure réseau de pointe',
      'la mise en place d\'une solution de collaboration',
      'le déploiement de solution de téléphonie sur IP',
      'le déploiement des systèmes sur vos infrastructures',
      'la sécurité des infrastructures réseaux et systèmes des entreprises'
    ],
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
    fullDescription: 'Nous proposons des solutions de maintenance :',
    highlights: [
      'Des équipements informatiques des entreprises (Ordinateurs, imprimantes, copieurs scanners, onduleurs etc.)',
      'Des équipements réseaux (Switch, routeurs, serveurs pare-feu etc.)',
      'De vos systèmes logiciels',
      'Des équipements de transmissions (pylônes; fibre optique, cuivre)',
      'Des équipements de communications (les radios etc.)'
    ],
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
    fullDescription: 'Pour tous vos évènements de : Séminaires; Formations; Mariage; Communion; Anniversaire; Baptême, Nous les organisons pour vous de bout en bout à votre satisfaction et à la satisfaction de tous vos invités. Ne vous gênez plus : confiez-nous vos événements vous nous en direz des éloges',
    highlights: [
      'Séminaires',
      'Formations',
      'Mariage',
      'Communion',
      'Anniversaire',
      'Baptême'
    ],
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

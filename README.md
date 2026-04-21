# Mikena Services - Site Web

Site web professionnel pour Mikena Services, entreprise d'ingénierie basée au Bénin.

## 🏗️ Structure du Projet

```
mikena-services/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Page d'accueil
│   ├── layout.tsx           # Layout principal
│   ├── globals.css          # Styles globaux
│   ├── about/               # Page À Propos
│   │   └── page.tsx
│   ├── services/            # Page Services
│   │   └── page.tsx
│   ├── projects/            # Page Projets
│   │   └── page.tsx
│   ├── expertise/           # Page Expertise
│   │   └── page.tsx
│   └── contact/             # Page Contact
│       └── page.tsx
├── components/              # Composants réutilisables
│   ├── AnimatedSection.tsx  # Animations au scroll
│   ├── Counter.tsx          # Compteur animé
│   ├── Footer.tsx           # Pied de page
│   └── Navbar.tsx           # Navigation
└── public/                  # Fichiers statiques
```

## 📄 Pages du Site

### 🏠 Accueil (`/`)
- Hero section avec présentation de l'entreprise
- Grille des 12 services principaux
- Statistiques et engagements
- Call-to-action

### 🛠️ Services (`/services`)
- Liste complète des 12 domaines d'expertise :
  - Ingénierie Informatique
  - Ingénierie Solaire & Électrique
  - Ingénierie Fibre Optique
  - Formations Techniques
  - Gestion de l'Environnement
  - Études & Audits SI
  - Vente de Matériels
  - Réseaux
  - Maintenance
  - Évènementiels
  - Communication
  - Domaine Agricole

### 👥 À Propos (`/about`)
- Histoire de l'entreprise
- Valeurs et mission
- Timeline des jalons
- Vision et engagements

### 🎯 Expertise (`/expertise`)
- Domaines d'excellence technique
- Certifications et qualifications
- Statistiques de performance
- Équipe d'experts

### 📁 Projets (`/projects`)
- Portfolio de projets réalisés
- Études de cas
- Processus de travail
- Réalisations majeures

### 📧 Contact (`/contact`)
- Formulaire de contact
- Informations de contact
- Carte de localisation
- Support d'urgence 24/7

## 🎨 Design System

### Couleurs
- **Primary**: Bleu foncé (#003D2E)
- **Secondary**: Vert (#00A86B)
- **Surface**: Blanc/Gris clair
- **Accents**: Dégradés et variations

### Typographie
- **Headline**: Manrope (Bold, Black)
- **Body**: Inter (Regular, Medium)

### Composants
- Animations au scroll avec `AnimatedSection`
- Compteurs animés avec `Counter`
- Cards avec effets hover
- Grilles responsive
- Boutons avec icônes

## 🚀 Démarrage

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev
# Le site sera disponible sur http://localhost:3000

# Build production
npm run build

# Démarrer en production
npm start
```

## 🌐 Déploiement

Le site peut être déployé **GRATUITEMENT** sur :
- **Vercel** (recommandé) : https://vercel.com
- **Netlify** : https://netlify.com

Voir le guide complet : [DEPLOIEMENT.md](./DEPLOIEMENT.md)

**Note** : Vous n'avez PAS besoin d'acheter un nom de domaine pour commencer. Vercel et Netlify vous donnent un sous-domaine gratuit (ex: `votre-site.vercel.app`)

## ⚙️ Configuration

### Variables d'environnement

Copier `.env.example` vers `.env.local` et ajuster :

```bash
# En développement
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# En production (après déploiement)
NEXT_PUBLIC_SITE_URL=https://votre-site.vercel.app
```

### Personnalisation

Modifier `lib/config.ts` avec vos informations :
- Coordonnées de contact
- Liens réseaux sociaux
- Adresse de l'entreprise

## 📦 Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 🌐 Routes

- `/` - Accueil
- `/services` - Services
- `/about` - À Propos
- `/expertise` - Expertise
- `/projects` - Projets
- `/contact` - Contact

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints :
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Fonctionnalités

- ✅ Navigation sticky avec effet glass
- ✅ Animations au scroll
- ✅ Compteurs animés
- ✅ Menu mobile
- ✅ Formulaire de contact
- ✅ Design Material Design 3
- ✅ SEO optimisé
- ✅ Performance optimisée

## 📄 License

© 2024 Mikena Services. Tous droits réservés.

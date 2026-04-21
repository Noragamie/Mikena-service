// Configuration du site - Modifier cette URL quand vous avez votre domaine
export const siteConfig = {
  // Pour le développement local, utiliser:
  // url: 'http://localhost:3000'
  
  // Pour Vercel (gratuit), utiliser:
  // url: 'https://votre-projet.vercel.app'
  
  // Pour Netlify (gratuit), utiliser:
  // url: 'https://votre-projet.netlify.app'
  
  // Pour votre propre domaine:
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  
  name: 'Mikena Services',
  description: 'Solutions d\'ingénierie et IT de classe mondiale au Bénin',
  
  // Coordonnées à mettre à jour
  contact: {
    email: 'contact@mikenaservices.com', // Changer par votre email
    phone: '+229 01 97 84 30 72',
    address: {
      street: 'Votre adresse',
      city: 'Cotonou',
      country: 'Bénin',
      postalCode: 'XXXXX',
    },
  },
  
  // Réseaux sociaux - Ajouter vos liens quand vous les créez
  social: {
    facebook: 'https://www.facebook.com/mikenaservices',
    linkedin: 'https://www.linkedin.com/company/mikenaservices',
    twitter: 'https://twitter.com/mikenaservices',
  },
}

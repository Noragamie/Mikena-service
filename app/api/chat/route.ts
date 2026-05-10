import { NextRequest, NextResponse } from 'next/server'

interface ChatResponse {
  message: string
  suggestions?: string[]
}

// Base de connaissances Mikena Services
const knowledgeBase = {
  services: {
    keywords: ['service', 'services', 'proposez', 'offrez', 'faites'],
    response: `Mikena Services propose plusieurs services :

🔆 Énergie Solaire : Installation de panneaux solaires, systèmes photovoltaïques pour PME et particuliers

💻 Informatique : Réseaux informatiques, maintenance, audit SI, fourniture d'équipements

🌐 Fibre Optique : Câblage fibre optique, installation réseau haut débit

📚 Formation : Formation technique en IT et énergie renouvelable

🏗️ Ingénierie : Études techniques, conseil en infrastructure

Pour plus d'informations, contactez-nous au +229 01 97 84 30 72`,
    suggestions: ['En savoir plus sur le solaire', 'Services informatiques', 'Obtenir un devis', 'Nous contacter']
  },
  
  contact: {
    keywords: ['contact', 'téléphone', 'appeler', 'joindre', 'numéro', 'email', 'mail'],
    response: `Vous pouvez nous contacter :

📞 Téléphone : +229 01 97 84 30 72
📧 Email : contact@mikenaservices.com
📍 Localisation : Cotonou, Bénin

Notre équipe est disponible pour répondre à toutes vos questions !`,
    suggestions: ['Voir nos services', 'Demander un devis', 'En savoir plus sur nous']
  },
  
  solaire: {
    keywords: ['solaire', 'panneau', 'photovoltaïque', 'énergie', 'électricité'],
    response: `Notre service d'énergie solaire comprend :

✅ Installation de panneaux solaires
✅ Systèmes photovoltaïques pour PME et particuliers
✅ Études de dimensionnement
✅ Maintenance et suivi

Nous avons réalisé plus de 10 projets avec succès. Contactez-nous pour un devis : +229 01 97 84 30 72`,
    suggestions: ['Services informatiques', 'Fibre optique', 'Demander un devis']
  },
  
  informatique: {
    keywords: ['informatique', 'réseau', 'ordinateur', 'serveur', 'maintenance', 'audit'],
    response: `Nos services informatiques incluent :

✅ Installation et configuration de réseaux
✅ Maintenance informatique
✅ Audit de systèmes d'information
✅ Fourniture d'équipements réseau
✅ Support technique

Nos 25+ experts sont à votre service. Appelez-nous : +229 01 97 84 30 72`,
    suggestions: ['Énergie solaire', 'Fibre optique', 'Demander un devis']
  },
  
  fibre: {
    keywords: ['fibre', 'optique', 'câblage', 'internet', 'connexion'],
    response: `Notre expertise en fibre optique :

✅ Câblage fibre optique
✅ Installation réseau haut débit
✅ Raccordement d'immeubles
✅ Tests et certification

Pour un projet fibre optique, contactez-nous : +229 01 97 84 30 72`,
    suggestions: ['Services informatiques', 'Énergie solaire', 'Nous contacter']
  },
  
  formation: {
    keywords: ['formation', 'apprendre', 'cours', 'enseigner', 'former'],
    response: `Nos formations techniques :

✅ Formation en IT et réseaux
✅ Formation en énergie renouvelable
✅ Formation sur mesure pour entreprises
✅ Certifications professionnelles

Demandez notre catalogue de formations : +229 01 97 84 30 72`,
    suggestions: ['Voir tous nos services', 'Demander un devis', 'Nous contacter']
  },
  
  about: {
    keywords: ['qui', 'entreprise', 'société', 'histoire', 'expérience', 'équipe'],
    response: `Mikena Services, c'est :

✅ Fondée en 2020 au Bénin
✅ 25+ experts qualifiés
✅ 10+ projets réalisés avec succès
✅ 6+ ans d'expérience
✅ Basée à Cotonou

Une entreprise béninoise de confiance pour vos projets d'ingénierie et IT !`,
    suggestions: ['Voir nos services', 'Nos réalisations', 'Nous contacter']
  },
  
  devis: {
    keywords: ['devis', 'prix', 'coût', 'tarif', 'budget', 'combien'],
    response: `Pour obtenir un devis personnalisé :

1. Appelez-nous au +229 01 97 84 30 72
2. Ou envoyez un email à contact@mikenaservices.com

Nous étudierons votre projet et vous proposerons une solution adaptée à votre budget.`,
    suggestions: ['Voir nos services', 'Nous contacter', 'En savoir plus']
  },
  
  greeting: {
    keywords: ['bonjour', 'salut', 'hello', 'bonsoir', 'hey'],
    response: `Bonjour ! 👋 Bienvenue chez Mikena Services !

Je suis là pour vous aider. Que souhaitez-vous savoir ?`,
    suggestions: ['Voir vos services', 'Vous contacter', 'Demander un devis', 'En savoir plus sur vous']
  },
  
  thanks: {
    keywords: ['merci', 'thanks', 'super', 'parfait', 'ok'],
    response: `Avec plaisir ! 😊

N'hésitez pas si vous avez d'autres questions. Notre équipe est disponible au +229 01 97 84 30 72`,
    suggestions: ['Voir nos services', 'Demander un devis', 'Nous contacter']
  },
  
  default: {
    response: `Je suis l'assistant virtuel de Mikena Services. Je peux vous renseigner sur :

• Nos services (solaire, informatique, fibre optique, formation)
• Nos coordonnées de contact
• Nos réalisations et expertise
• Comment obtenir un devis

Que souhaitez-vous savoir ?`,
    suggestions: ['Voir vos services', 'Vous contacter', 'Demander un devis', 'Qui êtes-vous ?']
  }
}

function findBestResponse(message: string): ChatResponse {
  const lowerMessage = message.toLowerCase()
  
  // Chercher la meilleure correspondance
  for (const [key, data] of Object.entries(knowledgeBase)) {
    if (key === 'default') continue
    
    if ('keywords' in data) {
      const keywords = data.keywords
      if (keywords.some((keyword: string) => lowerMessage.includes(keyword))) {
        return {
          message: data.response,
          suggestions: data.suggestions
        }
      }
    }
  }
  
  // Réponse par défaut
  return {
    message: knowledgeBase.default.response,
    suggestions: knowledgeBase.default.suggestions
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    
    // Récupérer le dernier message de l'utilisateur
    const lastMessage = messages[messages.length - 1]
    
    if (!lastMessage || lastMessage.role !== 'user') {
      return NextResponse.json({ 
        message: knowledgeBase.default.response,
        suggestions: knowledgeBase.default.suggestions
      })
    }
    
    // Trouver la meilleure réponse
    const response = findBestResponse(lastMessage.content)
    
    return NextResponse.json(response)
    
  } catch (error: any) {
    console.error('Erreur chatbot:', error)
    return NextResponse.json(
      { 
        message: 'Désolé, une erreur s\'est produite. Contactez-nous directement au +229 01 97 84 30 72 ou par email à contact@mikenaservices.com',
        suggestions: ['Voir nos services', 'Nous contacter']
      },
      { status: 200 }
    )
  }
}

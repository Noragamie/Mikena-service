'use client'

import { useState } from 'react'
import { MessageCircle, X, Send, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/config'

interface Message {
  text: string
  isBot: boolean
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Bonjour ! Je suis l\'assistant Mikena Services. Comment puis-je vous aider ?', isBot: true }
  ])
  const [currentStep, setCurrentStep] = useState(0)
  const [userInput, setUserInput] = useState('')

  const questions = [
    {
      question: 'Quel service vous intéresse ?',
      options: ['Énergie Solaire', 'Informatique', 'Fibre Optique', 'Autre']
    },
    {
      question: 'Quel est votre nom ?',
      options: []
    },
    {
      question: 'Quelle est votre entreprise/organisation ?',
      options: []
    }
  ]

  const handleOptionClick = (option: string) => {
    // Ajouter la réponse de l'utilisateur
    setMessages(prev => [...prev, { text: option, isBot: false }])

    // Passer à l'étape suivante
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: questions[currentStep + 1].question, isBot: true }])
        setCurrentStep(currentStep + 1)
      }, 500)
    } else {
      // Fin du questionnaire
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: 'Merci pour ces informations ! Voici notre numéro de contact :', isBot: true },
          { text: '📞 +2290197843072', isBot: true },
          { text: 'Un de nos experts vous contactera dans les plus brefs délais.', isBot: true }
        ])
      }, 500)
    }
  }

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    // Ajouter le message de l'utilisateur
    setMessages(prev => [...prev, { text: userInput, isBot: false }])
    setUserInput('')

    // Passer à l'étape suivante
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: questions[currentStep + 1].question, isBot: true }])
        setCurrentStep(currentStep + 1)
      }, 500)
    } else {
      // Fin du questionnaire
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: 'Merci pour ces informations ! Voici notre numéro de contact :', isBot: true },
          { text: `📞 ${siteConfig.contact.phone}`, isBot: true },
          { text: 'Un de nos experts vous contactera dans les plus brefs délais.', isBot: true }
        ])
      }, 500)
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Fenêtre du chatbot */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-sm">Assistant Mikena</h3>
                <p className="text-xs text-white/70">En ligne</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 rounded-lg p-2 transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-96 bg-surface">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isBot
                      ? 'bg-surface-container text-on-surface'
                      : 'bg-secondary text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Options de réponse */}
            {currentStep < questions.length && questions[currentStep].options.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="bg-white border border-outline-variant text-primary px-4 py-2 rounded-full text-sm hover:bg-surface-container transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          {currentStep < questions.length && questions[currentStep].options.length === 0 && (
            <div className="p-4 bg-white border-t border-outline-variant/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Tapez votre réponse..."
                  className="flex-1 px-4 py-2 border border-outline-variant rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-full p-2 transition-colors"
                  aria-label="Envoyer"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

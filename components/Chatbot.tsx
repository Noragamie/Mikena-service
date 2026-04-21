'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  suggestions?: string[]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Bonjour ! 👋 Je suis l\'assistant virtuel de Mikena Services. Comment puis-je vous aider aujourd\'hui ?',
      suggestions: ['Voir vos services', 'Vous contacter', 'Demander un devis', 'Qui êtes-vous ?']
    }
  ])
  const [userInput, setUserInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return

    // Ajouter le message de l'utilisateur
    setMessages(prev => [...prev, { role: 'user', content: messageText }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: messageText }],
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.message,
          suggestions: data.suggestions 
        }])
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Désolé, une erreur s\'est produite. Veuillez réessayer ou nous contacter au +229 01 97 84 30 72.' 
        }])
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Désolé, je ne peux pas répondre pour le moment. Contactez-nous au +229 01 97 84 30 72.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async () => {
    const messageText = userInput.trim()
    setUserInput('')
    await sendMessage(messageText)
  }

  const handleSuggestionClick = async (suggestion: string) => {
    await sendMessage(suggestion)
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
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden h-[600px]">
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
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-surface">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'assistant'
                        ? 'bg-surface-container text-on-surface'
                        : 'bg-secondary text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
                
                {/* Suggestions interactives */}
                {message.role === 'assistant' && message.suggestions && index === messages.length - 1 && !isLoading && (
                  <div className="flex flex-wrap gap-2 mt-3 ml-2">
                    {message.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="bg-white border-2 border-secondary/30 text-secondary px-3 py-1.5 rounded-full text-xs font-medium hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface-container text-on-surface rounded-2xl px-4 py-3">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-outline-variant/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder="Posez votre question..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-outline-variant rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !userInput.trim()}
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Envoyer"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              💬 Cliquez sur les suggestions ou tapez votre question
            </p>
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import { useState } from 'react'

interface PartnerLogoProps {
  src: string
  alt: string
  initials: string
}

export default function PartnerLogo({ src, alt, initials }: PartnerLogoProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative w-14 h-14">
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-xs font-headline font-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {initials}
        </div>
      )}
    </div>
  )
}

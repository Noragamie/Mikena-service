import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'white' | 'compact'
  className?: string
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Image - remplacer par le vrai logo */}
      <div className="relative w-12 h-12">
        <Image
          src="/images/logo.png"
          alt="Mikena Services Logo"
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </div>
      
      {variant !== 'compact' && (
        <div>
          <span className={`font-headline font-black text-lg tracking-tight leading-none block ${
            variant === 'white' ? 'text-white' : 'text-primary'
          }`}>
            MIKENA
          </span>
          <span className={`font-headline font-semibold text-[10px] tracking-[0.25em] uppercase leading-none ${
            variant === 'white' ? 'text-secondary-container' : 'text-secondary'
          }`}>
            SERVICES
          </span>
        </div>
      )}
    </Link>
  )
}

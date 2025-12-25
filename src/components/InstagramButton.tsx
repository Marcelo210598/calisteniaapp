'use client'

import { Instagram } from 'lucide-react'
import Link from 'next/link'

interface InstagramButtonProps {
    variant?: 'default' | 'compact'
    className?: string
}

export default function InstagramButton({ variant = 'default', className = '' }: InstagramButtonProps) {
    const isCompact = variant === 'compact'

    return (
        <Link
            href="https://www.instagram.com/califorce_oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className={`
        inline-flex items-center justify-center gap-2
        bg-[#FF9F1C] hover:bg-[#FF8C00] text-white
        font-semibold transition-all duration-200
        ${isCompact
                    ? 'p-2 rounded-lg min-h-[40px] min-w-[40px]'
                    : 'px-6 py-3 rounded-full min-h-[48px]'
                }
        active:scale-95 shadow-md hover:shadow-lg
        ${className}
      `}
        >
            <Instagram className={isCompact ? 'w-5 h-5' : 'w-6 h-6'} />
            {!isCompact && (
                <span className="hidden sm:inline">Siga @califorce_oficial</span>
            )}
        </Link>
    )
}

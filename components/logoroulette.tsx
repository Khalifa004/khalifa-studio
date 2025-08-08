'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const logos = [
  { src: '/images/figma.png', alt: 'Figma' },
  { src: '/images/clerk.png', alt: 'clerk' },
  { src: '/images/react1.png', alt: 'Next.js' },
  { src: '/images/typescript1.png', alt: 'React' },
  { src: '/images/tailcss.png', alt: 'TypeScript' },
  { src: '/images/stripe.png', alt: 'stripe' },
  
]

export function LogoMarquee() {
  const [logoSize, setLogoSize] = useState({ width: 120, height: 40 })

  useEffect(() => {
    const updateLogoSize = () => {
      const containerWidth = window.innerWidth
      const newWidth = Math.min(120, containerWidth / 4 - 24) // 4 logos with 24px gap
      setLogoSize({ width: newWidth, height: newWidth / 3 })
    }

    updateLogoSize()
    window.addEventListener('resize', updateLogoSize)
    return () => window.removeEventListener('resize', updateLogoSize)
  }, [])

  return (
    <div className="relative max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <div className="flex animate-scroll">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex min-w-full shrink-0 items-center justify-around gap-6">
            {logos.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={logoSize.width}
                height={logoSize.height}
                className="max-w-none object-contain grayscale"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-bg/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-sans text-base font-semibold text-ink tracking-tight">
          Jabari Lateef
        </a>
        <nav className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-muted hover:text-ink transition-colors hidden sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-sans font-medium text-white bg-teal px-4 py-2 rounded-sm hover:bg-teal-hover transition-colors"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}

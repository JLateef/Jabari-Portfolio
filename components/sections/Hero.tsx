import Image from 'next/image'
import { Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 bg-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — text */}
          <div>
            <p className="text-sm font-sans font-medium text-teal tracking-wide uppercase mb-4">
              Senior Technical Product Manager
            </p>
            <h1 className="font-sans text-5xl sm:text-6xl font-bold text-ink leading-[1.05] mb-6">
              Jabari Lateef
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-10 max-w-xl">
              Building &amp; managing products at the intersection of Enterprise Systems, Modernization, and Productivity. Currently building Legacy Whisperer, an AI modernization tool for enterprises preparing for legacy codebase migration. Previously: Silicon Valley, Nike, Tokyo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/jabarilateef"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-white text-sm font-sans font-medium rounded-sm hover:bg-teal-hover transition-colors"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                LinkedIn
              </a>
              <a
                href="mailto:jabarilateef@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-ink text-sm font-sans font-medium rounded-sm hover:border-ink/30 transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                Email me
              </a>
            </div>
          </div>

          {/* Right — headshot */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-border shadow-sm">
              <Image
                src="/jabari.jpg"
                alt="Jabari Lateef"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-muted hover:text-ink transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  )
}

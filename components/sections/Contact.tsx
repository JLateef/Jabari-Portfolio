import { Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-card border-t border-border pt-12 lg:pt-16 pb-24 lg:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-sans font-medium text-teal uppercase tracking-wide mb-4">Contact</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-ink mb-4 leading-tight">
            Let&apos;s Connect.
          </h2>

          <div className="flex flex-col gap-3 mb-6">
            <a
              href="tel:+818020554658"
              className="inline-flex items-center gap-2 text-sm font-sans text-muted hover:text-ink transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              +81-80-2055-4658 (Japan)
            </a>
            <a
              href="tel:+12056173235"
              className="inline-flex items-center gap-2 text-sm font-sans text-muted hover:text-ink transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              +1-205-617-3235 (US)
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/jabarilateef"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-teal text-white text-sm font-sans font-medium rounded-sm hover:bg-teal-hover transition-colors"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              Connect on LinkedIn
            </a>
            <a
              href="mailto:jabarilateef@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-ink text-sm font-sans font-medium rounded-sm hover:border-ink/30 transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              jabarilateef@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

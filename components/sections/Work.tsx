import { ArrowUpRight, Play } from 'lucide-react'

interface ProjectLink {
  label: string
  href: string
  icon: string
  note?: string
}

const projects: {
  number: string
  name: string
  role: string
  description: string
  tags: string[]
  links: ProjectLink[]
}[] = [
  {
    number: '01',
    name: 'Legacy Whisperer',
    role: 'Founder & Product Lead',
    description:
      'An AI-led voice interview tool that captures institutional knowledge from senior engineers before it walks out the door. Built for enterprises facing SAP S/4HANA migrations and major modernization programs.',
    tags: ['AI', 'Enterprise', 'Voice', 'B2B SaaS'],
    links: [
      {
        label: 'Watch demo',
        href: 'https://drive.google.com/file/d/1qifJvgH-rcGYO760Zu579agzocs7pSLh/view',
        icon: 'play',
      },
    ],
  },
  {
    number: '02',
    name: 'Harvest Restaurant - Online Ordering Platform',
    role: 'Product Designer & Builder',
    description:
      'Transformed a fictitious local restaurant from a static info page (store hours and directions only) into a fully functional mobile ordering platform. Harvest features a browse-and-customize menu, cart management, scheduled pickup, payment, and a punch card rewards program. Built as a PM interview demo prototype.',
    tags: ['Mobile App', 'Food Tech', 'E-commerce', 'React'],
    links: [
      {
        label: 'Open app',
        href: 'https://harvest-app-delta.vercel.app/',
        icon: 'arrow',
      },
    ],
  },
  {
    number: '03',
    name: 'Tokyo Ward App',
    role: '',
    description:
      "A web application for navigating Tokyo's ward system. Built during Jabari's time in Tokyo, the app helps users orient themselves within the city's 23 special wards and understand the administrative geography of one of the world's most complex urban environments.",
    tags: ['Web App', 'Civic Tech', 'Tokyo', 'Maps'],
    links: [
      {
        label: 'Open app',
        href: 'https://tokyo-ward-app.vercel.app/',
        icon: 'arrow',
      },
    ],
  },
  {
    number: '04',
    name: 'Japan vs US: UX/UI & Product Philosophy',
    role: 'Product Researcher & Author',
    description:
      'A deep-dive case study comparing how UX/UI philosophy shapes product thinking across US and Japanese markets — using Amazon and Rakuten as the primary lens. Published research on how market-specific design patterns drive fundamentally different product decisions.',
    tags: ['Case Study', 'UX Research', 'Cross-cultural', 'Product Strategy'],
    links: [
      {
        label: 'Read case study',
        href: 'https://jabariproductcasestudy.notion.site/Japan-vs-US-How-UX-UI-informs-Product-Philosophy-across-markets-32a56fef622180f9a675c32b32c2c5f5',
        icon: 'arrow',
      },
    ],
  },
  {
    number: '05',
    name: 'NYT Messaging Orchestrator',
    role: '',
    description:
      'Built during a 3rd-round interview with The New York Times — a messaging orchestration system designed to manage and coordinate communication flows at scale, bringing structure and observability to complex notification pipelines.',
    tags: ['Messaging', 'Orchestration', 'Product Systems', 'Scale'],
    links: [
      {
        label: 'View project',
        href: 'https://nyt-message-orchestrator-xmtj.vercel.app/',
        icon: 'arrow',
      },
    ],
  },
  {
    number: '06',
    name: 'Care Team Copilot',
    role: 'Product Designer & Builder',
    description:
      'A healthcare inbox orchestrator that intelligently triages and prioritizes inbound patient messages based on illness and issue severity. Designed to reduce response time for high-acuity cases and prevent critical messages from getting buried in high-volume care team queues.',
    tags: ['Healthcare', 'AI Triage', 'Inbox Management', 'Patient Communication'],
    links: [
      {
        label: 'Open app',
        href: 'https://care-team-copilot.vercel.app/',
        icon: 'arrow',
      },
    ],
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-bg pt-24 lg:pt-32 pb-12 lg:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-sans font-medium text-teal uppercase tracking-wide mb-4">Work</p>
        <h2 className="font-sans text-3xl sm:text-4xl font-bold text-ink mb-16 leading-tight">
          Previous Builds &amp; Research
        </h2>

        <div className="space-y-6">
          {projects.map((p) => (
            <div
              key={p.number}
              className="bg-card border border-border rounded-sm p-8 hover:border-teal/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-xs font-semibold text-teal tracking-widest">{p.number}</span>
                    {p.role && (
                      <span className="text-xs font-sans text-muted border border-border px-2 py-0.5 rounded-sm">
                        {p.role}
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-ink mb-3 leading-snug">{p.name}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-5 max-w-2xl">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs font-sans text-muted bg-border/60 px-2.5 py-1 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row lg:flex-col gap-3 flex-shrink-0">
                  {p.links.map((l) => (
                    <div key={l.label}>
                      <a
                        href={l.href}
                        target={l.href !== '#' ? '_blank' : undefined}
                        rel={l.href !== '#' ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-teal hover:text-teal-hover transition-colors whitespace-nowrap"
                      >
                        {l.icon === 'play' ? (
                          <Play className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                        )}
                        {l.label}
                      </a>
                      {'note' in l && l.note && (
                        <p className="text-xs text-muted mt-0.5">{l.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

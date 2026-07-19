const highlights = [
  { stat: '~6 years', label: 'at Nike' },
  { stat: 'Age 25', label: "one of Nike's youngest Senior PMs" },
  { stat: 'JLPT N3', label: 'Japanese proficiency' },
  { stat: '2nd place', label: 'Deep Learning.AI Hackathon · Google Japan' },
]

const tags = [
  'Auburn University CS',
  'Nike — Senior TPM',
  'SAP S/4HANA',
  'Greater China · NA · EMEA',
  'Tokyo AI Scene',
  'R · Python · SQL',
  'JLPT N3',
  'Legacy Whisperer — Founder',
]

export default function About() {
  return (
    <section id="about" className="bg-card border-y border-border py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bio */}
        <div className="mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-sans font-medium text-teal uppercase tracking-wide mb-4">About</p>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-ink mb-6 leading-tight">
              Around the World<br />and Back.
            </h2>
            <div className="space-y-4 text-muted font-sans text-base leading-relaxed">
              <p>
                Jabari Lateef is a Senior Technical Product Manager with a Computer Science degree from Auburn University and a background that spans Data Science, SAP enterprise systems, and AI Product Development. He started his career in Silicon Valley, with stints at SurveyMonkey and The Home Depot before joining Nike, where he became one of the company&apos;s youngest Senior PMs at age 25.
              </p>
              <p>
                At Nike, Jabari spent a year and a half as a Data Analyst, and four years owning Nike.net&apos;s SAP S/4HANA data integration across three global regions: Greater China, North America, and EMEA (Europe Middle East & Africa). He led cross-functional partnerships between Nike.net and international business teams, and managed regression testing for one of Nike&apos;s most complex platform migrations.
              </p>
              <p>
                After Nike, Jabari moved to Tokyo, Japan, where he earned JLPT N3 (business-intermediate Japanese), connected with Japan&apos;s AI startup ecosystem, and built several AI products, including one that placed 2nd at the Deep Learning.AI Hackathon at Google Japan. Observing that companies across both markets struggle with the same institutional knowledge problem inspired Legacy Whisperer.
              </p>
              <p>
                Currently residing in Los Angeles, he is open to Senior Product Manager and AI Product Manager roles, and is flexible on location within the US.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {highlights.map((h) => (
            <div key={h.stat} className="border border-border rounded-sm p-5 bg-bg">
              <p className="font-sans text-lg font-bold text-teal mb-1">{h.stat}</p>
              <p className="font-sans text-xs text-muted leading-snug">{h.label}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs font-sans font-medium text-teal bg-teal/8 border border-teal/20 px-3 py-1.5 rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

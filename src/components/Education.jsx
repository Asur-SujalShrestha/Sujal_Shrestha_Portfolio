import { FiAward } from 'react-icons/fi'
import Section from './Section'
import { certifications, education } from '../data/portfolio'

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-12 lg:grid-cols-2">
        <ol className="relative space-y-8 border-l border-line pl-8">
          {education.map((e) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full bg-rhodo ring-4 ring-ink" aria-hidden="true" />
              <p className="font-mono text-sm text-glacier">{e.period}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-snow">{e.title}</h3>
              <p>{e.place}</p>
            </li>
          ))}
        </ol>
        <ul className="space-y-3">
          {certifications.map((c) => (
            <li key={c} className="flex items-center gap-4 rounded-2xl border border-line bg-deep/50 px-5 py-4 text-snow">
              <FiAward className="text-gold" size={22} aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

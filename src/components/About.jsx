import Section from './Section'
import { about, facts } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" title="Backend systems that stay easy to change">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="divide-y divide-line self-start rounded-2xl border border-line bg-deep/50">
          {facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 px-5 py-4">
              <dt className="text-sm text-glacier">{k}</dt>
              <dd className="text-snow">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

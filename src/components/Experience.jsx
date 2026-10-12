import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/portfolio'

export default function Experience() {
  const [idx, setIdx] = useState(0)
  const p = experience.projects[idx]

  return (
    <Section
      id="experience"
      title="Experience"
      intro={`${experience.role} at ${experience.company}, ${experience.period}. Three systems I have worked on:`}
      className="bg-deep/40"
    >
      <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
        <div role="tablist" aria-label="Projects" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {experience.projects.map((proj, i) => (
            <button
              key={proj.name}
              role="tab"
              aria-selected={i === idx}
              onClick={() => setIdx(i)}
              className={`relative whitespace-nowrap rounded-xl px-4 py-3 text-left font-display text-lg transition-colors lg:whitespace-normal ${i === idx ? 'text-snow' : 'text-mist hover:text-snow'}`}
            >
              {i === idx && <motion.span layoutId="exp-tab" className="absolute inset-0 -z-0 rounded-xl border border-rhodo/60 bg-rhodo/10" />}
              <span className="relative">{proj.name}</span>
            </button>
          ))}
        </div>

        <div role="tabpanel" className="min-h-[22rem] rounded-2xl border border-line bg-ink/60 p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div key={p.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <h3 className="font-display text-2xl font-bold text-snow">{p.name}</h3>
              <p className="mt-1 text-glacier">{p.summary}</p>
              <ul className="mt-6 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rhodo" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-glacier">{s}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import Section from './Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="divide-y divide-line border-y border-line">
        {skills.map(([group, items], i) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
            className="grid gap-3 py-5 sm:grid-cols-[14rem_1fr] sm:items-center"
          >
            <h3 className="font-display text-lg text-snow">{group}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li key={s} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-mist transition hover:-translate-y-0.5 hover:bg-glacier/15 hover:text-snow">
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Section from './Section'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Full-stack projects I built on my own, with Java, Spring Boot and React." className="bg-deep/40">
      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group grid gap-6 rounded-3xl border border-line bg-ink/60 p-6 transition-colors hover:border-rhodo/50 sm:p-8 lg:grid-cols-[1.4fr_1fr]"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-snow transition-transform group-hover:translate-x-1 sm:text-3xl">{p.name}</h3>
              <p className="mt-3 max-w-xl text-lg leading-relaxed">{p.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-snow hover:text-rhodo">
                    <FiGithub aria-hidden="true" /> Source code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-snow hover:text-rhodo">
                    <FiExternalLink aria-hidden="true" /> Live demo
                  </a>
                )}
                {!p.github && !p.live && <span className="text-sm text-mist/70">Links coming soon</span>}
              </div>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-glacier">{s}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

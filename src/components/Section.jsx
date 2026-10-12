import { motion } from 'framer-motion'

export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-24 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-snow sm:text-5xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

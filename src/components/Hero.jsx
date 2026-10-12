import { motion } from 'framer-motion'
import { FiDownload, FiMapPin } from 'react-icons/fi'
import ArchitectureDiagram from './ArchitectureDiagram'
import Ridge from './Ridge'
import { profile } from '../data/portfolio'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-deep to-ridge/60" />
      <div className="absolute bottom-24 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-rhodo/20 blur-[120px]" />
      <Ridge />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-56 pt-32 lg:grid-cols-[1.05fr_1fr] lg:pt-36">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm">
            <FiMapPin aria-hidden="true" /> Kathmandu, Nepal
          </motion.p>
          <motion.h1 variants={item} className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-snow sm:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-xl font-display text-2xl text-glacier sm:text-3xl">
            Backend engineer building secure, multi-tenant systems with Java and Spring.
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-lg text-lg leading-relaxed">
            Spring Modulith, Keycloak, real-time WebSockets and cloud-native infrastructure, designed to stay maintainable as they grow.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-rhodo px-6 py-3 font-medium text-white transition hover:brightness-110">
              View projects
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.cv}`}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-snow transition hover:bg-white/10"
            >
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </motion.div>
        </motion.div>

        <ArchitectureDiagram />
      </div>
    </section>
  )
}

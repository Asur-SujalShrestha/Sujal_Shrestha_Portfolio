import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const clip = useTransform(smooth, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-ink/85 backdrop-blur-md' : ''}`}>
      {/* Scroll progress in the five prayer-flag colours */}
      <motion.div
        aria-hidden="true"
        className="h-1 w-full"
        style={{
          clipPath: clip,
          background: 'linear-gradient(90deg,#3b82f6 0 20%,#f8fafc 20% 40%,#e8486f 40% 60%,#34a874 60% 80%,#f2c14e 80% 100%)',
        }}
      />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
        <a href="#home" className="font-display text-xl font-bold text-snow">
          Sujal Shrestha<span className="text-rhodo">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors hover:text-snow ${active === id ? 'bg-white/10 text-snow' : 'text-mist'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button className="p-2 text-snow md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line px-6 pb-4 md:hidden">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-snow">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ports } from '../data/portfolio'

const C = 200, R = 62, NR = 150
const ANGLES = [-90, -30, 30, 90, 150, 210] // vertices of a pointy-top hexagon
const pt = (deg, r) => [C + r * Math.cos((deg * Math.PI) / 180), C + r * Math.sin((deg * Math.PI) / 180)]
const hex = ANGLES.map((a) => pt(a, R).join(',')).join(' ')

export default function ArchitectureDiagram() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % ports.length), 3500)
    return () => clearInterval(id)
  }, [paused])

  return (
    <div className="mx-auto w-full max-w-md" onMouseLeave={() => setPaused(false)}>
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-label="Hexagonal architecture: a domain core connected to Keycloak, WebSocket, PostgreSQL, Kubernetes, Elasticsearch and Redis"
        className="w-full"
      >
        {ports.map((p, i) => {
          const [x1, y1] = pt(ANGLES[i], R)
          const [x2, y2] = pt(ANGLES[i], NR - (i === 0 || i === 3 ? 16 : 28))
          const d = `M${x1} ${y1} L${x2} ${y2}`
          return (
            <g key={p.label}>
              <motion.path
                d={d}
                stroke="#8fb8ff"
                strokeOpacity={active === i ? 0.9 : 0.25}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.1 }}
              />
              {active === i && <path d={d} className="flow" stroke="#e8486f" strokeWidth="2" fill="none" />}
            </g>
          )
        })}

        <motion.polygon
          points={hex}
          fill="#101a33"
          stroke="#8fb8ff"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
        <text x={C} y={C - 4} textAnchor="middle" fill="#eef2f7" fontSize="17" fontWeight="700" fontFamily="'Bricolage Grotesque', sans-serif">
          Domain
        </text>
        <text x={C} y={C + 14} textAnchor="middle" fill="#8fb8ff" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">
          Spring Modulith
        </text>

        {ports.map((p, i) => {
          const [x, y] = pt(ANGLES[i], NR)
          const on = active === i
          return (
            <motion.g
              key={p.label}
              tabIndex={0}
              role="button"
              aria-label={p.label}
              onMouseEnter={() => { setActive(i); setPaused(true) }}
              onFocus={() => { setActive(i); setPaused(true) }}
              onBlur={() => setPaused(false)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1, type: 'spring', stiffness: 260, damping: 18 }}
              style={{ cursor: 'pointer', transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              <rect
                x={x - 52}
                y={y - 16}
                width="104"
                height="32"
                rx="16"
                fill={on ? 'rgba(232,72,111,0.18)' : '#101a33'}
                stroke={on ? '#e8486f' : '#8fb8ff'}
                strokeOpacity={on ? 1 : 0.35}
                strokeWidth="1.5"
              />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill={on ? '#fff' : '#b8c4db'} fontSize="12" fontFamily="'JetBrains Mono', monospace">
                {p.label}
              </text>
            </motion.g>
          )
        })}
      </svg>

      <div className="mt-2 min-h-[4.5rem] rounded-xl border border-line bg-deep/60 px-4 py-3 text-sm leading-relaxed backdrop-blur" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.p key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <span className="font-mono text-rhodo">{ports[active].label}</span>
            <span className="text-mist"> {ports[active].note}</span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

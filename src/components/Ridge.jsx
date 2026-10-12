import { motion, useScroll, useTransform } from 'framer-motion'

const FLAG_COLORS = ['#3b82f6', '#f8fafc', '#e8486f', '#34a874', '#f2c14e']

// Points along a quadratic curve (the prayer-flag string between two peaks)
const P0 = [300, 180], P1 = [410, 222], P2 = [520, 190]
const flags = Array.from({ length: 14 }, (_, i) => {
  const t = (i + 1) / 15
  const x = (1 - t) ** 2 * P0[0] + 2 * (1 - t) * t * P1[0] + t ** 2 * P2[0]
  const y = (1 - t) ** 2 * P0[1] + 2 * (1 - t) * t * P1[1] + t ** 2 * P2[1]
  return { x, y, color: FLAG_COLORS[i % 5], delay: i * 0.18 }
})

export default function Ridge() {
  const { scrollY } = useScroll()
  const far = useTransform(scrollY, [0, 600], [0, 50])
  const mid = useTransform(scrollY, [0, 600], [0, 25])

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-64 sm:h-80" aria-hidden="true">
      <svg viewBox="0 0 1200 320" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
        <motion.g style={{ y: far }}>
          <path
            d="M0 200 L80 150 L140 175 L230 90 L300 150 L370 120 L470 190 L560 110 L640 170 L720 70 L800 150 L880 120 L960 180 L1060 100 L1140 160 L1200 140 V330 H0Z"
            fill="#17234a"
          />
          <path d="M230 90 L205 122 L222 114 L232 128 L246 112 L258 120Z" fill="#33437a" />
          <path d="M720 70 L690 112 L710 104 L722 120 L738 102 L752 110Z" fill="#33437a" />
          <path d="M560 110 L538 140 L552 134 L562 144 L574 132 L584 138Z" fill="#33437a" />
        </motion.g>
        <motion.g style={{ y: mid }}>
          <path
            d="M0 250 L100 205 L190 235 L300 180 L400 240 L520 190 L620 245 L740 200 L850 250 L960 195 L1080 245 L1200 210 V330 H0Z"
            fill="#101a38"
          />
          <path d={`M${P0[0]} ${P0[1]} Q${P1[0]} ${P1[1]} ${P2[0]} ${P2[1]}`} stroke="#8fb8ff" strokeOpacity="0.5" strokeWidth="1" fill="none" />
          {flags.map((f, i) => (
            <motion.rect
              key={i}
              x={f.x - 4}
              y={f.y}
              width="8"
              height="11"
              rx="1"
              fill={f.color}
              style={{ originX: '50%', originY: 0, transformBox: 'fill-box' }}
              animate={{ skewX: [-6, 6, -6], rotate: [-3, 3, -3] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
            />
          ))}
        </motion.g>
        <path d="M0 292 L150 264 L300 286 L470 256 L640 290 L820 260 L1000 288 L1200 264 V330 H0Z" fill="#0a1020" />
      </svg>
    </div>
  )
}

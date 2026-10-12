/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A1020',
        deep: '#101A33',
        ridge: '#17234A',
        snow: '#EEF2F7',
        mist: '#B8C4DB',
        glacier: '#8FB8FF',
        rhodo: '#E8486F', // rhododendron, Nepal's national flower
        gold: '#F2C14E',
        line: 'rgba(143,184,255,0.16)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

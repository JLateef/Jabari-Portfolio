import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F0E6D3',
        ink: '#1C1712',
        teal: '#1E3A6E',
        'teal-hover': '#162D58',
        border: '#DDD4C4',
        muted: '#78695A',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

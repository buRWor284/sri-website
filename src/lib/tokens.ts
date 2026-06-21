import type { CSSProperties } from 'react'

export const C = {
  // ── New design tokens (v2) ──
  bg:        '#090907',
  bgAlt:     '#0A0A08',
  bgWarm:    '#0D0B08',
  bgStrip:   '#0C0C0A',
  bgBottom:  '#060605',
  border:    '#1A1918',
  borderFaint:   '#151412',
  borderDarkest: '#111110',
  textPrimary:   '#EDE7DC',
  textSecondary: '#968E84',
  textMuted:     '#908A82',
  textFaint:     '#5E5A54',
  textGhost:     '#2E2D2A',
  cyan:      '#20C4E8',
  cyanHover: '#48D2F2',
  cyanOn:    '#0A0905',
  quoteText: '#D0C8BC',

  // ── Legacy aliases (used by inner pages — do not remove) ──
  cyanD:  '#009DC4',
  cyanL:  'rgba(32,196,232,0.10)',
  dark:   '#EDE7DC',   // remapped to light on dark bg
  nav:    '#090907',
  hero:   '#090907',
  gray:   '#968E84',
  subtle: '#0A0A08',
  white:  '#EDE7DC',
} as const

// Font families
export const DISPLAY = "'Cormorant Garamond', serif"
export const BODY    = "'Space Grotesk', sans-serif"
export const MONO    = "'Space Mono', monospace"

// Legacy aliases (used by other pages — kept for backwards compat)
export const DF = DISPLAY
export const BF = BODY

export const gridPattern: CSSProperties = {
  backgroundImage: [
    'repeating-linear-gradient(rgba(32,196,232,0.032) 1px, transparent 1px)',
    'repeating-linear-gradient(90deg, rgba(32,196,232,0.032) 1px, transparent 1px)',
  ].join(', '),
  backgroundSize: '80px 80px',
}

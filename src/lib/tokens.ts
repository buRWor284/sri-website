export const C = {
  cyan:   '#00BCEC',
  cyanD:  '#009DC4',
  cyanL:  'rgba(0,188,236,0.10)',
  dark:   '#1C1C1C',
  nav:    '#0F1923',
  hero:   '#0D1B2A',
  gray:   '#6B6B6B',
  border: '#E8E8E8',
  subtle: '#F4F8FC',
  white:  '#FFFFFF',
} as const

export const DF = "'Raleway', sans-serif"
export const BF = "'Source Sans 3', system-ui, sans-serif"

export const gridPattern: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(0,188,236,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,188,236,0.07) 1px,transparent 1px)',
  backgroundSize: '48px 48px',
}

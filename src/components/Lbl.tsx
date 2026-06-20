import { CSSProperties } from 'react'
import { C, DF } from '@/lib/tokens'

interface LblProps {
  children: React.ReactNode
  style?: CSSProperties
}

export default function Lbl({ children, style }: LblProps) {
  return (
    <span
      style={{
        fontFamily: DF,
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: C.cyan,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

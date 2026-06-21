import { CSSProperties } from 'react'
import { C, MONO } from '@/lib/tokens'

interface LblProps {
  children: React.ReactNode
  style?:   CSSProperties
}

export default function Lbl({ children, style }: LblProps) {
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: '9px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: C.cyan,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

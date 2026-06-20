import { CSSProperties } from 'react'
import Link from 'next/link'
import { DF } from '@/lib/tokens'

type BtnVariant = 'primary' | 'outline' | 'ghost' | 'out-dark'
type BtnSize = 'sm' | 'md' | 'lg'

interface BtnProps {
  children: React.ReactNode
  variant?: BtnVariant
  size?: BtnSize
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  style?: CSSProperties
}

export default function Btn({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  style,
}: BtnProps) {
  const base: CSSProperties = {
    fontFamily: DF,
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    border: 'none',
    outline: 'none',
    ...style,
  }

  const cls = `btn btn-${variant === 'out-dark' ? 'out-dark' : variant} btn-${size}`

  if (href) {
    return (
      <Link href={href} className={cls} style={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls} style={base}>
      {children}
    </button>
  )
}

import { CSSProperties } from 'react'
import Link from 'next/link'
import { BODY } from '@/lib/tokens'

type BtnVariant = 'primary' | 'outline' | 'ghost' | 'out-dark'
type BtnSize    = 'sm' | 'md' | 'lg'

interface BtnProps {
  children:  React.ReactNode
  variant?:  BtnVariant
  size?:     BtnSize
  href?:     string
  onClick?:  () => void
  type?:     'button' | 'submit'
  style?:    CSSProperties
}

const variantClass: Record<BtnVariant, string> = {
  primary:  'btn-primary-new',
  outline:  'nav-cta',
  ghost:    'btn-secondary-new',
  'out-dark': 'btn-secondary-new',
}

export default function Btn({ children, variant = 'primary', href, onClick, type = 'button', style }: BtnProps) {
  const base: CSSProperties = { fontFamily: BODY, ...style }
  const cls = variantClass[variant]

  if (href) return <Link href={href} className={cls} style={base}>{children}</Link>
  return <button type={type} onClick={onClick} className={cls} style={base}>{children}</button>
}

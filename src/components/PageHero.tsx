import { CSSProperties } from 'react'
import { C, DF, BF, gridPattern } from '@/lib/tokens'
import Lbl from './Lbl'

interface PageHeroProps {
  label?: string
  title: string
  sub?: string
  tall?: boolean
  children?: React.ReactNode
}

export default function PageHero({ label, title, sub, tall, children }: PageHeroProps) {
  const padding = tall
    ? 'clamp(80px,10vw,120px) 40px clamp(70px,9vw,100px)'
    : '64px 40px 52px'

  return (
    <div
      style={{
        background: C.hero,
        ...gridPattern,
        padding,
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {label && (
          <Lbl style={{ marginBottom: '16px', display: 'block' }}>{label}</Lbl>
        )}
        <h1
          style={{
            fontFamily: DF,
            fontWeight: 300,
            fontSize: tall ? 'clamp(1.8rem,4vw,3.2rem)' : 'clamp(1.5rem,3.5vw,2.4rem)',
            color: '#fff',
            letterSpacing: '0.02em',
            margin: '0 0 18px',
            lineHeight: 1.25,
          } as CSSProperties}
        >
          {title}
        </h1>
        {sub && (
          <p
            style={{
              fontFamily: BF,
              fontSize: 'clamp(0.95rem,2vw,1.1rem)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.7',
              margin: '0 auto',
              maxWidth: '600px',
            } as CSSProperties}
          >
            {sub}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}

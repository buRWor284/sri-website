import { CSSProperties } from 'react'
import { C, DISPLAY, BODY, MONO } from '@/lib/tokens'

interface PageHeroProps {
  label?: string
  title: string
  sub?: string
  tall?: boolean
  children?: React.ReactNode
}

export default function PageHero({ label, title, sub, tall, children }: PageHeroProps) {
  const paddingTop    = tall ? '80px' : '52px'
  const paddingBottom = tall ? '64px' : '44px'

  return (
    <div
      style={{
        position: 'relative',
        background: C.bg,
        backgroundImage: [
          'repeating-linear-gradient(rgba(32,196,232,0.022) 1px, transparent 1px)',
          'repeating-linear-gradient(90deg, rgba(32,196,232,0.022) 1px, transparent 1px)',
        ].join(', '),
        backgroundSize: '80px 80px',
        borderBottom: `1px solid ${C.borderFaint}`,
        overflow: 'hidden',
      } as CSSProperties}
    >
      {/* Top accent line */}
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(32,196,232,0.3) 30%, rgba(32,196,232,0.6) 50%, rgba(32,196,232,0.3) 70%, transparent 100%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: `${paddingTop} 40px ${paddingBottom}` }}>
        {label && (
          <div style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.2em', color: C.cyan, textTransform: 'uppercase', marginBottom: '18px' }}>
            {label}
          </div>
        )}
        <h1
          style={{
            fontFamily: DISPLAY,
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: tall ? 'clamp(40px, 5vw, 72px)' : 'clamp(32px, 4vw, 54px)',
            color: C.textPrimary,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            margin: 0,
          } as CSSProperties}
        >
          {title}
        </h1>
        {sub && (
          <p
            style={{
              fontFamily: BODY,
              fontWeight: 300,
              fontSize: '15px',
              color: C.textSecondary,
              lineHeight: 1.75,
              margin: '20px 0 0',
              maxWidth: '600px',
              letterSpacing: '0.01em',
            } as CSSProperties}
          >
            {sub}
          </p>
        )}
        {children && <div style={{ marginTop: '24px' }}>{children}</div>}
      </div>
    </div>
  )
}

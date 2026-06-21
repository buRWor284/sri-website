import { CSSProperties } from 'react'
import { DF } from '@/lib/tokens'

const TEXT =
  'Archive — Silk Route Interactive operated from 2012 to 2014. The company was fully self-funded by its founders and was profitable.'

const bannerBase: CSSProperties = {
  background: 'rgba(245,158,11,0.07)',
  padding: '10px 40px',
  textAlign: 'center',
}

export function ArchiveBannerTop() {
  return (
    <div
      style={{
        ...bannerBase,
        borderBottom: '1px solid rgba(245,158,11,0.25)',
        position: 'sticky',
        top: 0,
        zIndex: 1001,
      }}
    >
      <p style={{ margin: 0, fontFamily: DF, fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#f59e0b', lineHeight: 1.4 }}>
        {TEXT}
      </p>
    </div>
  )
}

export function ArchiveBannerFooter() {
  return (
    <div
      style={{
        ...bannerBase,
        borderTop: '1px solid rgba(245,158,11,0.25)',
        borderBottom: '1px solid rgba(245,158,11,0.25)',
      }}
    >
      <p style={{ margin: 0, fontFamily: DF, fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#f59e0b', lineHeight: 1.4 }}>
        {TEXT}
      </p>
    </div>
  )
}

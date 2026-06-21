import { CSSProperties } from 'react'
import { DF } from '@/lib/tokens'

const TEXT =
  'Archive — Silk Route Interactive operated from 2012 to 2014. Fully self-funded and profitable.'

const BANNER_HEIGHT = 36

const bannerBase: CSSProperties = {
  background: 'rgba(245,158,11,0.07)',
  borderBottom: '1px solid rgba(245,158,11,0.20)',
  height: `${BANNER_HEIGHT}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 40px',
}

export const ARCHIVE_BANNER_HEIGHT = BANNER_HEIGHT

export function ArchiveBannerTop() {
  return (
    <div
      style={{
        ...bannerBase,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
      }}
    >
      <p style={{ margin: 0, fontFamily: DF, fontSize: '12px', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.02em', color: '#c4903a', lineHeight: 1 }}>
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

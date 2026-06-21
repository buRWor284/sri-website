'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { C, BODY, MONO } from '@/lib/tokens'

const NAV_LINKS    = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Products', '/products'], ['News', '/news'], ['Contact', '/contact']]
const PRODUCT_LINKS = [['ElectoMap', '/electomap'], ['Jaag Pakistan', '/jaag'], ['MyVote.pk', '/myvote']]
const SOCIAL_LINKS  = [['Facebook', 'https://www.facebook.com/SilkRouteInteractive/'], ['YouTube', 'https://www.youtube.com/@silkrouteinteractive'], ['Vimeo', 'https://vimeo.com/silkrouteinteractive']]

export default function Footer() {
  const [emailHref, setEmailHref]   = useState<string | undefined>(undefined)
  const [emailLabel, setEmailLabel] = useState<string>('——')

  useEffect(() => {
    const u = 'sia', d = 'syedirfanajmal.com'
    setEmailHref('mailto:' + u + '@' + d)
    setEmailLabel(u + '@' + d)
  }, [])

  const colHeader = (text: string) => (
    <div style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.2em', color: '#2E2D2A', textTransform: 'uppercase', marginBottom: '20px' }}>{text}</div>
  )

  return (
    <footer style={{ background: C.bg }}>
      {/* Main grid */}
      <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1.1fr', gap: '64px', padding: '80px 40px 64px' }}>

        {/* Col 1 — Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            {/* Logo mark */}
            <div style={{ position: 'relative', width: '22px', height: '22px', flexShrink: 0 }}>
              <div style={{ position: 'absolute', inset: 0, border: `1.5px solid ${C.cyan}`, opacity: 0.6 }} />
              <div style={{ position: 'absolute', inset: '6px', background: C.cyan }} />
            </div>
            <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4BCAF' }}>
              Silk Route Interactive
            </span>
          </div>
          <p style={{ fontFamily: BODY, fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#3E3C38', maxWidth: '260px', marginBottom: '28px' }}>
            An award-winning Spatial Intelligence startup (2012–2014). This site is preserved as a company archive.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {SOCIAL_LINKS.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-social">{label}</a>
            ))}
          </div>
        </div>

        {/* Col 2 — Navigate */}
        <div>
          {colHeader('Navigate')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {NAV_LINKS.map(([label, href]) => (
              <Link key={href} href={href} className="footer-link">{label}</Link>
            ))}
          </div>
        </div>

        {/* Col 3 — Products */}
        <div>
          {colHeader('Products')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {PRODUCT_LINKS.map(([label, href]) => (
              <Link key={href} href={href} className="footer-link">{label}</Link>
            ))}
          </div>
        </div>

        {/* Col 4 — Contact */}
        <div>
          {colHeader('Contact')}
          <p style={{ fontFamily: BODY, fontWeight: 400, fontSize: '13px', lineHeight: 1.85, color: '#3E3C38', margin: '0 0 8px' }}>
            CIE, NUST, H-12<br />Islamabad 44000<br />Pakistan
          </p>
          {emailHref && (
            <a href={emailHref} style={{ fontFamily: BODY, fontSize: '13px', color: C.cyan, display: 'block', marginBottom: '16px' }}>{emailLabel}</a>
          )}
          <div style={{ width: '32px', height: '1px', background: C.border, marginTop: '20px', marginBottom: '12px' }} />
          <div style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.08em', color: '#2E2D2A', lineHeight: 1.7 }}>
            33°41′N 73°03′E<br />ISLAMABAD, PAKISTAN
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #111010', background: C.bgBottom }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.07em', color: '#252320' }}>
            Silk Route Interactive was fully self-funded by its founders and operated profitably from 2012 to 2014.
          </span>
          <span style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.07em', color: '#252320', whiteSpace: 'nowrap' }}>
            © 2013 SILK ROUTE INTERACTIVE · CIE, NUST · ISLAMABAD, PAKISTAN
          </span>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { C, DF, BF } from '@/lib/tokens'
import Lbl from './Lbl'

const linkStyle = {
  fontFamily: BF,
  fontSize: '13px',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '8px',
  display: 'block',
  textDecoration: 'none',
  transition: 'color 150ms',
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)' }}
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: C.nav, padding: '56px 40px 28px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
        }}
      >
        <div>
          <Image src="/sri-logo.png" alt="SRI" height={22} width={110} style={{ height: '22px', width: 'auto', marginBottom: '14px', display: 'block', filter: 'brightness(0) invert(1)' }} />
          <p style={{ fontFamily: BF, fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.65', margin: 0, maxWidth: '220px' }}>
            An award-winning Spatial Intelligence startup (2012–2014). This site is preserved as a company archive.
          </p>
        </div>

        <div>
          <Lbl style={{ marginBottom: '14px', display: 'block' }}>Navigate</Lbl>
          <FLink href="/">Home</FLink>
          <FLink href="/about">About</FLink>
          <FLink href="/services">Services</FLink>
          <FLink href="/products">Products</FLink>
          <FLink href="/news">News</FLink>
          <FLink href="/contact">Contact</FLink>
        </div>

        <div>
          <Lbl style={{ marginBottom: '14px', display: 'block' }}>Products</Lbl>
          <FLink href="/electomap">ElectoMap</FLink>
          <FLink href="/jaag">Jaag Pakistan</FLink>
          <FLink href="/myvote">MyVote.pk</FLink>
        </div>

        <div>
          <Lbl style={{ marginBottom: '14px', display: 'block' }}>Contact</Lbl>
          <p style={{ fontFamily: BF, fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', margin: '0 0 10px' }}>
            CIE, NUST, H-12<br />Islamabad 44000, Pakistan
          </p>
          <a href="mailto:sales@silkrouteint.com" style={{ fontFamily: BF, fontSize: '13px', color: C.cyan, display: 'block', marginBottom: '6px' }}>
            sales@silkrouteint.com
          </a>
          <p style={{ fontFamily: BF, fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: '0 0 16px' }}>
            +92-(0)51-9085-6318
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['LinkedIn', 'Twitter', 'Facebook'].map(s => (
              <span
                key={s}
                style={{ fontFamily: DF, fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'color 150ms' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.cyan }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '28px auto 0', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}>
        <p style={{ fontFamily: DF, fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.2)', textAlign: 'center', margin: 0 }}>
          © 2013 SILK ROUTE INTERACTIVE — CIE, NUST, ISLAMABAD, PAKISTAN
        </p>
      </div>
    </footer>
  )
}

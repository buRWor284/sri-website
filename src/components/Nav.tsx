'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { C, BODY, MONO } from '@/lib/tokens'

const NAV_LINKS = [
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'News',     href: '/news' },
  { label: 'Contact',  href: '/contact' },
]

const PRODUCT_LINKS = [
  { label: 'ElectoMap',     href: '/electomap' },
  { label: 'Jaag Pakistan', href: '/jaag' },
  { label: 'My Vote',       href: '/myvote' },
]

const PRODUCT_PATHS = ['/products', '/electomap', '/jaag', '/myvote']

export default function Nav() {
  const pathname = usePathname()
  const [dd, setDd]       = useState(false)
  const [mob, setMob]     = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => { setMob(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/products'
      ? PRODUCT_PATHS.includes(pathname)
      : pathname === href

  const linkColor = (href: string) => isActive(href) ? C.cyan : '#7E7A72'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 36,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '58px',
        background: 'rgba(9,9,7,0.94)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 40px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          {/* Logo mark */}
          <div style={{ position: 'relative', width: '24px', height: '24px', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, border: `1.5px solid ${C.cyan}`, opacity: 0.7 }} />
            <div style={{ position: 'absolute', inset: '6px', background: C.cyan }} />
          </div>
          <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textPrimary }}>
            Silk Route Interactive
          </span>
          <span className="nav-archive-badge" style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.1em', color: C.textGhost, borderLeft: '1px solid #1E1D1B', paddingLeft: '10px', marginLeft: '2px' }}>
            ARCHIVE
          </span>
        </Link>

        {/* Desktop links */}
        {!mobile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {NAV_LINKS.map(({ label, href }) =>
              label === 'Products' ? (
                <div key={href} style={{ position: 'relative' }} onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
                  <Link
                    href={href}
                    style={{ fontFamily: BODY, fontSize: '13px', color: linkColor(href), padding: '6px 13px', letterSpacing: '0.02em', transition: 'color 0.15s', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
                    onMouseEnter={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = '#C4BCAF' }}
                    onMouseLeave={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = '#7E7A72' }}
                  >
                    {label} <span style={{ fontSize: '7px', opacity: 0.7 }}>▼</span>
                  </Link>
                  {dd && (
                    <div style={{ position: 'absolute', top: '100%', left: '-4px', paddingTop: '4px' }}>
                      <div style={{ background: 'rgba(9,9,7,0.97)', border: `1px solid ${C.border}`, minWidth: '160px', padding: '8px 0' }}>
                        {PRODUCT_LINKS.map(p => (
                          <Link
                            key={p.href}
                            href={p.href}
                            style={{ display: 'block', padding: '10px 18px', fontFamily: BODY, fontSize: '12px', letterSpacing: '0.04em', color: pathname === p.href ? C.cyan : '#7E7A72', textDecoration: 'none', transition: 'color 0.15s' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C4BCAF' }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = pathname === p.href ? C.cyan : '#7E7A72' }}
                          >
                            {p.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  style={{ fontFamily: BODY, fontSize: '13px', color: linkColor(href), padding: '6px 13px', letterSpacing: '0.02em', transition: 'color 0.15s', textDecoration: 'none' }}
                  onMouseEnter={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = '#C4BCAF' }}
                  onMouseLeave={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = '#7E7A72' }}
                >
                  {label}
                </Link>
              )
            )}
            <Link href="/contact" className="nav-cta">Get In Touch</Link>
          </div>
        ) : (
          <button
            onClick={() => setMob(!mob)}
            style={{ background: 'none', border: 'none', color: C.textPrimary, fontSize: '20px', cursor: 'pointer', padding: '8px' }}
            aria-label="Toggle menu"
          >
            {mob ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {mobile && mob && (
        <div style={{ position: 'fixed', top: '94px', left: 0, right: 0, background: 'rgba(9,9,7,0.97)', borderTop: `1px solid ${C.border}`, zIndex: 99, paddingBottom: '8px' }}>
          {[{ label: 'Home', href: '/' }, ...NAV_LINKS].map(({ label, href }) => (
            <div key={href}>
              <Link href={href} style={{ display: 'block', padding: '14px 24px', fontFamily: BODY, fontSize: '13px', letterSpacing: '0.04em', color: isActive(href) ? C.cyan : '#7E7A72', borderBottom: `1px solid ${C.borderDarkest}`, textDecoration: 'none' }}>
                {label}
              </Link>
              {label === 'Products' && PRODUCT_LINKS.map(p => (
                <Link key={p.href} href={p.href} style={{ display: 'block', padding: '10px 40px', fontFamily: BODY, fontSize: '12px', color: pathname === p.href ? C.cyan : '#5E5A54', borderBottom: `1px solid ${C.borderDarkest}`, textDecoration: 'none' }}>
                  {p.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

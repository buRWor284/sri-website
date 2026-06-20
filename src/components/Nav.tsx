'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { C, DF } from '@/lib/tokens'

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'News',     href: '/news' },
  { label: 'Contact',  href: '/contact' },
]

const PRODUCT_LINKS = [
  { label: 'ElectoMap',    href: '/electomap' },
  { label: 'Jaag Pakistan', href: '/jaag' },
  { label: 'My Vote',      href: '/myvote' },
]

const PRODUCT_PATHS = ['/products', '/electomap', '/jaag', '/myvote']

export default function Nav() {
  const pathname = usePathname()
  const [dd, setDd] = useState(false)
  const [mob, setMob] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => { setMob(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/products'
      ? PRODUCT_PATHS.includes(pathname)
      : pathname === href

  const linkStyle = (href: string) => ({
    fontFamily: DF,
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    padding: '4px 0',
    color: isActive(href) ? C.cyan : 'rgba(255,255,255,0.72)',
    borderBottom: `2px solid ${isActive(href) ? C.cyan : 'transparent'}`,
    transition: 'all 150ms ease',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
  })

  return (
    <nav
      style={{
        background: C.nav,
        padding: '0 40px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.35)',
      }}
    >
      <Link href="/">
        <Image src="/sri-logo.png" alt="Silk Route Interactive" height={24} width={120} style={{ height: '24px', width: 'auto', display: 'block' }} priority />
      </Link>

      {!mobile ? (
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) =>
            label === 'Products' ? (
              <div
                key={href}
                style={{ position: 'relative' }}
                onMouseEnter={() => setDd(true)}
                onMouseLeave={() => setDd(false)}
              >
                <span style={linkStyle(href)}>
                  {label} <span style={{ fontSize: '7px', opacity: 0.7 }}>▼</span>
                </span>
                {dd && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      left: '-16px',
                      background: C.nav,
                      border: '1px solid rgba(255,255,255,0.1)',
                      minWidth: '160px',
                      padding: '8px 0',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    }}
                  >
                    {PRODUCT_LINKS.map(p => (
                      <Link
                        key={p.href}
                        href={p.href}
                        style={{
                          display: 'block',
                          padding: '10px 20px',
                          fontFamily: DF,
                          fontSize: '11px',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: pathname === p.href ? C.cyan : 'rgba(255,255,255,0.65)',
                          textDecoration: 'none',
                          transition: '150ms',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = pathname === p.href ? C.cyan : 'rgba(255,255,255,0.65)' }}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                style={linkStyle(href)}
                onMouseEnter={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.72)' }}
              >
                {label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn btn-outline btn-sm"
            style={{
              fontFamily: DF,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Get In Touch
          </Link>
        </div>
      ) : (
        <button
          onClick={() => setMob(!mob)}
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px', cursor: 'pointer', padding: '8px', lineHeight: 1 }}
          aria-label="Toggle menu"
        >
          {mob ? '✕' : '☰'}
        </button>
      )}

      {mobile && mob && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: C.nav,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            zIndex: 999,
            paddingBottom: '8px',
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <div key={href}>
              <Link
                href={href}
                style={{
                  display: 'block',
                  padding: '14px 24px',
                  fontFamily: DF,
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isActive(href) ? C.cyan : 'rgba(255,255,255,0.75)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
              {label === 'Products' &&
                PRODUCT_LINKS.map(p => (
                  <Link
                    key={p.href}
                    href={p.href}
                    style={{
                      display: 'block',
                      padding: '10px 40px',
                      fontFamily: DF,
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.45)',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      textDecoration: 'none',
                    }}
                  >
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

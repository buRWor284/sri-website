import Link from 'next/link'
import { C, DISPLAY, BODY, MONO } from '@/lib/tokens'

/* ─────────────────────────── DATA ─────────────────────────── */

const ACHIEVEMENTS = [
  { label: 'P@SHA LaunchPad',  sub: 'Best Startup 2013' },
  { label: 'BlackBox.vc',      sub: 'Silicon Valley Accelerator' },
  { label: 'ARY News Partner', sub: 'General Elections 2013' },
  { label: '25,000+ Reports',  sub: 'Civic election monitoring' },
  { label: 'First in Pakistan', sub: 'Electoral constituency maps' },
]

const PRODUCTS = [
  {
    href: '/electomap',
    category: 'Broadcast · Elections',
    name: 'ElectoMap',
    desc: "Interactive elections analysis and visualization on 55″ Multi-Touch HD displays. Used by ARY News during Pakistan's General Elections 2013.",
    icon: `<svg width="40" height="30" viewBox="0 0 40 30" fill="none"><rect x=".5" y=".5" width="39" height="29" stroke="#20C4E8" stroke-width="1" opacity=".4"/><line x1="14" y1=".5" x2="14" y2="29.5" stroke="#20C4E8" stroke-width="1" opacity=".4"/><line x1="26" y1=".5" x2="26" y2="29.5" stroke="#20C4E8" stroke-width="1" opacity=".4"/><line x1=".5" y1="15" x2="39.5" y2="15" stroke="#20C4E8" stroke-width="1" opacity=".4"/><rect x="1" y="1" width="13" height="14" fill="#20C4E8" fill-opacity=".22"/><rect x="26.5" y="1" width="13" height="14" fill="#20C4E8" fill-opacity=".1"/><rect x="14.5" y="15.5" width="11" height="14" fill="#20C4E8" fill-opacity=".22"/></svg>`,
  },
  {
    href: '/jaag',
    category: 'Civic Tech · Anti-Rigging',
    name: 'Jaag Pakistan',
    desc: "Pakistan's first crowd-sourced anti-rigging platform. 20,000+ reports on election day alone (May 11, 2013) — 25,000+ total via SMS, Twitter, and email.",
    icon: `<svg width="36" height="30" viewBox="0 0 36 30" fill="none"><circle cx="18" cy="20" r="3.5" fill="#20C4E8" fill-opacity=".7"/><circle cx="18" cy="20" r="9" stroke="#20C4E8" stroke-width="1" stroke-opacity=".38"/><circle cx="18" cy="20" r="16" stroke="#20C4E8" stroke-width="1" stroke-opacity=".18"/></svg>`,
  },
  {
    href: '/myvote',
    category: 'Public Service · Voter Portal',
    name: 'MyVote.pk',
    desc: 'Electoral map-based information portal for voters — constituency boundaries, voter density, and polling station details across Pakistan.',
    icon: `<svg width="22" height="30" viewBox="0 0 22 30" fill="none"><circle cx="11" cy="10" r="9.5" stroke="#20C4E8" stroke-width="1" stroke-opacity=".45"/><circle cx="11" cy="10" r="3" fill="#20C4E8" fill-opacity=".65"/><line x1="11" y1="19.5" x2="11" y2="29" stroke="#20C4E8" stroke-width="1.5" stroke-opacity=".4"/></svg>`,
  },
]

const NEWS = [
  { date: '2013–2014', text: "SRI accepted into BlackBox.vc’s Silicon Valley accelerator program.", accent: true },
  { date: '30 Jul 2013', text: 'SRI qualifies for the final round of i2i Business Accelerator Program!', accent: false },
  { date: '27 Jun 2013', text: "SRI receives ‘The Best Start-Up’ Award from P@SHA LaunchPad 2013 Islamabad!", accent: false },
  { date: '09 May 2013', text: 'ElectoMap goes LIVE on ARY News for General Elections 2013 transmission.', accent: false },
  { date: '12 May 2013', text: 'Anti-Rigging Solution goes live at PTI Election Cell — 20,000+ reports on election day, 25,000+ total.', accent: false },
]

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Home() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── 1. HERO ── */}
      <section
        className="hero-section-outer"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '130px 0 90px',
          backgroundColor: C.bg,
          backgroundImage: [
            'repeating-linear-gradient(rgba(32,196,232,0.032) 1px, transparent 1px)',
            'repeating-linear-gradient(90deg, rgba(32,196,232,0.032) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '80px 80px',
          overflow: 'hidden',
        }}
      >
        {/* Decorative overlays */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(32,196,232,0.25) 25%, rgba(32,196,232,0.55) 50%, rgba(32,196,232,0.25) 75%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 80% at 35% 50%, transparent 20%, rgba(9,9,7,0.65) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, width: '40%', background: 'radial-gradient(ellipse 100% 60% at 0% 60%, rgba(32,196,232,0.055) 0%, transparent 70%)' }} />
        </div>

        <div className="hero-inner" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 40px', width: '100%', position: 'relative', display: 'flex', gap: '72px', alignItems: 'center' }}>

          {/* Left column */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Archive badge */}
            <div className="hero-badge" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '52px', animation: 'fadeIn 0.7s ease 0s forwards', opacity: 0 }}>
              <span style={{ width: '5px', height: '5px', background: C.cyan, flexShrink: 0, display: 'inline-block', animation: 'blink 2.4s ease infinite' }} />
              <span style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.16em', color: C.cyan, textTransform: 'uppercase' }}>Company Archive</span>
              <span style={{ fontFamily: MONO, fontSize: '10px', color: '#2E2D2A' }}>·</span>
              <span style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.08em', color: C.textFaint }}>Islamabad, Pakistan</span>
              <span style={{ fontFamily: MONO, fontSize: '10px', color: '#2E2D2A' }}>·</span>
              <span style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.08em', color: C.textFaint }}>2012–2014</span>
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: DISPLAY, fontSize: 'clamp(50px, 7.8vw, 122px)', lineHeight: 0.92, letterSpacing: '-0.015em', margin: 0, animation: 'fadeUp 0.85s ease 0.12s forwards', opacity: 0 }}>
              <span style={{ color: C.textPrimary, display: 'block', fontStyle: 'italic', fontWeight: 300 }}>GIS-Enabled</span>
              <span style={{ color: C.cyan,        display: 'block', fontStyle: 'italic', fontWeight: 300 }}>Interactive</span>
              <span style={{ color: C.textPrimary, display: 'block', fontStyle: 'italic', fontWeight: 300 }}>Mapping</span>
              <span style={{ color: '#A09890',     display: 'block', fontStyle: 'normal', fontWeight: 400 }}>Solutions.</span>
            </h1>

            {/* Description */}
            <p style={{ fontFamily: BODY, fontWeight: 300, fontSize: '15px', lineHeight: 1.75, color: C.textSecondary, letterSpacing: '0.01em', maxWidth: '500px', marginTop: '44px', animation: 'fadeUp 0.85s ease 0.28s forwards', opacity: 0 }}>
              We amplify the value of business analytics by bringing in the locational context — converting Big Data into deep geographic insights through advanced GIS, Business Intelligence, and Data Visualization.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '44px', flexWrap: 'wrap', animation: 'fadeUp 0.85s ease 0.42s forwards', opacity: 0 }}>
              <Link href="/products" className="btn-primary-new">Explore Products →</Link>
              <Link href="/about" className="btn-secondary-new">Our Story</Link>
            </div>

            {/* Year rule */}
            <div className="hero-year-rule" style={{ marginTop: '88px', paddingTop: '22px', borderTop: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', animation: 'fadeIn 0.9s ease 0.6s forwards', opacity: 0 }}>
              <span style={{ fontFamily: MONO, fontSize: '10px', color: '#2E2D2A' }}>Est. 2012</span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #222120 0%, #333130 50%, #222120 100%)', margin: '0 18px' }} />
              <span style={{ fontFamily: MONO, fontSize: '10px', color: '#2E2D2A' }}>Dissolved 2014</span>
            </div>
          </div>

          {/* Right column — Reticle + Stats */}
          <div className="hero-right-col" style={{ width: '310px', flexShrink: 0, paddingTop: '12px', animation: 'fadeIn 1s ease 0.5s forwards', opacity: 0 }}>
            {/* Reticle */}
            <div className="hero-reticle" style={{ position: 'relative', width: '190px', height: '190px', margin: '0 auto 36px' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(32,196,232,0.22)' }} />
              <div style={{ position: 'absolute', inset: '28px', borderRadius: '50%', border: '1px solid rgba(32,196,232,0.16)' }} />
              <div style={{ position: 'absolute', inset: '62px', borderRadius: '50%', border: '1px solid rgba(32,196,232,0.28)' }} />
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(32,196,232,0.12)', transform: 'translateY(-50%)' }} />
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(32,196,232,0.12)', transform: 'translateX(-50%)' }} />
              <div style={{ position: 'absolute', inset: '91px', borderRadius: '50%', background: C.cyan, animation: 'blink 2.4s ease infinite' }} />
            </div>

            {/* Coordinates */}
            <div className="hero-coords" style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontFamily: MONO, fontSize: '11px', letterSpacing: '0.09em', color: 'rgba(32,196,232,0.5)' }}>33°41′N 73°03′E</div>
              <div style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.1em', color: '#2E2D2A', marginTop: '5px' }}>ISLAMABAD, PAKISTAN</div>
            </div>

            {/* Stats card */}
            <div style={{ border: `1px solid ${C.border}` }}>
              <div style={{ padding: '16px 18px', borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.18em', color: '#2E2D2A', textTransform: 'uppercase', marginBottom: '5px' }}>Civic Reports Filed</div>
                <div style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: '32px', lineHeight: 1, color: C.cyan }}>25,000+</div>
              </div>
              <div style={{ padding: '16px 18px', borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.18em', color: '#2E2D2A', textTransform: 'uppercase', marginBottom: '5px' }}>Products Launched</div>
                <div style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: '32px', lineHeight: 1, color: C.textPrimary }}>3</div>
              </div>
              <div style={{ padding: '16px 18px', borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.18em', color: '#2E2D2A', textTransform: 'uppercase', marginBottom: '5px' }}>Constituency Maps</div>
                <div style={{ fontFamily: BODY, fontWeight: 400, fontSize: '12px', color: '#807A72', lineHeight: 1.55 }}>First company to digitize all National & Provincial Assembly maps of Pakistan.</div>
              </div>
              <div style={{ padding: '16px 18px' }}>
                <div style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.18em', color: '#2E2D2A', textTransform: 'uppercase', marginBottom: '5px' }}>Recognitions</div>
                <div style={{ fontFamily: BODY, fontWeight: 400, fontSize: '12px', color: '#807A72', lineHeight: 1.55 }}>P@SHA Best Start-Up 2013<br />BlackBox.vc Accelerator</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ACHIEVEMENTS STRIP ── */}
      <div style={{ background: C.bgStrip, borderTop: `1px solid ${C.borderFaint}`, borderBottom: `1px solid ${C.borderFaint}` }}>
        <div className="achievements-strip" style={{ maxWidth: '1360px', margin: '0 auto', display: 'flex' }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div className="achievement-item" key={i} style={{ flex: 1, padding: '20px 24px', borderRight: i < ACHIEVEMENTS.length - 1 ? `1px solid ${C.borderFaint}` : 'none', display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div style={{ width: '4px', height: '4px', background: C.cyan, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: BODY, fontWeight: 500, fontSize: '11px', color: C.textMuted, lineHeight: 1.2 }}>{a.label}</div>
                <div style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.06em', color: '#3E3C38', marginTop: '2px' }}>{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. PRODUCTS ── */}
      <section className="section-outer-pad" style={{ padding: '108px 0', background: C.bgAlt }}>
        <div className="section-inner-pad" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 40px' }}>
          <div className="section-header-row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '52px', paddingBottom: '28px', borderBottom: `1px solid ${C.border}` }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.2em', color: C.cyan, textTransform: 'uppercase', marginBottom: '14px' }}>Our Solutions</div>
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1.05, color: C.textPrimary, margin: 0 }}>Products</h2>
            </div>
            <div style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.1em', color: '#2E2D2A', textAlign: 'right', lineHeight: 1.8 }}>
              Three products.<br />One election night.<br />One country.
            </div>
          </div>

          <div className="products-grid-home" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: C.border }}>
            {PRODUCTS.map((p) => (
              <Link key={p.href} href={p.href} className="product-card">
                <div style={{ marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: p.icon }} />
                <div style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.18em', color: '#3E3C38', textTransform: 'uppercase', marginBottom: '30px' }}>{p.category}</div>
                <div style={{ fontFamily: DISPLAY, fontWeight: 400, fontStyle: 'italic', fontSize: '40px', lineHeight: 1, color: C.textPrimary, marginBottom: '20px' }}>{p.name}</div>
                <p style={{ fontFamily: BODY, fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: '#888280', flex: 1, marginBottom: '36px', letterSpacing: '0.01em' }}>{p.desc}</p>
                <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: '11px', letterSpacing: '0.1em', color: C.cyan, textTransform: 'uppercase' }}>Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. NEWS ── */}
      <section className="section-outer-pad" style={{ padding: '108px 0', background: C.bg, borderTop: `1px solid ${C.borderFaint}` }}>
        <div className="section-inner-pad" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 40px' }}>
          <div className="section-header-row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '52px', paddingBottom: '28px', borderBottom: `1px solid ${C.border}` }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.2em', color: C.cyan, textTransform: 'uppercase', marginBottom: '14px' }}>Company News</div>
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1.05, color: C.textPrimary, margin: 0 }}>Announcements</h2>
            </div>
            <div style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.1em', color: '#3E3C38', padding: '7px 14px', border: `1px solid ${C.border}` }}>2013–2014</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {NEWS.map((n, i) => (
              <div key={i} className="news-row">
                <span className="news-date-col" style={{ width: '108px', flexShrink: 0, fontFamily: MONO, fontSize: '10px', color: '#3E3C38', letterSpacing: '0.05em' }}>{n.date}</span>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', gap: '24px', alignItems: 'center' }}>
                  <span style={{ fontFamily: BODY, fontWeight: 400, fontSize: '15px', color: '#9E9890', lineHeight: 1.55, letterSpacing: '0.01em' }}>{n.text}</span>
                  <div style={{ width: '4px', height: '4px', background: n.accent ? C.cyan : '#252320', flexShrink: 0 }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', textAlign: 'right' }}>
            <Link href="/news" style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.14em', color: C.cyan, textTransform: 'uppercase', paddingBottom: '8px', borderBottom: '1px solid rgba(32,196,232,0.25)', textDecoration: 'none' }}>
              View All News →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. PULL QUOTE ── */}
      <section className="pull-quote-section" style={{ position: 'relative', padding: '128px 0', background: C.bgWarm, borderTop: `1px solid ${C.borderFaint}`, borderBottom: `1px solid ${C.borderFaint}`, overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="pull-quote-deco" style={{ position: 'absolute', top: '-60px', left: '28px', fontFamily: DISPLAY, fontWeight: 600, fontSize: '380px', lineHeight: 1, color: 'rgba(32,196,232,0.038)', userSelect: 'none', pointerEvents: 'none' }}>
            &ldquo;
          </div>
          <div style={{ position: 'absolute', inset: 0, left: 'auto', width: '40%', background: 'radial-gradient(ellipse 80% 60% at 100% 50%, rgba(32,196,232,0.025) 0%, transparent 70%)' }} />
        </div>
        <div className="section-inner-pad" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 40px', position: 'relative' }}>
          <blockquote style={{ fontFamily: DISPLAY, fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(22px, 3vw, 36px)', color: C.quoteText, lineHeight: 1.55, letterSpacing: '-0.01em', margin: 0 }}>
            &ldquo;The first and only company of the world to have digitized all the Constituency Maps of the National and Provincial Assemblies of Pakistan.&rdquo;
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '36px' }}>
            <div style={{ width: '44px', height: '1px', background: C.cyan, opacity: 0.7 }} />
            <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: '12px', letterSpacing: '0.12em', color: '#3E3C38', textTransform: 'uppercase' }}>Silk Route Interactive</span>
          </div>
        </div>
      </section>

    </div>
  )
}

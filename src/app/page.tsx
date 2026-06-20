import Link from 'next/link'
import { C, DF, BF, gridPattern } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Btn from '@/components/Btn'
import Lbl from '@/components/Lbl'

const PRODUCTS = [
  {
    href: '/electomap',
    name: 'ElectoMap',
    tag: 'Broadcast · Elections',
    desc: "Interactive elections analysis & visualization on 55″ multi-touch displays. Used by ARY News during Pakistan's General Elections 2013.",
  },
  {
    href: '/jaag',
    name: 'Jaag Pakistan',
    tag: 'Civic Tech · Anti-Rigging',
    desc: "Pakistan's first crowd-sourced anti-rigging platform. Received 25,000+ anonymous reports via SMS, Twitter, and email.",
  },
  {
    href: '/myvote',
    name: 'MyVote.pk',
    tag: 'Public Service · Voter Portal',
    desc: 'Electoral map-based info portal for voters — constituency boundaries, voter density, and polling station details.',
  },
]

const NEWS = [
  { date: '30 Jul 2013', text: "SRI qualifies for the final round of i2i Business Accelerator Program!" },
  { date: '27 Jun 2013', text: "SRI receives 'The Best Start-Up' Award from P@SHA LaunchPad 2013 Islamabad!" },
  { date: '09 May 2013', text: "ElectoMap goes LIVE on ARY News for General Elections 2013 transmission." },
  { date: '12 May 2013', text: "Anti-Rigging Solution goes live at PTI Election Cell — receives 25,000+ rigging reports." },
]

export default function Home() {
  return (
    <div>
      <PageHero
        label="Pakistan's Premier Spatial Intelligence Firm"
        title="GIS-Enabled Interactive Mapping Solutions"
        sub="We amplify the value of business analytics by bringing in the locational context — converting Big Data into deep geographic insights through advanced GIS, Business Intelligence, and Data Visualization."
        tall
      >
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
          <Btn href="/products" variant="primary" size="lg">Explore Our Products</Btn>
          <Btn href="/contact" variant="ghost" size="lg">Get In Touch</Btn>
        </div>
      </PageHero>

      {/* Products Preview */}
      <section style={{ background: C.white, padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Lbl style={{ marginBottom: '12px', display: 'block', textAlign: 'center' }}>Our Solutions</Lbl>
          <h2 style={{ fontFamily: DF, fontWeight: 300, fontSize: '2rem', color: C.dark, textAlign: 'center', margin: '0 0 44px', letterSpacing: '0.02em' }}>
            Interactive Geospatial Products
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {PRODUCTS.map(p => (
              <Link
                key={p.href}
                href={p.href}
                className="product-card"
                style={{
                  border: `1px solid ${C.border}`,
                  borderTop: `3px solid ${C.cyan}`,
                  padding: '28px',
                  borderRadius: '2px',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <span style={{ fontFamily: DF, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gray }}>
                  {p.tag}
                </span>
                <h3 style={{ fontFamily: DF, fontSize: '1.25rem', fontWeight: 600, color: C.dark, margin: '8px 0 12px' }}>
                  {p.name}
                </h3>
                <p style={{ fontFamily: BF, fontSize: '14px', color: C.gray, lineHeight: '1.65', margin: '0 0 18px' }}>
                  {p.desc}
                </p>
                <span style={{ fontFamily: DF, fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.cyan }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section style={{ background: C.subtle, padding: '80px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Lbl style={{ marginBottom: '12px', display: 'block' }}>Company News</Lbl>
          <h2 style={{ fontFamily: DF, fontWeight: 300, fontSize: '2rem', color: C.dark, margin: '0 0 36px', letterSpacing: '0.02em' }}>
            Announcements
          </h2>
          {NEWS.map((n, i) => (
            <div key={i} style={{ display: 'flex', gap: '28px', padding: '18px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'flex-start' }}>
              <span style={{ fontFamily: DF, fontSize: '10px', letterSpacing: '0.08em', color: C.gray, flexShrink: 0, paddingTop: '2px', minWidth: '88px' }}>
                {n.date}
              </span>
              <p style={{ fontFamily: BF, fontSize: '15px', color: C.dark, margin: 0, lineHeight: '1.5' }}>
                {n.text}
              </p>
            </div>
          ))}
          <div style={{ marginTop: '28px' }}>
            <Btn href="/news" variant="out-dark" size="sm">View All News</Btn>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: C.nav, ...gridPattern, padding: '80px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '32px', height: '2px', background: C.cyan, margin: '0 auto 28px' }} />
          <p style={{ fontFamily: DF, fontWeight: 200, fontSize: 'clamp(1.1rem,2.5vw,1.55rem)', color: '#fff', lineHeight: '1.65', letterSpacing: '0.03em', margin: '0 0 24px', fontStyle: 'italic' }}>
            &ldquo;The first and only company of the world to have digitized all the Constituency Maps of the National and Provincial Assemblies of Pakistan.&rdquo;
          </p>
          <Lbl>Silk Route Interactive</Lbl>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import { C, DF, BF } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Lbl from '@/components/Lbl'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MyVote.pk',
  description:
    'Interactive constituency map for Pakistani voters — find your National and Provincial Assembly boundaries, registered voter density, and the 2008 election turnout for your area.',
  openGraph: {
    title: 'MyVote.pk',
    description:
      'Interactive constituency map for Pakistani voters — find your National and Provincial Assembly boundaries, registered voter density, and 2008 election turnout.',
    images: [{ url: '/images/my_vote_sri.jpg', width: 850, height: 314, alt: 'MyVote.pk — Silk Route Interactive' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyVote.pk | Silk Route Interactive',
    description:
      'Interactive constituency map for Pakistani voters. Find your boundaries, voter density, and election turnout.',
    images: ['/images/my_vote_sri.jpg'],
  },
}

const FEATURES = [
  { text: 'Boundaries of your National Assembly Constituency', soon: false },
  { text: 'Boundaries of your Provincial Assembly Constituency', soon: false },
  { text: 'Registered Voters (2008) Density', soon: false },
  { text: 'Voters Turnout % (2008) Density', soon: false },
  { text: 'Polling station address (coming soon)', soon: true },
  { text: 'Shortest path to the polling station (coming soon)', soon: true },
]

const HOW_TO = [
  {
    title: "Don't Know Your Constituency?",
    desc: "Search by District name in the map — or use the Province → District dropdown to narrow to your NA/PA constituency.",
  },
  {
    title: "Know Your Constituency?",
    desc: "Search directly with your constituency number — e.g. NA-1 or PP-33.",
  },
]

export default function MyVote() {
  return (
    <div className="page-section">
      <PageHero
        label="SRI Product"
        title="MyVote.pk"
        sub="An electoral map-based info portal where voters can find important information about their National and Provincial Assembly constituency."
      />

      {/* Banner image */}
      <div style={{ background: C.bg }}>
        <Image
          src="/images/my_vote_sri.jpg"
          alt="MyVote.pk — Find Your Constituency, Pakistan Electoral Map"
          width={1200}
          height={444}
          style={{ width: '100%', maxHeight: '320px', objectFit: 'cover', display: 'block', opacity: 0.9 }}
          priority
        />
      </div>

      <section style={{ background: C.bg, padding: '72px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          <div>
            <Lbl style={{ marginBottom: '14px', display: 'block' }}>What You Can Find</Lbl>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', padding: '12px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'flex-start' }}>
                <span style={{ color: C.cyan, flexShrink: 0, fontWeight: 700 }}>→</span>
                <span style={{ fontFamily: BF, fontSize: '14px', color: f.soon ? C.gray : C.dark, fontStyle: f.soon ? 'italic' : 'normal', lineHeight: '1.4' }}>
                  {f.text}
                </span>
              </div>
            ))}
          </div>

          <div>
            <Lbl style={{ marginBottom: '14px', display: 'block' }}>How to Use</Lbl>
            {HOW_TO.map(h => (
              <div key={h.title} style={{ padding: '18px', background: C.bgAlt, border: `1px solid ${C.border}`, marginBottom: '12px' }}>
                <p style={{ fontFamily: DF, fontWeight: 600, fontSize: '12px', letterSpacing: '0.07em', textTransform: 'uppercase', color: C.dark, margin: '0 0 8px' }}>
                  {h.title}
                </p>
                <p style={{ fontFamily: BF, fontSize: '13px', color: C.gray, margin: 0, lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
            <p style={{ fontFamily: BF, fontSize: '13px', color: C.gray, marginTop: '16px', lineHeight: '1.6', fontStyle: 'italic' }}>
              This is a non-for-profit project of Silk Route Interactive involving many volunteers and PTI&apos;s GIS team.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

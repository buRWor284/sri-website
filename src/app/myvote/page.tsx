import { C, DF, BF } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Lbl from '@/components/Lbl'

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
    <div>
      <PageHero
        label="SRI Product"
        title="MyVote.pk"
        sub="An electoral map-based info portal where voters can find important information about their National and Provincial Assembly constituency."
      />

      <section style={{ background: C.white, padding: '80px 40px' }}>
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
              <div key={h.title} style={{ padding: '18px', background: C.subtle, border: `1px solid ${C.border}`, borderRadius: '2px', marginBottom: '12px' }}>
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

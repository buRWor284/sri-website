import { C, DF, BF } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Lbl from '@/components/Lbl'

const STATS = [
  ['25,000+', 'Anonymous rigging reports received'],
  ['4', 'Reporting channels'],
  ['100%', 'Reports publicly available'],
]

const CHANNELS = [
  ['SMS', 'Send to 80022 — write RIG <Halqa> <Message>'],
  ['Email', 'jaagpakistan@insaf.pk'],
  ['Twitter', 'Use hashtag #JaagPK'],
  ['Web', 'Upload reports, videos & photos at JaagPakistan.pk'],
]

export default function Jaag() {
  return (
    <div>
      <PageHero
        label="SRI Product"
        title="Jaag Pakistan"
        sub="Fight the powerful political mafias by reporting rigging in the most cost-effective, safely anonymous and fast manner — ensuring free and fair elections."
        tall
      />

      <section style={{ background: C.white, padding: '80px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '56px' }}>
            <div>
              <Lbl style={{ marginBottom: '14px', display: 'block' }}>About the Platform</Lbl>
              <p style={{ fontFamily: BF, fontSize: '16px', color: C.gray, lineHeight: '1.8', margin: '0 0 16px' }}>
                JaagPakistan.pk is perhaps the first and only crowd-sourced citizen journalism effort in Pakistan for
                reporting each and every rigging incident in the country.
              </p>
              <p style={{ fontFamily: BF, fontSize: '16px', color: C.gray, lineHeight: '1.8', margin: 0 }}>
                All reports are publicly available and shared with the media, the Election Commission, political parties,
                and the courts of Pakistan.
              </p>
            </div>
            <div>
              <Lbl style={{ marginBottom: '14px', display: 'block' }}>Impact — GE 2013</Lbl>
              {STATS.map(([n, l]) => (
                <div key={l} style={{ padding: '13px 0', borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ fontFamily: DF, fontSize: '1.7rem', fontWeight: 700, color: C.cyan }}>{n}</div>
                  <div style={{ fontFamily: BF, fontSize: '13px', color: C.gray, marginTop: '2px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <Lbl style={{ marginBottom: '16px', display: 'block' }}>How to Report Rigging</Lbl>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            {CHANNELS.map(([ch, how], i) => (
              <div key={ch} style={{ padding: '20px', border: `1px solid ${C.border}`, borderTop: `3px solid ${C.cyan}`, borderRadius: '2px' }}>
                <div style={{ fontFamily: DF, fontWeight: 700, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.cyan, marginBottom: '8px' }}>
                  {i + 1}. {ch}
                </div>
                <p style={{ fontFamily: BF, fontSize: '13px', color: C.gray, margin: 0, lineHeight: '1.5' }}>{how}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

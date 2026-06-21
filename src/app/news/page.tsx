import { C, DF, BF } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Lbl from '@/components/Lbl'

const MORE_NEWS = [
  { date: '2013–2014', tag: 'Accelerator', title: 'SRI accepted into BlackBox.vc Silicon Valley accelerator program' },
  { date: '30 Jul 2013', tag: 'Business', title: 'SRI qualifies for the final round of i2i Business Accelerator Program' },
  { date: '09 May 2013', tag: 'Product Launch', title: 'ElectoMap Pakistan goes LIVE on ARY News during General Elections 2013 transmission' },
  { date: '12 May 2013', tag: 'Civic Tech', title: 'Anti-Rigging Solution goes live at PTI Election Cell — 20,000+ reports on election day alone, 25,000+ total' },
]

export default function News() {
  return (
    <div>
      <PageHero label="Press & Updates" title="News" />

      <section style={{ background: C.white, padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Featured article */}
          <div style={{ border: `1px solid ${C.border}`, borderTop: `3px solid ${C.cyan}`, padding: '40px', borderRadius: '2px', marginBottom: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ background: C.cyanL, color: C.cyan, fontFamily: DF, fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px' }}>Award</span>
              <span style={{ fontFamily: DF, fontSize: '11px', letterSpacing: '0.06em', color: C.gray }}>27 June 2013</span>
            </div>
            <h2 style={{ fontFamily: DF, fontSize: '1.5rem', fontWeight: 600, color: C.dark, margin: '0 0 16px', lineHeight: '1.3', letterSpacing: '0.02em' }}>
              Silk Route Interactive Receives &lsquo;The Best Start-Up&rsquo; Award from P@SHA!
            </h2>
            <p style={{ fontFamily: BF, fontSize: '15px', color: C.gray, lineHeight: '1.78', margin: '0 0 20px' }}>
              We are ecstatic to announce that Silk Route Interactive has won &lsquo;the best start-up&rsquo; award at P@SHA LaunchPad 2013 Islamabad!
              Among 165 applications, we pitched The Crime Mapper — a crime mapping solution with a 6-month pilot that reduced crime
              by 34% in just 3 months in Faisalabad.
            </p>
            <div style={{ display: 'flex', gap: '28px', padding: '18px', background: C.subtle, borderRadius: '2px', marginBottom: '20px' }}>
              {[['165', 'Applications'], ['20', 'Shortlisted'], ['34%', 'Crime reduction']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: DF, fontSize: '1.4rem', fontWeight: 700, color: C.cyan }}>{n}</div>
                  <div style={{ fontFamily: BF, fontSize: '12px', color: C.gray }}>{l}</div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: BF, fontSize: '15px', color: C.gray, lineHeight: '1.78', margin: 0 }}>
              With the cash prize and mentoring from P@SHA, we look forward to making The Crime Mapper an effective
              end-to-end solution to reduce crime and improve citizens&apos; quality of life across Pakistan.
            </p>
          </div>

          {/* More news items */}
          {MORE_NEWS.map((n, i) => (
            <div
              key={i}
              className="news-row"
              style={{ display: 'flex', gap: '18px', padding: '16px 8px', borderBottom: `1px solid ${C.border}`, alignItems: 'center', cursor: 'pointer' }}
            >
              <span style={{ fontFamily: DF, fontSize: '10px', letterSpacing: '0.06em', color: C.gray, flexShrink: 0, minWidth: '80px' }}>{n.date}</span>
              <span style={{ background: C.cyanL, color: C.cyan, fontFamily: DF, fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '2px', flexShrink: 0 }}>
                {n.tag}
              </span>
              <h3 style={{ fontFamily: DF, fontSize: '14px', fontWeight: 600, color: C.dark, margin: 0, lineHeight: '1.4', letterSpacing: '0.01em' }}>
                {n.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

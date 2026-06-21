import { C, DF, BF, gridPattern } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Lbl from '@/components/Lbl'

const OUTCOMES = [
  { stat: '41.74%', label: 'Overall street crime reduction', sub: '1,301 incidents in 2012 → 758 in 2013' },
  { stat: '62.15%', label: 'Snatching incidents reduced', sub: '354 → 134 cases' },
  { stat: '37.94%', label: 'Bike theft incidents reduced', sub: '543 → 337 cases' },
  { stat: '30.39%', label: 'Armed robbery incidents reduced', sub: '283 → 197 cases' },
]

const PHASES = [
  {
    phase: '01',
    title: 'Data Collection & GPS Survey',
    desc: 'GPS survey of all police stations, precincts, and checkpoints. Crime reports geocoded in ArcGIS 10. Precinct boundaries digitized.',
  },
  {
    phase: '02',
    title: 'Hotspot Mapping',
    desc: 'Kernel Density Estimation used to generate crime hotspot maps for each police station area — covering bike theft, car theft, robbery, and snatching.',
  },
  {
    phase: '03',
    title: 'CRIMEGEOGRAFIX Model',
    desc: 'A modified Compstat framework deployed for police commander accountability and performance management. Weekly briefings with operational leadership.',
  },
  {
    phase: '04',
    title: 'Operational Deployment',
    desc: 'Revised duty rosters, redeployed resources to high-density zones, and repositioned police checkpoints based on hotspot data.',
  },
]

export default function CrimeMapper() {
  return (
    <div>
      <PageHero label="SRI Product" title="The Crime Mapper" sub="Map. Predict. Prevent." tall>
        <div style={{ marginTop: '28px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(32,196,232,0.08)', color: C.cyan, fontFamily: DF, fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 16px', border: `1px solid rgba(32,196,232,0.25)` }}>
            ★ P@SHA Best Start-Up — LaunchPad 2013
          </span>
          <span style={{ background: 'rgba(32,196,232,0.08)', color: C.cyan, fontFamily: DF, fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 16px', border: `1px solid rgba(32,196,232,0.25)` }}>
            ● Deployed — Faisalabad Police Department
          </span>
        </div>
      </PageHero>

      {/* Pull Quote */}
      <div style={{ background: C.bgWarm, padding: '52px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '32px', height: '2px', background: C.cyan, margin: '0 auto 22px' }} />
          <p style={{ fontFamily: DF, fontWeight: 200, fontSize: 'clamp(1rem,2.5vw,1.35rem)', color: '#fff', lineHeight: '1.65', margin: '0 0 18px', fontStyle: 'italic', letterSpacing: '0.02em' }}>
            &ldquo;After implementing GIS-based crime control strategies, a remarkable reduction in street crimes of 41.74% was observed in Faisalabad — one of Pakistan&rsquo;s largest cities.&rdquo;
          </p>
          <Lbl>Khalid et al., 2014 — Nanjing University / GCU Faisalabad</Lbl>
        </div>
      </div>

      {/* Outcome Stats */}
      <section style={{ background: C.bg, padding: '72px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Lbl style={{ marginBottom: '12px', display: 'block', textAlign: 'center' }}>Measured Outcomes</Lbl>
          <h2 style={{ fontFamily: DF, fontWeight: 300, fontSize: '2rem', color: C.dark, textAlign: 'center', margin: '0 0 40px' }}>
            Faisalabad, 2012–2013
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            {OUTCOMES.map(o => (
              <div
                key={o.stat}
                style={{ padding: '30px 26px', border: `1px solid ${C.border}`, borderTop: `3px solid ${C.cyan}`, background: C.bgAlt }}
              >
                <div style={{ fontFamily: DF, fontWeight: 700, fontSize: '2.4rem', color: C.cyan, letterSpacing: '0.02em', marginBottom: '8px' }}>{o.stat}</div>
                <p style={{ fontFamily: DF, fontSize: '12px', fontWeight: 700, color: C.dark, margin: '0 0 6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{o.label}</p>
                <p style={{ fontFamily: BF, fontSize: '12px', color: C.gray, margin: 0 }}>{o.sub}</p>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <Lbl style={{ marginBottom: '12px', display: 'block' }}>Methodology</Lbl>
          <h2 style={{ fontFamily: DF, fontWeight: 300, fontSize: '1.6rem', color: C.dark, margin: '0 0 32px' }}>
            Four-Phase Implementation
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            {PHASES.map(p => (
              <div key={p.phase} style={{ padding: '26px', border: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: DF, fontWeight: 700, fontSize: '1.6rem', color: `rgba(0,188,236,0.25)`, marginBottom: '10px', letterSpacing: '0.05em' }}>{p.phase}</div>
                <h3 style={{ fontFamily: DF, fontSize: '12px', fontWeight: 700, color: C.dark, margin: '0 0 10px', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{p.title}</h3>
                <p style={{ fontFamily: BF, fontSize: '14px', color: C.gray, lineHeight: '1.65', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Context */}
          <div
            style={{ background: C.bgAlt, ...gridPattern, padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px' }}
          >
            <div>
              <Lbl style={{ marginBottom: '12px', display: 'block' }}>The Problem</Lbl>
              <p style={{ fontFamily: BF, fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', margin: 0 }}>
                Faisalabad — Pakistan&rsquo;s third-largest city — faced sharply rising street crime, compounded by power outages
                that shuttered industry and spiked unemployment to 6.3%. Law enforcement lacked the tools to analyze spatial
                patterns and deploy resources effectively.
              </p>
            </div>
            <div>
              <Lbl style={{ marginBottom: '12px', display: 'block' }}>The Approach</Lbl>
              <p style={{ fontFamily: BF, fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', margin: 0 }}>
                SRI partnered with Faisalabad Police to geocode 2012 crime data, generate kernel-density hotspot maps for each
                police precinct, and deploy a modified Compstat model — branded CRIMEGEOGRAFIX — for weekly commander briefings
                and data-driven resource reallocation.
              </p>
            </div>
            <div>
              <Lbl style={{ marginBottom: '12px', display: 'block' }}>Research</Lbl>
              <p style={{ fontFamily: BF, fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', margin: 0 }}>
                The engagement was documented in a peer-reviewed paper: <em>&ldquo;Analysis of Spatial Patterns of Urban Street Crimes by using GIS: A Case Study of Faisalabad City&rdquo;</em> — Shoaib Khalid, Jiechen Wang, Muhammad Shakeel &amp; Nan Xia (2014), Nanjing University.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

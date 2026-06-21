import { C, DF, BF, gridPattern } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Lbl from '@/components/Lbl'
import Image from 'next/image'

const BENEFITS = [
  { icon: '⊕', title: 'Real-Time Data Integration', desc: 'Live election results from multiple sources with instant visualization during broadcast transmission.' },
  { icon: '◈', title: 'Multi-Touch Interaction', desc: 'Anchorpersons zoom, toggle, and swap constituencies on a 55″ Multi-Touch HD screen with complete intuitive control.' },
  { icon: '▦', title: 'Rich Data Visualization', desc: 'Pie charts, bar graphs, heat maps, voter turnout, party performance — all in one unified interface.' },
  { icon: '◉', title: 'Historical Analysis', desc: 'Compare 2002, 2008 and live 2013 results across any constituency or region of Pakistan.' },
]

export default function ElectoMap() {
  return (
    <div>
      <PageHero label="SRI Product" title="ElectoMap Pakistan" sub="Touch. Analyze. Present." tall>
        <div style={{ marginTop: '28px' }}>
          <span style={{ background: C.cyanL, color: C.cyan, fontFamily: DF, fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 16px', border: `1px solid rgba(0,188,236,0.3)`, borderRadius: '2px' }}>
            ● Live on ARY News — General Elections 2013
          </span>
        </div>
      </PageHero>

      {/* Pull Quote */}
      <div style={{ background: C.nav, padding: '52px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '32px', height: '2px', background: C.cyan, margin: '0 auto 22px' }} />
          <p style={{ fontFamily: DF, fontWeight: 200, fontSize: 'clamp(1rem,2.5vw,1.35rem)', color: '#fff', lineHeight: '1.65', margin: '0 0 18px', fontStyle: 'italic', letterSpacing: '0.02em' }}>
            &ldquo;The only Company of the World to have digitized all the Constituency Maps of National as well as Provincial Assemblies of Pakistan.&rdquo;
          </p>
          <Lbl>Silk Route Interactive — ElectoMap</Lbl>
        </div>
      </div>

      {/* Benefits Grid */}
      <section style={{ background: C.white, padding: '80px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Lbl style={{ marginBottom: '12px', display: 'block', textAlign: 'center' }}>Key Benefits</Lbl>
          <h2 style={{ fontFamily: DF, fontWeight: 300, fontSize: '2rem', color: C.dark, textAlign: 'center', margin: '0 0 40px' }}>
            Empowering Elections Coverage
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            {BENEFITS.map(b => (
              <div key={b.title} style={{ padding: '26px', border: `1px solid ${C.border}`, borderTop: `3px solid ${C.cyan}`, borderRadius: '2px' }}>
                <div style={{ fontSize: '24px', color: C.cyan, marginBottom: '12px' }}>{b.icon}</div>
                <h3 style={{ fontFamily: DF, fontSize: '12px', fontWeight: 700, color: C.dark, margin: '0 0 10px', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{b.title}</h3>
                <p style={{ fontFamily: BF, fontSize: '14px', color: C.gray, lineHeight: '1.65', margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Product images */}
          <Lbl style={{ marginBottom: '14px', display: 'block' }}>Screenshots</Lbl>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '60px' }}>
            <div style={{ borderRadius: '2px', overflow: 'hidden', border: `1px solid ${C.border}` }}>
              <Image src="/images/electomap.jpg" alt="ElectoMap launch — Silk Route Interactive & ARY News" width={800} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '2px', overflow: 'hidden', border: `1px solid ${C.border}` }}>
              <Image src="/images/electomap_features_snapshots.png" alt="ElectoMap feature snapshots" width={800} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '2px', overflow: 'hidden', border: `1px solid ${C.border}` }}>
              <Image src="/images/electomap_6.png" alt="ElectoMap constituency view" width={800} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '2px', overflow: 'hidden', border: `1px solid ${C.border}` }}>
              <Image src="/images/electomap_brochure.jpg" alt="ElectoMap brochure" width={800} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>

          {/* Vimeo embed */}
          <Lbl style={{ marginBottom: '14px', display: 'block' }}>Media</Lbl>
          <h3 style={{ fontFamily: DF, fontWeight: 400, fontSize: '1.1rem', color: C.dark, margin: '0 0 18px' }}>
            ElectoMap on ARY News — General Elections 2013
          </h3>
          <p style={{ fontFamily: BF, fontSize: '14px', color: C.gray, margin: '0 0 20px', lineHeight: 1.6 }}>
            Waseem Badami demonstrating live election results on ElectoMap during ARY News&apos; 2013 transmission.
          </p>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '2px', border: `1px solid ${C.border}` }}>
            <iframe
              src="https://player.vimeo.com/video/66555102#t=75"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="ElectoMap on ARY News — General Elections 2013"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

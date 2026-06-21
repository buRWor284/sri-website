import { C, DF, BF } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Btn from '@/components/Btn'
import Lbl from '@/components/Lbl'
import Image from 'next/image'

type Founder = { name: string; title: string; initials: string; photo: string; credential?: string }

const FOUNDERS: Founder[] = [
  {
    name: 'Yasir Hussain Sheikh',
    title: 'Co-Founder & CEO',
    initials: 'YS',
    photo: '/images/team/yasir_hussain.jpg',
  },
  {
    name: 'Syed Irfan Ajmal',
    title: 'Chief Marketing Technologist',
    initials: 'IA',
    photo: '/images/team/syed_irfan_ajmal.jpg',
  },
  {
    name: 'Sajid Shah',
    title: 'Chief Operations Officer',
    initials: 'SS',
    photo: '/images/team/sajid_shah.jpg',
  },
  {
    name: 'Mian Imaduddin',
    title: 'Chief Technology Officer',
    initials: 'MI',
    photo: '/images/team/imad_mian.jpg',
  },
  {
    name: 'Shoaib Khalid',
    title: 'Chief Spatial Analyst',
    credential: 'Ph.D. GIS & Cartography · Nanjing University',
    initials: 'SK',
    photo: '/images/team/shoaib_khalid.jpg',
  },
]

const AWARDS = [
  {
    icon: '★',
    title: "P@SHA Best Start-Up Award",
    desc: "LaunchPad 2013 Islamabad — selected best start-up among 165 applicants for The Crime Mapper.",
  },
  {
    icon: '◈',
    title: "i2i Business Accelerator Finalist",
    desc: "Qualified for the final round of the Invest to Innovate Business Accelerator Program.",
  },
  {
    icon: '⬡',
    title: "BlackBox.vc Accelerator — Silicon Valley",
    desc: "Accepted into BlackBox.vc's Silicon Valley-based accelerator program — a global cohort of high-potential technology startups.",
  },
]

export default function About() {
  return (
    <div className="page-section">
      <PageHero label="Who We Are" title="About Silk Route Interactive" />

      <section style={{ background: C.bg, padding: '72px 40px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ fontFamily: BF, fontSize: '18px', color: C.dark, lineHeight: '1.8', margin: '0 0 22px' }}>
            We at Silk Route Interactive are a team of experienced, ambitious and prolific GIS specialists, software engineers,
            and UI/UX engineers who are ardent fans of Cartography, Geo-Spatial Analysis and Interactive Data Visualization.
          </p>
          <p style={{ fontFamily: BF, fontSize: '16px', color: C.gray, lineHeight: '1.8', margin: '0 0 36px' }}>
            Based at the Centre for Innovation & Entrepreneurship (CIE) at NUST, Islamabad, we are a premier Spatial Intelligence firm.
            Employing analytical GIS, Business Intelligence and Data Visualization, we convert Big Data into deep geographic insights.
          </p>

          {/* Key Distinction callout */}
          <div style={{ borderLeft: '3px solid rgba(32,196,232,0.4)', background: C.bgAlt, padding: '20px 20px 20px 22px', margin: '0 0 36px' }}>
            <Lbl style={{ marginBottom: '10px', display: 'block' }}>Key Distinction</Lbl>
            <p style={{ fontFamily: DF, fontSize: '1.05rem', fontWeight: 400, color: C.dark, lineHeight: '1.65', margin: 0 }}>
              Silk Route Interactive is the first and the only company in the world to have digitized all the constituency maps
              of the National and Provincial Assemblies of Pakistan — the foundation of ElectoMap.
            </p>
          </div>

          {/* Legacy Archive Note */}
          <div style={{ borderLeft: '3px solid rgba(32,196,232,0.4)', background: C.bgAlt, padding: '20px 20px 20px 22px', margin: '0 0 40px' }}>
            <Lbl style={{ marginBottom: '10px', display: 'block' }}>A Note on This Archive</Lbl>
            <p style={{ fontFamily: BF, fontSize: '14px', color: C.gray, lineHeight: '1.8', margin: 0 }}>
              Silk Route Interactive operated from 2012 to 2014 — self-funded, profitable, and purpose-built. We didn&apos;t wind down from failure; we retired something that worked. This site is preserved as a living archive: a record of the products we shipped, the problems we solved, and the team that made it happen. The good old days, kept online.
            </p>
          </div>

          <h2 style={{ fontFamily: DF, fontWeight: 600, fontSize: '1rem', color: C.dark, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 18px' }}>
            Awards & Recognition
          </h2>

          {AWARDS.map(a => (
            <div
              key={a.title}
              style={{ display: 'flex', gap: '16px', padding: '18px', background: C.bgAlt, border: `1px solid ${C.border}`, marginBottom: '12px', alignItems: 'flex-start' }}
            >
              <div style={{ width: '38px', height: '38px', background: C.cyan, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '16px', color: '#fff' }}>
                {a.icon}
              </div>
              <div>
                <p style={{ fontFamily: DF, fontSize: '13px', fontWeight: 700, color: C.dark, margin: '0 0 4px', letterSpacing: '0.04em' }}>{a.title}</p>
                <p style={{ fontFamily: BF, fontSize: '13px', color: C.gray, margin: 0 }}>{a.desc}</p>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '40px' }}>
            <Btn href="/products" variant="primary">Explore Our Products</Btn>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section style={{ background: C.bgAlt, padding: '72px 40px', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Lbl style={{ marginBottom: '12px', display: 'block', textAlign: 'center' }}>The Team</Lbl>
          <h2 style={{ fontFamily: DF, fontWeight: 300, fontSize: '2rem', color: C.dark, textAlign: 'center', margin: '0 0 48px' }}>
            Founders
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '28px' }}>
            {FOUNDERS.map(f => (
              <div key={f.name} style={{ textAlign: 'center' }}>
                <div style={{ width: '110px', height: '110px', borderRadius: '50%', margin: '0 auto 16px', overflow: 'hidden', border: `2px solid ${C.border}`, background: C.nav, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {f.photo ? (
                    <Image src={f.photo} alt={f.name} width={110} height={110} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  ) : (
                    <span style={{ fontFamily: DF, fontWeight: 600, fontSize: '28px', color: C.cyan, letterSpacing: '0.05em' }}>{f.initials}</span>
                  )}
                </div>
                <p style={{ fontFamily: DF, fontWeight: 600, fontSize: '15px', color: C.dark, margin: '0 0 6px', lineHeight: 1.3 }}>{f.name}</p>
                <p style={{ fontFamily: BF, fontSize: '12px', color: C.gray, margin: '0 0 4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{f.title}</p>
                {f.credential && (
                  <p style={{ fontFamily: BF, fontSize: '11px', color: C.cyan, margin: 0, letterSpacing: '0.02em' }}>{f.credential}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

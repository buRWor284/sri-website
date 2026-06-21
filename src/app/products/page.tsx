import Link from 'next/link'
import { C, DF, BF, gridPattern } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Btn from '@/components/Btn'
import Lbl from '@/components/Lbl'

const PRODUCTS = [
  {
    href: '/electomap',
    tag: 'TV Broadcast · Multi-Touch',
    name: 'ElectoMap Pakistan',
    tagline: 'Touch. Analyze. Present.',
    desc: 'Interactive elections analysis & presentation on 55″ multi-touch screens for TV channels. Supports live data integration, real-time visualization, and historical comparison.',
    stats: [['55″ HD', 'Multi-Touch display'], ['GE2013', 'Live on ARY News'], ['100%', 'Pakistan coverage']],
  },
  {
    href: '/jaag',
    tag: 'Civic Tech · Crowd-Sourced',
    name: 'Jaag Pakistan',
    tagline: 'Report. Verify. Publish.',
    desc: "Pakistan's first crowd-sourced citizen journalism platform for reporting election rigging via SMS, tweet, email and photo/video upload. All reports publicly available.",
    stats: [['20K+', 'Reports on Election Day'], ['25K+', 'Total reports received'], ['GE2013', 'Deployed']],
  },
  {
    href: '/myvote',
    tag: 'Voter Portal · Public Service',
    name: 'MyVote.pk',
    tagline: 'Know Your Constituency.',
    desc: 'Electoral map-based info portal for voters to find constituency boundaries, voter density, turnout data, and polling station addresses for NA and PA constituencies.',
    stats: [['NA+PA', 'Both assemblies'], ['4', 'Provinces covered'], ['Free', 'Public service']],
  },
  {
    href: '/crime-mapper',
    tag: 'Public Safety · GIS Analytics',
    name: 'The Crime Mapper',
    tagline: 'Map. Predict. Prevent.',
    desc: 'GIS-based crime hotspot mapping and predictive intelligence platform for law enforcement. Deployed with Faisalabad Police — drove a 41.74% reduction in street crimes in 12 months. Winner, P@SHA Best Start-Up Award 2013.',
    stats: [['41.74%', 'Street crime reduction'], ['62.15%', 'Snatching decrease'], ['1,301→758', 'Incidents in 12 months']],
  },
]

export default function Products() {
  return (
    <div>
      <PageHero
        label="Our Solutions"
        title="Products"
        sub="We conceptualize and build tools that give organizations meaningful real-time insights into data for planning and decision making."
      />

      <section style={{ background: C.bg, padding: '72px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {PRODUCTS.map(p => (
            <Link
              key={p.href}
              href={p.href}
              className="product-card-lg"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', border: `1px solid ${C.border}`, overflow: 'hidden', textDecoration: 'none' }}
            >
              <div style={{ padding: '40px', background: C.bg }}>
                <span style={{ fontFamily: DF, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gray }}>{p.tag}</span>
                <h2 style={{ fontFamily: DF, fontWeight: 600, fontSize: '1.35rem', color: C.dark, margin: '8px 0 4px', letterSpacing: '0.02em' }}>{p.name}</h2>
                <p style={{ fontFamily: DF, fontWeight: 300, fontSize: '0.95rem', color: C.cyan, margin: '0 0 18px', fontStyle: 'italic', letterSpacing: '0.04em' }}>{p.tagline}</p>
                <p style={{ fontFamily: BF, fontSize: '15px', color: C.gray, lineHeight: '1.7', margin: '0 0 24px' }}>{p.desc}</p>
                <span style={{ fontFamily: DF, fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.cyan }}>View Details →</span>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #0A0A08 0%, #0D0B08 100%)', ...gridPattern, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '18px' }}>
                {p.stats.map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: DF, fontWeight: 700, fontSize: '1.85rem', color: C.cyan, letterSpacing: '0.02em' }}>{n}</div>
                    <div style={{ fontFamily: BF, fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>{l}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}

          {/* Constituency Maps */}
          <div style={{ background: C.bgAlt, border: `1px solid ${C.border}`, padding: '36px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center' }}>
            <div>
              <Lbl style={{ marginBottom: '10px', display: 'block' }}>Geospatial Data</Lbl>
              <h2 style={{ fontFamily: DF, fontWeight: 600, fontSize: '1.15rem', color: C.dark, margin: '0 0 10px' }}>Constituency Maps of Pakistan</h2>
              <p style={{ fontFamily: BF, fontSize: '14px', color: C.gray, lineHeight: '1.7', margin: 0, maxWidth: '600px' }}>
                SRI has digitized all electoral constituencies — NA and Provincial Assemblies of Punjab, Sindh, KPK and Baluchistan.
                Shapefiles available for organizations and researchers.
              </p>
            </div>
            <Btn href="/contact" variant="primary">Request Shapefiles</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}

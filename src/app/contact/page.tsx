import { C, DF, BF } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Lbl from '@/components/Lbl'

const DETAILS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'sia@syedirfanajmal.com',
    href: 'mailto:sia@syedirfanajmal.com',
  },
  {
    icon: '◎',
    label: 'Former Office',
    value: 'Centre for Innovation & Entrepreneurship (CIE)\nNUST, H-12, Islamabad 44000\nPakistan',
    href: null,
  },
]

export default function Contact() {
  return (
    <div>
      <PageHero label="Company Archive" title="Get In Touch" />

      <section style={{ background: C.bg, padding: '72px 40px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>

          <div style={{ borderLeft: '3px solid rgba(32,196,232,0.4)', background: C.bgAlt, padding: '20px 20px 20px 22px', margin: '0 0 48px' }}>
            <Lbl style={{ marginBottom: '10px', display: 'block' }}>No Longer Active</Lbl>
            <p style={{ fontFamily: BF, fontSize: '14px', color: C.gray, lineHeight: '1.8', margin: 0 }}>
              SRI closed in 2014. If you worked with us, covered our products, or just want to connect — reach out to the founder directly at the email below.
            </p>
          </div>

          {DETAILS.map(d => (
            <div key={d.label} style={{ display: 'flex', gap: '16px', marginBottom: '32px', alignItems: 'flex-start' }}>
              <span style={{ color: C.cyan, fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>{d.icon}</span>
              <div>
                <span style={{ fontFamily: DF, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gray, display: 'block', marginBottom: '6px' }}>
                  {d.label}
                </span>
                {d.href ? (
                  <a href={d.href} style={{ fontFamily: BF, fontSize: '15px', color: C.cyan, textDecoration: 'none' }}>
                    {d.value}
                  </a>
                ) : (
                  <p style={{ fontFamily: BF, fontSize: '14px', color: C.dark, margin: 0, lineHeight: '1.65', whiteSpace: 'pre-line' }}>
                    {d.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

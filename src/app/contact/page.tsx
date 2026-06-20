'use client'

import { useState } from 'react'
import { C, DF, BF } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Btn from '@/components/Btn'
import Lbl from '@/components/Lbl'

const DETAILS = [
  {
    icon: '◎',
    label: 'Address',
    value: 'Centre for Innovation & Entrepreneurship (CIE)\nNUST, H-12, Islamabad 44000\nPakistan',
  },
  { icon: '✉', label: 'Email', value: 'sales@silkrouteint.com' },
  { icon: '✆', label: 'Phone', value: '+92-(0)51-9085-6318' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', msg: '' })
  const [sent, setSent] = useState(false)

  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    fontFamily: BF,
    fontSize: '14px',
    border: `1px solid ${C.border}`,
    borderRadius: '2px',
    outline: 'none',
    color: C.dark,
    background: C.white,
    boxSizing: 'border-box',
    marginBottom: '16px',
    transition: 'border-color 150ms',
  }

  const labelBase: React.CSSProperties = {
    fontFamily: DF,
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: C.dark,
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <div>
      <PageHero label="Reach Out" title="Contact Us" />

      <section style={{ background: C.white, padding: '80px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px' }}>
          {/* Contact details */}
          <div>
            <Lbl style={{ marginBottom: '18px', display: 'block' }}>Get In Touch</Lbl>
            <p style={{ fontFamily: BF, fontSize: '16px', color: C.gray, lineHeight: '1.8', margin: '0 0 36px' }}>
              We&apos;re open to partnerships, consulting engagements, and research collaborations.
              Reach out and we&apos;ll get back to you promptly.
            </p>
            {DETAILS.map(d => (
              <div key={d.label} style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'flex-start' }}>
                <span style={{ color: C.cyan, fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{d.icon}</span>
                <div>
                  <span style={{ fontFamily: DF, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gray, display: 'block', marginBottom: '4px' }}>
                    {d.label}
                  </span>
                  <p style={{ fontFamily: BF, fontSize: '14px', color: C.dark, margin: 0, lineHeight: '1.65', whiteSpace: 'pre-line' }}>
                    {d.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ padding: '48px', background: C.subtle, border: `1px solid ${C.border}`, borderTop: `3px solid ${C.cyan}`, borderRadius: '2px', textAlign: 'center' }}>
                <div style={{ fontSize: '44px', color: C.cyan, marginBottom: '14px' }}>✓</div>
                <h3 style={{ fontFamily: DF, fontSize: '1.2rem', fontWeight: 600, color: C.dark, margin: '0 0 10px' }}>Message Sent!</h3>
                <p style={{ fontFamily: BF, color: C.gray, margin: 0 }}>We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <label style={labelBase}>Full Name</label>
                <input
                  value={form.name}
                  onChange={upd('name')}
                  placeholder="Your name"
                  style={inputBase}
                  required
                  onFocus={e => (e.target.style.borderColor = C.cyan)}
                  onBlur={e => (e.target.style.borderColor = C.border)}
                />
                <label style={labelBase}>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={upd('email')}
                  placeholder="your@email.com"
                  style={inputBase}
                  required
                  onFocus={e => (e.target.style.borderColor = C.cyan)}
                  onBlur={e => (e.target.style.borderColor = C.border)}
                />
                <label style={labelBase}>Subject</label>
                <input
                  value={form.subject}
                  onChange={upd('subject')}
                  placeholder="How can we help?"
                  style={inputBase}
                  onFocus={e => (e.target.style.borderColor = C.cyan)}
                  onBlur={e => (e.target.style.borderColor = C.border)}
                />
                <label style={labelBase}>Message</label>
                <textarea
                  value={form.msg}
                  onChange={upd('msg')}
                  placeholder="Describe your project or inquiry..."
                  rows={5}
                  style={{ ...inputBase, resize: 'vertical', marginBottom: '24px' }}
                  onFocus={e => (e.target.style.borderColor = C.cyan)}
                  onBlur={e => (e.target.style.borderColor = C.border)}
                />
                <Btn type="submit" variant="primary" size="lg">Send Message</Btn>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { C, DF, BF } from '@/lib/tokens'
import PageHero from '@/components/PageHero'
import Lbl from '@/components/Lbl'

const SERVICES = [
  { name: 'Customer Analytics', items: ['Customer Segmentation', 'Lifetime Value Optimization & Churn Prediction', 'Cross-sell / Up-sell Analysis', 'Basket Analysis'] },
  { name: 'Marketing Optimization', items: ['Channel & Placement Optimization', 'Sequencing & Offer Optimization', 'Market Mix Modeling', 'Campaign Attribution'] },
  { name: 'Product Analytics', items: ['Inventory Optimization', 'Product Demand Forecasting', 'Cannibalization Analysis', 'SKU Performance Mapping'] },
  { name: 'Market & Site Location', items: ['Site Location Optimization', 'Competitor Analytics', 'Trade Area Analysis', 'Catchment Mapping'] },
  { name: 'Territory Management', items: ['Territory & Route Optimization', 'Supply Chain Optimization', 'Distribution Network Analysis', 'Last-Mile Planning'] },
  { name: 'Urban Development', items: ['Land Development Prediction', 'Environmental Suitability Analysis', 'Parcel & Address Data Management', 'Urban Growth Modeling'] },
  { name: 'Public Safety', items: ['Incident Analysis & Predictive Intelligence', 'Crime Mapping & Hot-Spot Analysis', 'Trend Forecasting & Resource Allocation', 'Mobile Asset Tracking'] },
  { name: 'Traffic & Transportation', items: ['Traffic Data Analysis & Forecasting', 'Transportation Planning & Asset Management', 'Roadway Data Integration', 'Commute Pattern Analysis'] },
]

const TECH_SERVICES = [
  'IT/GIS System Planning, Design & Implementation',
  'Master Data Management / Data Warehouse Development',
  'Desktop, Web & Mobile Applications Development',
  'Geographic Information Systems (GIS)',
  'Strategic Technology Roadmap Planning',
  'Business Case Development',
  'Technology Adoption & Change Management',
]

const TAGS = ['Mapping & Survey', 'GeoVisualization', 'Data Analytics', 'Geo Analytics', 'GIS', 'Business Intelligence']

export default function Services() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div>
      <PageHero
        label="What We Do"
        title="Services"
        sub="We bring a holistic approach aligning organizational objectives with technical solutions — ensuring impactful outcomes across spatial, predictive, and optimization analytics."
      />

      <section style={{ background: C.white, padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '64px' }}>
          {/* Left column */}
          <div>
            <Lbl style={{ marginBottom: '14px', display: 'block' }}>Geospatial Revolution</Lbl>
            <p style={{ fontFamily: BF, fontSize: '16px', color: C.gray, lineHeight: '1.8', margin: '0 0 24px' }}>
              The past decade has seen an explosion of new mechanisms for understanding and using location information.
              This Geospatial Revolution enables people from all walks of life to use, collect, and understand spatial
              information like never before.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {TAGS.map(t => (
                <span key={t} style={{ background: C.cyanL, color: C.cyanD, fontFamily: DF, fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '2px' }}>
                  {t}
                </span>
              ))}
            </div>

            <Lbl style={{ marginBottom: '12px', display: 'block' }}>Technology & Management Consulting</Lbl>
            <div style={{ background: C.subtle, border: `1px solid ${C.border}`, borderRadius: '2px', padding: '18px' }}>
              {TECH_SERVICES.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', padding: '6px 0', borderBottom: i < TECH_SERVICES.length - 1 ? `1px solid ${C.border}` : 'none', alignItems: 'flex-start' }}>
                  <span style={{ color: C.cyan, flexShrink: 0, marginTop: '2px', fontSize: '12px' }}>→</span>
                  <span style={{ fontFamily: BF, fontSize: '14px', color: C.gray, lineHeight: '1.4' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — accordion */}
          <div>
            <Lbl style={{ marginBottom: '12px', display: 'block' }}>Analytical Consulting</Lbl>
            <p style={{ fontFamily: BF, fontSize: '14px', color: C.gray, margin: '0 0 20px', lineHeight: '1.65' }}>
              Centered on spatial, predictive and optimization analytics for retail, government, telecom, and financial services.
            </p>
            {SERVICES.map(s => (
              <div key={s.name} style={{ borderBottom: `1px solid ${C.border}` }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', cursor: 'pointer' }}
                  onClick={() => setOpen(open === s.name ? null : s.name)}
                >
                  <span style={{ fontFamily: DF, fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', color: open === s.name ? C.cyan : C.dark, transition: '150ms' }}>
                    {s.name}
                  </span>
                  <span style={{ color: C.cyan, fontSize: '16px', transform: open === s.name ? 'rotate(45deg)' : 'none', transition: '200ms', fontWeight: 'bold', lineHeight: 1, display: 'inline-block' }}>
                    +
                  </span>
                </div>
                {open === s.name && (
                  <ul style={{ margin: '0 0 12px', padding: '0 0 0 16px' }}>
                    {s.items.map((it, j) => (
                      <li key={j} style={{ fontFamily: BF, fontSize: '13px', color: C.gray, padding: '4px 0', lineHeight: 1.5 }}>
                        {it}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

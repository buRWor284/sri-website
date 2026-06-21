import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ArchiveBannerTop } from '@/components/ArchiveBanner'

export const metadata: Metadata = {
  title: 'Silk Route Interactive — Company Archive',
  description:
    "Archive of Silk Route Interactive (2012–2014) — Pakistan's award-winning Spatial Intelligence startup. Builders of ElectoMap, Jaag Pakistan, and MyVote.pk.",
  keywords: 'GIS, spatial intelligence, mapping, Pakistan, ElectoMap, Jaag Pakistan, geospatial, data visualization, Silk Route Interactive',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ArchiveBannerTop />
        <Nav />
        <main className="page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

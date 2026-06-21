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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Space+Grotesk:wght@300;400;500;600&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ArchiveBannerTop />
        <Nav />
        <main style={{ paddingTop: '94px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

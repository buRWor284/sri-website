import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ArchiveBannerTop } from '@/components/ArchiveBanner'

const SITE_URL = 'https://sri.syedirfanajmal.com'
const OG_IMAGE = `${SITE_URL}/og-default.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Silk Route Interactive — Company Archive',
    template: '%s | Silk Route Interactive',
  },
  description:
    "Archive of Silk Route Interactive (2012–2014) — Pakistan's award-winning Spatial Intelligence startup. Builders of ElectoMap, Jaag Pakistan, and MyVote.pk.",
  keywords: 'GIS, spatial intelligence, mapping, Pakistan, ElectoMap, Jaag Pakistan, geospatial, data visualization, Silk Route Interactive',
  openGraph: {
    type: 'website',
    siteName: 'Silk Route Interactive',
    url: SITE_URL,
    title: 'Silk Route Interactive — Company Archive',
    description:
      "Pakistan's award-winning Spatial Intelligence startup (2012–2014). Builders of ElectoMap, Jaag Pakistan, and MyVote.pk.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Silk Route Interactive' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silk Route Interactive — Company Archive',
    description:
      "Pakistan's award-winning Spatial Intelligence startup (2012–2014). Builders of ElectoMap, Jaag Pakistan, and MyVote.pk.",
    images: [OG_IMAGE],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts servers for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

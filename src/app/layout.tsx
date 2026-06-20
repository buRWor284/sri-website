import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Silk Route Interactive — GIS-Enabled Interactive Mapping Solutions',
  description:
    "Pakistan's premier Spatial Intelligence firm. We amplify the value of business analytics by bringing in the locational context through advanced GIS, Business Intelligence, and Data Visualization.",
  keywords: 'GIS, spatial intelligence, mapping, Pakistan, ElectoMap, geospatial, data visualization',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

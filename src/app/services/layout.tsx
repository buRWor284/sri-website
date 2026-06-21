import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Analytical and technology consulting services by Silk Route Interactive — customer analytics, marketing optimization, GIS site location, territory management, and interactive data visualization.",
  openGraph: {
    title: 'Services | Silk Route Interactive',
    description:
      'Analytical and technology consulting services — customer analytics, marketing optimization, GIS site location, territory management, and interactive data visualization.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Silk Route Interactive',
    description:
      'Customer analytics, marketing optimization, GIS consulting, and interactive data visualization.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

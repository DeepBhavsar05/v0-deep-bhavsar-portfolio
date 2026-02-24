import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const _geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Deep Bhavsar | IT Support Specialist & Technical Support Analyst',
  description:
    'ITIL v4 & Microsoft 365 certified IT Support professional with 3+ years of experience. Masters in Computer Engineering from University of Guelph. Seeking IT Support, Desktop Support, and Technical Support roles in Canada.',
  keywords: [
    'Deep Bhavsar',
    'IT Support Specialist',
    'Technical Support Analyst',
    'Service Desk',
    'ITIL',
    'Microsoft 365',
    'Active Directory',
    'ServiceNow',
    'Canada',
    'Ontario',
  ],
  authors: [{ name: 'Deep Bhavsar' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1e2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

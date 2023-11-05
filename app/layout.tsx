import './global.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Sidebar from './components/sidebar'
import { Analytics } from '@vercel/analytics/react'
import { cn } from 'utils/cn'

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marlindalpozzo.com'),
  title: {
    default: 'Marlin Dalpozzo',
    template: '%s | Marlin Dalpozzo',
  },
  description: 'Developer, musician, and explorer.',
  openGraph: {
    title: 'Marlin Dalpozzo',
    description: 'Developer, musician, and explorer.',
    url: 'https://www.marlindalpozzo.com',
    siteName: 'Marlin Dalpozzo',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Marlin Dalpozzo',
    card: 'summary_large_image',
  },
  // TODO what are these...
  // verification: {
  //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  //   yandex: '14d2e73487fa6c71',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn([
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        graphik.variable,
      ])}
    >
      <body className="antialiased mb-40 mt-8">
        <main className="mt-6 flex flex-col mx-10 md:mx-32">
          <Sidebar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}

import '@/styles/globals.css';
import clsx from 'clsx';
import { Metadata, Viewport } from 'next';

import { Providers } from './providers';

import { Footer } from '@/components/Layout/components/Footer/Footer.component';
import { Navbar } from '@/components/Layout/components/Nabvar/Navbar.component';
import { fontMonserrat } from '@/config/fonts';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title.default,
    template: `%s - ${siteConfig.title.template}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    type: siteConfig.openGraph.type,
    url: siteConfig.openGraph.url,
    siteName: siteConfig.openGraph.siteName,
    locale: siteConfig.openGraph.locale,
  },
  creator: siteConfig.creator,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body className={clsx(fontMonserrat.className, ' text-default-900')}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='relative flex flex-col h-screen'>
            <Navbar />
            <main className='container mx-auto max-w-7xl pt-16 px-6 flex-grow'>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

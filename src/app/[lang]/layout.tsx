import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Locale, i18n } from '../../../i18n-config';

import './../styles/index.scss'
import SocialMediaLinks from '../../components/SocialMediaLinks';
import BackgroundImages from '../../components/BackgroundImage';

export const metadata: Metadata = {
  title: 'Genevieve Perron Migneron - Portfolio',
  description: 'Senior Manager - Web Development',
  openGraph: {
    type: 'website',
    url: 'https://www.gen-migneron.com',
    images: [{'url':'https://www.gen-migneron.com/og.jpg'}],
    siteName: 'Portfolio'
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang={params.lang}>
      <body className="flex items-center justify-center h-screen font-sans">
        <BackgroundImages />
        <SocialMediaLinks />
        {children}

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

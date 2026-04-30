import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Locale, i18n } from '../../../i18n-config';

import './../styles/index.scss'
import SocialMediaLinks from '../../components/SocialMediaLinks';
import BackgroundImages from '../../components/BackgroundImage';
import CookieBanner from '@/components/CookieBanner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { getDictionary } from '@/lib/dictionary';

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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const { cookieBanner } = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className="flex items-center justify-center h-screen font-sans">
        <BackgroundImages />
        <SocialMediaLinks />
        {children}

        <CookieBanner lang={params.lang} content={cookieBanner} />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

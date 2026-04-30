'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

type GoogleAnalyticsProps = {
  gaId: string
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const updateConsent = () => {
      const consent = window.localStorage.getItem('cookie-consent')
      setEnabled(consent === 'accepted')
    }

    updateConsent()
    window.addEventListener('cookie-consent-updated', updateConsent)
    window.addEventListener('storage', updateConsent)

    return () => {
      window.removeEventListener('cookie-consent-updated', updateConsent)
      window.removeEventListener('storage', updateConsent)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type CookieBannerContent = {
  title: string
  description: string
  accept: string
  reject: string
  privacy: string
  cookies: string
}

type CookieBannerProps = {
  lang: 'en' | 'fr'
  content: CookieBannerContent
}

const CONSENT_KEY = 'cookie-consent'

export default function CookieBanner({ lang, content }: CookieBannerProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY)
    setVisible(!consent)
  }, [])

  const saveConsent = (value: 'accepted' | 'rejected') => {
    window.localStorage.setItem(CONSENT_KEY, value)
    window.dispatchEvent(new Event('cookie-consent-updated'))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label={content.title}>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <div className="cookie-banner-links">
        <Link href={lang === 'en' ? '/privacy-policy' : `/${lang}/privacy-policy`}>{content.privacy}</Link>
        <Link href={lang === 'en' ? '/cookie-policy' : `/${lang}/cookie-policy`}>{content.cookies}</Link>
      </div>
      <div className="cookie-banner-actions">
        <button type="button" className="button" onClick={() => saveConsent('accepted')}>
          <span>{content.accept}</span>
        </button>
        <button type="button" className="button button--outline" onClick={() => saveConsent('rejected')}>
          <span>{content.reject}</span>
        </button>
      </div>
    </aside>
  )
}

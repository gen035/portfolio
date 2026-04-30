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

  const clearAllCookies = () => {
    document.cookie.split(';').forEach((c) => {
      const eqPos = c.indexOf('=')
      const name = eqPos > -1 ? c.substring(0, eqPos).trim() : c.trim()
      if (name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${document.location.hostname};`
      }
    })
  }

  const handleRejectCookies = () => {
    clearAllCookies()
    saveConsent('rejected')
  }

  if (!visible)
    return (
      <button
        type="button"
        className="cookie-banner-tab"
        onClick={() => setVisible(true)}
        aria-label={content.title}
        title={content.title}
      >
        🍪
      </button>
    )

  return (
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label={content.title}>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <div className="cookie-banner-links">
        <Link href={lang === 'en' ? '/privacy-policy' : `/${lang}/privacy-policy`}>{content.privacy}</Link>
        <Link href={lang === 'en' ? '/cookie-policy' : `/${lang}/cookie-policy`}>{content.cookies}</Link>
      </div>
      <div className="cookie-banner-actions">
        <button type="button" className="button w-full" onClick={() => saveConsent('accepted')}>
          <span>{content.accept}</span>
        </button>
        <button type="button" className="button w-full" onClick={() => handleRejectCookies()}>
          <span>{content.reject}</span>
        </button>
      </div>
    </aside>
  )
}

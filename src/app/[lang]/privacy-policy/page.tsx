import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../../i18n-config'

export default async function PrivacyPolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { privacyPolicy } = await getDictionary(lang)

  return (
    <main className="policy-page">
      <h1>{privacyPolicy.title}</h1>
      <p>{privacyPolicy.updated}</p>
      <p>{privacyPolicy.intro}</p>
      {privacyPolicy.sections.map(section => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}
      <p>{privacyPolicy.contact}</p>
      <Link className="button" href={lang === 'en' ? '/' : `/${lang}`}>
        <span>{privacyPolicy.home}</span>
      </Link>
    </main>
  )
}

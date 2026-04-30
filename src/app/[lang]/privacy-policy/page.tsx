import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../../i18n-config'

export default async function PrivacyPolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { privacyPolicy } = await getDictionary(lang)

  return (
    <main className="policy-page">
      <h1 className="intro-title md:text-xl font-bold mb-2"><span>_</span>{privacyPolicy.title}</h1>
      <p className="text-sm mb-2">{privacyPolicy.updated}</p>
      <p className="text-xs mb-2">{privacyPolicy.intro}</p>
      {privacyPolicy.sections.map(section => (
        <section key={section.title}>
          <h2 className="text-md font-bold">{section.title}</h2>
          <p className="text-xs mb-2">{section.text}</p>
        </section>
      ))}
      <p className="d-block text-xs mt-4 mb-4">{privacyPolicy.contact}</p>
      <Link className="button" href={lang === 'en' ? '/' : `/${lang}`}>
        <span>{privacyPolicy.home}</span>
      </Link>
    </main>
  )
}

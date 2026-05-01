import Link from 'next/link'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { getDictionary } from '@/lib/dictionary'
import { Locale, i18n } from '../../../../i18n-config';

export default async function PrivacyPolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { privacyPolicy } = await getDictionary(lang)

  return (
    <>
      <Link
        className="p-2 fixed z-10 top-0 left-0 flex items-center text-lg md:text-2xl text-white"
        key={lang}
        href={lang === i18n.defaultLocale ? "/" : `/${lang}`}
      >
        <FaLongArrowAltLeft className="mr-2" />Back
      </Link>
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
      </main>
    </>
  )
}

import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../../i18n-config'

export default async function CookiePolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { cookiePolicy } = await getDictionary(lang)

  return (
    <main className="policy-page">
      <h1 className="intro-title text-xl md:text-xl font-bold mb-2"><span>_</span>{cookiePolicy.title}</h1>
      <p className="text-sm mb-2">{cookiePolicy.updated}</p>
      <p className="text-sm mb-2">{cookiePolicy.intro}</p>
      <ul className="ml-2">
        {cookiePolicy.cookies.map(item => (
          <li className="text-sm mb-2" key={item}>{item}</li>
        ))}
      </ul>
      <p className="text-sm mb-2">{cookiePolicy.rights}</p>
      <Link className="button" href={lang === 'en' ? '/' : `/${lang}`}>
        <span>{cookiePolicy.home}</span>
      </Link>
    </main>
  )
}
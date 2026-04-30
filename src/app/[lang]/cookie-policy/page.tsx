import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../../i18n-config'

export default async function CookiePolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { cookiePolicy } = await getDictionary(lang)

  return (
    <main className="policy-page">
      <h1>{cookiePolicy.title}</h1>
      <p>{cookiePolicy.updated}</p>
      <p>{cookiePolicy.intro}</p>
      <ul>
        {cookiePolicy.cookies.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{cookiePolicy.rights}</p>
      <Link className="button" href={lang === 'en' ? '/' : `/${lang}`}>
        <span>{cookiePolicy.home}</span>
      </Link>
    </main>
  )
}

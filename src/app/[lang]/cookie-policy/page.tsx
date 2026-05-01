import Link from 'next/link'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { getDictionary } from '@/lib/dictionary'
import { Locale, i18n } from '../../../../i18n-config';

export default async function CookiePolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { cookiePolicy } = await getDictionary(lang)

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
        <h1 className="intro-title text-xl md:text-xl font-bold mb-2"><span>_</span>{cookiePolicy.title}</h1>
        <p className="text-sm mb-2">{cookiePolicy.updated}</p>
        <p className="text-sm mb-2">{cookiePolicy.intro}</p>
        <ul className="ml-2">
          {cookiePolicy.cookies.map(item => (
            <li className="text-sm mb-2" key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm mb-2">{cookiePolicy.rights}</p>
      </main>
    </>
  )
}
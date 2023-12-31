import Link from "next/link";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Locale, i18n } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionary';
import Skills from '@/components/Skills';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { intro } = await getDictionary(lang)

  return (
    <main className="w-3/4 mx-auto intro">
      <h1 className="intro-title text-4xl md:text-6xl font-light">{intro.title}</h1>
      <div className="intro-content tracking-wide">
        <p className="intro-content-copy">{intro.description}</p>
        <div className="intro-content-location flex mb-4 items-center">
          <FaMapMarkerAlt />
          Montreal, Canada
        </div>
        <div className="intro-content-lang">
          {intro.available}
          {[...i18n.locales].sort().map((locale) => (
            <Link
              key={lang}
              href={lang === i18n.defaultLocale ? "/" : `/${lang}`}
            >
              {locale === 'fr' ? 'français' :'english'}
            </Link>
          ))}
        </div>
        <Skills />
      </div>
      <a href={`/genevieve_perron_migneron_${lang}.pdf`} download={`genevieve_perron_migneron_${lang}.pdf`} className="button mt-2" target="_blank">
        <span>{intro.resume}</span>
      </a>
      <Link
        className="button button--contact"
        key={lang}
        href={lang === i18n.defaultLocale ? "/contact" : `/${lang}/contact`}
      >
        <span>Contact</span>
      </Link>
    </main>
  )
}
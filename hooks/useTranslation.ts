import en from '@/locales/en'
import es from '@/locales/es'

type Locale = 'en' | 'es'

const translations = {
  en,
  es,
}

export function useTranslation(locale: Locale) {
  const t = translations[locale]
  return { t }
}

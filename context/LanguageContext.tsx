'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Locale = 'es' | 'en'

interface LanguageContextProps {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('es') // idioma inicial

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}

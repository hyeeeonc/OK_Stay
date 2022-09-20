import useQueryString from 'hooks/useQueryString'
import { createContext, useCallback, useMemo } from 'react'
import { Language } from 'types/common/language'

type LanguageContextValue = {
  language: Language
  changeLanguage: React.MouseEventHandler
}

export const LanguageContext = createContext<LanguageContextValue>(undefined)

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useQueryString<Language>('lang', 'KOR')
  const changeLanguage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (language === 'KOR') {
        setLanguage('ENG')
      } else if (language === 'ENG') {
        setLanguage('KOR')
      }
    },
    [language],
  )

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider

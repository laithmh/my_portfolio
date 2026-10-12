import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('portfolio_lang');
      if (savedLang === 'ar' || savedLang === 'en') {
        return savedLang;
      }
    }
    return 'en';
  });

  const isRTL = language === 'ar';

  // Synchronize document lang and dir attributes whenever language changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.title =
      language === 'ar'
        ? 'ليث محمد | مهندس منتجات برمجية متكاملة'
        : 'Laith Muhammad | Full-Stack Product Engineer';
    try {
      localStorage.setItem('portfolio_lang', language);
    } catch {
      // Storage unavailable or disabled
    }
  }, [language, isRTL]);

  const setLanguage = useCallback((lang) => {
    if (lang === 'en' || lang === 'ar') {
      setLanguageState(lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  /**
   * Safe key-path lookup helper: t('nav.home') or t('hero.exploreCta')
   */
  const t = useCallback(
    (keyPath, fallback = '') => {
      if (!keyPath) return fallback;
      const keys = keyPath.split('.');
      let current = translations[language];

      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          // Fallback to English dictionary
          let enFallback = translations.en;
          for (const ek of keys) {
            if (enFallback && typeof enFallback === 'object' && ek in enFallback) {
              enFallback = enFallback[ek];
            } else {
              return fallback || keyPath;
            }
          }
          return enFallback || fallback || keyPath;
        }
      }

      return current ?? fallback ?? keyPath;
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        isRTL,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;

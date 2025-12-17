import React, { createContext, useContext, useState, ReactNode } from 'react';
import en from '../locales/en.json';
import ta from '../locales/ta.json';
import hi from '../locales/hi.json';

export type Language = 'en' | 'ta' | 'hi';
export type Translations = typeof en;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const translationsMap = { en, ta, hi };

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => { },
  t: (key) => key.toString(),
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ta'); // Defaulting to Tamil as per previous behavior/legacy expectation, or 'en'
  // Actually original app seemed to default to Tamil in UI but English in code? 
  // Let's stick to 'en' as default or 'ta' if that was the primary audience. 
  // Looking at the code, it had mixed labels. Let's start with 'ta' as it seems to be the primary target (Marriage Biodata Generator usually for local usage).
  // User's snippet used 'en'. I will use 'en' to be safe, but the user requested "Add Hindi support to Tamil & English marriage biodata generator".

  const t = (key: keyof Translations) => {
    return translationsMap[language][key] || key.toString();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

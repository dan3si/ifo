import React, { useEffect, useState } from 'react';
import translates from 'global/LangContext/translates.json';

const contextObject: any = null;
export const LangContext = React.createContext(contextObject);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState(localStorage.lang || 'ua');

  useEffect(
    () => localStorage.setItem('lang', lang),
    [lang],
  );

  const t =  (code: string) => {
    const base: any = translates;
    return base[code][lang] || '';
  };

  return (
    <LangContext.Provider value={{ t, setLang, value: lang }}>
      {children}
    </LangContext.Provider>
  );
}

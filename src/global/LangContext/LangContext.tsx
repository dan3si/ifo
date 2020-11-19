import React, { useEffect, useState } from 'react';
import translates from 'global/LangContext/translates.json';

const contextObject: any = null;
export const LangContext = React.createContext(contextObject);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const cookieLang = document.cookie
    .split(';')
    .find(((el: string) => el.includes('lang')))
    ?.split('=')[1];

  const [lang, setLang] = useState(cookieLang || 'ua');

  useEffect(() => {
    document.cookie = `lang=${lang}; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
  },
  [lang]
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

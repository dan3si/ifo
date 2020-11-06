import React, { useEffect, useState } from 'react';
import API_URL from 'global/API';

const contextObject: any = null;
export const LangContext = React.createContext(contextObject);

export const LangProvider = ({ children }: any) => {
  const cookieLang = document.cookie
    .split(';')
    .find(((el: string) => el.includes('lang')))
    ?.split('=')[1];

  const [translates, setTranslates]: any = useState({});
  const [lang, setLang] = useState(cookieLang || 'ua');

  useEffect(() => {
    document.cookie = `lang=${lang}; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
    fetch(`${API_URL}/translates/${lang}`)
      .then(res => res.json())
      .then(translates => setTranslates(translates));
  },
  [lang]
  );

  const t = (code: string) => {
    if (!translates[code]) {
      return '';
    }

    return translates[code];
  };

  return (
    <LangContext.Provider value={{ t, setLang, value: lang }}>
      {children}
    </LangContext.Provider>
  );
}

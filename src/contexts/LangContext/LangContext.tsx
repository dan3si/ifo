import React, { useEffect, useState } from 'react';

const contextObject: any = null;
export const LangContext = React.createContext(contextObject);

export const LangProvider = ({ children }: any) => {   
  const [translates, setTranslates]: any = useState({});
  const [lang, setLang] = useState('en');

  useEffect(() => {
    fetch(`https://ifo-api.herokuapp.com/translates/${lang}`)
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

  useEffect(() => setLang('en'), []);

  return (
    <LangContext.Provider value={{ t, setLang, value: lang }}>
      {children}
    </LangContext.Provider>
  );
}

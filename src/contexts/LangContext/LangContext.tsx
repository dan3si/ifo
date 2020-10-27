import React, { useEffect, useState } from 'react';

const contextObject: any = null;
export const LangContext = React.createContext(contextObject);

export const LangProvider = ({ children }: any) => {   
  const [translates, setTranslates]: any = useState({});

  const setLang = (lang: string) => {
    fetch(`https://ifo-api.herokuapp.com/translates/${lang}`)
      .then(res => res.json())
      .then(translates => setTranslates(translates));
  };

  const t = (code: string) => {
    if (!translates[code]) {
      return '';
    }

    return translates[code];
  };

  useEffect(() => setLang('en'), []);

  return (
    <LangContext.Provider value={{ t, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
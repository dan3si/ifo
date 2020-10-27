import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { CompetitionRequirementsPage } from 'pages/CompetitionRequirementsPage';
import { LangProvider } from 'contexts/LangContext';

function App() {
  return (
    <>
      <head>
        <link
          rel="shortcut icon"
          href="./logo.png"
          type="image/png"
        />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />
      </head>

      <LangProvider>
        <BrowserRouter>
          <Route path="/" exact component={MainPage} />
          <Route path="/competition" exact component={CompetitionRequirementsPage} />
        </BrowserRouter>
      </LangProvider>
    </>
  );
}

export default App;

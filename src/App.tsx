import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { CompetitionTermsPage } from 'pages/CompetitionTermsPage';

function App() {
  useEffect(
    () => {
      document.title = 'International Freedom Orchestra';
    },
    [],
  );

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
      
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/competition" exact component={CompetitionTermsPage} />
      </BrowserRouter>    
    </>
  );
}

export default App;

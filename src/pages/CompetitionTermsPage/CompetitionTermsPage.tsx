import React from 'react';
import { Header } from 'components/HeaderModule';
import { Footer } from 'components/FooterModule';
import { CompetitionTerms } from 'components/CompetitionTermsModule';

export const CompetitionTermsPage = () => {
  return (
    <>
      <Header />
      <CompetitionTerms />
      <Footer />
    </>
  );
}

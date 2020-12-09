import React from 'react';
import { Header } from 'components/HeaderModule';
import { Footer } from 'components/FooterModule';
import { CompetitionRequirements } from 'components/CompetitionRequirementsModule';

export const CompetitionRequirementsPage = () => {
  return (
    <>
      <Header />
      <CompetitionRequirements />
      <Footer />
    </>
  );
}

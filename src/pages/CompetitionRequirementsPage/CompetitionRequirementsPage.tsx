import React from 'react';
import { Header } from 'components/HeaderModule';
import { Footer } from 'components/FooterModule';
import { CompetitionRequirements } from 'components/CompetitionRequirementsModule';
import { StopCompetitionPopup } from '../../components/CompetitionRequirementsModule/StopCompetitionPopup';

export const CompetitionRequirementsPage = () => {
  return (
    <>
      <Header />
      <CompetitionRequirements />
      <StopCompetitionPopup />
      <Footer />
    </>
  );
}

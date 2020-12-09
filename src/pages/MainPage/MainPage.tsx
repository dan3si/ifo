import React from 'react';
import { Header } from 'components/HeaderModule';
import { Promo } from 'components/PromoModule';
import { About } from 'components/AboutModule';
import { Leadership } from 'components/LeadershipModule';
import { Competition } from 'components/CompetitionModule';
import { Request } from 'components/RequestModule';
import { Contacts } from 'components/ContactsModule';
import { Footer } from 'components/FooterModule';
import { StopCompetitionPopup } from '../../components/StopCompetitionPopup';

export const MainPage = () => {
  return (
    <>
      <Header />
      <Promo />
      <About />
      <Leadership />
      <Competition />
      <Request />
      <Contacts />
      <Footer />
      <StopCompetitionPopup />
    </>
  );
}

import React from 'react';
import { Header } from 'components/HeaderModule';
import { Events } from 'components/EventsModule';
import { Footer } from 'components/FooterModule';

export const EventsPage = () => {
  return (
    <>
      <Header />
      <Events />
      <Footer />
    </>
  );
}

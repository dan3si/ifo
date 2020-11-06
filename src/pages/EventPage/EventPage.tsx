import React from 'react';
import { Header } from 'components/HeaderModule';
import { Event } from 'components/EventModule';
import { Footer } from 'components/FooterModule';

export const EventPage = ({ location }: { location: any }) => {
  const eventId = location.pathname
    .split('')
    .reduce((acc: string, symbol: string) => {
      if (isNaN(+symbol)) {
        return acc;
      } else {
        return acc + symbol;
      }
    }, '')

  return (
    <>
      <Header />
      <Event eventId={eventId} />
      <Footer />
    </>
  );
}

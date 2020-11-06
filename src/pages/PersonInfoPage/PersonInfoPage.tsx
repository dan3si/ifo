import React from 'react';
import { Header } from 'components/HeaderModule';
import { Footer } from 'components/FooterModule';
import { PersonInfo } from 'components/PersonInfoModule';

interface Props {
  match: any;
}

export const PersonInfoPage = ({ match }: Props) => {
  return (
    <>
      <Header />
      <PersonInfo name={match.params.name}/>
      <Footer />
    </>
  );
}

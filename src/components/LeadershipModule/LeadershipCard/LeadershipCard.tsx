import React from 'react';
import styles from './LeadershipCard.module.scss';
import { Link } from 'react-router-dom';
import scrollToBlock from 'global/ScrollToBlock';

interface Props {
  imgSRC: string;
  name: string;
  position: string;
  description: string;
  linkTo: string;
}

export const LeadershipCard = ({ imgSRC, name, position, description, linkTo }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link
          to={linkTo}
          onClick={() => scrollToBlock('personInfo')}
        >
          <img src={imgSRC} alt={name}/>
        </Link>
      </div>
      <Link
        className={styles.name}
        to={linkTo}
        onClick={() => scrollToBlock('personInfo')}
      >
        {name}
      </Link>
      <div className={styles.position}>
        {position}
      </div>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
}

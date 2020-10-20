import React from 'react';
import styles from './LeadershipCard.module.scss';

interface Props {
  imgSRC: string,
  name: string,
  position: string,
  description: string,
}

export const LeadershipCard = ({ imgSRC, name, position, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imgSRC} alt={name}/>
      </div>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.position}>
        {position}
      </div>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
}

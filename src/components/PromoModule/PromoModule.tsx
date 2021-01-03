import React from 'react';
import styles from './PromoModule.module.scss';

export const Promo = () => {
  return (
    <section className={styles.promo} id="promo">
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <span className={styles.headingWord}>International </span>
          <span className={styles.headingWord}>Freedom </span>
          <span className={styles.headingWord}>Orchestra</span>
        </h1>
      </div>
    </section>
  );
}

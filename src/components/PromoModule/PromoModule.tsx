import React from 'react';
import styles from './PromoModule.module.scss';

export const Promo = () => {
  return (
    <section className={styles.promo} id="promo">
      <div className={styles.container}>
        <h1 className={styles.heading}>International Freedom Orchestra</h1>
      </div>
    </section>
  );
}

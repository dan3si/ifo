import React, { useContext } from 'react';
import styles from './AboutModule.module.scss';
import { LangContext } from 'contexts/LangContext';

export const About = () => {
  const { t } = useContext(LangContext);

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('about_heading')}</h2>
        <p className={styles.paragraph}>
          <strong>{t('about_ifo')}</strong>
          {t('about_paragraph1')}
        </p>
        <p className={styles.paragraph}>{t('about_paragraph2')}</p>
        <h4 className={styles.textHeading}>{t('about_textheading')}</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>{t('about_listItem1')}</li>
          <li className={styles.listItem}>{t('about_listItem2')}</li>
          <li className={styles.listItem}>{t('about_listItem3')}</li>
          <li className={styles.listItem}>{t('about_listItem4')}</li>
          <li className={styles.listItem}>{t('about_listItem5')}</li>
          <li className={styles.listItem}>{t('about_listItem6')}</li>
          <li className={styles.listItem}>{t('about_listItem7')}</li>
          <li className={styles.listItem}>{t('about_listItem8')}</li>
          <li className={styles.listItem}>{t('about_listItem9')}</li>
          <li className={styles.listItem}>{t('about_listItem10')}</li>
        </ul>
      </div>
    </section>
  );
}

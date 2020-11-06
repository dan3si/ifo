import React, { useContext } from 'react';
import styles from './CompetitionModule.module.scss';
import { Link } from 'react-router-dom';
import scrollToBlock from 'global/ScrollToBlock';
import { LangContext } from 'global/LangContext';

export const Competition = () => {
  const { t } = useContext(LangContext);

  return (
    <section className={styles.competition} id="competition">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('competition_heading')}</h2>
        <p className={styles.paragraph}>
          {t('competition_paragraph_part1')}
          <br/><br/>
          {t('competition_paragraph_part2')}
          <strong>{t('competition_ifo')}</strong>
          {t('competition_paragraph_part3')}
          <br/><br/><br/>
          <Link
            className={styles.toRequirementsLink}
            to="/competition"
            onClick={() => scrollToBlock('competitionRequirements')}
          >
            {t('competition_toRequirements')}
          </Link>
        </p>
      </div>
    </section>
  );
}

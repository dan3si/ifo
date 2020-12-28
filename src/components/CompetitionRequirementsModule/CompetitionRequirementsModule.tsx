import React, { useContext } from 'react';
import styles from './CompetitionRequirementsModule.module.scss';
import { Link } from 'react-router-dom';
import scrollToBlock from 'global/ScrollToBlock';
import { LangContext } from 'global/LangContext';

export const CompetitionRequirements = () => {
  const { t } = useContext(LangContext);
  
  return (
    <section className={styles.competitionRequirements} id="competitionRequirements">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('competitionRequirements_heading')}</h2>
        <div className={styles.textContainer}>
          {t('competitionRequirements_tour1_firstPart')}
          <Link to="/" className={styles.link} onClick={() => scrollToBlock('request')}>
            {t('competitionRequirements_toForm')}
          </Link>
          {t('competitionRequirements_tour1_lastPart')}
          <br/><br/>
          {t('competitionRequirements_tour2')}
          <br/><br/>
          {t('competitionRequirements_results')}

          <span className={styles.textAligner}>{t('competitionRequirements_textHeading')}</span>

          <ul>
            <li className={styles.professionsItem}>
              {t('competitionRequirements_professionsItem_violin')}
              <ol>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_violin_1')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_violin_2')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_violin_3')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_violin_4')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_violin_5')}
                </li>
              </ol>
            </li>

            <li className={styles.professionsItem}>
              {t('competitionRequirements_professionsItem_viola')}
              <ol>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_viola_1')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_viola_2')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_viola_3')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_viola_4')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_viola_5')}
                </li>
              </ol>
            </li>

            <li className={styles.professionsItem}>
              {t('competitionRequirements_professionsItem_cello')}
              <ol>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_cello_1')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_cello_2')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_cello_3')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_cello_4')}
                </li>
                <li className={styles.programItem}>
                {t('competitionRequirements_programItem_cello_5')}
                </li>
              </ol>
            </li>

            <li className={styles.professionsItem}>
              {t('competitionRequirements_professionsItem_bass')}
              <ol>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_bass_1')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_bass_2')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_bass_3')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_bass_4')}
                </li>
                <li className={styles.programItem}>
                  {t('competitionRequirements_programItem_bass_5')}
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

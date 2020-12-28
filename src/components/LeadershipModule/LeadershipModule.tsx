import React, { useContext } from 'react';
import styles from './LeadershipModule.module.scss';
import { LeadershipCard } from './LeadershipCard';
import OlesYaskoIMG from 'images/leadership/Oles_Yasko/1.jpg';
import VictoriaZhadkoIMG from 'images/leadership/Victoria_Zhadko/1.jpg';
import DmytroTavanetsIMG from 'images/leadership/Dmytro_Tavanets/1.jpg';
import { LangContext } from 'global/LangContext';

export const Leadership = () => {
  const { t } = useContext(LangContext);

  return (
    <section className={styles.leadership} id="leadership">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('leadership_heading')}</h2>
        <div className={styles.cardwrapper}>
          <LeadershipCard
            imgSRC={OlesYaskoIMG}
            name={t('leadership_yasko_name')}
            position={t('leadership_yasko_position')}
            description={t('leadership_yasko_description')}
            linkTo="/team/oles_yasko"
          />

          <LeadershipCard
            imgSRC={VictoriaZhadkoIMG}
            name={t('leadership_zhadko_name')}
            position={t('leadership_zhadko_position')}
            description={t('leadership_zhadko_description')}
            linkTo="/team/victoria_zhadko"
          />
          
          <LeadershipCard
            imgSRC={DmytroTavanetsIMG}
            name={t('leadership_tavanets_name')}
            position={t('leadership_tavanets_position')}
            description={t('leadership_tavanets_description')}
            linkTo="/team/dmytro_tavanets"
          />
        </div>
      </div>
    </section>
  );
}
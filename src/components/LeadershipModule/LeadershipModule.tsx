import React, { useContext } from 'react';
import styles from './LeadershipModule.module.scss';
import { LeadershipCard } from './LeadershipCard';
import OlesYaskoIMG from '../../images/leadership/Oles_Yasko.jpg';
import MyroslavaKotorovychIMG from '../../images/leadership/Myroslava_Kotorovych.jpg';
import VictoriaZhadkoIMG from '../../images/leadership/Victoria_Zhadko.jpg';
import DmytroTavanetsIMG from '../../images/leadership/Dmytro_Tavanets.jpg';
import { LangContext } from 'contexts/LangContext';

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
          />

          <LeadershipCard
            imgSRC={VictoriaZhadkoIMG}
            name={t('leadership_zhadko_name')}
            position={t('leadership_zhadko_position')}
            description={t('leadership_zhadko_description')}
          />

          <LeadershipCard
            imgSRC={MyroslavaKotorovychIMG}
            name={t('leadership_kotorovych_name')}
            position={t('leadership_kotorovych_position')}
            description={t('leadership_kotorovych_description')}
          />
          
          <LeadershipCard
            imgSRC={DmytroTavanetsIMG}
            name={t('leadership_tavanets_name')}
            position={t('leadership_tavanets_position')}
            description={t('leadership_tavanets_description')}
          />
        </div>
      </div>
    </section>
  );
}
import React, { useContext } from 'react';
import styles from './PersonInfoModule.module.scss';
import { LangContext } from 'global/LangContext';
import OlesYaskoIMG from 'images/leadership/Oles_Yasko/2.jpg';
import VictoriaZhadkoIMG from 'images/leadership/Victoria_Zhadko/2.jpg';
import DmytroTavanetsIMG from 'images/leadership/Dmytro_Tavanets/2.jpg';

interface Props {
  name: string;
}

export const PersonInfo = ({ name }: Props) => {
  const { t } = useContext(LangContext);

  const getPersonImageSRC = () => {
    switch (name) {
      case 'oles_yasko':
        return OlesYaskoIMG;

      case 'victoria_zhadko':
        return VictoriaZhadkoIMG;
  
      case 'dmytro_tavanets':
        return DmytroTavanetsIMG;

      default:
        return '';
    }
  }

  return (
    <section className={styles.personInfo} id="personInfo">
      <div className={styles.darker} />
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={getPersonImageSRC()}
            alt={name}
          />
        </div>

        <h2 className={styles.heading}>{t(`personInfo_${name}_name`)}</h2>

        {t(`personInfo_${name}_text`)
          .split('\n')
          .map((text: string) => (
            <p
              className={styles.paragraph}
              key={text}
            >
              {text}
            </p>
          ))
        }
      </div>
    </section>
  );
}

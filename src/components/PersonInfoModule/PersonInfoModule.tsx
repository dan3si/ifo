import React, { useContext } from 'react';
import styles from './PersonInfoModule.module.scss';
import { LangContext } from 'global/LangContext';
import API_URL from 'global/API';

interface Props {
  name: string;
}

export const PersonInfo = ({ name }: Props) => {
  const { t } = useContext(LangContext);

  return (
    <section className={styles.personInfo} id="personInfo">
      <div className={styles.darker} />
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={`${API_URL}/person_images/${name}`}
            alt={name}
          />
        </div>

        <h2 className={styles.heading}>{t(`personInfo_${name}_name`)}</h2>
        <p className={styles.paragraph}>{t(`personInfo_${name}_text_firstPart`)}</p>
        <p className={styles.paragraph}>{t(`personInfo_${name}_text_lastPart`)}</p>
      </div>
    </section>
  );
}

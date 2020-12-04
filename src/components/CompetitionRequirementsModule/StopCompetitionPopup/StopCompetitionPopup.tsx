import React, { useEffect, useState, useContext } from 'react';
import styles from './StopCompetitionPopup.module.scss';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import { LangContext } from 'global/LangContext';

export const StopCompetitionPopup = () => {
  const [componentIsVisible, setComponentIsVisible] = useState(true);
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [darkerIsVisible, setDarkerIsVisible] = useState(false);

  useEffect(() => {
    setPopupIsVisible(true);
    setDarkerIsVisible(true);
  }, []);

  const { t } = useContext(LangContext);

  if (!componentIsVisible) return null;
  
  return (
    <>
      <div className={cn(styles.darker, { [styles.darkerIsVisible]: darkerIsVisible })} />
      <div className={cn(styles.popup, { [styles.popupIsVisible]: popupIsVisible })}>
        <h2 className={styles.heading}>{t('stopCompetitionPopup_heading')}</h2>

        <p className={styles.text}>{t('stopCompetitionPopup_text')}</p>

        <button
          className={styles.close}
          onClick={() => {
            setPopupIsVisible(false);
            setDarkerIsVisible(false);
            setTimeout(() => {
              setComponentIsVisible(false);
            }, 1000);
          }}
        >
          {t('stopCompetitionPopup_button_text')}
        </button>
      </div>
    </>
  );
}

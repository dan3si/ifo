import React, { useContext } from 'react';
import styles from './ContactsModule.module.scss';
import { LangContext } from 'global/LangContext';
import facebookLogo from '../../images/socials/facebook.png';

export const Contacts = () => {
  const { t } = useContext(LangContext);

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('contacts_heading')}</h2>
        <div className={styles.contactsWrapper}>
          <div className={styles.textWrapper}>
            <div className={styles.email}>
              <a href="mailto:ifo.kyiv@gmail.com"  className={styles.link}>ifo.kyiv@gmail.com</a>
            </div>
            <div className={styles.phone}>
              <a href="tel: +38 (068) 703-31-83"  className={styles.link}>+38 (068) 703-31-83</a>
            </div>
            <div className={styles.address}>{t('contacts_address')}</div>
            <div className={styles.socialsWrapper}>
              <a
                className={styles.linkFacebook}
                href="https://www.facebook.com/InternationalFreedomOrchestra/?fref=mentions"
                target="blank"
                title="facebook"
              >
                <img
                  className={styles.facebookLogo}
                  src={facebookLogo}
                  alt="facebook logo"
                />
              </a>
            </div>
          </div>
        

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.498433175442!2d30.510421615963175!3d50.45044247947535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5964b7c2d3%3A0x44c473538d36986c!2zMTRELCDRg9C7LiDQr9GA0L7RgdC70LDQstC-0LIg0JLQsNC7LCAxNNCULCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1602859315925!5m2!1sru!2sua"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="address"
            className={styles.map}
          />
        </div>
      </div>
    </section>
  );
}

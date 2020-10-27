import React, { useContext } from 'react';
import styles from './RequestModule.module.scss';
import { LangContext } from 'contexts/LangContext';

export const Request = () => {
  const { t } = useContext(LangContext);

  return (
    <section className={styles.request} id="request">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('request_heading')}</h2>
        <form
          action="https://formspree.io/f/xyybeejy"
          method="POST"
          className={styles.form}
        >
          <input
            className={styles.inputString}
            name="name"
            type="text"
            autoComplete="off"
            placeholder={t('request_name_placeholder')}
            required
          />
          <input
            className={styles.inputString}
            name="email"
            type="email"
            autoComplete="off"
            placeholder={t('request_email_placeholder')}
            required
          />
          <input
            className={styles.inputString}
            name="phone"
            type="text"
            autoComplete="off"
            placeholder={t('request_phone_placeholder')}
            required
          />
          <textarea
            className={styles.inputTextarea}
            name="links"
            placeholder={t('request_links_placeholder')}
            required
          />
          <textarea
            className={styles.inputTextarea}
            name="cv"
            placeholder={t('request_cv_placeholder')}
            required
          />
          <button className={styles.submit} type="submit">{t('request_submit')}</button>
        </form>
      </div>
    </section>
  )
}

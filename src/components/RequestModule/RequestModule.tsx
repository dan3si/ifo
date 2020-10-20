import React from 'react';
import styles from './RequestModule.module.scss';

export const Request = () => {
  return (
    <section className={styles.request} id="request">
      <div className={styles.darker}></div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Подати заявку</h2>
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
            placeholder="Ваше iм'я:"
            required
          />
          <input
            className={styles.inputString}
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Ваш email:"
            required
          />
          <input
            className={styles.inputString}
            name="phone"
            type="text"
            autoComplete="off"
            placeholder="Ваш телефон:"
            required
          />
          <textarea
            className={styles.inputTextarea}
            name="link"
            placeholder="Вашi вiдео:"
            required
          />
          <textarea
            className={styles.inputTextarea}
            name="cv"
            placeholder="Розкажiть про себе:"
            required
          />
          <button className={styles.submit} type="submit">Вiдправити</button>
        </form>
      </div>
    </section>
  )
}

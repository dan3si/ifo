import React from 'react';
import styles from './CompetitionModule.module.scss';
import { Link } from 'react-router-dom';
import scrollToBlock from 'functions/ScrollToBlock';

export const Competition = () => {
  return (
    <section className={styles.competition} id="competition">
      <div className={styles.container}>
        <h2 className={styles.heading}>Конкурс</h2>
        <p className={styles.paragraph}>
          До уваги виконавців на струнно-смичкових інструментах:
          <br/><br/>
          Новостворений міжнародний камерний оркестр <strong>International Freedom Orchestra</strong> оголошує
          конкурсний набір артистів віком 18-33 років,
          стан здоров'я яких дозволяє вести активну гастрольну діяльність,
          у групи 1 та 2 скрипок, альтів, віолончелей та контрабасів.
          <br/><br/><br/>
          <Link
            className={styles.totermsLink}
            to="/competition"
            onClick={() => scrollToBlock('competitionTerms')}
          >
            Умови участі у конкурсному відборі
          </Link>
        </p>
      </div>
    </section>
  );
}

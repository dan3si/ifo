import React, { useState } from 'react';
import cn from 'classnames';
import styles from './HeaderModule.module.scss';
import logo from 'images/logo.png';
import { Link } from 'react-router-dom';
import scrollToBlock from 'functions/ScrollToBlock';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <header className={cn({
      [styles.menuIsOpen]: menuIsOpen,
    })}>
      <div
        className={styles.burgerToggler}
        onClick={toggleMenu}
      >
        <span className={styles.burgerToggler__stripe}></span>
        <span className={styles.burgerToggler__stripe}></span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.darker}></div>
        <div className={styles.container}>
          <Link
            to="/"
            onClick={() => {
              scrollToBlock('promo');
              toggleMenu();
            }}
          >
            <img
              src={logo}
              className={styles.logo}
              alt="IFO logo"
            />
          </Link>
          
          <nav className={styles.nav}>
            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('about');
                toggleMenu();
              }}
            >
              Про нас
            </Link>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('leadership');
                toggleMenu();
              }}
            >
              Наша команда
            </Link>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('competition');
                toggleMenu();
              }}
            >
              Конкурс
            </Link>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('request');
                toggleMenu();
              }}
            >
              Подати заявку
            </Link>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('contacts');
                toggleMenu();
              }}
            >
              Контакти
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

import React, { useState, useContext } from 'react';
import cn from 'classnames';
import styles from './HeaderModule.module.scss';
import logo from 'images/logo.png';
import { Link } from 'react-router-dom';
import scrollToBlock from 'functions/ScrollToBlock';
import { LangContext } from 'contexts/LangContext';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  const { t, setLang, value } = useContext(LangContext);
  
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
            <select
              name="langSetter"
              id="langSetter"
              onChange={(e) => setLang(e.target.value)}
              value={value}
            >
              <option value="en">English</option>
              <option value="ua">Українська</option>
            </select>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('about');
                toggleMenu();
              }}
            >
              {t('headerLink_about')}
            </Link>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('leadership');
                toggleMenu();
              }}
            >
              {t('headerLink_leadership')}
            </Link>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('competition');
                toggleMenu();
              }}
            >
              {t('headerLink_competition')}
            </Link>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('request');
                toggleMenu();
              }}
            >
              {t('headerLink_request')}
            </Link>

            <Link
              className={styles.navLink}
              to="/"
              onClick={() => {
                scrollToBlock('contacts');
                toggleMenu();
              }}
            >
              {t('headerLink_contacts')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

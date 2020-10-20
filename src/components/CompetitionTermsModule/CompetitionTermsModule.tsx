import React from 'react';
import styles from './CompetitionTermsModule.module.scss';
import { Link } from 'react-router-dom';
import scrollToBlock from 'functions/ScrollToBlock';

export const CompetitionTerms = () => {
  return (
    <section className={styles.competitionTerms} id="competitionTerms">
      <div className={styles.container}>
        <h2 className={styles.heading}>Умови участі у конкурсному відборі:</h2>
        <p className={styles.paragraph}>
          1 тур конкурсу проводиться за наданими
          в <Link to="/" className={styles.link} onClick={() => scrollToBlock('request')}>заявці</Link> відеозаписами
          творів пп.1,2,3s Програмних вимог відповідної якості з чітким зображенням обличчя та
          виконавського апарату, напам'ять, у повний зріст, у супроводі оркестру або ф-но. Результати 1 туру будуть
          оголошені до 15.12.2020 на сайті/електронною поштою.
          <br/><br/>
          2 тур відбудеться очно 18-19.12.2020 об 11.00.
          Місце проведення конкурсних прослуховувань, порядок і
          орієнтовний час виступів учасникам 2 туру буде узгоджено
          й повідомлено окремо.
          <br/><br/>
          Результати конкурсу будуть оголошені
          безпосередньо по закінченні конкурсу й розміщені на сайті.
          Початок репетиційної роботи – січень 2021р. Умови працевлаштування
          атистів оркестру – згідно чинного законодавства України
          та передбачають колективне медично-соціальне страхування.
          Перевага надається працевлаштуванню за основним місцем роботи.
          Заробітна плата – згідно штатного розпису, складається з основної (50%)
          та бонусної (до 50%) частини й становитиме 20-40 тис.грн.

          <span className={styles.textAligner}>Програмні вимоги:</span>
          <ul>
            <li className={styles.professionsItem}>
              Скрипка:
              <ol>
                <li className={styles.programItem}>
                  Й. С. Бах - 2 різнохарактерні танці з сонат чи партит для скрипки соло
                </li>
                <li className={styles.programItem}>
                  В. А. Моцарт - один із Концертів N3,4,5 для скрипки з
                  оркестром на вибір кандидата (експозиція Іч. та каденція до Iч)
                </li>
                <li className={styles.programItem}>
                  Романтичний твір віртуозного характеру
                </li>
                <li className={styles.programItem}>
                  Виконання фрагментів оркестрових партій
                </li>
                <li className={styles.programItem}>
                  Читання з листа
                </li>
              </ol>
            </li>

            <li className={styles.professionsItem}>
              Альт:
              <ol>
                <li className={styles.programItem}>
                  М. Регер - 2 різнохарактерні частини з сюїти для альта соло або
                  Й. С. Бах - 2 різнохарактерні танці з сюїт для віолончелі соло
                </li>
                <li className={styles.programItem}>
                  Один з концертів на вибір кандидата: Я. Стаміца або Ф. А. Хофмайстера (експозиція Іч. та каденція до Iч)
                </li>
                <li className={styles.programItem}>
                  Віртуозний твір або віртуозна частина концерту
                </li>
                <li className={styles.programItem}>
                  Виконання фрагментів оркестрових партій
                </li>
                <li className={styles.programItem}>
                  Читання з листа
                </li>
              </ol>
            </li>

            <li className={styles.professionsItem}>
              Віолончель:
              <ol>
                <li className={styles.programItem}>
                  Й. С. Бах - 2 різнохарактерні танці з сюїт для віолончелі соло
                </li>
                <li className={styles.programItem}>
                  Й. Гайдн - Концерт c-dur або d-dur (експозиція Іч. та каденція до Iч)
                </li>
                <li className={styles.programItem}>
                  Романтична п'єса віртуозного характеру (Д. Поппер, П. Чайковський, К. Сен-Санс)
                </li>
                <li className={styles.programItem}>
                  Виконання фрагментів оркестрових партій
                </li>
                <li className={styles.programItem}>
                  Читання з листа
                </li>
              </ol>
            </li>

            <li className={styles.professionsItem}>
              Контрабас:
              <ol>
                <li className={styles.programItem}>
                  Й. С. Бах - 2 різнохарактерні танці з сюїт для віолончелі соло або
                  Г. Фриба - 2 різнохарактерні танці з Сюїти в старовинному стилі для контрабаса соло
                </li>
                <li className={styles.programItem}>
                  Один з концертів на вибір кандидата: А. К. Діттерсдорф, Й. Б. Ванхаль,
                  Дж. Ботезіні N2 h-moll (експозиція Іч. та каденція до Iч)
                </li>
                <li className={styles.programItem}>
                  Віртуозний твір
                </li>
                <li className={styles.programItem}>
                  Виконання фрагментів оркестрових партій
                </li>
                <li className={styles.programItem}>
                  Читання з листа
                </li>
              </ol>
            </li>
          </ul>
        </p>
      </div>
    </section>
  )
}

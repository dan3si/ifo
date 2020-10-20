import React from 'react';
import styles from './LeadershipModule.module.scss';
import { LeadershipCard } from './LeadershipCard';
import OlesYaskoIMG from '../../images/leadership/Oles_Yasko.jpg';
import MyroslavaKotorovychIMG from '../../images/leadership/Myroslava_Kotorovych.jpg';
import VictoriaZhadkoIMG from '../../images/leadership/Victoria_Zhadko.jpg';
import DmytroTavanetsIMG from '../../images/leadership/Dmytro_Tavanets.jpg';

export const Leadership = () => {
  return (
    <section className={styles.leadership} id="leadership">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>Наша команда</h2>
        <div className={styles.cardwrapper}>

          <LeadershipCard
            imgSRC={OlesYaskoIMG}
            name="Олесь Ясько"
            position="Художній керівник"
            description="Народний артист України"
          />

          <LeadershipCard
            imgSRC={VictoriaZhadkoIMG}
            name="Вікторія Жадько"
            position="Головний диригент"
            description="Українська дириґентка та гітаристка,
              доцент НМАУ та ЛДАКМ.
              Заслужена артистка України.
              Лауреат нацiональних та мiжнародних конкурсів"
          />

          <LeadershipCard
            imgSRC={MyroslavaKotorovychIMG}
            name="Мирослава Которович"
            position="Музичний керівник"
            description="Українська скрипалька. Заслужена артистка України,
              доцент кафедри скрипки Національної музичної
              академії України імені П. І. Чайковського"
          />
          
          <LeadershipCard
            imgSRC={DmytroTavanetsIMG}
            name="Дмитро Таванець"
            position="Виконавчий директор"
            description={`Заслужений артист України, лауреат мiжнародних конкурсів,
              соліст Національного ансамблю солістів "Київська камерата"`}
          />
        </div>
      </div>
    </section>
  )
}
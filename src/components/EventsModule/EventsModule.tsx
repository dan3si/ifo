import React, { useContext, useEffect, useState } from 'react';
import styles from './EventsModule.module.scss';
import { LangContext } from 'global/LangContext';
import API_URL from 'global/API';
import { Link } from 'react-router-dom';
import scrollToBlock from 'global/ScrollToBlock';
import loadingGIF from 'images/loading.gif';

export const Events = () => {
  const { t } = useContext(LangContext);
  const [events, setEvents] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/events`)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setIsDataLoaded(true);
      });
  },
  []);

  return (
    <section className={styles.events} id="events">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('events_heading')}</h2>

        {isDataLoaded
          ? events.map(
              ({ id, title, description }: { id: string, title: string, description: string }) => (
                <div
                  className={styles.eventWrapper}
                  key={id}
                >
                  <Link
                    to={`/events/${id}`}
                    onClick={() => scrollToBlock('event')}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        className={styles.eventImage}
                        src={`${API_URL}/events/images/${id}/1`}
                        alt={title}
                      />
                    </div>
                  </Link>
                  
                  <div className={styles.textWrapper}>
                    <Link
                      to={`/events/${id}`}
                      onClick={() => scrollToBlock('event')}
                    >
                      <h3 className={styles.title}>{title}</h3>
                    </Link>
                    <p className={styles.eventDescription}>
                      {description.slice(0, 150)}
                      {description.slice(0, 150) !== description && '...'}
                    </p>
                  </div>
                </div>
              )
            )
          : <img
              className={styles.loadingGIF}
              src={loadingGIF}
              alt="Loading gif"
            />
        }
      </div>
    </section>
  );
}

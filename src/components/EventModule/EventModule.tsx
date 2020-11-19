import React, { useContext, useEffect, useState } from 'react';
import styles from './EventModule.module.scss';
import API_URL from 'global/API';

interface Props {
  eventId: string;
}

export const Event = ({ eventId }: Props) => {
  const [event, setEvent] = useState({
    id: '',
    title: '',
    description: '',
  });

  useEffect(() => {
    fetch(`${API_URL}/events/${eventId}`)
      .then(res => res.json())
      .then(data => setEvent(data));
  },
  []);

  return (
    <section className={styles.event} id="event">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>{event.title}</h2>
        <img
          className={styles.image}
          src={`${API_URL}/events/images/${eventId}`}
          alt={event.title}
        />
        {event.description
        .split('\n')
        .map((text: string) => <p className={styles.paragraph}>{text}</p>)}
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
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
    imagesCount: 0,
  });

  useEffect(() => {
    fetch(`${API_URL}/events/${eventId}`)
      .then(res => res.json())
      .then(data => setEvent(data));
  }, [eventId]);

  return (
    <section className={styles.event} id="event">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>{event.title}</h2>

        {event.description
          .split('\n')
          .map(
            (text: string) => (
              <p
                className={styles.paragraph}
                key={event.id}
              >
                {text}
              </p>
            )
          )
        }
        
        {new Array(event.imagesCount).fill('')
          .map((el, imageID) => (
            <img
              className={styles.image}
              src={`${API_URL}/events/images/${eventId}/${imageID + 1}`}
              alt={event.title}
            />
          ))
        }
      </div>
    </section>
  );
}

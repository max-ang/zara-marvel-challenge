import React from 'react';
import styles from './index.module.css';
import ComicCard from '../ComicCard';
import { getComicsByCharacterId } from '@/services';

export default async function ComicList({ characterId }) {
  const { comics } = await getComicsByCharacterId(characterId);

  return (
    <div className={styles['comics-container']}>
      <h3 className={styles['comics-container__title']}>Comics</h3>
      <div className={styles['comics-container__list']}>
        {comics?.map((comic) => (
          <ComicCard
            key={comic.id}
            comic={comic}
          />
        ))}
      </div>
    </div>
  );
}

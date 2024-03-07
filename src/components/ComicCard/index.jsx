
import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

const getDate = (dates) => {
  const onSaleDate = dates?.filter((date) => date.type === 'onsaleDate');
  const date = new Date(onSaleDate[0]?.date);
  return date?.getFullYear() || '';
};

export default async function ComicCard({ comic }) {
  const { thumbnail, dates, title } = comic;

  return (
    <div className={styles.comic}>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        width={80}
        height={80}
      />
      <span className={styles.comic__title}>
        {title}
      </span>
      <span className={styles.comic__date}>{getDate(dates)}</span>
    </div>
  );
}
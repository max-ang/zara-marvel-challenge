"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';
import { useFavoriteContext } from '@/utils/context';
import Icon from '@/components/Icon';
import { ICON_TYPES } from '@/constants';

export default function Header() {
  const { favorites } = useFavoriteContext();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo}>
        <Image
          src="/icons/marvel_logo.svg"
          alt="Marvel Logo"
          width={130}
          height={52}
        />
      </Link>
      <Link href={'/favorites'} className={styles['header__favs']}>
        <div className={styles["header__favs__icon"]}>
          <Icon
            type={ICON_TYPES.FAV}
          />
        </div>
        <span className={styles['header__favs__count']}>{favorites?.length}</span>
      </Link>
    </header>
  );
}

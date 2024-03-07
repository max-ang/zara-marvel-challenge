'use client';

import { useFavoriteContext } from '@/utils/context';
import { ICON_TYPES } from '@/constants';
import styles from './index.module.css';
import Icon from '@/components/Icon';

export default function FavoriteButton({ character, className }) {
  const { favorites, setFavorites } = useFavoriteContext();
  const isFavorite = favorites.find(fav => fav.id === character.id);

  const handleFavorite = () => {
    const characterAlreadyExist = favorites.find(fav => fav.id === character.id);
    
    if (characterAlreadyExist) {
      setFavorites(oldFavs => oldFavs.filter(fav => fav.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  }

  return (
    <div onClick={handleFavorite} className={styles["favorite-button"]}>
      <Icon
        className={className}
        type={isFavorite ? ICON_TYPES.FAV : ICON_TYPES.FAV_UNSELECTED}
      />
    </div>
  );
}

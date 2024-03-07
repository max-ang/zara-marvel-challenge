import Image from "next/image";
import styles from './page.module.css';
import ComicList from "@/components/ComicList";
import FavoriteButton from "@/components/FavoriteButton";
import { getCharacterById } from "@/services";

export default async function Character({ params }) {
  const { id } = params;
  const { data } = await getCharacterById(id);

  return (
    <section className={'character-info'}>
      <div className={`${styles['character-info__header']} corner`}>
        <div className={styles['character-info__header__thumbnail']}>
          <Image
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt={data.name}
            width={320}
            height={320}
          />
        </div>
        <div className={styles['character-info__header__info']}>
          <div className={styles['character-info__header__info__title']}>
            <div className={styles['character-info__header__info__title__text']}>
              {data.name}
            </div>
            <div className={styles['character-info__header__info__title__icon']}>
              <FavoriteButton
                character={data}
              />
            </div>
          </div>
          <div className={styles['character-info__header__info__description']}>
            {data.description}
          </div>
        </div>
      </div>

      <ComicList
        characterId={data.id}
      />
    </section>
  );
}

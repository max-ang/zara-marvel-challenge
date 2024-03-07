
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";

export default async function CharacterCard({ character }) {
  const { id, name, thumbnail } = character;
  return (
    <div className={styles["character-card"]}>
      <Link
        href={`/character/${id}`}
        className={styles["character-card__thumbnail"]}
      >
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          width={80}
          height={80}
        />
      </Link>
      <div className={styles["character-card__break"]}></div>
      <div
        className={`${styles["character-card__name"]} corner`}
      >
        <span>{name}</span>
        <div className={styles["character-card__name__icon"]}>
          <FavoriteButton character={character} className={styles["favorite-button"]} />
        </div>
      </div>
    </div>
  );
}

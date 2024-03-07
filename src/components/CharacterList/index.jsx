import styles from "./index.module.css";
import CharacterCard from "../CharacterCard";

export default async function CharacterList({ characters }) {
  return (
    <div className={styles["marvel-container_character-list"]}>
      {characters?.map((element) => (
          <CharacterCard
            key={element.id}
            character={element}
          />
        ))}
    </div>
  );
}

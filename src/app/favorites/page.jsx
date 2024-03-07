"use client"
import styles from "../page.module.css";
import { useFavoriteContext } from "../../utils/context";
import CharacterList from "@/components/CharacterList";

export default function FavoritePage() {
  const { favorites } = useFavoriteContext();

  return (
    <main className={styles["marvel-container"]}>
      <h2>Favorites</h2>
      <CharacterList characters={favorites} />
    </main>
  );
}

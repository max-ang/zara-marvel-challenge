import styles from "./page.module.css";
import Search from "@/components/Search";
import CharacterList from "@/components/CharacterList";
import { getCharacters } from "@/services";

export default async function Home({ searchParams }) {
  const query = searchParams?.query || "";
  const { characters, totalValues } = await getCharacters(query);

  return (
    <main className={styles["marvel-container"]}>
      <Search
        placeholder="Search a character..."
        totalValues={totalValues}
      />

      <CharacterList
        characters={characters}
      />
    </main>
  );
}

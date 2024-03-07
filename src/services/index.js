import generateCredentials from "@/utils/generateCredentials";

export const getCharacters = async (query) => {
  const credentials = generateCredentials();
  const response = await fetch(
    `${process.env.API_URL}/characters?limit=50${
      query && `&nameStartsWith=${query}`
    }&${credentials}`
  );

  const data = await response.json();

  return {
    characters: data?.data?.results || [],
    totalValues: data?.data?.count || 0,
  };
};

export const getCharacterById = async (id) => {
  const credentials = generateCredentials();
  const response = await fetch(`${process.env.API_URL}/characters/${id}?${credentials}`, { cache: 'no-store' });
  const data = await response.json();

  return {
    data: data?.data?.results[0] || {},
  }
}

export const getComicsByCharacterId = async (id) => {
  const credentials = generateCredentials();
  const response = await fetch(`${process.env.API_URL}/characters/${id}/comics?limit=20&orderBy=onsaleDate&${credentials}`);
  const data = await response.json();

  return {
    comics: data?.data?.results || {},
  }
}
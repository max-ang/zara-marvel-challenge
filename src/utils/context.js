"use client"
import { createContext, useContext, useState } from "react"

const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
})

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavoriteContext = () => useContext(FavoritesContext);
import React  from "react";

export const FavoritesContext = React.createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = React.useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currFavoriteIds => [...currFavoriteIds, id]))
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currFavoriteids) => currFavoriteids.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;

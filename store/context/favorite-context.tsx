import React from 'react';
import { PropsWithChildren, createContext, useState } from 'react';

export interface FavoritesContextType {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function FavoritesContextProvider({ children }: PropsWithChildren) {
  const [favoriteProductIds, setFavoriteProductId] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteProductId(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteProductId(currentFavIds =>
      currentFavIds.filter(productId => productId !== id),
    );
  }

  const value = {
    ids: favoriteProductIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;

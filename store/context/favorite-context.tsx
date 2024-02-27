import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: () => { },
    removeFavorite: () => { },
});

function FavoritesContextProvider({ children }) {

    const [favoriteProductIds, setFavoriteProductId] = useState([])

    function addFavorite(id) {
        setFavoriteProductId((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavorite(id) {
        setFavoriteProductId((currentFavIds) =>
        currentFavIds.filter((productId)=>productId !== id))
    }

    const value = {
        ids: favoriteProductIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite

    }


    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider
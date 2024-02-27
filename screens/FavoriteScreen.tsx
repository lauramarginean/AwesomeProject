import { FlatList, StyleSheet, View } from "react-native"
import * as React from 'react';
import { PRODUCTS, Product } from "../data/data";
import ProductItem from "../components/ProductItem";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorite-context";

function FavoriteScreen() {
    const favoriteProductContext = useContext(FavoritesContext)

    const favoriteProducts = PRODUCTS.filter((productItem) =>
        favoriteProductContext.ids.includes(productItem.id)
    )

    function renderProductsItem(itemData: { item: Product }) {
        return (
            <ProductItem id={itemData.item.id} title={itemData.item.title} imageUrl={itemData.item.imageUrl} 
            price={itemData.item.price} rating={itemData.item.rating}/>
        );
    }

    return (
        <View>
            <FlatList
                data={favoriteProducts}
                keyExtractor={(item) => item.id}
                renderItem={renderProductsItem}
            />
        </View>
    )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
    }
});
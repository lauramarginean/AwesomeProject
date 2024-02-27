import { useRoute } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, View } from "react-native"
import { useContext, useEffect } from "react";
import { FavoritesContext } from "../store/context/favorite-context";
import React from "react";
import { PRODUCTS } from "../data/data";

function ProductDetailScreen({ navigation }: any) {
    const favoriteProductContext = useContext(FavoritesContext);
    const route = useRoute();
    const { productId } = route.params

    const selectedPreoduct = PRODUCTS.find((product)=>product.id === productId)

    const isProductFavorite = favoriteProductContext.ids.includes(productId)

    function headerButtonPressed() {
        if (isProductFavorite) {
            favoriteProductContext.removeFavorite(productId)
        } else {
            favoriteProductContext.addFavorite(productId)
        }
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Button
                        title={isProductFavorite ? "unfavorite" : "favorite"}
                        onPress={
                            headerButtonPressed
                        } />
                )
            }
        })

    }, [headerButtonPressed]);

    return <View style={styles.item}>
        <Image source={{ uri: selectedPreoduct?.imageUrl }} style={styles.image} />
        <View >
            <Text>{selectedPreoduct?.title} </Text>
            <Text>Price: {selectedPreoduct?.price} </Text>
            <Text>Rating: {selectedPreoduct?.rating} </Text>
            <Text>Desctiption: {selectedPreoduct?.description} </Text>
        </View>

    </View>
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
    item:{
        margin:16,
    },
    
    image: {
        width: '100%',
        height: 300,
     
    },

});
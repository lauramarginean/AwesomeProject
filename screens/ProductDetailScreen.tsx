import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useCallback, useContext, useEffect } from 'react';
import { FavoritesContext } from '../store/context/favorite-context';
import React from 'react';
import { PRODUCTS } from '../data/data';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ProductDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetail'
>;

function ProductDetailScreen({ route, navigation }: ProductDetailScreenProps) {
  const favoriteProductContext = useContext(FavoritesContext);
  const { productId } = route.params;

  const selectedProduct = PRODUCTS.find(product => product.id === productId);

  const isProductFavorite = favoriteProductContext.ids.includes(productId);

  const headerButtonPressed = useCallback(() => {
    if (isProductFavorite) {
      favoriteProductContext.removeFavorite(productId);
    } else {
      favoriteProductContext.addFavorite(productId);
    }
  }, [favoriteProductContext, isProductFavorite, productId]);

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return (
          <Button
            title={isProductFavorite ? 'unfavorite' : 'favorite'}
            onPress={headerButtonPressed}
          />
        );
      },
    });
  }, [headerButtonPressed, isProductFavorite, navigation]);

  return (
    <View style={styles.item}>
      <Image source={{ uri: selectedProduct?.imageUrl }} style={styles.image} />
      <View>
        <Text>{selectedProduct?.title} </Text>
        <Text>Price: {selectedProduct?.price} </Text>
        <Text>Rating: {selectedProduct?.rating} </Text>
        <Text>Description: {selectedProduct?.description} </Text>
      </View>
    </View>
  );
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
  item: {
    margin: 16,
  },

  image: {
    width: '100%',
    height: 300,
  },
});

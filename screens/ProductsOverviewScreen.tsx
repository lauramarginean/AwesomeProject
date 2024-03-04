import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PRODUCTS, Product } from '../data/data';
import ProductItem from '../components/ProductItem';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProductOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductOverview'
>;

function ProductsOverviewScreen({ route }: ProductOverviewScreenProps) {
  const { categoryId } = route.params;

  const displayedProducts = PRODUCTS.filter(productItem => {
    return productItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={displayedProducts}
        keyExtractor={item => item.id}
        renderItem={renderProductsItem}
      />
    </View>
  );
}

function renderProductsItem(itemData: { item: Product }) {
  return (
    <ProductItem
      id={itemData.item.id}
      title={itemData.item.title}
      imageUrl={itemData.item.imageUrl}
      price={itemData.item.price}
      rating={itemData.item.rating}
    />
  );
}

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 5,
    backgroundColor: '#7393B3',
  },
});

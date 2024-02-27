import { FlatList, StyleSheet, Text, View } from "react-native";
import { PRODUCTS, Product } from "../data/data";
import { useRoute } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";

function ProductsOverviewScreen() {

    const route = useRoute();
    const { categoryId } = route.params

    const displayedProducts = PRODUCTS.filter((productItem) => {
        return productItem.categoryIds.indexOf(categoryId) >= 0
    })

    function renderProductsItem(itemData: { item: Product }) {
        return (
            <ProductItem id={itemData.item.id} title={itemData.item.title} imageUrl={itemData.item.imageUrl}
                price={itemData.item.price} rating={itemData.item.rating} />
        );
    }

    return (
        <View style={styles.sectionContainer}>
            <FlatList
                data={displayedProducts}
                keyExtractor={(item) => item.id}
                renderItem={renderProductsItem}
            />
        </View>
    )
}

export default ProductsOverviewScreen;

const styles = StyleSheet.create({

    sectionContainer: {
        padding: 5,
        backgroundColor: "#7393B3",
    },
   

});

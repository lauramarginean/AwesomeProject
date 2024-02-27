import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { PRODUCTS, Product } from "../data/data";
import ProductItem from "../components/ProductItem";

function HomeScreen() {

    const navigation = useNavigation();
    function renderProductsItem(itemData: { item: Product }) {
        return (
            <ProductItem id={itemData.item.id} title={itemData.item.title} imageUrl={itemData.item.imageUrl}
                price={itemData.item.price} rating={itemData.item.rating} />
        );
    }


    return (
        <ScrollView>
            <View style={styles.sectionContainer}>
                <Image source={{ uri: "https://www.shutterstock.com/image-vector/online-pharmacy-medicine-medical-app-260nw-2039558462.jpg" }}
                    style={styles.image} />

                <TouchableOpacity style={styles.loginBtn} >
                    <Text>Shop Now </Text>
                </TouchableOpacity>
                <Text style={styles.text}>New Arrivals</Text>
                <FlatList
                    data={PRODUCTS}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    renderItem={renderProductsItem}
                />
                <Text style={styles.text}>Best Sellers</Text>
                <FlatList
                    data={PRODUCTS}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    renderItem={renderProductsItem}
                />
            </View>
        </ScrollView>)
}

export default HomeScreen


const styles = StyleSheet.create({
 
    sectionContainer: {
        alignItems: "center",

    },
    text: {
        margin: 10,
    },
    loginBtn: {
        width: "30%",
        backgroundColor: "#7393B3",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    image: {

        width: '100%',
        height: "30%",
        margin: 8
    },


});


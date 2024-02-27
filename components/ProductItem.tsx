import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

function ProductItem({ id, title, imageUrl, price, rating }: any) {

    const navigation = useNavigation()

    function selectProduct() {
        navigation.navigate('ProductDetail', {
            productId: id
        });
    }

    return (
        <View >
            <Pressable style={({ pressed }) => [pressed ? styles.itemPressed : null]}
                onPress={selectProduct}>
                <View style={styles.listItem}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <View style={styles.item}>
                        <Text style={styles.title}>{title} </Text>
                        <Text>Price: {price} </Text>
                        <Text>Rating: {rating} </Text>
                    </View>

                </View>

            </Pressable>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    item: {
        flex: 6,
        flexDirection: 'column',
        marginHorizontal: 16,
        justifyContent: 'space-evenly',
    },
    itemPressed: {
        opacity: 0.5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listItem: {
        flexDirection: 'row',
        margin: 8,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        overflow: 'hidden',

    },
    image: {
        flex: 4,
        width: '100%',
        height: 150,
        margin: 8
    },

});

import { Pressable, StyleSheet, Text, View } from "react-native"

function CategoryGrid({ title, color,onPress }: any) {
    return <View style={styles.gridItem}>
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null
            ]}
            onPress={onPress}
        >
            <View style={[styles.innerContainer, { backgroundColor: color }]}>
                <Text >
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGrid;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

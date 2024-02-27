import { FlatList } from "react-native";

import Category, { CATEGORIES } from "../data/data";
import CategoryGrid from "../components/CategoryGrid";


function CategoriesScreen({navigation}:any) {

    function renderCategoryItem(itemData: {item:Category}) {
        function pressHandler(){
            navigation.navigate('ProductOverview',{
                categoryId: itemData.item.id
            })
        }
        return (
            <CategoryGrid title={itemData.item.title} color={itemData.item.color}
            onPress={pressHandler} />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
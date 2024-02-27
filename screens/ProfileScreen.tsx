import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

function ProfileScreen() {

    const navigation = useNavigation();

    useEffect(() => {
        getData()
    }, [])


    const removeData = async () => {
        try {
            await AsyncStorage.removeItem("username")
            navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }

    }

    const getData = () => {

        try {
            AsyncStorage.getItem("username")
                .then(value => {
                    if (value == null) {
                        navigation.navigate('Login')
                    }
                })

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Text onPress={
            removeData
        }>Log out</Text>
    );

}
export default ProfileScreen;
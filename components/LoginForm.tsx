import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

function LoginForm() {

    const navigation = useNavigation();

    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('pass');


    const setData = async () => {
        if (username.length == 0) {
            Alert.alert('Warning!')
        } else {
            try {
                await AsyncStorage.setItem("username", username)
                navigation.navigate('Profile')
            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <View style={styles.b}>
            <View style={styles.a}>
                <Text style={styles.title}> Login</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType="email-address"
                        value={username}
                        placeholder="Email"
                        placeholderTextColor="black"
                        onChangeText={(value) => setUsername(value)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="black"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={setData}>
                    <Text>LOGIN </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default LoginForm;

const styles = StyleSheet.create({
    a: {
        width: '90%',
        height: '80%',
        backgroundColor: 'pink',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    b: {
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#3AB4BA",
        marginBottom: 40,
    },
    forgot: {
        color: "black",
        fontSize: 11
    },

    inputView: {
        width: "90%",
        backgroundColor: "#3AB4BA",
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    loginBtn: {
        width: "70%",
        backgroundColor: "#fb5b5a",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },

});

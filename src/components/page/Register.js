import React, { useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const baseUrl = "https://reqres.in";


function Register({ navigation }) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onChangeNameHandler = (username) => {
        setUsername(username);
    };

    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };

    const onChangePasswordHandler = (password) => {
        setPassword(password);
    };

    const storeData = async (username) => {
        try {
            await AsyncStorage.setItem('username', username)
        } catch (e) {
            throw new Error("An error has occurred with storage");
        }
    }

    const onSubmitFormHandler = async (event) => {
        if (!username.trim() || !email.trim() || !password.trim()) {
            alert("Name or Email is invalid");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/api/users`, {
                username,
                email,
                password
            });
            if (response.status === 201) {
                alert(` You have created: ${JSON.stringify(response.data)}`);
                setIsLoading(false);
                setUsername('');
                setEmail('');
                setPassword('');
                storeData(username);
            } else {
                throw new Error("An error has occurred");
            }
        } catch (error) {
            alert("An error has occurred");
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/register.png')}
                    style={styles.cover}
                />
            </View>
            <View style={styles.downSection}>
                <Text style={styles.title}>
                    S'inscrire
                </Text>
                <View style={styles.inputBox}>
                    <MaterialCommunityIcons name="account" size={30} color={colors.GRAY} />
                    <TextInput
                        style={styles.input}
                        placeholder="Nom d'Utilisateur"
                        value={username}
                        editable={!isLoading}
                        onChangeText={onChangeNameHandler}
                    />
                </View>
                <View style={styles.inputBox}>
                    <MaterialCommunityIcons name="email" size={30} color={colors.GRAY} />
                    <TextInput
                        style={styles.input}
                        placeholder='Adresse Email'
                        value={email}
                        editable={!isLoading}
                        onChangeText={onChangeEmailHandler}
                    />
                </View>
                <View style={styles.inputBox}>
                    <MaterialCommunityIcons name="lock" size={30} color={colors.GRAY} />
                    <TextInput style={styles.input}
                        placeholder='Mot de Passe'
                        secureTextEntry
                        value={password}
                        editable={!isLoading}
                        onChangeText={onChangePasswordHandler}
                    />
                </View>

                <TouchableOpacity
                    style={styles.action}
                    onPress={onSubmitFormHandler}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator size="large" color={colors.WHITE} />

                    ) : (
                        <Text style={styles.actionText}>S'inscrire</Text>
                    )}
                </TouchableOpacity>
                <View style={styles.memberSection}>
                    <Text style={styles.memberText}>Deja membre ? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>S'identifier</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    topSection: {
        flex: 2
    },
    downSection: {
        flex: 3,
        padding: 20,
    },
    title: {
        color: colors.BLACK,
        fontSize: 30,
        margin: 20,
        fontWeight: 'bold',
    },
    cover: {
        width: '100%',
        height: '100%'
    },
    inputBox: {
        flexDirection: 'row',
        margin: 5,
        height: 50,

    },
    input: {
        borderBottomColor: colors.GRAY,
        borderBottomWidth: 1,
        width: '85%',
        marginLeft: 10,
    },
    action: {
        backgroundColor: colors.SECONDARY,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    actionText: {
        color: colors.BLACK,
        fontSize: 18,
        fontWeight: '800'
    },
    memberSection: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        flexDirection: 'row'
    },
    memberText: {
        color: colors.BLACK,
        fontSize: 14,
    },
    loginText: {
        color: colors.SECONDARY,
        fontSize: 14,
        fontWeight: '900'
    }
});

export default Register;
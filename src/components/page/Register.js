import React, { useContext, useState } from "react";
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AuthContext } from "../../providers/AuthProvider";


function Register({ navigation }) {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { isLoading, register } = useContext(AuthContext);


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
                        value={name}
                        editable={!isLoading}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.inputBox}>
                    <MaterialCommunityIcons name="email" size={30} color={colors.GRAY} />
                    <TextInput
                        style={styles.input}
                        placeholder='Adresse Email'
                        value={email}
                        editable={!isLoading}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.inputBox}>
                    <MaterialCommunityIcons name="lock" size={30} color={colors.GRAY} />
                    <TextInput style={styles.input}
                        placeholder='Mot de Passe'
                        secureTextEntry
                        value={password}
                        editable={!isLoading}
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.action}
                    onPress={() => {
                        register(name, email, password);
                    }}
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
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';

function Profile({ navigation }) {
    const [username, setUsername] = React.useState('default');

    React.useEffect(() => {
        const bootstrapAsync = async () => {

            try {
                setUsername(await AsyncStorage.getItem('username'));

            } catch (e) {
                setUsername('anonyme');
            }
        };

        bootstrapAsync();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <View style={styles.topSection}>
                <View style={styles.userCard}>
                    <View style={styles.userCardHeader}>
                        <Image
                            source={require('../../assets/images/defaultAvatar.jpeg')}
                            style={styles.userAvatar}
                        />
                        <View style={styles.userCardInformation}>
                            <View style={{ flex: 1, paddingBottom: 10 }}>
                                <Text style={styles.username}>{username}</Text>
                                <Text style={styles.email}>business@vanotis720.tech</Text>
                            </View>
                            <View style={styles.statsCard}>
                                <View style={styles.statsContent}>
                                    <Text style={styles.statsTitle}>Cours</Text>
                                    <Text style={styles.statsNumber}>102</Text>
                                </View>
                                <View style={styles.statsContent}>
                                    <Text style={styles.statsTitle}>Favoris</Text>
                                    <Text style={styles.statsNumber}>12</Text>
                                </View>
                                <View style={styles.statsContent}>
                                    <Text style={styles.statsTitle}>Id</Text>
                                    <Text style={styles.statsNumber}>#1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.userCardAction}>
                        <TouchableOpacity style={styles.actionAddCourse}>
                            <Text style={styles.textAddCourse}>Ajouter un Cours</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionLogout}>
                            <Text style={styles.textActionLogout}>Se deconnecter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.downSection}>

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
        flex: 1,
        backgroundColor: colors.GRAY,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userCard: {
        height: '100%',
        width: '90%',
        backgroundColor: colors.WHITE,
        borderRadius: 15,
        marginTop: '25%',
        borderColor: colors.GRAY,
        borderWidth: 1
    },
    userCardHeader: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 15
    },
    userCardAction: {
        flex: 1,
        flexDirection: 'row',
        margin: 15
    },
    actionAddCourse: {
        flex: 1,
        backgroundColor: colors.PRIMARY,
        marginEnd: 15,
        borderRadius: 10,
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionLogout: {
        flex: 1,
        backgroundColor: colors.WHITE,
        borderColor: colors.GRAY,
        borderWidth: 1,
        borderRadius: 10,
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAddCourse: {
        color: colors.WHITE,
        fontSize: 15,
    },
    textActionLogout: {
        color: colors.PRIMARY,
        fontSize: 15,
    },
    userAvatar: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: 10,
        marginEnd: 20

    },
    userCardInformation: {
        flex: 2
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.BLACK,
    },
    email: {
        fontSize: 14,
        color: colors.GRAY,
        fontWeight: '700'
    },
    statsCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#DAE3EC',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statsContent: {
        flex: 1,
        marginHorizontal: 15
    },
    statsTitle: {
        fontSize: 11,
        color: colors.GRAY,
        fontWeight: 'bold'
    },
    statsNumber: {
        fontSize: 18,
        color: colors.BLACK,
        fontWeight: 'bold'
    },




    downSection: {
        flex: 2,
    },
    title: {
        color: colors.BLACK,
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        color: colors.GRAY,
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center'
    },
    action: {
        backgroundColor: colors.SECONDARY,
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cover: {
        width: '100%',
    }
});

export default Profile;
import React, { useContext } from "react";
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import { AuthContext } from "../../providers/AuthProvider";


function Profile({ navigation }) {

    const { isLoading, logout, userInfo } = useContext(AuthContext);
    console.log(userInfo);

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
                                <Text style={styles.username}>{userInfo.name}</Text>
                                <Text style={styles.email}>{userInfo.email}</Text>
                            </View>
                            <View style={styles.statsCard}>
                                <View style={styles.statsContent}>
                                    <Text style={styles.statsTitle} adjustsFontSizeToFit={true} numberOfLines={1}>Cours</Text>
                                    <Text style={styles.statsNumber} adjustsFontSizeToFit={true} numberOfLines={1}>102</Text>
                                </View>
                                <View style={styles.statsContent}>
                                    <Text style={styles.statsTitle} adjustsFontSizeToFit={true} numberOfLines={1}>Favoris</Text>
                                    <Text style={styles.statsNumber} adjustsFontSizeToFit={true} numberOfLines={1}>12</Text>
                                </View>
                                <View style={styles.statsContent}>
                                    <Text style={styles.statsTitle} adjustsFontSizeToFit={true} numberOfLines={1}>Id</Text>
                                    <Text style={styles.statsNumber} adjustsFontSizeToFit={true} numberOfLines={1}>#{userInfo.id}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.userCardAction}>
                        <TouchableOpacity style={styles.actionAddCourse}>
                            <Text style={styles.textAddCourse}>Ajouter un Cours</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.actionLogout}
                            onPress={() => {
                                logout();
                            }}
                        >
                            <Text style={styles.textActionLogout}>Se deconnecter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.downSection}>
                <ScrollView style={{ flex: 1 }}>
                    <Text style={styles.sectionTitle}>Cours en tendances</Text>
                    <TouchableOpacity
                        style={styles.courseCard}
                        onPress={() => { alert('go to course detail') }}
                    >
                        <View style={styles.courseCardHeader}>
                            <Image
                                source={require('../../assets/images/defaultAvatar.jpeg')}
                                style={styles.courseCover}
                            />
                        </View>
                        <View style={styles.courseCardContent}>
                            <View style={styles.courseCardAuthor}>
                                <Text style={styles.authorName} adjustsFontSizeToFit={true} numberOfLines={1}>
                                    Jean-marie Luckas
                                </Text>
                            </View>
                            <Text style={styles.courseTitle}>Le web 3</Text>
                            <Text style={styles.courseOverview}>
                                le web 3 est fait de n'importe quoi a la base...
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.courseCard}>
                        <View style={styles.courseCardHeader}>
                            <Image
                                source={require('../../assets/images/defaultAvatar.jpeg')}
                                style={styles.courseCover}
                            />
                        </View>
                        <View style={styles.courseCardContent}>
                            <View style={styles.courseCardAuthor}>
                                <Text style={styles.authorName} adjustsFontSizeToFit={true} numberOfLines={1}>
                                    Jean-marie Luckas
                                </Text>
                            </View>
                            <Text style={styles.courseTitle}>Le web 3</Text>
                            <Text style={styles.courseOverview}>
                                le web 3 est fait de n'importe quoi a la base...
                            </Text>
                        </View>
                    </View>
                    <View style={styles.courseCard}>
                        <View style={styles.courseCardHeader}>
                            <Image
                                source={require('../../assets/images/defaultAvatar.jpeg')}
                                style={styles.courseCover}
                            />
                        </View>
                        <View style={styles.courseCardContent}>
                            <View style={styles.courseCardAuthor}>
                                <Text style={styles.authorName} adjustsFontSizeToFit={true} numberOfLines={1}>
                                    Jean-marie Luckas
                                </Text>
                            </View>
                            <Text style={styles.courseTitle}>Le web 3</Text>
                            <Text style={styles.courseOverview}>
                                le web 3 est fait de n'importe quoi a la base...
                            </Text>
                        </View>
                    </View>
                    <View style={styles.courseCard}>
                        <View style={styles.courseCardHeader}>
                            <Image
                                source={require('../../assets/images/defaultAvatar.jpeg')}
                                style={styles.courseCover}
                            />
                        </View>
                        <View style={styles.courseCardContent}>
                            <View style={styles.courseCardAuthor}>
                                <Text style={styles.authorName} adjustsFontSizeToFit={true} numberOfLines={1}>
                                    Jean-marie Luckas
                                </Text>
                            </View>
                            <Text style={styles.courseTitle}>Le web 3</Text>
                            <Text style={styles.courseOverview}>
                                le web 3 est fait de n'importe quoi a la base...
                            </Text>
                        </View>
                    </View>
                </ScrollView>
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
        elevation: 10,
        shadowColor: colors.BLACK,
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
        alignItems: 'center',
        paddingVertical: 5
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
        marginHorizontal: 20,
        marginTop: '15%',
    },
    sectionTitle: {
        color: colors.BLACK,
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    courseCard: {
        flex: 1,
        backgroundColor: colors.PUREWHITE,
        width: '100%',
        height: 200,
        borderRadius: 15,
        paddingBottom: 15,
        marginBottom: 15,

    },
    courseCardHeader: {
        flex: 2,
        margin: 8,
    },
    courseCardContent: {
        flex: 1,
        marginHorizontal: 20
    },
    courseCover: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    courseTitle: {
        color: colors.BLACK,
        fontSize: 18,
        paddingTop: 5
    },
    courseOverview: {
        color: colors.GRAY,
        fontSize: 16,
    },
    courseCardAuthor: {
        flex: 1,
        backgroundColor: colors.PUREWHITE,
        width: '40%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-15%',
        elevation: 10,
        shadowColor: colors.PRIMARY,
    },
    authorName: {
        color: colors.BLACK,
        fontSize: 15,
    }
});

export default Profile;
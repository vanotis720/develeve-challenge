import React, { useContext, useState } from "react";
import { StatusBar, StyleSheet, TextInput, View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { AuthContext } from "../../providers/AuthProvider";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '../../theme/colors';
import CourseItem from './CourseItem';

function Home({ navigation }) {
    const { userInfo } = useContext(AuthContext);
    const { width, height } = useWindowDimensions();
    const [search, setSearch] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.userPart, { height: height / 7 }]}>
                    <Text style={styles.userTitle}>
                        Welcome back, {userInfo.name}
                        <MaterialCommunityIcons name="account-sync" color={colors.SECONDARY} size={30} />
                    </Text>
                    <Image
                        source={require('../../assets/images/defaultAvatar.png')}
                        style={styles.userAvatar}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.searchPart}>
                    <TextInput
                        style={styles.inputSearch} placeholder="apprendre le php..."
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
                    <TouchableOpacity
                        onPress={() => { alert(search) }}
                        style={{
                            position: 'absolute',
                            right: 10,
                            bottom: '30%',
                        }} >
                        <FontAwesome name="search" color={colors.GRAY} size={25} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.tagPart}>
                    <TouchableOpacity
                        onPress={() => { alert('tag') }}
                        style={styles.tagCard} >
                        <Text style={styles.tagTitle}>
                            Web
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { alert('tag') }}
                        style={styles.tagCard} >
                        <Text style={styles.tagTitle}>
                            Mobile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { alert('tag') }}
                        style={styles.tagCard} >
                        <Text style={styles.tagTitle}>
                            Desktop
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { alert('tag') }}
                        style={styles.tagCard} >
                        <Text style={styles.tagTitle}>
                            Game
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { alert('tag') }}
                        style={styles.tagCard} >
                        <Text style={styles.tagTitle}>
                            AI/DATA Modeling
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { alert('tag') }}
                        style={styles.tagCard} >
                        <Text style={styles.tagTitle}>
                            UI/UX
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ flex: 5, marginHorizontal: 15, }}>
                    <CourseItem navigation={navigation} />
                    <CourseItem navigation={navigation} />
                    <CourseItem navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    userPart: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    userAvatar: {
        flex: 1,
        height: '50%',
        borderRadius: 30,
    },
    userTitle: {
        flex: 2,
        fontSize: 20,
        color: colors.BLACK,
        fontWeight: 'bold',
    },
    searchPart: {
        flex: 1,
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 15,
        marginBottom: 15,
    },
    inputSearch: {
        paddingHorizontal: 20,
        backgroundColor: colors.PUREWHITE,
        borderRadius: 20,
        height: 50,
    },
    tagPart: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 15,
    },
    tagCard: {
        backgroundColor: colors.PUREWHITE,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginEnd: 15,
    },
    tagTitle: {
        fontSize: 15,
        color: colors.BLACK,
        fontWeight: '500',
    },
});


export default Home;
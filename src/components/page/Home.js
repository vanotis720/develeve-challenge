import React, { useContext, useState, useEffect } from "react";
import {
    StatusBar,
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { AuthContext } from "../../providers/AuthProvider";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '../../theme/colors';
import axios from 'axios';
import CourseItem from './CourseItem';
import { BASE_URL } from "../../utils/constants";

function Home({ navigation }) {
    const { userInfo } = useContext(AuthContext);
    const { width, height } = Dimensions.get('window');
    const [search, setSearch] = useState("");
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getCourses = async () => {
        const res = await axios.get(`${BASE_URL}/posts`);
        setCourses(res.data.data);
        setIsLoading(false);
        console.log(res.data.data);
        console.log(courses.length);
    }

    const getCategories = async () => {
        // get categories using base_url and axios
        const res = await axios.get(`${BASE_URL}/categories`);
        setCategories(res.data.data);
        console.log(res.data);
    }

    const renderEmpty = () => {
        return (
            <View style={styles.empty}>
                <Text style={styles.emptyText}>Pas d'article pour l'instant </Text>
            </View>
        );
    }

    useEffect(() => {
        getCategories();
        getCourses();
    }
        , []);


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
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
            {
                isLoading ? (
                    <ActivityIndicator size="large" color={colors.PRIMARY} />
                ) : (
                    <>
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
                        <View style={styles.tagPart}>
                            <FlatList
                                data={categories}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        onPress={() => { alert(item.name) }}
                                        style={styles.tagCard} >
                                        <Text style={styles.tagTitle}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                }
                                keyExtractor={item => item.id.toString()}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View style={{ flex: 5.5, marginHorizontal: 15, }}>
                            {
                                courses.length > 0 ?
                                    <FlatList data={courses} renderItem={({ item }) => <CourseItem course={item} navigation={navigation} />} />
                                    :
                                    renderEmpty()
                            }
                        </View>
                    </>
                )
            }
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
        flex: 0.5,
        flexDirection: 'row',
        margin: 15,
        marginBottom: 15,
    },
    tagCard: {
        backgroundColor: colors.PUREWHITE,
        padding: 5,
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
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 20,
        color: colors.BLACK,
        fontWeight: 'bold',
    }
});


export default Home;
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


function Course({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <View style={{ flex: 1 }}>
                <View style={styles.sectionCover}>
                    <Image
                        source={require('../../assets/images/defaultAvatar.jpeg')}
                        style={styles.courseCover}
                    />
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{
                            position: 'absolute',
                            left: 5,
                            top: 5,
                        }} >
                        <MaterialCommunityIcons name="arrow-left-circle" color={colors.PUREWHITE} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { alert('added to your favorite') }}
                        style={{
                            position: 'absolute',
                            right: 5,
                            top: 5,
                        }} >
                        <MaterialCommunityIcons name="cards-heart-outline" color={colors.PUREWHITE} size={30} />

                    </TouchableOpacity>
                </View>
                <View style={styles.sectionTitle}>
                    <Text style={styles.title}>Le html c'est pour les null en vrai</Text>
                    <Text style={styles.subTitle}>Par Jean-Marie Losa - HTML</Text>
                </View>
                <View style={styles.content}>
                    {/* content */}
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        marginHorizontal: 10,
    },
    sectionCover: {
        flex: 3,
        marginVertical: 5,
    },
    courseCover: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 5,
    },
    sectionTitle: {
        flex: 2,
        marginVertical: 5,
    },
    title: {
        color: colors.PRIMARY,
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle: {
        color: colors.BLACK,
        fontSize: 14,
        fontWeight: 'bold',
    },
    content: {
        flex: 5,
        marginHorizontal: 10
    }

});


export default Course;
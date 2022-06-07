import { StatusBar, StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import CourseItem from './CourseItem';

function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <View style={styles.userPart}>
                <Text style={styles.userTitle}>Welcom back, User</Text>
                <Image
                    source={require('../../assets/images/defaultAvatar.jpeg')}
                    style={styles.userAvatar}
                />
            </View>
            <ScrollView style={{ flex: 1 }}>
                <CourseItem navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        marginHorizontal: 10,
    },
    userPart: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10
    },
    userAvatar: {
        flex: 1,
        height: 100,
        width: 100,
        borderRadius: 60,
    },
    userTitle: {
        flex: 1,
        fontSize: 24,
        marginTop: 5,
        marginBottom: 10

    },
});


export default Home;
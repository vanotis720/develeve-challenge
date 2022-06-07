import { StatusBar, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import CourseItem from './CourseItem';

function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
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
});


export default Home;
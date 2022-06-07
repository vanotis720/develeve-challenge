import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import CourseItem from './CourseItem';

function Favorite({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <View style={styles.sectionTitle}>
                <Text style={styles.title}>Vos Favoris</Text>
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
    sectionTitle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.BLACK,
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
    }
});


export default Favorite;
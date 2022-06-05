import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.GRAY,
    },
    topSection: {
        flex: 3
    },
    downSection: {
        flex: 2,
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
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

export default Home;
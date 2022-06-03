import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function GetStarted({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/getStarted.png')}
                    style={styles.cover}
                />
            </View>
            <View style={styles.downSection}>
                <Text style={styles.title}>Trouvez Les Meilleures Formations En Ligne</Text>
                <Text style={styles.description}>
                    Apprenez une nouvelle profession dans le confort de votre maison ou n'importe où.
                </Text>
                <TouchableOpacity
                    style={styles.action}
                    onPress={navigation.navigate('Auth')}
                >
                    <MaterialCommunityIcons name="arrow-right" size={40} color={colors.WHITE} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.PRIMARY,
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

export default GetStarted;
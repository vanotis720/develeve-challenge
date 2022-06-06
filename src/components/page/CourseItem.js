import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../../theme/colors';

function CourseItem() {
    return (
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
    )
}


const styles = StyleSheet.create({
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


export default CourseItem;
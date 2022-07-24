import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import colors from '../../theme/colors';

function CourseItem({ course, navigation }) {
    const { width, height } = useWindowDimensions();

    return (
        <TouchableOpacity
            style={[styles.courseCard, { height: height / 3 }]}
            onPress={() => { navigation.navigate("Course") }}
        >
            <View style={styles.courseCardHeader}>
                <Image
                    source={require('../../assets/images/undraw_writer_q06d.png')}
                    style={styles.courseCover}
                />
            </View>
            <View style={styles.courseCardContent}>
                <View style={[styles.courseCardAuthor, { width: width / 1.8, height: height }]}>
                    <Image
                        source={require('../../assets/images/defaultAvatar.png')}
                        style={styles.authorAvatar}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.authorName} adjustsFontSizeToFit={true} numberOfLines={2}>
                        {course.user_id}
                    </Text>
                </View>
                <Text style={styles.courseTitle}>{course.title}</Text>
                {/* <Text style={styles.courseOverview}></Text> */}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    courseCard: {
        flex: 1,
        backgroundColor: colors.PUREWHITE,
        width: '100%',
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
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-15%',
        elevation: 10,
        shadowColor: colors.BLACK,
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    authorName: {
        color: colors.GRAY,
        fontSize: 15,
        marginEnd: 10
    },
    authorAvatar: {
        flex: 1,
        height: '90%',
        width: '90%',
        resizeMode: 'contain',
        borderRadius: 75,
        borderWidth: 2,
        borderColor: colors.WHITE,
        marginVertical: 10,
        marginEnd: 5
    },
});


export default CourseItem;
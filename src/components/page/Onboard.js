import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from "../../theme/colors";
import { MaterialIcons } from '@expo/vector-icons';

const slides = [
    {
        key: 1,
        title: 'Articles technologiques',
        text: 'Lisez les meilleurs articles de tech et restr informer vous sur les dernières technologies',
        image: require('../../assets/images/undraw_Books_re_8gea.png'),
    },
    {
        key: 2,
        title: 'Commentaires',
        text: 'Les commentaires sont les meilleurs moyens de partager vos idées',
        image: require('../../assets/images/undraw_Things_to_say_re_jpcg.png'),
    },
    {
        key: 3,
        title: 'Partagez vos connaissances',
        text: 'Partagez vos connaissances et vos idées avec les autres',
        image: require('../../assets/images/undraw_writer_q06d.png'),
    }
];

const { width, height } = Dimensions.get('window');

const Onboard = ({ onFinish }) => {

    function renderItem({ item }) {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    function onDone() {
        onFinish();
    }


    function renderNextButton() {
        return (
            <View style={styles.buttonCircle}>
                <MaterialIcons
                    name="forward"
                    color={colors.PUREWHITE}
                    size={30}
                />
            </View>
        );
    };
    function renderDoneButton() {
        return (
            <View style={styles.buttonCircle}>
                <MaterialIcons
                    name="check"
                    color={colors.PUREWHITE}
                    size={30}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <AppIntroSlider renderItem={renderItem}
                data={slides}
                onDone={onDone}
                showDoneButton={true}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                dotClickEnabled={true}
                activeDotStyle={{ backgroundColor: colors.PRIMARY }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.PUREWHITE,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    title: {
        fontSize: height * 0.04,
        fontWeight: 'bold',
        color: colors.PRIMARY,
        textAlign: 'center',
    },
    text: {
        color: colors.BLACK,
        textAlign: 'center',
        marginTop: 10,
        fontSize: height * 0.02,
    },
    image: {
        width: width * 0.9,
        height: width * 0.9,
        resizeMode: 'contain',
        borderRadius: width * 0.4,
    },
    buttonCircle: {
        width: 50,
        height: 50,
        backgroundColor: colors.PRIMARY,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Onboard;
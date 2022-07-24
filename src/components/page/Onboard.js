import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('../../assets/images/defaultAvatar.jpeg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('../../assets/svg/undraw_mobile_development_re_wwsn.svg'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../assets/svg/undraw_mobile_development_re_wwsn.svg'),
        backgroundColor: '#22bcb5',
    }
];

const Onboard = () => {

    function renderItem({ item }) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    function onDone() {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
    }

    return (
        <View style={styles.container}>
            <AppIntroSlider renderItem={renderItem}
                data={slides}
                onDone={onDone} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 15,
    },
    title: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },
    image: {
        width: 200,
        height: 200,
    }
});


export default Onboard;
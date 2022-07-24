import { StatusBar, StyleSheet, View, Text, Platform, KeyboardAvoidingView, ScrollView, TextInput, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import {
    actions,
    defaultActions,
    RichEditor,
    RichToolbar,
} from "react-native-pell-rich-editor";
import { useRef, useState } from 'react';
import axios from 'axios';


function CourseForm({ navigation }) {
    const richText = useRef();

    const [title, setTitle] = useState(null);
    const [article, setArticle] = useState("");

    function editorInitializedCallback() {
        richText.current?.registerToolbar(function (items) {
            // items contain all the actions that are currently active 
            console.log(
                "Toolbar click, selected items (insert end callback):",
                items
            );
        });
    }

    // Callback after height change
    function handleHeightChange(height) {
        // console.log("editor height change:", height);
    }

    function onPressAddImage() {
        // you can easily add images from your gallery
        richText.current?.insertImage(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
        );
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <View style={styles.sectionTitle}>
                <Text style={styles.title}>Nouveau cours</Text>
            </View>
            <View style={styles.topSection}>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input}
                        placeholder="Entrer le titre de l'article"
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>
            </View>

            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                    {/* <Text style={{ fontSize: 18, marginVertical: 10 }}>
                        Ecris ton article ici:
                        <MaterialCommunityIcons name="fridge-bottom" size={18} color={colors.GRAY} />
                    </Text> */}
                    <RichEditor
                        disabled={false}
                        containerStyle={styles.editor}
                        ref={richText}
                        style={styles.rich}
                        placeholder={"Start Writing Here"}
                        onChange={(text) => setArticle(text)}
                        editorInitializedCallback={editorInitializedCallback}
                        onHeightChange={handleHeightChange}
                    />
                </KeyboardAvoidingView>
            </ScrollView>

            <RichToolbar
                editor={richText}
                style={[styles.richBar]}
                disabled={false}
                iconTint={colors.GRAY}
                selectedIconTint={colors.PRIMARY}
                disabledIconTint={colors.SECONDARY}
                onPressAddImage={onPressAddImage}
                iconSize={20}
                actions={[
                    ...defaultActions,
                    actions.heading1,
                    actions.setStrikethrough,
                    actions.insertImage,
                    actions.insertOrderedList,
                    actions.undo,
                    actions.redo,

                ]}
                iconMap={{
                    [actions.heading1]: ({ tintColor }) => (
                        <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
                    ),
                }}
            />

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
    },
    inputBox: {
        flexDirection: 'row',
        marginVertical: 10,
        height: 50,
    },
    input: {
        flex: 1,
        backgroundColor: colors.PUREWHITE,
        paddingHorizontal: 10,
    },
    editor: {
        backgroundColor: colors.BLACK,
    },
    rich: {
        minHeight: 300,
        flex: 1,
    },
    richBar: {
        height: 50,
        backgroundColor: "#F5FCFF",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    tib: {
        textAlign: "center",
        color: "#515156",
    },
});


export default CourseForm;
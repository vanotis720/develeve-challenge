import {
    StatusBar, StyleSheet, View, Text, Platform, KeyboardAvoidingView,
    ScrollView, TextInput, TouchableOpacity, Image, useWindowDimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import {
    actions,
    defaultActions,
    RichEditor,
    RichToolbar,
} from "react-native-pell-rich-editor";
import { useRef, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { AuthContext } from "../../providers/AuthProvider";
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';


function CourseForm({ navigation }) {
    const richText = useRef();

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [categories, setCategories] = useState([]);
    const { userInfo } = useContext(AuthContext);
    const [selectedCategory, setSelectedCategory] = useState();
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result);
        }
    };

    const getCategories = async () => {
        // get categories using base_url and axios
        const res = await axios.get(`${BASE_URL}/categories`);
        setCategories(res.data.data);
        // console.log(res.data);
    }


    function editorInitializedCallback() {
        richText.current?.registerToolbar(function (items) {
            console.log(
                "Toolbar click, selected items (insert end callback):",
                items
            );
        });
    }

    function publish() {
        if (title.length > 0 && article.length > 50 && selectedCategory !== "") {
            let uriParts = image.uri.split('.');
            let fileType = uriParts[uriParts.length - 1];
            upload(image.uri, fileType);
        }
        else {
            console.log("title is too short");
        }
    }

    function upload(uri, fileType) {
        let formData = new FormData();
        formData.append('cover', {
            uri,
            name: uri.split('/').pop(),
            type: `image/${fileType}`,
        });
        formData.append('title', title);
        formData.append('content', article);
        formData.append('category_id', selectedCategory);
        formData.append('user_id', userInfo.id);

        axios.post(`${BASE_URL}/posts`,
            formData, {
            headers: {
                Authorization: `Bearer ${userInfo.access_token}`,
                "Content-type": "multipart/form-data",
                Accept: 'application/json',
            }
        })
            .then(res => {
                if (res.status === 200) {
                    navigation.navigate("Home");
                }
            }).catch((err) => {
                console.log(err.response.data);
            })
    }

    useEffect(() => {
        getCategories();
    }
        , []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <View style={styles.headerPart}>
                <View style={styles.sectionTitle}>
                    <Text style={styles.title}>Nouveau cours</Text>
                    <TouchableOpacity onPress={publish} style={styles.publishBtn}>
                        <Text style={styles.publishText}>Publier</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input}
                        placeholder="Entrer le titre de l'article"
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>
                <View style={styles.categoryPicker}>
                    <Picker
                        selectedValue={selectedCategory}
                        style={{ height: 50 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCategory(itemValue)
                        }>
                        <Picker.Item label="Choisir une catégorie" value="" />
                        {categories.map((category, index) => {
                            return <Picker.Item key={index} label={category.name} value={category.id} />
                        }
                        )}
                    </Picker>
                </View>
                <View style={styles.imageCover}>
                    {
                        image ?
                            <Image source={{ uri: image.uri }} style={styles.image} />
                            :
                            <TouchableOpacity onPress={pickImage} style={styles.publishBtn}>
                                <Text style={styles.publishText}>Ajouter une image de couverture</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={styles.editorCover}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                    <RichEditor
                        disabled={false}
                        containerStyle={styles.editor}
                        ref={richText}
                        style={styles.rich}
                        placeholder={"Commencer à rédiger ici"}
                        onChange={(text) => setArticle(text)}
                        editorInitializedCallback={editorInitializedCallback}
                        onHeightChange={(height) => console.log(height)}
                    />
                </KeyboardAvoidingView>
            </View>
            <RichToolbar
                editor={richText}
                style={[styles.richBar]}
                disabled={false}
                iconTint={colors.GRAY}
                selectedIconTint={colors.PRIMARY}
                disabledIconTint={colors.SECONDARY}
                iconSize={20}
                actions={[
                    ...defaultActions,
                    actions.heading1,
                    actions.setStrikethrough,
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
    headerPart: {
        flex: 0.8,
    },
    editorCover: {
        flex: 1.2,
        marginVertical: 10,
    },
    sectionTitle: {
        flex: 0.25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        color: colors.BLACK,
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputBox: {
        flex: 0.25,
        marginVertical: 10,
    },
    input: {
        flex: 1,
        backgroundColor: colors.PUREWHITE,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    editor: {
        backgroundColor: colors.PUREWHITE,
        color: colors.BLACK,
    },
    rich: {
        minHeight: 300,
        flex: 1,
    },
    richBar: {
        height: 50,
        backgroundColor: "#F5FCFF",
    },
    tib: {
        textAlign: "center",
        color: "#515156",
    },
    publishBtn: {
        backgroundColor: colors.PRIMARY,
        padding: 10,
        borderRadius: 5,
    },
    publishText: {
        color: colors.PUREWHITE,
        fontSize: 15,
        fontWeight: 'bold',
    },
    categoryPicker: {
        flex: 0.25,
        backgroundColor: colors.PUREWHITE,
        marginVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
    },
    imageCover: {
        flex: 0.25,
        backgroundColor: colors.PUREWHITE,
        marginVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
    },
    cover: {
        flex: 1,
        backgroundColor: colors.PUREWHITE,
        marginVertical: 5,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
    },
    addImage: {
        color: colors.PRIMARY,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});


export default CourseForm;
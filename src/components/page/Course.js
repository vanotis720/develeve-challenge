import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, useWindowDimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import RenderHtml from 'react-native-render-html';


const source = {
    html: `
    <p>Browsers usually insert quotation marks around the q element.</p>

<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
<img
  width="100%" height="100%"
  style="width: 50%; height: 100px; align-self: center;"
  src="http://placeimg.com/1200/800/animals"
/>

    <h2>HTML Tables</h2>

<p>HTML tables start with a table tag.</p>
<p>Table rows start with a tr tag.</p>
<p>Table data start with a td tag.</p>

<hr>
<h2>1 Column:</h2>

<table>
  <tr>
    <td>100</td>
  </tr>
</table>

<hr>
<h2>1 Row and 3 Columns:</h2>
<table>
  <tr>
    <td>100</td>
    <td>200</td>
    <td>300</td>
  </tr>
</table>

<hr>
<h2>3 Rows and 3 Columns:</h2>
<table>
  <tr>
    <td>100</td>
    <td>200</td>
    <td>300</td>
  </tr>
  <tr>
    <td>400</td>
    <td>500</td>
    <td>600</td>
  </tr>
  <tr>
    <td>700</td>
    <td>800</td>
    <td>900</td>
  </tr>
  </table>
  <br/>`
};

function Course({ navigation }) {
    const { width, height } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light' backgroundColor={colors.PRIMARY} />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.sectionCover}>
                    <Image
                        source={require('../../assets/images/defaultAvatar.jpeg')}
                        style={[styles.courseCover, { height: height / 4 }]}
                    />
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{
                            position: 'absolute',
                            left: 5,
                            top: 5,
                        }} >
                        <MaterialCommunityIcons name="arrow-left-circle" color={colors.PUREWHITE} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { alert('added to your favorite') }}
                        style={{
                            position: 'absolute',
                            right: 5,
                            top: 5,
                        }} >
                        <MaterialCommunityIcons name="cards-heart-outline" color={colors.PUREWHITE} size={30} />

                    </TouchableOpacity>
                </View>
                <View style={styles.sectionTitle}>
                    <Text style={styles.title}>Le html c'est pour les null en vrai</Text>
                    <Text style={styles.subTitle}>Par Jean-Marie Losa - HTML</Text>
                </View>
                <View style={styles.content}>
                    <RenderHtml
                        contentWidth={width}
                        source={source}
                    />
                </View>
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
    sectionCover: {
        flex: 2,
        marginVertical: 5,
    },
    courseCover: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 5,
    },
    sectionTitle: {
        flex: 1,
        marginTop: 5,
        marginBottom: 10

    },
    title: {
        color: colors.PRIMARY,
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle: {
        color: colors.BLACK,
        fontSize: 14,
        fontWeight: 'bold',
    },
    content: {
        flex: 5,
        marginHorizontal: 10
    }

});


export default Course;
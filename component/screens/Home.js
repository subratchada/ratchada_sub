import React, { useCallback } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View ,LinkingAlert, Button} from 'react-native'
import Swiper from 'react-native-swiper'
import Footer from '../layout/Footer';
const height = Dimensions.get('window').height;
const supportedURL = "https://google.com";
const unsupportedURL = "slack://open?team=123456";
const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };
  
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Swiper style={styles.wrapper} showsButtons loop={false}>
                   
                    <View style={styles.Items}>
                        <Image
                            source={require('../../assets/livingOs.png')}
                            style={styles.ImgSize}
                        />
                        <Text style={styles.fontItems}>The Living OS</Text>
                        <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
                    </View> 
                   
                    <View style={styles.Items}>
                        <Image
                            source={require('../../assets/map1.png')}
                            style={styles.ImgSize}
                        /> 
                        <TouchableOpacity onPress={() =>navigation.navigate('Home1')}>
                        <Text style={styles.fontItems}>Google  Map</Text> 
                         </TouchableOpacity>
                    </View>
                  
                    <View style={styles.Items}>
                        <Image
                            source={require('../../assets/fullsize.jpg')}
                            style={styles.ImgSize}
                        />
                        <Text style={styles.fontItems}>Img Full Size</Text>
                    </View>
                </Swiper>

            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#FFC300',
    },
    contents: {
        height: '82%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    ImgSize: {
        marginTop: 20,
        height: '80%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Items: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    fontItems: {
        fontSize: 18,
        marginLeft: 15,
    }
})



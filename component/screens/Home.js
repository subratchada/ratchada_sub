import React, { useCallback } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, LinkingAlert, Button, Linking } from 'react-native'
import Swiper from 'react-native-swiper'
import Footer from '../layout/Footer';
const height = Dimensions.get('window').height;


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Swiper style={styles.wrapper} showsButtons loop={false}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.thelivingos.com/')}>
                        <View style={styles.Items}>
                            <Image
                                source={require('../../assets/livingOs.png')}
                                style={styles.ImgSize}
                            />
                            <Text style={styles.fontItems}>The Living OS</Text>

                        </View></TouchableOpacity>

                    <View style={styles.Items}>
                        <Image
                            source={require('../../assets/map1.png')}
                            style={styles.ImgSize}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
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
        height: '60%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
        borderRadius:5
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



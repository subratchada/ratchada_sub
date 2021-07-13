import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Footer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <TouchableOpacity
                    style={{ marginLeft: 20, marginBottom: 25 }}
                    onPress={() => props.navigation.navigate('Home')}>
                    <Image
                        source={require('../../assets/homeF1.png')}
                        style={styles.ImgSize}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            marginBottom: 20,
                            color: '#111BEC',
                            textAlign: 'center',
                        }}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginLeft: 20, marginBottom: 25 }}
                    onPress={() => props.navigation.navigate('ListView')}>
                    <Image
                        source={require('../../assets/previous.png')}
                        style={styles.ImgSize}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            marginBottom: 20,
                            color: '#111BEC',
                            textAlign: 'center',
                        }}>
                        ListView
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginLeft: 20, marginBottom: 25 }}
                    onPress={() => props.navigation.navigate('Login')}>
                    <Image
                        source={require('../../assets/userF.png')}
                        style={styles.ImgSize}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            marginBottom: 20,
                            color: '#111BEC',
                            textAlign: 'center',
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginLeft: 20, marginBottom: 25 }}
                    onPress={() => props.navigation.navigate('Map')}>
                    <Image
                        source={require('../../assets/map1.png')}
                        style={styles.ImgSize}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            marginBottom: 20,
                            color: '#111BEC',
                            textAlign: 'center',
                        }}>
                        map
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '9%',
        backgroundColor: '#DAF7A6',
    },
    contents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10,
       
    },
    ImgSize: {
        height: 24,
        width: 24,
        marginLeft:5
    }
})



import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Footer from '../layout/Footer'
const height = Dimensions.get('window').height;
export default function Login({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <View style={styles.logoContent}>
                    <View style={styles.loginLogo}>
                        <Image
                            style={styles.loginImg}
                            source={require('../../assets/user.png')}
                        />
                    </View>
                </View>
                <View style={styles.inputContent}>
                    <View style={styles.textUser}>
                        <TextInput
                            style={styles.textInputuser}
                            onChangeText={(text) => setUsername(text)}
                        />
                        <Image
                            style={styles.userImg}
                            source={require('../../assets/user.png')}
                        />
                    </View>
                </View>
                <View style={styles.inputContent1}>
                    <View style={styles.textUser}>
                        <TextInput
                            style={styles.textInputuser}
                            secureTextEntry={true}
                            onChangeText={(text) => setpassword(text)}
                        />
                        <Image
                            style={styles.userImg1}
                            source={require('../../assets/password.png')}
                        />
                    </View>
                </View>

                <View>
                    <View style={{ margin: 10, marginTop: 20 }}>
                        <TouchableOpacity
                            style={styles.ButtonLogin}
                            onPress={() => checkLogin()}>
                            <Text style={styles.TextLogin}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textContent1}>Register</Text>
                    <Text
                        style={styles.textContent2}
                        onPress={() => navigation.navigate('Register')}>
                        Create{' '}
                    </Text>
                    <Text style={styles.textContent1}>An Account</Text>
                </View>
               
            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#FFC300'
    },
    content: {
        height: '82%',
    },
    logoContent: {
        alignItems: 'center',
        marginTop: 20,
      },
      loginLogo: {
        borderColor: '#da9590',
        borderWidth: 3,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        height: 100,
        width: 100,
      },
      loginImg: {
        height: 80,
        width: 80,
        marginLeft: -3,
      },
      textUser: {
        height: 45,
        width: 395,
        flexDirection: 'row',
        borderColor: '#da9590',
        borderWidth: 2,
        margin: 10,
        justifyContent: 'space-between',
        padding: 3,
        borderRadius: 50,
        backgroundColor:'#fff'
      },
    
      inputContent: {
        marginTop: 50,
      },
      userImg: {
        height: 35,
        width: 35,
      },
      userImg1: {
        height: 25,
        width: 25,
        marginTop: 5,
        marginRight: 5,
      },
      textInputuser: {
        width: '85%',
      },
      chBox: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      chContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      },
      ButtonLogin: {
        marginBottom: 20,
        backgroundColor: '#da9590',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius:5
      },
      TextLogin: {
        color: '#000000',
        fontSize: 25,
        fontFamily: 'Amaranth-Bold',
      },
      textCont: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Amaranth-Bold',
        color: '#707070',
        flexDirection: 'row',
      },
      textContent: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Amaranth-Bold',
        color: '#707070',
        borderBottomColor: '#da9590', // Add this to specify bottom border color
        borderBottomWidth: 4, // Add this to specify bottom border thickness
      },
      textContent1: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Amaranth-Bold',
        color: '#707070',
        flexDirection: 'row',
      },
      textContent2: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Amaranth-Bold',
        color: '#707070',
        flexDirection: 'row',
        marginLeft: 4,
        borderBottomColor: '#da9590', // Add this to specify bottom border color
        borderBottomWidth: 4, // Add this to specify bottom border thickness
      },
      textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
})


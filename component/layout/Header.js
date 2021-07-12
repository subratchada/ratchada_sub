import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
        <View style={styles.contents}>

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
    }
})

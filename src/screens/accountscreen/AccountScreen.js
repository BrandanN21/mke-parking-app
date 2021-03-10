import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AccountScreen() {
    return (
        <View>
            <Text style={styles.text}>Account Page</Text>
        </View>
    )
}

// styles for account page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  33,
        top: '50%'
        

    }

})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function PermitScreen() {
    return (
        <View>
            <Text style={styles.text}>This is the permits screen</Text>
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

export default PermitScreen;
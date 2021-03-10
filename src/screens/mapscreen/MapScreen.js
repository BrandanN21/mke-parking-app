import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MapScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Map page</Text>
        </View>
    )
}

// styles for map screen
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

export default MapScreen;
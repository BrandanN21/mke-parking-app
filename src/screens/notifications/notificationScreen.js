import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotificationScreen() {
    return (
        <View>
            <Text style={styles.text}>Hello Notification Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  33,
        top: '50%'
    },
})


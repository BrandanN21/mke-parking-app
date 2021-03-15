import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { NightPermitScreen } from './NightPermitScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NotificationScreen } from '../notificationscreen/NotificationScreen';


export function PermitScreen({ navigation }) {
    return (
        <View style={styles.center}>
            <Text>This the permit home screen</Text>
            <Button 
                title="go to night screen"
                onPress={() => navigation.navigate("Night Permits")}
            />
            <Button 
                title="go to day screen"
                onPress={() => navigation.navigate("Day Permits")}
            />
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
    },
    headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        },

})

export default PermitScreen;
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function PermitScreen() {
    return (
        <View><Text style={styles.text}>Permits Screen</Text></View>
        // need three buttons rounded
        // one for night parking linking to the city of mke webiste
        // one for daytime
        // one for snow emergency
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Permit">
        //         <Stack.Screen name="Permit" component={PermitScreen} />
        //         <Stack.Screen name="NightParking" component={NightParking} />
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}

function NightParking(){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
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
        

    }

})

export default PermitScreen;
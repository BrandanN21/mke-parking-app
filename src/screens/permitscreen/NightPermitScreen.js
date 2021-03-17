import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Button, Touchable, ImageBackground, Container } from 'react-native';
import {buttons} from './permit-styles';

export function NightPermitScreen({ navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}> City of Milwaukee</Text>
            <Text style={styles.header}> Night Permits</Text>
            <Text style={styles.text}>
            The city of Milwaukee offers multiple night parking permits 
            </Text>
            <Text style={styles.text}>
            Click on one of the buttons below
            </Text>
            {/* Standard Night Parking Button */}
            <TouchableOpacity style={buttons.primary}>
            <Button
            color='#18224B'
            style={buttons.primaryText} 
            title="Standard Night Permits"
            onPress={() => navigation.navigate("Standard Night Permit")}/>
            </TouchableOpacity>
            {/* Temporary Night Parking Button */}
            <TouchableOpacity style={buttons.primary}>
            <Button
            color='#18224B'
            style={buttons.primaryText} 
            title="Temporary Night Permits"
            onPress={() => navigation.navigate("Temporary Night Permit")}/>
            </TouchableOpacity>
            
            {/* Night Shift Night Parking Button */}
            <TouchableOpacity style={buttons.primary}>
            <Button
            color='#18224B'
            style={buttons.primaryText} 
            title="Night Shift Workers Permits"
            onPress={() => navigation.navigate("Night Shift Workers Permit")}/>
            </TouchableOpacity>

            {/* Disabled Night Parking Button */}
            <TouchableOpacity style={buttons.primary}>
            <Button
            color='#18224B'
            style={buttons.primaryText} 
            title="Disabled Night Permits"
            onPress={() => navigation.navigate("Disabled Night Permit")}/>
            </TouchableOpacity>
            <ImageBackground source={require('../../.././assets/skyline_orange.png')}
            style={styles.background}></ImageBackground>
            {/* <TouchableOpacity style={styles.LogInButton} 
            onPress={() => Linking.openURL('https://duncan.imageenforcement.com/PermitSites/MilwaukeePermits')}
            >
                <Text style={styles.logInText}>LogIn</Text>
            </TouchableOpacity> */}
        </View>
    )
}

// styles for account page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18224B',
        alignItems: 'center',
        padding: '2%'
        // justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  33,
        top: '0%',
        color: '#FFF'
    },
    text: {
        marginLeft: '2%',
        marginRight: '2%',
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    },
    background: {
        width: '110%',
        height: '55%',
        top: '16%',
        left: '-2%',
        zIndex: 9999,
        flex: 1
    },

})

export default NightPermitScreen;
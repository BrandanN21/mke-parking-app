import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { buttons } from './permit-styles';

export function DayPermitScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}> City of Milwaukee</Text>
            <Text style={styles.header}> Day Permits</Text>
            <Text style={styles.text}>
            The city of Milwaukee offers multiple day parking permits 
            </Text>
            <Text style={styles.text}>
            Click on one of the buttons below
            </Text>
            {/* Standard Night Parking Button */}
            <TouchableOpacity style={buttons.secondary}>
            <Button
            color='#FFF'
            style={buttons.secondaryText} 
            title="Residential Non-conforming Permits"
            onPress={() => navigation.navigate("Standard Night Permit")}/>
            </TouchableOpacity>
            {/* Temporary Night Parking Button */}
            <TouchableOpacity style={buttons.secondary}>
            <Button
            color='#FFF'
            style={buttons.secondaryText} 
            title="Commuter Impacted Residential Permits"
            onPress={() => navigation.navigate("Temporary Night Permit")}/>
            </TouchableOpacity>
            
            {/* Night Shift Night Parking Button */}
            <TouchableOpacity style={buttons.secondary}>
            <Button
            color='#FFF'
            style={buttons.secondaryText} 
            title="Residential Only Permits"
            onPress={() => navigation.navigate("Night Shift Workers Permit")}/>
            </TouchableOpacity>
            <ImageBackground source={require('../../.././assets/skyline_orange.png')}
            style={styles.background}></ImageBackground>
        </View>
    )
}

// styles for account page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
        color: '#18224B'
    },
    text: {
        marginLeft: '2%',
        marginRight: '2%',
        fontSize: 20,
        textAlign: 'center',
        color: '#18224B'
    },
    background: {
        width: '110%',
        height: '55%',
        top: '20%',
        left: '-2%',
        zIndex: 9999,
        flex: 1
    },

})

export default DayPermitScreen;
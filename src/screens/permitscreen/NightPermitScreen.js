import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Button, Touchable } from 'react-native';

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
            <TouchableOpacity style={styles.LogInButton}>
            <Button
            color='#FFF'
            style={styles.logInText} 
            title="Standard Night Permits"
            onPress={() => navigation.navigate("Standard Night Permit")}/>
            </TouchableOpacity>
            {/* Temporary Night Parking Button */}
            <TouchableOpacity style={styles.LogInButton}>
            <Button
            color='#FFF'
            style={styles.logInText} 
            title="Temporary Night Permits"
            onPress={() => navigation.navigate("Temporary Night Permit")}/>
            </TouchableOpacity>
            
            {/* Night Shift Night Parking Button */}
            <TouchableOpacity style={styles.LogInButton}>
            <Button
            color='#FFF'
            style={styles.logInText} 
            title="Night Shift Workers Permits"
            onPress={() => navigation.navigate("Night Shift Workers Permit")}/>
            </TouchableOpacity>

            {/* Disabled Night Parking Button */}
            <TouchableOpacity style={styles.LogInButton}>
            <Button
            color='#FFF'
            style={styles.logInText} 
            title="Disabled Night Permits"
            onPress={() => navigation.navigate("Disabled Night Permit")}/>
            </TouchableOpacity>
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
        backgroundColor: '#fff',
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
    },
    text: {
        marginLeft: '2%',
        marginRight: '2%',
        fontSize: 20,
        textAlign: 'center'
    },
    logInText: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  33,
        color: '#FFAC36'
      },
    LogInButton: {
        backgroundColor: '#18224B',
        color: '#3A59FF',
        width: "65%",
        borderRadius: 25,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%'
      },

})

export default NightPermitScreen;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { buttons } from './permit-styles';


export default function DisabledNightPermitScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Milwaukee</Text>
            <Text style={styles.header}> Disabled Night Permits</Text>
            <Text style={styles.text}>
            A no cost Special Disabled Night Permit is required in addition to the state issued disabled parking identification card to 
            park on City Streets between the hours of 2:00 a.m and 6:00 a.m. Monday through Saturday. 
            </Text>
            <Text style={styles.text}>
            Available Online and in person at Violations Bureaus.
            </Text>
            <Text style={styles.text}>
            You can login/create an account for the City of Milwaukee Parking below.
            </Text>
            <TouchableOpacity style={styles.LogInButton} 
            onPress={() => Linking.openURL('https://duncan.imageenforcement.com/PermitSites/MilwaukeePermits')}
            >
                <Text style={styles.logInText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LogInButton} 
            onPress={() => Linking.openURL('https://duncan.imageenforcement.com/PermitSites/MilwaukeePermits/Home/NewUser')}
            >
                <Text style={styles.logInText}>Create an Account</Text>
            </TouchableOpacity>
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
        textAlign: 'center',
        marginTop: '2%'
    },
    logInText: {
        textAlign: 'center',
        fontWeight: 'normal',
        padding: "2%",
        fontSize:  25,
        color: '#FFF'
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
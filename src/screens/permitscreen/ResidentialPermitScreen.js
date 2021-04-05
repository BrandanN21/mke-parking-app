import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { buttons } from './permit-styles';


export default function ResidentialPermitScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Milwaukee </Text>
            <Text style={styles.header}> Residential Permits</Text>
            <Text style={styles.text}>
            Residents living in houses built prior to October 27, 1970 and a minimum of one parking space per dwelling unit is not provided
            Valid Wisconsin driver's license with the same address as on the application or a valid Wisconsin driver's license and a utility bill with the same address on the application.
            </Text>
            <Text style={styles.text}>
            Vehicle must have valid Wisconsin license plates, registration form must be brought to Violations Bureau location.
            1 permit per residence
            $15 per year
            Available Online or in person at Violations Bureaus.
            </Text>
            <Text style={styles.text}>
            You can login/create an account for the City of Milwaukee Parking below.
            </Text>
            <TouchableOpacity style={buttons.secondary} 
            onPress={() => Linking.openURL('https://duncan.imageenforcement.com/PermitSites/MilwaukeePermits')}
            >
                <Text style={buttons.secondaryText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LogInButton} 
            onPress={() => Linking.openURL('https://duncan.imageenforcement.com/PermitSites/MilwaukeePermits/Home/NewUser')}
            >
                <Text style={buttons.secondaryText}>Create an Account</Text>
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
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  25,
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
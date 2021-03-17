import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { buttons } from './permit-styles';


export function PermitScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../../../assets/background-permit.png')}>
                <View style={styles.buttonContainer}>
                    {/* <Text>This the permit home screen</Text> */}

                    <TouchableOpacity 
                    onPress={() => navigation.navigate("Day Permits")}
                    style={buttons.day}
                    >
                        <Button
                        color='#FFF'
                        style={buttons.primaryText}
                        title="Day Permits"
                        />
                        
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={buttons.night}
                        title="Night Permits"
                        onPress={() => navigation.navigate("Night Permits")}
                    >
                        <Button
                        color='#18224B'
                        style={buttons.primaryText}
                        title="Night Permits"
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
    background: {
        width: '100%',
        height: '100%',
        top: '0%'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        left: '6%'
    }

})

export default PermitScreen;
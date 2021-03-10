import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Touchable } from 'react-native';


export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../../.././assets/home-screen.png')}
            style={styles.background}
            >
              <View>
                  <Text style={styles.mainText}>
                  Avoid parking tickets with NoTic MKE. A parking solution for East Side Drivers
                  </Text>
              </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
      top: '0%'
    }, 
    mainText: {
      color: 'white',
      marginTop: '170%',
      marginLeft: '10%',
      textAlign: 'center',
      marginRight: '10%',
      fontSize: 20
    },
    startText: {
      textAlign: 'center',
      fontWeight: 'bold',
      padding: "2%",
      fontSize:  33,
    },
    startButton: {
      backgroundColor: 'white',
      color: '#3A59FF',
      width: "65%",
      borderRadius: 25,
      marginLeft: '17%',
      marginRight: '10%',
      marginTop: '10%'
    },
  });

export default HomeScreen;
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Touchable, Animated, TextInput, Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Constants from 'expo-constants';
import { render } from 'react-dom';



export const HomeScreen = ({ navigation }) => {
  const [count, setCount] = React.useState(0)
    return (
      <View style={styles.container}>
            <ImageBackground source={require('../../.././assets/home-screen.png')}
            style={styles.background}
            >
              
              <View style={styles.timercontainer}>
              <CountdownCircleTimer 
                isPlaying
                duration={20}
                colors={[
                  ['#18224B', 0.33],
                  ['#009DD9', 0.33],
                ]}
                size={342}
                isLinearGradient="true"
                
                onComplete={() => {
                  console.log('ON_COMPLETE BEFORE RETURN')
                  return [true, 0]
                }}
              >
                {({ remainingTime, animatedColor }) => (
                  
                  <Animated.Text style={styles.remainingTime}>
                    {remainingTime}
                  </Animated.Text>
                )}
              </CountdownCircleTimer>


              </View>
              <View style={styles.textcontainer}>
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
      backgroundColor: '#ecf0f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textcontainer: {
      alignItems: 'center',

    },
    timercontainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '50%',


    },
    remainingTime: {
      fontSize: 46,
      color: '#FFAC36',
    },
    
    background: {
      width: '100%',
      height: '100%',
      flex: 1,
    }, 
    mainText: {
      color: 'white',
      fontSize: 20,
      marginTop: '35%',
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
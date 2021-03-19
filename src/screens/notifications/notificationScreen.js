import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity, SafeAreaView, Animated} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Constants from 'expo-constants';





export default function NotificationScreen() {
  const [count, setCount] = React.useState(0)
  
    return (

        <View>
            <View>
                <Text style={styles.emergencytext}> Current Status: No Snow Emergency </Text>
            </View>
            <View>
                <Text style={ styles.parkingtimer}>Parking Timer</Text>
            </View>
            <View style={styles.container}>
              <CountdownCircleTimer
                isPlaying
                duration={2000}
                colors="#004777"
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
           

            
        </View>
        
    );
}

  
  const styles = StyleSheet.create({
    emergencytext: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  25,
        color: 'red',
    },
    background: {
        width: '100%',
        height: '55%',
        top: '0%'
    },
    inputtext: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: "10%",
        color: '#18224B',
        top: '20%'
 
    },
    parkingtimer: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#18224B',
        paddingTop: '10%'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#F0F0F0',
      padding: 8,
    },
    remainingTime: {
      fontSize: 46,
    },
    
  });
  
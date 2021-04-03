import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Touchable, Animated, TextInput, Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Constants from 'expo-constants';
import { render } from 'react-dom';
import DropDownPicker from 'react-native-dropdown-picker';
import ReactDom from "react-dom";





export const HomeScreen = ({ navigation }) => {
  const [duration, setDuration] = React.useState(10);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const onPressChangeTime = () => {
    setIsPlaying(true)
    setDuration(7200)
  }
  const onPressChangeTimeTwo = () => {
    setIsPlaying(true)
    setDuration(3600)
  }
  const onPressChangeTimeThree = () => {
    setIsPlaying(true)
    setDuration(10800)
  }

//below are the two constants that declare the time formatting as well as the return statement that shows them
  const formatRemainingTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}:${minutes}:${seconds}`;

  }

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <View style={styles.timer}><Text style={styles.completeText}>Time over.....</Text></View>;
      
    }
  

  return (
    <View style={styles.timer}>
      <View style={styles.textRemaining}><Text style={styles.textRemaining2}>Remaining Time</Text></View>
      <View stlye={styles.valueTime}><Text style={styles.valueTime2}>{formatRemainingTime(remainingTime)}</Text></View>
    </View>
  );  
  };
  
  


  

  

  

 
    return (
      <View style={styles.container}>
            <ImageBackground source={require('../../.././assets/home-screen.png')}
            style={styles.background}
            >
              
              <View style={styles.timercontainer}>
              <CountdownCircleTimer 
                key={duration}
              //here is the boolean for if the button should start or not
                isPlaying={isPlaying}
                //here is the starting time for button
                duration={duration}
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
                {renderTime}

              </CountdownCircleTimer>


              </View>
            

              <View style={styles.textcontainer}>
                <Text style={styles.mainText}>
                Avoid parking tickets with NoTic MKE. A parking solution for East Side Drivers

                </Text>


              </View>
              
             
              <View style={styles.buttons}>
                <Button style={styles.button1}
                  onPress={onPressChangeTimeTwo}
                  title="1 hour"
                  color="#FFAC36"
                />
                <Button style={styles.button2}
                  onPress={onPressChangeTime}
                  title="2 hours"
                  color="#FFAC36"
                />
                <Button style={styles.button3}
                  onPress={onPressChangeTimeThree}
                  title="3 hours"
                  color="#FFAC36"
                />
                  
              </View>
            </ImageBackground>
            
      </View>
    )
}

//Styles for the above code
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
    dropdownstyles: {
      justifyContent: 'center',
      alignContent: 'center',
      paddingLeft: '25%'
      


    },
    textRemaining2: {
      color: '#FFAC36',
      fontSize: 25,
      textAlign: 'center',
      
    },
    valueTime2: {
      color: '#FFAC36',
      fontSize: 50,
      textAlign: 'center',
      

    },
    completeText: {
      color: '#34eb7d',
      fontSize: 50,
      textAlign: 'center'
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
    

    
    
  });
        
            
export default HomeScreen;
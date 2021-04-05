import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Touchable, Animated, TextInput, Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';




export const HomeScreen = ({ navigation }) => {
  const [duration, setDuration] = React.useState(36000);
  const [isPlaying, setIsPlaying] = React.useState(false);


  //here is the functions for the time changing buttons
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

  // here is the functions for play/pause buttons
  const onPressChangeTimePause = () => {
    setIsPlaying(false)
  }
  const onPressChangeTimeResume = () => {
    setIsPlaying(true)
  }

//below are the two constants that declare the time formatting as well as the return statement that shows them
  const formatRemainingTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}:${minutes}:${seconds}`;

  }
// here is the function that displays text when timer is done, as well as the start text telling user to select a time
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <View style={styles.timer}><Text style={styles.completeText}>Time over...</Text></View>;
    }
    if (remainingTime === 36000) {
      return <View style={styles.timer}><Text style={styles.completeText}>Select desired parking time</Text></View>;
    }
  
// here is the child element that displays the new time format 
  return (
    <View style={styles.timer}>
      <View style={styles.textRemaining}><Text style={styles.textRemaining2}>Remaining Time</Text></View>
      <View stlye={styles.valueTime}><Text style={styles.valueTime2}>{formatRemainingTime(remainingTime)}</Text></View>
    </View>
  );  
  };
  
  


  

  

  

 
    return (
      <View style={styles.container}>
            <ImageBackground source={require('../../.././assets/timer-background.png')}
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
                size={325}
                isLinearGradient="true"
                // here is the code for how long the timer waits before resetting after finishing countdown in (ms)
                onComplete={() => {
                  console.log('ON_COMPLETE BEFORE RETURN')
                  
                  
                  return [true, 200000]
                }}
              >
                {renderTime}

              </CountdownCircleTimer>


              </View>
            

              <View style={styles.textcontainer}>
                <Text style={styles.mainText}>
                Please select a parking time limit. 
                You will be notified 15 minutes before your parking time is expired.
                </Text>
              </View>

              <View style={styles.buttonopt}>
                <TouchableOpacity style={styles.btnTime}
                  onPress={onPressChangeTimeResume}
                  title="Play Timer"
                  color="#FFAC36"
                >
                  <Text>START</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTime}
                  onPress={onPressChangeTimePause}
                  title="Pause Timer"
                  color="#FFAC36"
                >
                  <Text>PAUSE</Text>
                </TouchableOpacity>
              </View>
                

              <View style={styles.buttons}>
                <TouchableOpacity style={styles.btnTime}
                  onPress={onPressChangeTimeTwo}
                  title="1 hour"
                  color="#FFAC36"
                >
                  <Text>1 Hour</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTime}
                  onPress={onPressChangeTime}
                  title="2 hours"
                  color="#FFAC36"
                >
                  <Text>2 Hours</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTime} 
                  onPress={onPressChangeTimeThree}
                  title="3 hours"
                  color="#FFAC36"
                >
                  <Text>3 Hours</Text>
                </TouchableOpacity>
                  
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
      top: '30%',


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
    //styles for the main bio text of app
    mainText: {
      color: 'white',
      fontSize: 20,
      marginTop: '65%',
      marginBottom: '3%',
      marginRight: '5%',
      marginLeft: '5%',
      textAlign: 'center'
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
    // styles for the text above numbers in clock
    textRemaining2: {
      color: '#0f2240', //#FFAC36
      fontSize: 25,
      textAlign: 'center',
      
    },
    //styles for the time remaining displayed
    valueTime2: {
      color: '#FFAC36',
      fontSize: 50,
      textAlign: 'center',
      

    },
    //styles for the time over text 
    completeText: {
      color: '#FFAC36',
      fontSize: 40,
      textAlign: 'center'
    },
    //styles for view container of time buttons
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 10
    },
    //styles for view container of play pause buttons
    buttonopt: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'center',
      paddingVertical: 15
    },
    btnTime: {
      backgroundColor: '#FFF',
      borderRadius: 25,
      paddingHorizontal: 25,
      paddingVertical: 12
    }

    
    
  });
        
            
export default HomeScreen;
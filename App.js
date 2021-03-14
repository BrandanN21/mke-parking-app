
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapScreen } from './src/screens/mapscreen/MapScreen';
import { HomeScreen } from './src/screens/homescreen/HomeScreen';
import LandingPage from './src/screens/landingpage/LandingPage';
import { NotificationScreen } from './src/screens/notificationscreen/NotificationScreen';
import AccountScreen from './src/screens/accountscreen/AccountScreen';
import PermitScreen from './src/screens/permitscreen/PermitScreen';



const Tab = createBottomTabNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // this allows use to dynamically change the icon based on the name of the route
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map-marker' : 'map-marker';
            } else if (route.name === 'Account') {
              iconName = focused ? 'user' : 'user';
            } else if (route.name === 'Permits') {
              iconName = focused ? 'clipboard' : 'clipboard';
            }
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
            
          },
        })}
        // changes colors of the icons active/inactive
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'gray',
        }}
      >
        {/* routes for application 
        HOME, MAP, PERMITS, SETTINGS/ACCOUNT
        notifications will be a sub menu in the account screen
        */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen}/>
        <Tab.Screen name="Permits" component={PermitScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}






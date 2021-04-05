
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapScreen } from './src/screens/mapscreen/MapScreen';
import { HomeScreen } from './src/screens/homescreen/HomeScreen';
import LandingPage from './src/screens/landingpage/LandingPage';
import { NotificationScreen } from './src/screens/notificationscreen/NotificationScreen';
import AccountScreen from './src/screens/accountscreen/AccountScreen';
import PermitScreen from './src/screens/permitscreen/PermitScreen';
import { NightPermitScreen} from './src/screens/permitscreen/NightPermitScreen';
import DayPermitScreen from './src/screens/permitscreen/DayPermitScreen';
import StandardNightPermitScreen from './src/screens/permitscreen/StandardNightPermitScreen';
import TempNightPermitScreen from './src/screens/permitscreen/TempNightPermitScreen';
import NightWorkerPermitScreen from './src/screens/permitscreen/NightWorkerPermitScreen';
import DisabledNightPermitScreen from './src/screens/permitscreen/DisabledNightPermitScreen';
import NonconformingPermitScreen from './src/screens/permitscreen/NonconformingPermitScreen';
import CommuterPermitScreen from './src/screens/permitscreen/CommuterPermitScreen';
import ResidentialPermitScreen from './src/screens/permitscreen/ResidentialPermitScreen';




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
              iconName = focused ? 'timer-outline' : 'timer-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map-outline' : 'map-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'settings-outline' : 'settings-outline';
            } else if (route.name === 'Permits') {
              iconName = focused ? 'md-clipboard-outline' : 'md-clipboard-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            
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
        <Tab.Screen name="Permits" component={PermitStackScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const PermitStack = createStackNavigator();
const PermitStackScreen = () => (
  <PermitStack.Navigator>
    <PermitStack.Screen name="Permits" component={PermitScreen}/>
    <PermitStack.Screen name="Night Permits" component={NightPermitScreen}/>
    <PermitStack.Screen name="Standard Night Permit" component={StandardNightPermitScreen}/>
    <PermitStack.Screen name="Temporary Night Permit" component={TempNightPermitScreen}/>
    <PermitStack.Screen name="Day Permits" component={DayPermitScreen}/>
    <PermitStack.Screen name="Night Shift Workers Permit" component={NightWorkerPermitScreen}/>
    <PermitStack.Screen name="Disabled Night Permit" component={DisabledNightPermitScreen}/>
    <PermitStack.Screen name="Non-conforming Permit" component={NonconformingPermitScreen}/>
    <PermitStack.Screen name="Commuter Permit" component={CommuterPermitScreen}/>
    <PermitStack.Screen name={"Residential Permit"} component={ResidentialPermitScreen}/>
  </PermitStack.Navigator>
)






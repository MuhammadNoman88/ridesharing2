import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Signup';
import HomeScreen from './HomeScreen';
import Intro from './Intro';
import Offer from './Offer';
import Route from './Route';
import Categories from './Categories';
import Booking from './Booking';
import Activity from './Activity';
import Ride from './Ride';
import ShareLive from './ShareLive';
import Editprofile from './Editprofile';
import { BottomTabScreens } from '../App';



const Stack = createNativeStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={BottomTabScreens}></Stack.Screen>
      <Stack.Screen name="HomeSreen" component={HomeScreen}></Stack.Screen>
      

      <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
      <Stack.Screen name="Intro" component={Intro}></Stack.Screen>
      <Stack.Screen name="Offer" component={Offer}></Stack.Screen>
      <Stack.Screen name="Route" component={Route}></Stack.Screen>
      <Stack.Screen name="Categories" component={Categories}></Stack.Screen>
      <Stack.Screen name="Booking" component={Booking}></Stack.Screen>
      <Stack.Screen name="Activity" component={Activity}></Stack.Screen>
      <Stack.Screen name="Ride" component={Ride}></Stack.Screen>
      <Stack.Screen name="ShareLive" component={ShareLive}></Stack.Screen>
      <Stack.Screen name="Editprofile" component={Editprofile}></Stack.Screen>


    </Stack.Navigator>
  );
};
export { FirstScreenNavigator };


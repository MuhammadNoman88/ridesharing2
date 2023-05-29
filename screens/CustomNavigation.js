import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Signup';
import Intro from './Intro';
import Offer from './Offer';
import Route from './Route';
import Categories from './Categories';
import Booking from './Booking';
import Activity from './Activity';
import Ride from './Ride';
import ShareLive from './ShareLive';
import Editprofile from './Editprofile';
import HomeScreen from './HomeScreen';



const Stack = createNativeStackNavigator();

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen name="Route" component={Route} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="Ride" component={Ride} />
      <Stack.Screen name="ShareLive" component={ShareLive} />
      <Stack.Screen name="Editprofile" component={Editprofile} />
     
  
    </Stack.Navigator>
  );
};

export default SecondScreenNavigator;

import React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirstScreenNavigator} from './screens/CustomNavigation';
import Profile from './screens/Profile';
import Intro from './screens/Intro';
import Activity from './screens/Activity';
import ShareLive from './screens/ShareLive';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={FirstScreenNavigator}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../ridesharing2/assets/home1.png')}
                  style={{
                    width: 30,
                    height: 30,
                  }}></Image>
                <Text style={{color: focused ? '#23BBE8' : 'black'}}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ShareLive"
          component={ShareLive}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 3,
                }}>
                <Image
                  source={require('../ridesharing2/assets/live.png')}
                  style={{
                    width: 25,
                    height: 30,
                  }}></Image>
                <Text style={{color: focused ? '#23BBE8' : 'black'}}>Location</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 3,
                }}>
                <Image
                  source={require('../ridesharing2/assets/profile1.png')}
                  style={{
                    width: 25,
                    height: 25,
                  }}></Image>
                <Text style={{color: focused ? '#23BBE8' : 'black'}}>Profile</Text>
              </View>
            ),
          }}
        />
         
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

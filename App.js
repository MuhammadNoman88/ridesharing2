import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/Profile';
import Intro from './screens/Intro';
import Activity from './screens/Activity';
import ShareLive from './screens/ShareLive';
import HomeScreen from './screens/HomeScreen';
import SecondScreenNavigator from './screens/CustomNavigation';
import Inbox from './screens/Inbox';


const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="HomeScreen">
          {() => (
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={SecondScreenNavigator}
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 1,
                      }}
                    >
                      <Image
                        source={require('../ridesharing2/assets/home1.png')}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={{ color: focused ? '#23BBE8' : 'black' }}>
                        Home
                      </Text>
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="ShareLive"
                component={ShareLive}
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 3,
                      }}
                    >
                      <Image
                        source={require('../ridesharing2/assets/live.png')}
                        style={{ width: 25, height: 30 }}
                      />
                      <Text style={{ color: focused ? '#23BBE8' : 'black' }}>
                        Location
                      </Text>
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 3,
                      }}
                    >
                      <Image
                        source={require('../ridesharing2/assets/profile1.png')}
                        style={{ width: 25, height: 25 }}
                      />
                      <Text style={{ color: focused ? '#23BBE8' : 'black' }}>
                        Profile
                      </Text>
                    </View>
                  ),
                }}
              />

<Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 3,
                      }}
                    >
                      <Image
                        source={require('../ridesharing2/assets/notif.png')}
                        style={{ width: 20, height: 25 }}
                      />
                      <Text style={{ color: focused ? '#23BBE8' : 'black' }}>
                        Notification
                      </Text>
                    </View>
                  ),
                }}
              />
              

            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Activity" component={Activity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

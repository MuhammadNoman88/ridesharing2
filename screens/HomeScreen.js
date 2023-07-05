import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeSreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  var db = openDatabase({ name: 'UserDatabase.db' });
  const loginUser = (email, password) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (tx, results) => {
          if (results.rows.length > 0) {
            AsyncStorage.setItem('userMail', email);
            ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
            navigation.navigate('HomeScreen')
          } else {
            ToastAndroid.show('Invalid Username or Password', ToastAndroid.SHORT);
          }
        },
        (error) => {
          console.log('Error logging in:', error);
        }
      );
    });
  };

  const handleOnpress = () => {
    if (!email || !password) {
      alert('Please fill all the fields');
    } else {
      loginUser(email, password);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../assets/bg22.jpg')}
            style={{ height: 750, width: 410 }}>
            <Text
              style={{
                marginTop: 80,
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold',
                marginLeft: 20,
              }}>
              Welcome back!
            </Text>
            <Text style={{ marginTop: 10, fontSize: 15, marginLeft: 20, color: 'white' }}>
              Login to your account
            </Text>
            <TextInput

              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 60,
                color: 'black'
              }}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}>
            </TextInput>
            <TextInput
              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'black'
              }}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <Text style={{ marginLeft: 280, marginTop: 20, color: 'white' }}>Forgot?</Text>
            <TouchableOpacity
              onPress={() => handleOnpress()}
              style={{
                borderWidth: 3,
                borderRadius: 10,
                marginTop: 30,
                paddingTop: 15,
                paddingBottom: 15,
                marginLeft: 20,
                marginRight: 70,
                backgroundColor: '#23BBE8',
                borderColor: '#23BBE8',
              }}>
              <Text style={{ paddingLeft: 135, fontWeight: 'bold', color: 'white' }}>Sign in</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 120, marginTop: 40, color: 'white' }}>Create account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
                style={{ marginTop: 40, marginLeft: 10 }}>
                <Text style={{ color: '#23BBE8', fontWeight: 'bold' }}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

    </View>
  );
};

export default HomeSreen;

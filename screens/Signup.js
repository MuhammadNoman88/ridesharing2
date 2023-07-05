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


const Signup = ({ navigation }) => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cPassword, setCPassword] = React.useState('');
  var db = openDatabase({ name: 'UserDatabase.db' });
  const registerUser = (name, email, password, userimg, phone, city) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT, userimg TEXT, phone TEXT, city TEXT)',
        []
      );
      tx.executeSql(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (tx, results) => {
          if (results.rows.length > 0) {
            ToastAndroid.show('User already registered', ToastAndroid.SHORT);
          } else {
            tx.executeSql(
              'INSERT INTO users (name, email, password, userimg, phone, city) VALUES (?, ?, ?, ?, ?, ?)',
              [name, email, password, userimg, phone, city],
              (tx, results) => {
                if (results.rowsAffected > 0) {
                  ToastAndroid.show('Registration successful', ToastAndroid.SHORT);
                  navigation.navigate('HomeSreen');
                } else {
                  ToastAndroid.show('Registration Failed', ToastAndroid.SHORT);
                }
              },
              (error) => {
                console.log('Error registering user:', error);
              }
            );
          }
        },
        (error) => {
          console.log('Error checking email:', error);
        }
      );
    });
  };

  const handleOnpress = () => {
    if (!name || !email || !password || !cPassword) {
      alert('Please fill all the fields');
    } else if (password !== cPassword) {
      alert('Password does not match');
    } else {
      registerUser(name, email, password, '', '', '');
    }
  }


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
              Register
            </Text>
            <Text style={{ marginTop: 10, fontSize: 15, marginLeft: 20, color: 'white' }}>
              Create your new account
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
                color: 'white'
              }}
              placeholder="Full Name"
              onChangeText={(name) => setName(name)}
            ></TextInput>
            <TextInput
              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'White'
              }}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
            ></TextInput>

            <TextInput


              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'white'
              }}
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
            ></TextInput>
            <TextInput
              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'white'
              }}
              placeholder="Confirm Password"
              onChangeText={(cPassword) => setCPassword(cPassword)}
            ></TextInput>

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
              <Text style={{ paddingLeft: 135, fontWeight: 'bold', color: 'white' }}>Register</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 90, marginTop: 40, color: 'white' }}>I have already account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={{ marginTop: 40, marginLeft: 10 }}>
                <Text style={{ color: '#23BBE8', fontWeight: 'bold' }}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

    </View>
  );
};

export default Signup;

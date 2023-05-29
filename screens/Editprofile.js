import { View, Text, TextInput, ImageBackground, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Editprofile = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [city, setCity] = React.useState('');

  var db = openDatabase({ name: 'UserDatabase.db' });
  const [userData, setuserData] = useState({})
  useFocusEffect(React.useCallback(() => { getEmail() }, []))
  useEffect(() => { getEmail() }, [])
  const getEmail = async () => {
    const email = await AsyncStorage.getItem('userMail');
    getUserByEmail(email);
  }
  const getUserByEmail = (email) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (tx, results) => {
          const rows = results.rows;
          if (rows.length > 0) {
            const user = rows.item(0);
            setuserData(user)
            setName(user?.name)
            setPhone(user?.phone)
            setCity(user?.city)
            console.log('User data::::', user);
          } else {
            console.log('User not found');
          }
        },
        (error) => {
          console.log('Error retrieving user data:', error);
        }
      );
    });
  };

  const updateUserDetails = (userEmail, newName, newEmail, newUserImg, newPhone, newCity) => {
    db.transaction(function (tx) {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ?',
        [userEmail],
        function (tx, results) {
          if (results.rows.length > 0) {
            var user = results.rows.item(0);
            var updatedUser = { ...user };
            if (newName) {
              updatedUser.name = newName;
            }
            if (newEmail) {
              updatedUser.email = newEmail;
            }
            if (newUserImg) {
              updatedUser.userimg = newUserImg;
            }
            if (newPhone) {
              updatedUser.phone = newPhone;
            }
            if (newCity) {
              updatedUser.city = newCity;
            }
            tx.executeSql(
              'UPDATE users SET name = ?, email = ?, userimg = ?, phone = ?, city = ? WHERE id = ?',
              [updatedUser.name, updatedUser.email, updatedUser.userimg, updatedUser.phone, updatedUser.city, user.id],
              function (tx, results) {
                if (results.rowsAffected > 0) {
                  ToastAndroid.show('User updated successfully', ToastAndroid.SHORT);
                } else {
                  ToastAndroid.show('Updation Failed', ToastAndroid.SHORT);
                }
              },
              function (error) {
                ToastAndroid.show('Updation Failed', ToastAndroid.SHORT);
              }
            );
          } else {
            ToastAndroid.show("User doesn't exist", ToastAndroid.SHORT);
          }
        },
        function (error) {
          console.log('Error retrieving user data:', error);
        }
      );
    });
  };

  const handleSubmit = () => {
    updateUserDetails(userData?.email, name, userData?.email, userData?.userimg, phone, city)
  }
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require('../assets/bg22.jpg')}
          style={{ height: 750, width: 410 }}>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
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
            placeholder="Name">

          </TextInput>
          {/* <TextInput

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
            placeholder="Email"></TextInput> */}
          {/* <TextInput

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
            placeholder="Username"></TextInput> */}
          <TextInput
            value={phone}
            onChangeText={(text) => setPhone(text)}
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
            placeholder="Phone"></TextInput>
          <TextInput
            value={city}
            onChangeText={(text) => setCity(text)}
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
            placeholder="City"></TextInput>

          <TouchableOpacity
            onPress={() => handleSubmit()}
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
            <Text style={{ paddingLeft: 135, fontWeight: 'bold', color: 'white' }}>Save</Text>
          </TouchableOpacity>

        </ImageBackground>
      </ScrollView>
    </View>
  )
}

export default Editprofile
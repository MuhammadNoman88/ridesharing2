import { View, Text, ImageBackground, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import Editprofile from './Editprofile';
import DocumentPicker from 'react-native-document-picker'
import { openDatabase } from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function ({ navigation }) {
  var db = openDatabase({ name: 'UserDatabase.db' });
  const [userData, setuserData] = useState({})
  const [userImg, setuserImg] = useState('')
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
            setuserImg(user?.userimg)
            console.log('User data:', user);
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
  const PickImg = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log('Img===>', res[0]?.uri);
      setuserImg(res[0]?.uri)
      updateUserDetails(userData.email, null, null, res[0]?.uri)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        throw err;
      }
    }
  };
  const updateUserDetails = (userEmail, newName, newEmail, newUserImg) => {
    db.transaction(function (tx) {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ?',
        [userEmail],
        function (tx, results) {
          if (results.rows.length > 0) {
            var user = results.rows.item(0);
            var updatedUser = { ...user }; // Create a copy of the user object

            // Update the name if a new name is provided
            if (newName) {
              updatedUser.name = newName;
            }

            // Update the email if a new email is provided
            if (newEmail) {
              updatedUser.email = newEmail;
            }

            // Update the userimg if a new userimg is provided
            if (newUserImg) {
              updatedUser.userimg = newUserImg;
            }

            // Perform the update in the database
            tx.executeSql(
              'UPDATE users SET name = ?, email = ?, userimg = ? WHERE id = ?',
              [updatedUser.name, updatedUser.email, updatedUser.userimg, user.id],
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
  }

  return (
    <View>
      <ImageBackground
        source={require('../assets/bg22.jpg')}
        style={{ height: 750, width: 410 }}>
        <TouchableOpacity onPress={() => PickImg()}>
          <Image
            style={{
              marginTop: 20,
              marginLeft: 100,
              height: 150,
              width: 150,
              borderRadius: 70,
            }}
            source={userImg ? { uri: userImg } : require('../assets/121.jpg')}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 15,
            marginRight: 70,
            marginTop: 20,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Name:
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            {userData.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 15,
            marginRight: 70,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Email:
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            {userData.email}
          </Text>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 15,
            marginRight: 70,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          }}>
          <Text
            style={{
              marginLeft: 30,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Username:
          </Text>
          <Text
            style={{
              marginLeft: 70,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Nomi
          </Text>
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 15,
            marginRight: 70,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Phone:
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            {userData.phone}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 15,
            marginRight: 70,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            City:
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            {userData.city}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Editprofile')}
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
          <Text style={{ paddingLeft: 135, fontWeight: 'bold', color: 'white' }}>Edit Profile</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

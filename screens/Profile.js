import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Editprofile from './Editprofile';

export default function ({navigation}) {
  return (
    <View>
      <ImageBackground
        source={require('../assets/bg22.jpg')}
        style={{height: 750, width: 410}}>
        <Image
          style={{
            marginTop: 20,
            marginLeft: 100,
            height: 150,
            width: 150,
            borderRadius: 70,
          }}
          source={require('../assets/121.jpg')}></Image>
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
              marginLeft: 30,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Name:
          </Text>
          <Text
            style={{
              marginLeft: 70,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Muhammad Noman
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
              marginLeft: 30,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Email:
          </Text>
          <Text
            style={{
              marginLeft: 70,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            numan@gmailcom
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
              marginLeft: 30,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Phone:
          </Text>
          <Text
            style={{
              marginLeft: 70,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            03090055026
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
              marginLeft: 30,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            City:
          </Text>
          <Text
            style={{
              marginLeft: 70,
              marginTop: 30,
              color: 'black',
              fontSize: 18,
            }}>
            Rahim Yar Khan
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
          <Text style={{paddingLeft: 135,fontWeight:'bold',color:'white'}}>Edit Profile</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

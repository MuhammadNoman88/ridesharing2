import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Route = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1, backgroundColor: '#6FC6C4'}}>
        <Text
          style={{
            marginLeft: 120,
            fontSize: 17,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 10,
          }}>
          Welcome back!
        </Text>
        <Text style={{marginLeft: 104, color: 'black'}}>
          Are you ready for a Ride?
        </Text>
      </View>
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/bg22.jpg')}
          style={{height: 750, width: 410}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              marginTop: 140,
              marginLeft: 25,
            }}>
            Where are you going?
          </Text>
          <Text style={{marginTop: 10, marginLeft: 25}}>From</Text>
          <TextInput
            style={{
              borderWidth: 2,
              marginTop: 10,
              marginLeft: 25,
              marginRight: 80,
            }}></TextInput>
          <Text style={{marginTop: 10, marginLeft: 25}}>To</Text>
          <TextInput
            style={{
              borderWidth: 2,
              marginTop: 10,
              marginLeft: 25,
              marginRight: 80,
            }}></TextInput>
          <TouchableOpacity
          onPress={() => navigation.navigate('Categories')}
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
            <Text
              style={{paddingLeft: 135, fontWeight: 'bold', color: 'white'}}>
              Find
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Route;

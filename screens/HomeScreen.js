import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';

const HomeSreen = ({navigation}) => {
 
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <View>
      <ImageBackground
        source={require('../assets/bg22.jpg')}
        style={{height: 750, width: 410}}>
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
        <Text style={{marginTop: 10, fontSize: 15, marginLeft: 20,color:'white'}}>
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
            color:'black'
          }}
          placeholder="Email"></TextInput>
        <TextInput
          style={{
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 3,
            marginLeft: 20,
            marginRight: 70,
            paddingLeft: 30,
            marginTop: 30,
            color:'black'
          }}
          placeholder="Password"></TextInput>
        <Text style={{marginLeft: 280, marginTop: 20,color:'white'}}>Forgot?</Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('Offer')}
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
          <Text style={{paddingLeft: 135,fontWeight:'bold',color:'white'}}>Sign in</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 120, marginTop: 40,color:'white'}}>Create account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={{marginTop: 40, marginLeft: 10}}>
            <Text style={{color: '#23BBE8', fontWeight: 'bold'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </View>
      </ScrollView>
   
    </View>
  );
};

export default HomeSreen;

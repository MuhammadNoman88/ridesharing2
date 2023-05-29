import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';

const Signup = ({navigation}) => {

  

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
          Register
        </Text>
        <Text style={{marginTop: 10, fontSize: 15, marginLeft: 20,color:'white'}}>
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
            color:'white'
          }}
          placeholder="Full Name"></TextInput>
        <TextInput
          style={{
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 3,
            marginLeft: 20,
            marginRight: 70,
            paddingLeft: 30,
            marginTop: 30,
            color:'White'
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
            color:'white'
          }}
          placeholder="Password"></TextInput>
          <TextInput
          style={{
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 3,
            marginLeft: 20,
            marginRight: 70,
            paddingLeft: 30,
            marginTop: 30,
            color:'white'
          }}
          placeholder="Confirm Password"></TextInput>

        <TouchableOpacity
         onPress={()=>alert('You are register successfully')}
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
          <Text style={{paddingLeft: 135,fontWeight:'bold',color:'white'}}>Register</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 90, marginTop: 40,color:'white'}}>I have already account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={{marginTop: 40, marginLeft: 10}}>
            <Text style={{color: '#23BBE8', fontWeight: 'bold'}}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </View>
      </ScrollView>
   
    </View>
  );
};

export default Signup;

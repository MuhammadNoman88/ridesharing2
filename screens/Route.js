import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert, // Import the Alert component
} from 'react-native';
import React, { useState } from 'react'; // Import useState hook

const Route = ({ navigation }) => {
  const [fromText, setFromText] = useState(''); // State for "From" TextInput
  const [toText, setToText] = useState(''); // State for "To" TextInput

  const handleFindButtonPress = () => {
    if (fromText === '' || toText === '') {
      // Check if any of the fields are empty
      Alert.alert('Error', 'Please fill in all the fields');
    } else {
      navigation.navigate('Categories');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1, backgroundColor: '#6FC6C4' }}>
        <Text
          style={{
            marginLeft: 120,
            fontSize: 17,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 10,
          }}
        >
          Welcome back!
        </Text>
        <Text style={{ marginLeft: 104, color: 'black' }}>
          Are you ready for a Ride?
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bg22.jpg')}
          style={{ height: 750, width: 410 }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              marginTop: 140,
              marginLeft: 25,
            }}
          >
            Where are you going?
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 25 }}>From</Text>
          <TextInput
            style={{
              borderWidth: 2,
              marginTop: 10,
              marginLeft: 25,
              marginRight: 80,
            }}
            value={fromText}
            onChangeText={(text) => setFromText(text)}
          />
          <Text style={{ marginTop: 10, marginLeft: 25 }}>To</Text>
          <TextInput
            style={{
              borderWidth: 2,
              marginTop: 10,
              marginLeft: 25,
              marginRight: 80,
            }}
            value={toText}
            onChangeText={(text) => setToText(text)}
          />
          <TouchableOpacity
            onPress={handleFindButtonPress}
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
            }}
          >
            <Text style={{ paddingLeft: 135, fontWeight: 'bold', color: 'white' }}>
              Find
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Route;

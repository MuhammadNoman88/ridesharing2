import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Activity = ({ route }) => {
  const handleRegister = async () => {
    const userDetails = {
      name: route.params.name,
      phone: route.params.phone,
      pickup: route.params.pickup,
      drop: route.params.drop,
      picktime: route.params.picktime,
      pickdate: route.params.pickdate,
    };

    try {
      await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));
      alert('Your booking is complete successfully!');
    } catch (error) {
      console.log('Error saving user details:', error);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 18, color: 'black' }}>
        Name: {route.params.name}
      </Text>
      <Text style={{ fontSize: 18, color: 'black' }}>
        Phone No: {route.params.phone}
      </Text>
      <Text style={{ fontSize: 18, color: 'black' }}>
        Pickup Location: {route.params.pickup}
      </Text>
      <Text style={{ fontSize: 18, color: 'black' }}>
        Drop Location: {route.params.drop}
      </Text>
      <Text style={{ fontSize: 18, color: 'black' }}>
        Pickup Time: {route.params.picktime}
      </Text>
      <Text style={{ fontSize: 18, color: 'black' }}>
        Pickup Date: {route.params.pickdate}
      </Text>
      <TouchableOpacity
        onPress={handleRegister}
        style={{
          borderWidth: 3,
          borderRadius: 10,
          marginTop: 30,
          paddingTop: 15,
          paddingBottom: 15,
          marginLeft: 60,
          marginRight: 70,
          backgroundColor: '#23BBE8',
          borderColor: '#23BBE8',
        }}
      >
        <Text style={{ paddingLeft: 65, fontWeight: 'bold', color: 'white' }}>
          Confirm Booking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Activity;

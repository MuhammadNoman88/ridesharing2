import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Inbox = ({navigation}) => {
  const [newBooking, setNewBooking] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const checkNewBooking = async () => {
      try {
        const storedUserDetails = await AsyncStorage.getItem('userDetails');
        if (storedUserDetails) {
          setUserDetails(JSON.parse(storedUserDetails));
          setNewBooking(true);
        }
      } catch (error) {
        console.log('Error retrieving user details:', error);
      }
    };

    checkNewBooking();
  }, []);

  const handleBookingClick = () => {
    setNewBooking(false);
    navigation.navigate('BookingDetails', {userDetails});
  };

  return (
    <View>
      {newBooking ? (
        <TouchableOpacity onPress={handleBookingClick}>
          <Text
            style={{
              borderWidth: 1,
              borderColor: '#25D366',
              borderRadius: 5,
              padding: 10,
              marginTop: 10,
              backgroundColor: '#DCF8C6',
              elevation: 2,
              color: 'blue',
            }}>
            You have a new booking
          </Text>
        </TouchableOpacity>
      ) : null}
      {userDetails && !newBooking && (
        <React.Fragment>
          <Text style={{fontSize: 18, color: 'black'}}>
            Name: {userDetails.name}
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            Phone No: {userDetails.phone}
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            Pickup Location: {userDetails.pickup}
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            Drop Location: {userDetails.drop}
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            Pickup Time: {userDetails.picktime}
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            Pickup Date: {userDetails.pickdate}
          </Text>
        </React.Fragment>
      )}
    </View>
  );
};

export default Inbox;

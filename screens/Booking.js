import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

const Booking = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [picktime, SetPicktime] = useState('');
  const [pickdate, setPicdate] = useState('');

  const book = () => {
    navigation.navigate('Activity', {
      name: name,
      phone: phone,
      pickup: pickup,
      drop: drop,
      picktime: picktime,
      pickdate: pickdate,
    });
  };
  return (
    <View style={{flex: 1}}>
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
              Book Now!
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
                color: 'white',
              }}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}></TextInput>
            <TextInput
              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'white',
              }}
              placeholder="Phone No"
              value={phone}
              onChangeText={text => setPhone(text)}></TextInput>

            <TextInput
              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'white',
              }}
              placeholder="Pickup Location"
              value={pickup}
              onChangeText={text => setPickup(text)}></TextInput>

            <TextInput
              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'white',
              }}
              placeholder="Drop Location"
              value={drop}
              onChangeText={text => setDrop(text)}></TextInput>

            <TextInput
              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'white',
              }}
              placeholder="Pickup Date"
              value={pickdate}
              onChangeText={text => setPicdate(text)}></TextInput>

            <TextInput
              style={{
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 3,
                marginLeft: 20,
                marginRight: 70,
                paddingLeft: 30,
                marginTop: 30,
                color: 'white',
              }}
              placeholder="Pickup Time"
              value={picktime}
              onChangeText={text => SetPicktime(text)}></TextInput>

            <TouchableOpacity
              onPress={book}
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
                Book Now
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Booking;

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  ToastAndroid
} from 'react-native';
import React, { useState } from 'react';
import DocumentPicker from 'react-native-document-picker'
import { openDatabase } from 'react-native-sqlite-storage';

const Ride = ({ navigation }) => {
  var db = openDatabase({ name: 'UserDatabase.db' });
  const [userImg, setuserImg] = useState('')
  const [vechicleName, setvechicleName] = useState('')
  const [vechicleModel, setvechicleModel] = useState('')
  const [pickupPoint, setpickupPoint] = useState('')
  const [destination, setdestination] = useState('')
  const [availableSeats, setavailableSeats] = useState('')
  const [farePerSeat, setfarePerSeat] = useState('')

  const PickImg = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log('Img===>', res[0]?.uri);
      setuserImg(res[0]?.uri)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        throw err;
      }
    }
  };
  const storeApplicationData = (vechicleName, vechicleModel, pickupPoint, destination, availableSeats, farePerSeat, imgUsed) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS application (id INTEGER PRIMARY KEY AUTOINCREMENT, vechicleName TEXT, vechicleModel TEXT, pickupPoint TEXT, destination TEXT, availableSeats TEXT, farePerSeat TEXT, imgUsed TEXT)',
        []
      );
      tx.executeSql(
        'INSERT INTO application (vechicleName,vechicleModel,pickupPoint,destination,availableSeats,farePerSeat,imgUsed) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [vechicleName, vechicleModel, pickupPoint, destination, availableSeats, farePerSeat, imgUsed],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            ToastAndroid.show('Form Submitted Successfully', ToastAndroid.SHORT);
            navigation.navigate('Home');
          } else {
            ToastAndroid.show('Form Submission Failed', ToastAndroid.SHORT);
          }
        },
        (error) => {
          console.log('Error storing data:', error);
        }
      );
    });
  };

  const handleOnpress = () => {
    if (!vechicleName || !vechicleModel || !pickupPoint || !destination || !availableSeats || !farePerSeat) {
      alert('Please fill all the fields');
    } else {
      storeApplicationData(vechicleName, vechicleModel, pickupPoint, destination, availableSeats, farePerSeat, userImg)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
        <View>
          <ImageBackground
            source={require('../assets/bg22.jpg')}
            style={{ height: 750, width: 410 }}>


            <Text style={{
              marginTop: 40,
              fontSize: 30,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 20,
            }}>Offer Ride Now!</Text>

            <TextInput
              onChangeText={(text) => setvechicleName(text)}
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
              placeholder="Vehicle Name"></TextInput>
            <TextInput
              onChangeText={(text) => setvechicleModel(text)}
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
              placeholder="Vehicle Model"></TextInput>

            <TextInput
              onChangeText={(text) => setpickupPoint(text)}
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
              placeholder="Pickup Point"></TextInput>

            <TextInput
              onChangeText={(text) => setdestination(text)}
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
              placeholder="Destination"></TextInput>

            <TextInput
              onChangeText={(text) => setavailableSeats(text)}
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
              placeholder="Available Seats"></TextInput>

            <TextInput
              onChangeText={(text) => setfarePerSeat(text)}
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
              placeholder="Fare per Seat"></TextInput>
            <TouchableOpacity onPress={() => PickImg()}>
              {userImg ? <Image style={{ height: 100, width: 100, marginLeft: 20, marginTop: 20 }} source={{ uri: userImg }} /> : (<Text style={{ marginLeft: '5%', marginVertical: '3%' }}>Upload Vehicle Image</Text>)
              }
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleOnpress()}
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

              <Text style={{ paddingLeft: 130, fontWeight: 'bold', color: 'white' }}>Offer Ride</Text>
            </TouchableOpacity>

          </ImageBackground>
        </View>
      </ScrollView>

    </View>
  );
};

export default Ride;

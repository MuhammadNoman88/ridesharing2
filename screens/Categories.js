import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
const DATA = [
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
  {
    title: ' Honda city',
    description: 'Lahore To karachi',
    price: 'Rs:100/per head',
    seats: 'Seats: 4',
    model: 'Model:2020',

    img: require('../assets/car.png'),
  },
];
const Categories = ({ navigation }) => {
  var db = openDatabase({ name: 'UserDatabase.db' });
  const [application, setApplication] = useState([]);
  useEffect(() => {
    getAllUsers()
      .then((users) => {
        console.log('All users:', users);
        setApplication(users);
      })
      .catch((error) => {
        console.log('Error retrieving users:', error);
      });
  }, []);
  const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM application',
          [],
          (tx, results) => {
            const users = [];
            for (let i = 0; i < results.rows.length; i++) {
              const user = results.rows.item(i);
              users.push(user);
            }
            resolve(users);
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <ImageBackground
        source={require('../assets/bg22.jpg')}
        style={{ height: 750, width: 410 }}>
        <Text
          style={{
            color: '#23BBE8',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 15,
            marginBottom: 10,
          }}>
          Select a car
        </Text>
        {
          <FlatList
            data={application}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    borderRadius: 10,
                    flexDirection: 'row',
                    margin: 10,
                    borderWidth: 3,
                    height: 70,
                    marginTop: 1,
                    borderColor: 'white',
                    backgroundColor: 'white',
                    width: '83%',
                  }}>
                  <View>
                    <Image
                      style={{ height: 60, width: 80 }}
                      source={{ uri: item.imgUsed }} />
                  </View>
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          alignSelf: 'center',
                          color: 'black',
                          fontSize: 16,
                        }}>
                        {item.vechicleName}
                      </Text>
                      <Text
                        style={{
                          alignSelf: 'center',
                          color: '#23BBE8',
                          marginLeft: 60,
                        }}>
                        {' '}
                        {`Rs: ${item.farePerSeat}/per head`}
                      </Text>
                    </View>

                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'black',
                        marginRight: 120,
                        justifyContent: 'center',
                      }}>
                      {item.pickupPoint} to {item.destination}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ alignSelf: 'center', color: '#23BBE8' }}>
                        {' '}
                        Seats:{item.availableSeats}
                      </Text>
                      <Text
                        style={{
                          alignSelf: 'center',
                          color: '#23BBE8',
                          marginLeft: 10,
                        }}>
                        {' '}
                        Model:{item.vechicleModel}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Booking')}
                        style={{
                          borderWidth: 2,
                          borderRadius: 5,
                          marginLeft: 20,
                          backgroundColor: '#23BBE8',
                          borderColor: '#23BBE8',
                        }}>
                        <Text style={{ color: 'black', padding: 1 }}>
                          Book Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        }
        <TouchableOpacity>
          <Text
            style={{
              borderWidth: 1,
              backgroundColor: 'blue',
              borderColor: 'blue',
              color: 'white',
              alignSelf: 'center',
              height: 30,
              fontSize: 18,
              textAlign: 'center',
              width: '80%',
            }}>
            Go With It (5)
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default Categories;

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
const Categories = ({navigation}) => {
  return (
    <View style={{marginTop: 10}}>
      <ImageBackground
        source={require('../assets/bg22.jpg')}
        style={{height: 750, width: 410}}>
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
            data={DATA}
            renderItem={({item}) => {
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
                      style={{height: 60, width: 80}}
                      source={item.img}></Image>
                  </View>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          alignSelf: 'center',
                          color: 'black',
                          fontSize: 16,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          alignSelf: 'center',
                          color: '#23BBE8',
                          marginLeft: 60,
                        }}>
                        {' '}
                        {item.price}
                      </Text>
                    </View>

                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'black',
                        marginRight: 120,
                        justifyContent: 'center',
                      }}>
                      {' '}
                      {item.description}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{alignSelf: 'center', color: '#23BBE8'}}>
                        {' '}
                        {item.seats}
                      </Text>
                      <Text
                        style={{
                          alignSelf: 'center',
                          color: '#23BBE8',
                          marginLeft: 10,
                        }}>
                        {' '}
                        {item.model}
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
                        <Text style={{color: 'black', padding: 1}}>
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

import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Offer = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../assets/bg22.jpg')}
            style={{height: 750, width: 410}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 30,
                marginLeft: 55,
                marginTop: 130,
              }}>
              Looking for a ride?
            </Text>
            <Text style={{marginLeft: 55, fontSize: 17, marginRight: 30}}>
              Find the people travelling to you
            </Text>
            <Text style={{marginLeft: 125, fontSize: 17}}>destination.</Text>
            <TouchableOpacity
             onPress={() => navigation.navigate('Ride')}
              style={{
                borderWidth: 3,
                borderRadius: 10,
                marginTop: 50,
                paddingTop: 15,
                paddingBottom: 15,
                marginLeft: 20,
                marginRight: 70,
                backgroundColor: '#23BBE8',
                borderColor: '#23BBE8',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    paddingLeft: 110,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 17,
                  }}>
                  OFFER RIDE
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Route')}
              style={{
                borderWidth: 3,
                borderRadius: 10,
                marginTop: 50,
                paddingTop: 15,
                paddingBottom: 15,
                marginLeft: 20,
                marginRight: 70,
                backgroundColor: '#23BBE8',
                borderColor: '#23BBE8',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    paddingLeft: 110,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 17,
                  }}>
                  Find RIDE
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Offer;

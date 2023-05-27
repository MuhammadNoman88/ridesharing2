import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const Data = [
  {
    title: 'Hi we are Vehicle Pooling!',
    des: 'We make getting around your city affordable,easy & efficient ',
    Img: require('../assets/bg22.jpg'),
  },
  {
    title: 'One app for all services',
    des: 'Get a rideshare, share seats, save money, save Environment with a click ',
    Img: require('../assets/bg22.jpg'),
  },
  {
    title: 'We will save you cash',
    des: 'Wether shared or private- you will always pay a low fare for your ride',
    Img: require('../assets/bg22.jpg'),
  },
  {
    title: 'Join our community!',
    des: 'Millions of riders have chosen vehicle pooling, we had be delighted to have you on board ',
    Img: require('../assets/bg22.jpg'),
  },
];
const Intro = ({navigation}) => {
  const [isshow, setshow] = useState(false);

  const arrayitem = ({item}) => {
    return (
      <View style={{flex:1, backgroundColor: '#23BBE8'}}>
        <Image style={styles.hetel} source={item.Img}></Image>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.des}>{item.des}</Text>
      </View>
    );
  };
  const Done = () => {
    navigation.navigate('HomeScreen');
    setshow('true');
  };
  const skip = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={{flex:1}}>
      <AppIntroSlider
        data={Data}
        onDone={Done}
        showSkipButton
        onSkip={skip}
        dotStyle={{backgroundColor: 'black'}}
        renderItem={item => arrayitem(item)}></AppIntroSlider>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '10%',
  },
  hetel: {
    width: '100%',
    height: '40%',
  },
  des: {
    fontSize: 20,
    marginTop: '10%',
    textAlign: 'center',
  },
  btn: {
    borderRadius: 10,
    borderWidth: 3,
    marginTop: '30%',
    alignSelf: 'center',
    width: 150,
    height: 50,
    borderColor: 'orange',
    backgroundColor: 'orange',
  },
});

export default Intro;

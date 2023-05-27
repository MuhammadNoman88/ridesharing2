import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  
  const Ride = ({navigation}) => {
   
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View>
        <ImageBackground
          source={require('../assets/bg22.jpg')}
          style={{height: 750, width: 410}}>

            
            <Text style={{  marginTop: 40,
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 20,}}>Offer Ride Now!</Text>

          <TextInput
          
            style={{
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 3,
              marginLeft: 20,
              marginRight: 70,
              paddingLeft: 30,
              marginTop: 30,
              color:'black'
            }}
            placeholder="Vehicle Name"></TextInput>
          <TextInput
            style={{
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 3,
              marginLeft: 20,
              marginRight: 70,
              paddingLeft: 30,
              marginTop: 30,
              color:'black'
            }}
            placeholder="Vehicle Model"></TextInput>

<TextInput
          
          style={{
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 3,
            marginLeft: 20,
            marginRight: 70,
            paddingLeft: 30,
            marginTop: 30,
            color:'black'
          }}
          placeholder="Pickup Point"></TextInput>

<TextInput
          
          style={{
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 3,
            marginLeft: 20,
            marginRight: 70,
            paddingLeft: 30,
            marginTop: 30,
            color:'black'
          }}
          placeholder="Destination"></TextInput>

<TextInput
          
          style={{
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 3,
            marginLeft: 20,
            marginRight: 70,
            paddingLeft: 30,
            marginTop: 30,
            color:'black'
          }}
          placeholder="Available Seats"></TextInput>

<TextInput
          
          style={{
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 3,
            marginLeft: 20,
            marginRight: 70,
            paddingLeft: 30,
            marginTop: 30,
            color:'black'
          }}
          placeholder="Fare per Seat"></TextInput>
          <Text>Upload Vehicle Image</Text>
          <TouchableOpacity
           onPress={()=>alert('Your ride register successfully')}
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
                
            <Text style={{paddingLeft: 130,fontWeight:'bold',color:'white'}}>Offer Ride</Text>
          </TouchableOpacity>
        
        </ImageBackground>
        </View>
        </ScrollView>
     
      </View>
    );
  };
  
  export default Ride;
  
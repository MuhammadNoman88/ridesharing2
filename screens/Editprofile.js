import { View, Text,TextInput,ImageBackground, ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'

const Editprofile = () => {
  return (
    <View>
        <ScrollView>
        <ImageBackground
        source={require('../assets/bg22.jpg')}
        style={{height: 750, width: 410}}>
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
        placeholder="Name"></TextInput>
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
        placeholder="Email"></TextInput>
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
        placeholder="Username"></TextInput>
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
        placeholder="Phone"></TextInput>
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
        placeholder="City"></TextInput>

<TouchableOpacity
        onPress={()=>alert('Your profile updated successfully')}
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
          <Text style={{paddingLeft: 135,fontWeight:'bold',color:'white'}}>Save</Text>
        </TouchableOpacity>
        
        </ImageBackground>
        </ScrollView>
    </View>
  )
}

export default Editprofile
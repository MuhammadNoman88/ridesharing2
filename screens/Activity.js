import {useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

const Activity = ({navigation}) => {
  const route = useRoute();
  return (
    <View>
      <Text style={{fontSize: 18, color: 'black'}}>
        Name:{route.params.name}
      </Text>
      <Text style={{fontSize: 18, color: 'black'}}>
        Phone No:{route.params.phone}
      </Text>
      <Text style={{fontSize: 18, color: 'black'}}>
        Pickup Location:{route.params.pickup}
      </Text>
      <Text style={{fontSize: 18, color: 'black'}}>
        Drop Location:{route.params.drop}
      </Text>
      <Text style={{fontSize: 18, color: 'black'}}>
        Pickup Time:{route.params.picktime}
      </Text>
      <Text style={{fontSize: 18, color: 'black'}}>
        Pickup Date:{route.params.pickdate}
      </Text>
      <TouchableOpacity
        onPress={() => alert('Congrats! Your ride successfully Booked')}
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
        }}>
        <Text style={{paddingLeft: 85, fontWeight: 'bold', color: 'white'}}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Activity;

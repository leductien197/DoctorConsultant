import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

// const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;

export default function Splash({navigation}) {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Image
        source={require('../images/splash3x.png')}
        style={{width: '100%', height: 393 * scale, marginTop: 46 * scale}}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          marginTop: 100 * scale,
          alignItems: 'center',
          backgroundColor: '#1D6AFF',
          width: 208 * scale,
          height: 62 * scale,
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 31 * scale,
        }}>
        <View>
          <Text style={{color: 'white', fontSize: 18, lineHeight: 23}}>
            Get started
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

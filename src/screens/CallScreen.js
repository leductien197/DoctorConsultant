import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function CallScreen({navigation}) {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <View
          style={{
            backgroundColor: '#EFF3FA',
            width: 40 * scale,
            height: 40 * scale,
            borderRadius: 20 * scale,
            marginTop: 17 * scale,
            marginLeft: 25 * scale,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 7 * scale,
              height: 14 * scale,
            }}
            source={require('../images/Rightarrow3x.png')}
          />
        </View>
      </TouchableOpacity>

      <View
        style={{
          alignSelf: 'center',
          marginTop: 171 * scale,
          alignItems: 'center',
        }}>
        <Image
          style={{width: 125 * scale, height: 125 * scale}}
          source={require('../images/callimage.png')}
        />
        <Text
          style={{
            fontSize: 20,
            lineHeight: 25,
            fontWeight: '600',
            marginTop: 30 * scale,
            color: '#222222',
          }}>
          Dr. Victor Le Roy
        </Text>
        <Text
          style={{
            marginTop: 12 * scale,
            lineHeight: 20,
            fontSize: 16,
            fontWeight: '600',
            color: '#00C797',
          }}>
          03:20
        </Text>
      </View>

      <View
        style={{
          marginLeft: 50,
          marginRight: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 170 * scale,
        }}>
        <TouchableOpacity
          style={{
            width: 68 * scale,
            height: 68 * scale,
            borderRadius: 34 * scale,
            backgroundColor: '#1D6AFF',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 22 * scale, height: 22 * scale}}
            source={require('../images/call.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 68 * scale,
            height: 68 * scale,
            borderRadius: 34 * scale,
            backgroundColor: '#979797',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 20 * scale, height: 14 * scale}}
            source={require('../images/call_camera.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RateScreen');
          }}
          style={{
            width: 68 * scale,
            height: 68 * scale,
            borderRadius: 34 * scale,
            backgroundColor: '#F5154F',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 22 * scale, height: 9 * scale}}
            source={require('../images/call_ended.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

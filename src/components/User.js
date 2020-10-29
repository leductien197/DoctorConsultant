import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function User(props, {navigation}) {
  console.log('props', props);
  return (
    <View
      style={{
        marginLeft: 30,
        marginRight: 30,
        marginTop: 40,
        height: '100%',
      }}>
      <View
        style={{
          width: '100%',
          height: 176 * scale,
          backgroundColor: '#EFF3FA',
          borderRadius: 30 * scale,
        }}>
        <Text
          style={{
            marginTop: 31,
            marginLeft: 28,
            lineHeight: 25,
            fontSize: 20,
            fontWeight: '600',
          }}>
          {props.name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallScreen');
          }}
          style={{
            height: 40 * scale,
            width: 106 * scale,
            position: 'absolute',
            top: 112,
            left: 28,
            backgroundColor: '#1D6AFF',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '400',
              lineHeight: 20,
            }}>
            Detail
          </Text>
        </TouchableOpacity>
        <Image
          style={{
            height: 160 * scale,
            width: 140 * scale,
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
          source={props.img}
          // source={require('../images/SliderVer13x.png')}
        />
      </View>
    </View>
    // </View>
  );
}

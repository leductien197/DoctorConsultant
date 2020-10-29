import React from 'react';
import User from '../components/User';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
const userDetail = [
  {name: 'Dr. Brian Hanner', img: require('../images/SliderVer13x.png')},
  {name: 'Doctor Pi', img: require('../images/SliderVer13x.png')},
  {name: 'Dr. Brian Hanner', img: require('../images/SliderVer13x.png')},
  {name: 'Doctor Pi', img: require('../images/SliderVer13x.png')},
  {name: 'Dr. Brian Hanner', img: require('../images/SliderVer13x.png')},
  {name: 'Doctor Pi', img: require('../images/SliderVer13x.png')},
  {name: 'Dr. Brian Hanner', img: require('../images/SliderVer13x.png')},
  {name: 'Doctor Pi', img: require('../images/SliderVer13x.png')},
  {name: 'Dr. Brian Hanner', img: require('../images/SliderVer13x.png')},
  {name: 'Doctor Pi', img: require('../images/SliderVer13x.png')},
];
export default function UserSubcription({navigation}) {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Country');
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
            Dr. Brian Hanner
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
            // source={props.img}
            source={require('../images/SliderVer13x.png')}
          />
        </View>
      </View>

      {/* <ScrollView></ScrollView> */}

      {/* <ScrollView>
        {userDetail.map((item, index) => {
          return <User name={item.name} img={item.img} />;
        })}
      </ScrollView> */}
    </View>
  );
}

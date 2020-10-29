import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;

export default function ConsultType({navigation}) {
  const [count, setCount] = useState(0);

  const pressCount = (index) => {
    if (index === count) {
      setCount(0);
    } else {
      setCount(index);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#F2F2F2', height: '100%'}}>
      <View>
        <Text
          style={{
            lineHeight: 38,
            fontSize: 34,
            fontWeight: 'bold',
            fontStyle: 'normal',
            top: 56 * scale,
            left: 30 * scale,
            color: '#222222',
          }}>
          What do you {'\n'}want to consult?
        </Text>
      </View>

      <View style={{marginTop: 115 * scale, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => pressCount(1)}
          style={{
            width: 88 * scale,
            height: 92 * scale,
            backgroundColor: count === 1 ? 'blue' : 'white',
            borderRadius: 46 * scale,
            marginLeft: 30 * scale,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image
              style={{width: 37 * scale, height: 38 * scale}}
              source={require('../images/brain_consult3x.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => pressCount(2)}>
          <View
            style={{
              width: 88 * scale,
              height: 92 * scale,
              backgroundColor: count === 2 ? 'blue' : 'white',
              borderRadius: 46 * scale,
              marginLeft: 20 * scale,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 37 * scale, height: 38 * scale}}
              source={require('../images/teeth_consult3x.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => pressCount(3)}>
          <View
            style={{
              width: 88 * scale,
              height: 92 * scale,
              backgroundColor: count === 3 ? 'blue' : 'white',
              borderRadius: 46 * scale,
              marginLeft: 20 * scale,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 37 * scale, height: 38 * scale}}
              source={require('../images/eye_consult3x.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 52 * scale, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => pressCount(4)}>
          <View
            style={{
              width: 88 * scale,
              height: 92 * scale,
              backgroundColor: count === 4 ? 'blue' : 'white',
              borderRadius: 46 * scale,
              marginLeft: 30 * scale,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 37 * scale, height: 38 * scale}}
              source={require('../images/bolt_consult3x.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => pressCount(5)}>
          <View
            style={{
              width: 88 * scale,
              height: 92 * scale,
              backgroundColor: count === 5 ? 'blue' : 'white',
              borderRadius: 46 * scale,
              marginLeft: 20 * scale,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 37 * scale, height: 38 * scale}}
              source={require('../images/arm_consult3x.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => pressCount(6)}>
          <View
            style={{
              width: 88 * scale,
              height: 92 * scale,
              backgroundColor: count === 6 ? 'blue' : 'white',
              // backgroundColor: 'white',
              borderRadius: 46 * scale,
              marginLeft: 20 * scale,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 37 * scale, height: 38 * scale}}
              source={require('../images/vegetable_consult3x.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 122 * scale}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{
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
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

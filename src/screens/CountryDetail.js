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
export default function CountryDetail({navigation, route}) {
  const [value, setValue] = useState();
  const {flag, countryName, countryCode} = route.params;
  const onChangeText = () => {};
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
      <View style={{marginBottom: 66 * scale}}>
        <Text
          style={{
            lineHeight: 25,
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'normal',
            top: 50 * scale,
            left: 31 * scale,
            color: '#222222',
          }}>
          Welcome to DocQ!
        </Text>
      </View>

      <View style={{marginTop: 66 * scale}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 31 * scale,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Country');
            }}>
            <Image
              style={{width: 40 * scale, height: 40 * scale}}
              source={flag}
              // source={require('../images/Bitmap3x.png')}
            />
            <Image
              style={{
                width: 24 * scale,
                height: 24 * scale,
                marginLeft: 6 * scale,
                marginRight: 2 * scale,
              }}
              source={require('../images/caret_down3x.png')}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: 'gray',
                fontSize: 18,
                lineHeight: 23,
                marginLeft: 4 * scale,
              }}>
              +{JSON.stringify(countryCode)}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 8 * scale,
            }}>
            <TextInput
              style={{
                fontWeight: 'bold',
                fontStyle: 'normal',
                color: '#222222',
                lineHeight: 23 * scale,
                fontSize: 18 * scale,
                width: 135 * scale,
              }}
              onChangeText={onChangeText}
              value={value}
              placeholder="190-000-009"
              keyboardType="number-pad"
              maxLength={10}></TextInput>
          </View>
        </View>
        <View
          style={{
            width: 315 * scale,
            height: 1 * scale,
            borderColor: '#DEE1E6',
            borderWidth: 1 * scale,
            marginTop: 18 * scale,
            alignSelf: 'center',
          }}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OtpVerification')}
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
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

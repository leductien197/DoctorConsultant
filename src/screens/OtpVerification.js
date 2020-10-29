import React from 'react';
import Verification from '../components/Verification';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function OtpVerification({navigation}) {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CountryDetail');
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
      <View>
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
          Please Verification!
        </Text>
      </View>
      <View style={{marginTop: 116 * scale}}>
        <Verification />
      </View>
      <View style={{marginTop: 100 * scale}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConsultType')}
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
    </View>
  );
}

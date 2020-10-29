import React from 'react';
import ScrollBookedList from '../components/ScrollBookedList';
import ScrollConsultList from '../components/ScrollConsultList';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function BookSchedule({navigation}) {
  return (
    <View>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Subscription');
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
          </View>
          <View style={{marginTop: 27 * scale, marginRight: 30 * scale}}>
            <Image
              style={{width: 20 * scale, height: 21 * scale}}
              source={require('../images/Calendarbook.png')}
            />
          </View>
        </View>
        <View
          style={{
            width: 198 * scale,
            marginTop: 25 * scale,
            marginLeft: 30 * scale,
          }}>
          <Text
            style={{
              lineHeight: 38,
              fontSize: 34,
              fontWeight: '700',
              color: '#222222',
            }}>
            Book Your {'\n'}Consult Day
          </Text>
        </View>
        <View style={{marginTop: 86 * scale}}>
          <ScrollConsultList />
        </View>

        <View style={{marginTop: 30 * scale}}>
          <ScrollBookedList />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 30 * scale,
            zIndex: 9999,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LiveStream')}
            style={{
              alignItems: 'center',
              backgroundColor: '#1D6AFF',
              width: 208 * scale,
              height: 62 * scale,
              justifyContent: 'center',
              // alignSelf: 'center',
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
    </View>
  );
}

import React from 'react';
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
export default function Subscription({navigation}) {
  return (
    <View>
      <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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
            width: 202 * scale,
            marginLeft: 30 * scale,
            marginTop: 25 * scale,
          }}>
          <Text
            style={{
              fontWeight: '700',
              lineHeight: 38,
              fontSize: 34,
              color: '#222222',
            }}>
            Choose Your Best Plan
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('BookSchedule')}>
          <View
            style={{
              alignSelf: 'center',
              width: 315 * scale,
              // height: 231 * scale,
              borderRadius: 30 * scale,
              backgroundColor: '#1D6AFF',
              marginTop: 57 * scale,
            }}>
            <View style={{alignSelf: 'center', marginTop: 31 * scale}}>
              <Text
                style={{
                  fontWeight: '700',
                  lineHeight: 35,
                  fontSize: 28,
                  color: 'white',
                }}>
                $30 / Week
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 25 * scale,
                width: 231 * scale,
              }}>
              <Text
                style={{
                  fontWeight: '400',
                  lineHeight: 21,
                  fontSize: 14,
                  color: 'white',
                  alignSelf: 'center',
                }}>
                {'  '}Unlimited access with the doctor {'\n'} and get daily
                notes, article and get {'\n'} {'       '}free consult for seven
                days
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 25 * scale,
                marginBottom: 30 * scale,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  lineHeight: 20,
                  fontSize: 16,
                  color: 'white',
                }}>
                I Choose this
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('BookSchedule')}>
          <View
            style={{
              alignSelf: 'center',
              width: 315 * scale,
              // height: 231 * scale,
              borderRadius: 30 * scale,
              backgroundColor: '#1D6AFF',
              marginTop: 30 * scale,
            }}>
            <View style={{alignSelf: 'center', marginTop: 31 * scale}}>
              <Text
                style={{
                  fontWeight: '700',
                  lineHeight: 35,
                  fontSize: 28,
                  color: 'white',
                }}>
                $100 / Month
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 25 * scale,
                width: 231 * scale,
                //   height: 63 * scale,
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '400',
                  lineHeight: 21,
                  fontSize: 14,
                  color: 'white',
                  alignSelf: 'center',
                }}>
                {'  '}Unlimited access with the doctor {'\n'} and get daily
                notes, article and get {'\n'} {'       '}free consult for seven
                days
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 25 * scale,
                marginBottom: 30 * scale,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  lineHeight: 20,
                  fontSize: 16,
                  color: 'white',
                }}>
                I Choose this
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

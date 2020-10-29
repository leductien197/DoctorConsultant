import React, {useState} from 'react';
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
import SliderHoz from '../components/SliderHoz';
import SliderVer from '../components/SliderVer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function HomeScreen() {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    //   style={{flex: 1}}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{backgroundColor: 'white'}}>
      {/* <View style={{backgroundColor: 'white', height: '100%'}}> */}
      <View
        style={{
          backgroundColor: '#EFF3FA',
          width: 315 * scale,
          height: 48 * scale,
          marginTop: 45 * scale,
          borderRadius: 15 * scale,
          alignSelf: 'center',
        }}>
        <TextInput
          style={{
            alignSelf: 'center',
            width: '100%',
            paddingLeft: 15 * scale,
          }}
          maxLength={30}
          inlineImageLeft="search_image"
          inlineImagePadding={20 * scale}
          autoFocus={false}
        />
      </View>
      {/* <ScrollView > */}
      <SliderHoz />
      {/* </ScrollView> */}
      <View>
        <Text
          style={{
            marginLeft: 31 * scale,
            marginTop: 33 * scale,
            lineHeight: 25,
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#222222',
          }}>
          Recomended Doctor
        </Text>
      </View>
      <ScrollView>
        <SliderVer />
      </ScrollView>
    </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
}

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
export default function ScrollBook(props) {
  return (
    <View>
      <View
        style={{
          width: 316 * scale,
          height: 78 * scale,
          borderRadius: 20 * scale,
          alignSelf: 'center',
          borderWidth: 1 * scale,
          borderColor: '#DEE1E6',
          backgroundColor: '#EFF3FA',
          marginTop: 20 * scale,
        }}>
        <View style={{marginTop: 29 * scale, marginLeft: 230 * scale}}>
          <Text style={{color: '#1D6AFF'}}>{props.name}</Text>
        </View>
      </View>
      <View
        style={{
          width: 316 * scale,
          height: 78 * scale,
          borderRadius: 20 * scale,
          alignSelf: 'center',
          borderWidth: 1 * scale,
          borderColor: '#DEE1E6',
          backgroundColor: 'white',
          marginTop: 20 * scale,
        }}></View>
    </View>
  );
}

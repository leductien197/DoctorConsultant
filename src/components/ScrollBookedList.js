import React from 'react';
import ScrollBook from './cpn2/ScrollBook';
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

const dataScroll = [
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
  {name: 'booked'},
];
export default function ScrollBookedList() {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView>
        {dataScroll.map((item, index) => {
          return <ScrollBook name={item.name} />;
        })}
      </ScrollView>
    </View>
  );
}

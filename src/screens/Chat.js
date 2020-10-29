import React, {useState} from 'react';
import ChatSlider from '../components/ChatSlider';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function Chat() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={{backgroundColor: '#1D6AFF'}}>
      <View
        style={{
          width: 186 * scale,
          height: 77 * scale,
          marginLeft: 30 * scale,
          marginTop: 56 * scale,
        }}>
        <Text
          style={{
            lineHeight: 38,
            fontSize: 34,
            fontWeight: '700',
            color: 'white',
          }}>
          Chat with your Doctor
        </Text>
      </View>
      <View
        style={{
          marginTop: 30 * scale,
          backgroundColor: '1D6AFF',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={[styles.textInput, isFocus && styles.isFocus]}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          inlineImageLeft="search_image"
          // inlineImageLeft="chat_search"
          // inlineImagePadding={20 * scale}
        ></TextInput>
        <ChatSlider />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          // height: 527 * scale,
          height: '100%',
          borderTopLeftRadius: 50 * scale,
          borderTopRightRadius: 50 * scale,
          bottom: 0,
          backgroundColor: 'white',
          marginTop: 30 * scale,
        }}>
        <ScrollView style={{width: '100%'}}></ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: 48 * scale,
    height: 48 * scale,
    backgroundColor: '#FFFFFF',
    opacity: 0.3,
    marginLeft: 30 * scale,
    borderRadius: 24 * scale,
    paddingLeft: 15 * scale,
  },
  isFocus: {
    width: 182 * scale,
    paddingLeft: 15 * scale,
  },
});

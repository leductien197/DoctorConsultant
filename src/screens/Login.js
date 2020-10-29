import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function Login({navigation}) {
  const [value, setValue] = useState();
  const onChangeText = () => {};
  return (
    <View style={{backgroundColor: '#1D6AFF', height: '100%'}}>
      <View>
        <Image
          style={{
            marginTop: 58 * scale,
            alignSelf: 'center',
            marginBottom: 264 * scale,
            width: 200 * scale,
            height: 200 * scale,
          }}
          source={require('../images/illus3x.png')}
        />
      </View>

      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 246 * scale,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          marginTop: 'auto',
        }}>
        <Text
          style={{
            lineHeight: 25,
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'normal',
            top: 35 * scale,
            left: 30 * scale,
            color: '#222222',
          }}>
          Welcome to DocQ!
        </Text>
        <View
          style={{
            flexDirection: 'row',
            left: 30 * scale,
            top: 66 * scale,
            alignItems: 'baseline',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Country')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Image
                  style={{width: 40 * scale, height: 40 * scale}}
                  source={require('../images/Bitmap3x.png')}
                />
              </View>
              <View>
                <Image
                  style={{
                    width: 24 * scale,
                    height: 24 * scale,
                    marginLeft: 12 * scale,
                    marginRight: 2 * scale,
                  }}
                  source={require('../images/caret_down3x.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <TextInput
              style={{
                color: 'gray',
                fontSize: 18,
                lineHeight: 23,
              }}>
              +62
            </TextInput>
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
              placeholder="190-000-009"
              onChangeText={onChangeText}
              value={value}
              maxLength={10}></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
}

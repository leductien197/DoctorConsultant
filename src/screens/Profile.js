import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function Profile({navigation}) {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          marginLeft: 30,
          marginRight: 84,
          marginTop: 56,
          height: 100 * scale,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 100 * scale, height: 100 * scale}}
          source={require('../images/18743.png')}
        />
        <Text
          style={{
            lineHeight: 25,
            fontSize: 20,
            fontWeight: '700',
            color: '#222222',
            marginLeft: 20 * scale,
          }}>
          Khuat Sau Nui
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailProfile');
        }}>
        <View
          style={{
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 20 * scale,
            height: 100 * scale,
            backgroundColor: '#1D6AFF',
            marginTop: 30 * scale,
          }}>
          <View
            style={{
              height: 90 * scale,
              width: 1 * scale,
              borderColor: 'white',
              borderWidth: 1 * scale,
              alignSelf: 'center',
              marginTop: 5 * scale,
            }}></View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          marginRight: 48,
          marginLeft: 309,
          marginTop: 60 * scale,
          width: 18 * scale,
          height: 12 * scale,
        }}>
        <Image
          style={{
            width: 18 * scale,
            height: 12 * scale,
          }}
          source={require('../images/ArrowProfile.png')}
        />
      </View>
      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          height: 1,
          borderColor: '##DEE1E6',
          borderWidth: 1,
          marginTop: 19.75 * scale,
        }}></View>

      <View
        style={{
          marginRight: 48,
          marginLeft: 309,
          marginTop: 37.25 * scale,
          width: 18 * scale,
          height: 12 * scale,
        }}>
        <Image
          style={{
            width: 18 * scale,
            height: 12 * scale,
          }}
          source={require('../images/ArrowProfile.png')}
        />
      </View>
      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          height: 1,
          borderColor: '##DEE1E6',
          borderWidth: 1,
          marginTop: 19.75 * scale,
        }}></View>

      <View
        style={{
          marginRight: 48,
          marginLeft: 309,
          marginTop: 37.25 * scale,
          width: 18 * scale,
          height: 12 * scale,
        }}>
        <Image
          style={{
            width: 18 * scale,
            height: 12 * scale,
          }}
          source={require('../images/ArrowProfile.png')}
        />
      </View>
      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          height: 1,
          borderColor: '##DEE1E6',
          borderWidth: 1,
          marginTop: 19.75 * scale,
        }}></View>

      <View
        style={{
          marginRight: 48,
          marginLeft: 309,
          marginTop: 37.25 * scale,
          width: 18 * scale,
          height: 12 * scale,
        }}>
        <Image
          style={{
            width: 18 * scale,
            height: 12 * scale,
          }}
          source={require('../images/ArrowProfile.png')}
        />
      </View>
      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          height: 1,
          borderColor: '##DEE1E6',
          borderWidth: 1,
          marginTop: 19.75 * scale,
        }}></View>

      <View
        style={{
          marginRight: 48,
          marginLeft: 309,
          marginTop: 37.25 * scale,
          width: 18 * scale,
          height: 12 * scale,
        }}>
        <Image
          style={{
            width: 18 * scale,
            height: 12 * scale,
          }}
          source={require('../images/ArrowProfile.png')}
        />
      </View>
      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          height: 1,
          borderColor: '##DEE1E6',
          borderWidth: 1,
          marginTop: 19.75 * scale,
        }}></View>
    </View>
  );
}

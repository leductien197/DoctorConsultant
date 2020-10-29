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
export default function DetailProfile({navigation}) {
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

      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 30,
          marginBottom: 79,
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            height: 78 * scale,
            borderRadius: 20 * scale,
            borderWidth: 1,
            borderColor: '#DEE1E6',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}
            style={{
              position: 'absolute',
              marginLeft: 15 * scale,
              marginTop: 15 * scale,
              width: 48 * scale,
              height: 48 * scale,
              borderRadius: 24 * scale,
              backgroundColor: '#1D6AFF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 17 * scale, height: 18 * scale}}
              source={require('../images/FileEdit.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 78 * scale,
            borderRadius: 20 * scale,
            borderWidth: 1,
            borderColor: '#DEE1E6',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}
            style={{
              position: 'absolute',
              marginLeft: 15 * scale,
              marginTop: 15 * scale,
              width: 48 * scale,
              height: 48 * scale,
              borderRadius: 24 * scale,
              backgroundColor: '#FFD855',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 17 * scale, height: 18 * scale}}
              source={require('../images/Event.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 78 * scale,
            borderRadius: 20 * scale,
            borderWidth: 1,
            borderColor: '#DEE1E6',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}
            style={{
              position: 'absolute',
              marginLeft: 15 * scale,
              marginTop: 15 * scale,
              width: 48 * scale,
              height: 48 * scale,
              borderRadius: 24 * scale,
              backgroundColor: '#00C797',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 17 * scale, height: 18 * scale}}
              source={require('../images/Wallet.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 78 * scale,
            borderRadius: 20 * scale,
            borderWidth: 1,
            borderColor: '#DEE1E6',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}
            style={{
              position: 'absolute',
              marginLeft: 15 * scale,
              marginTop: 15 * scale,
              width: 48 * scale,
              height: 48 * scale,
              borderRadius: 24 * scale,
              backgroundColor: '#1D6AFF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 17 * scale, height: 18 * scale}}
              source={require('../images/FileEdit.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 78 * scale,
            borderRadius: 20 * scale,
            borderWidth: 1,
            borderColor: '#DEE1E6',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}
            style={{
              position: 'absolute',
              marginLeft: 15 * scale,
              marginTop: 15 * scale,
              width: 48 * scale,
              height: 48 * scale,
              borderRadius: 24 * scale,
              backgroundColor: '#FFD855',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 17 * scale, height: 18 * scale}}
              source={require('../images/Event.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 78 * scale,
            borderRadius: 20 * scale,
            borderWidth: 1,
            borderColor: '#DEE1E6',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}
            style={{
              position: 'absolute',
              marginLeft: 15 * scale,
              marginTop: 15 * scale,
              width: 48 * scale,
              height: 48 * scale,
              borderRadius: 24 * scale,
              backgroundColor: '#00C797',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 17 * scale, height: 18 * scale}}
              source={require('../images/Wallet.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

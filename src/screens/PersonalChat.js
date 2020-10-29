import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function PersonalChat({navigation}) {
  const [hideView, setHideView] = useState(false);
  const onShowView = () => {
    setHideView(!hideView);
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
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
            alignSelf: 'center',
            marginTop: 17 * scale,
            width: 147 * scale,
            height: 40 * scale,
            marginLeft: 49 * scale,
          }}>
          <Text
            style={{
              lineHeight: 20,
              fontSize: 16,
              fontWeight: '700',
              color: '#222222',
              textAlign: 'center',
            }}>
            Dr.Caroline
          </Text>
          <Text
            style={{
              lineHeight: 18,
              fontSize: 14,
              fontWeight: '400',
              color: '#9093A3',
              textAlign: 'center',
            }}>
            Last seen 1 hours ago
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 17 * scale,
            right: 25 * scale,
          }}>
          <Image
            style={{width: 38 * scale, height: 38 * scale}}
            source={require('../images/iconDoctorLiveStream.png')}
          />
        </View>
      </View>

      <View
        style={{
          // marginTop: 30 * scale,
          // marginBottom: 40 * scale,
          // width: '100%',
          backgroundColor: 'white',
          flex: 1,
        }}>
        <ScrollView></ScrollView>
      </View>

      <View
        style={{
          marginTop: 'auto',
          //   width: 309 * scale,
          flexDirection: 'row',
          height: 78 * scale,
          // height: 54 * scale,
          marginBottom: 24 * scale,
          alignItems: 'center',
          paddingLeft: 36,
          paddingRight: 30,
        }}>
        {/* <TouchableOpacity onPress={() => onShowView()}>
          <Image
            style={{
              height: 46 * scale,
              width: 46 * scale,
              // marginLeft: 30 * scale,
            }}
            source={require('../images/addimage.png')}
          />
        </TouchableOpacity> */}
        {hideView ? (
          <TouchableOpacity onPress={() => onShowView()}>
            <Image
              style={{
                height: 46 * scale,
                width: 46 * scale,
                // marginLeft: 30 * scale,
              }}
              source={require('../images/cancleview.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => onShowView()}>
            <Image
              style={{
                height: 46 * scale,
                width: 46 * scale,
                // marginLeft: 30 * scale,
              }}
              source={require('../images/addimage.png')}
            />
          </TouchableOpacity>
        )}
        <View
          style={{
            width: 252 * scale,
            height: 54 * scale,
            flexDirection: 'row',
            position: 'relative',
            alignSelf: 'center',
          }}>
          <TextInput
            placeholder="Type a message"
            style={{
              marginLeft: 11 * scale,
              width: 252 * scale,
              height: 54 * scale,
              borderRadius: 37 * scale,
              backgroundColor: '#EFF3FA',
              paddingLeft: 15 * scale,
            }}></TextInput>
          <TouchableOpacity>
            <Image
              style={{
                width: 20 * scale,
                height: 20 * scale,
                position: 'absolute',
                marginTop: 17 * scale,
                marginLeft: -58 * scale,
              }}
              source={require('../images/Send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {hideView ? (
        <View
          style={{
            //   width: '100%',
            paddingLeft: 34,
            paddingRight: 33,
            height: 50 * scale,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 35,
            //   alignSelf: 'center',
          }}>
          <View
            style={{
              width: 50 * scale,
              height: 50 * scale,
              borderRadius: 25 * scale,
              backgroundColor: '#EFF3FA',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../images/Camera.png')} />
          </View>

          <View
            style={{
              width: 50 * scale,
              height: 50 * scale,
              borderRadius: 25 * scale,
              backgroundColor: '#EFF3FA',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../images/File.png')} />
          </View>

          <View
            style={{
              width: 50 * scale,
              height: 50 * scale,
              borderRadius: 25 * scale,
              backgroundColor: '#EFF3FA',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../images/Location.png')} />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={{
              width: 50 * scale,
              height: 50 * scale,
              borderRadius: 25 * scale,
              backgroundColor: '#EFF3FA',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../images/User.png')} />
          </TouchableOpacity>
        </View>
      ) : null}
      {/* <View
        style={{
          //   width: '100%',
          paddingLeft: 34,
          paddingRight: 33,
          height: 50 * scale,
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 35,
          //   alignSelf: 'center',
        }}>
        <View
          style={{
            width: 50 * scale,
            height: 50 * scale,
            borderRadius: 25 * scale,
            backgroundColor: '#EFF3FA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../images/Camera.png')} />
        </View>

        <View
          style={{
            width: 50 * scale,
            height: 50 * scale,
            borderRadius: 25 * scale,
            backgroundColor: '#EFF3FA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../images/File.png')} />
        </View>

        <View
          style={{
            width: 50 * scale,
            height: 50 * scale,
            borderRadius: 25 * scale,
            backgroundColor: '#EFF3FA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../images/Location.png')} />
        </View>

        <View
          style={{
            width: 50 * scale,
            height: 50 * scale,
            borderRadius: 25 * scale,
            backgroundColor: '#EFF3FA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../images/User.png')} />
        </View>
      </View> */}
    </View>
  );
}

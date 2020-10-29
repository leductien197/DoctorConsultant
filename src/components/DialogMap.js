import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function DialogMap({navigation}) {
  const closeDialog = () => {};
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          style={{
            width: 40 * scale,
            height: 40 * scale,
            marginTop: 30 * scale,
            marginLeft: 30 * scale,
          }}
          source={require('../images/back_button.png')}
        />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 100 * scale,
          width: 315 * scale,
          height: 215 * scale,
          backgroundColor: 'white',
          borderRadius: 30 * scale,
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              height: 64 * scale,
              width: 64 * scale,
              marginLeft: 22 * scale,
              marginTop: 22 * scale,
            }}
            source={require('../images/man_dialog_map.png')}
          />
          <Image
            style={{
              height: 38 * scale,
              width: 38 * scale,
              marginLeft: 47 * scale,
              marginTop: 35 * scale,
            }}
            source={require('../images/tele_dialog_map.png')}
          />
          <Image
            style={{
              height: 38 * scale,
              width: 38 * scale,
              marginLeft: 14 * scale,
              marginTop: 35 * scale,
            }}
            source={require('../images/share_dialog_map.png')}
          />
          <Image
            style={{
              height: 38 * scale,
              width: 38 * scale,
              marginLeft: 14 * scale,
              marginTop: 35 * scale,
            }}
            source={require('../images/mesage_dialog_map.png')}
          />
        </View>

        <View style={{marginTop: 44 * scale, marginLeft: -204 * scale}}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={14}
            // showRating
            fractions={2}
            startingValue={5}
            // onFinishRating={ratingCompleted}
          />
        </View>

        <View
          style={{
            marginLeft: 22 * scale,
            marginTop: 8 * scale,
            width: 253 * scale,
            height: 37 * scale,
          }}>
          <Text
            style={{
              lineHeight: 18,
              fontSize: 14,
              fontWeight: '400',
              color: '#9093A3',
            }}>
            Specialist in bone and skin health. Love sharing and work at Miami
            Hospital
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 20 * scale}}
        onPress={closeDialog}>
        <Image
          style={{height: 46 * scale, width: 46 * scale}}
          source={require('../images/cancle_dialog_map.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

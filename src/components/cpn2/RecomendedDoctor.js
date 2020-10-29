import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
function ratingCompleted(rating) {
  console.log('Rating is: ' + rating);
}
export default function RecomendedDoctor(props, {navigation}) {
  return (
    // <TouchableOpacity
    //   onPress={() => {
    //     navigation.navigate('DoctorProfile');
    //   }}>
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 30 * scale,
        alignItems: 'center',
      }}>
      <View>
        <Image
          style={{width: 100 * scale, height: 120 * scale}}
          source={props.img}
        />
      </View>
      <View
        style={{
          width: 151 * scale,
          height: 91 * scale,
          flexDirection: 'column',
          marginTop: 50 * scale,
          marginLeft: 20 * scale,
        }}>
        <View
          style={{
            width: 105 * scale,
            height: 18 * scale,
            // marginLeft: 22 * scale,
            flexDirection: 'row',
          }}>
          <Rating
            type="star"
            ratingCount={props.star}
            imageSize={13}
            // showRating
            fractions={2}
            startingValue={5}
            // onFinishRating={ratingCompleted}
          />
        </View>
        <View style={{height: 37 * scale, width: 151 * scale}}>
          <Text
            style={{
              lineHeight: 18,
              fontSize: 14,
              fontWeight: 'normal',
              fontStyle: 'normal',
              color: '#9093A3',
            }}>
            {props.text}
          </Text>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
}

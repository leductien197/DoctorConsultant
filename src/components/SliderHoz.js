import React from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;

const imageSlider = [
  require('../images/slide13x.png'),
  require('../images/slide23x.png'),
  require('../images/slide33x.png'),
  require('../images/slide43x.png'),
  require('../images/slide13x.png'),
  require('../images/slide23x.png'),
  require('../images/slide33x.png'),
  require('../images/slide43x.png'),
  require('../images/slide13x.png'),
  require('../images/slide23x.png'),
  require('../images/slide33x.png'),
  require('../images/slide43x.png'),
  require('../images/slide13x.png'),
  require('../images/slide23x.png'),
  require('../images/slide33x.png'),
  require('../images/slide43x.png'),
];
export default function SliderHoz() {
  // console.log('props', props);
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        // flexDirection: 'row',
        marginTop: 110 * scale,
      }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
        }}>
        {imageSlider.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{
              width: 54 * scale,
              height: 54 * scale,
              alignSelf: 'center',
              resizeMode: 'cover',
              margin: 7 * scale,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

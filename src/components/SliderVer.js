import React from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import RecomendedDoctor from './cpn2/RecomendedDoctor';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;

const dataSlide2 = [
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
  {
    img: require('../images/SliderVer13x.png'),
    star: 5,
    text: 'Dentist specialist since 2008 in LBC Hospital...',
  },
];
export default function SliderVer() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        {dataSlide2.map((item, index) => {
          return (
            <RecomendedDoctor
              img={item.img}
              star={item.star}
              text={item.text}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

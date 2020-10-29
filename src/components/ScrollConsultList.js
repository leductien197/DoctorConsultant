import React from 'react';
import BasicVerification from '../components/BasicVerification';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;

const consultList = [{text: ' '}, {text: ' '}, {text: ' '}];
export default function ScrollConsultList() {
  return (
    <View style={{backgroundColor: 'white', width: '100%'}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
        }}>
        {consultList.map((item, index) => {
          return <BasicVerification text={item.text} />;
        })}
      </ScrollView>
    </View>
  );
}

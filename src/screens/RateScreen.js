import React, {useState} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function RateScreen({navigation}) {
  const [iconVote, setIconVote] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const onShowModal = () => {
    setModalVisible(true);
  };
  const onCloseModal = () => {
    setModalVisible(false);
  };

  const [state, setState] = useState(0);
  const onRateStar = (index) => {
    if (index === state) {
      setState(0);
    } else {
      setState(index);
    }
  };
  return (
    <View
      style={{
        backgroundColor: modalVisible ? '#000000' : '#1D6AFF',
        height: '100%',
        opacity: modalVisible ? 0.5 : 1,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Country');
        }}>
        <View
          style={{
            backgroundColor: 'white',
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

      {/* <View style={{position: 'absolute', left: 30, right: 30, bottom: '50%'}}> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}

        // backdropColor={'#000000'}
        // backdropOpacity={0.3}
      >
        <View
          style={{
            width: 315 * scale,
            height: 420 * scale,
            alignSelf: 'center',
            marginTop: 148 * scale,
            zIndex: 9999,
            backgroundColor: '#FFFFFF',
            borderRadius: 30 * scale,
            alignItems: 'center',
            // backdrop
            // shadowColor: '#000000',
            // shadowOffset: {
            //   width: '100%',
            //   height: '100%',
            // },
            // shadowOpacity: 0.5,
          }}>
          <View
            style={{
              width: 100 * scale,
              height: 100 * scale,
              borderRadius: 50 * scale,
              backgroundColor: '#EFF3FA',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Image
              style={{height: 60 * scale, width: 60 * scale}}
              source={iconVote}
            />
          </View>
          <View style={{marginTop: 30 * scale}}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={27}
              fractions={2}
              startingValue={5}
              // marginLeft={10}
              // showRating
              // onFinishRating={ratingCompleted}
            />
          </View>
          <View
            style={{
              marginTop: 30 * scale,
              width: 178 * scale,
              height: 47 * scale,
            }}>
            <Text
              style={{
                lineHeight: 23,
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center',
                color: '#9093A3',
              }}>
              Thanks for your awesome experience
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => onCloseModal()}
            style={{
              alignItems: 'center',
              backgroundColor: '#1D6AFF',
              width: 208 * scale,
              height: 62 * scale,
              justifyContent: 'center',
              // alignSelf: 'center',
              borderRadius: 31 * scale,
              marginTop: 34 * scale,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 18, lineHeight: 23}}>
                Back to home
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* </View> */}

      <View
        style={{
          position: 'absolute',
          top: 96 * scale,
          left: 125 * scale,
          zIndex: 6666,
        }}>
        <Image
          style={{width: 125 * scale, height: 125 * scale}}
          source={require('../images/ratestardoctor.png')}
        />
      </View>

      <View
        style={{
          width: '100%',
          height: 595 * scale,
          backgroundColor: 'white',
          borderTopLeftRadius: 50 * scale,
          borderTopRightRadius: 50 * scale,
          marginTop: 'auto',
          alignItems: 'center',
        }}>
        <Text
          style={{
            lineHeight: 25,
            fontSize: 20,
            fontWeight: '600',
            marginTop: 93 * scale,
          }}>
          Dr. Victor Le Roy
        </Text>
        <View style={{marginTop: 40 * scale}}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={36}
            fractions={2}
            startingValue={5}
            // showRating
            // onFinishRating={ratingCompleted}
          />
        </View>
        <Text
          style={{
            lineHeight: 23,
            fontSize: 18,
            fontWeight: '600',
            marginTop: 55 * scale,
          }}>
          “Awesome consultation, Doc”
        </Text>
        <View
          style={{
            marginTop: 55 * scale,
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                onRateStar(1),
                  setIconVote(require('../images/star1.png'), onShowModal());
              }}
              style={{
                height: 60 * scale,
                width: 60 * scale,
                borderRadius: 30 * scale,
                borderColor: '#DEE1E6',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: state === 1 ? '#EFF3FA' : 'white',
              }}>
              <Image
                style={{width: 34 * scale, height: 34 * scale}}
                source={require('../images/star1.png')}
              />
            </TouchableOpacity>
            <Text
              onPress={() => onRateStar(1)}
              style={{
                color: state === 1 ? '#222222' : '#9093A3',
                lineHeight: 18,
                fontSize: 14,
                fontWeight: '600',
                marginTop: 18 * scale,
              }}>
              Not Bad
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                onRateStar(2),
                  setIconVote(require('../images/star2.png'), onShowModal());
              }}
              style={{
                height: 60 * scale,
                width: 60 * scale,
                borderRadius: 30 * scale,
                borderColor: '#DEE1E6',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: state === 2 ? '#EFF3FA' : 'white',
              }}>
              <Image
                style={{width: 34 * scale, height: 34 * scale}}
                source={require('../images/star2.png')}
              />
            </TouchableOpacity>
            <Text
              onPress={() => onRateStar(2)}
              style={{
                color: state === 2 ? '#222222' : '#9093A3',
                lineHeight: 18,
                fontSize: 14,
                fontWeight: '600',
                marginTop: 18 * scale,
              }}>
              Love It
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                onRateStar(3),
                  setIconVote(require('../images/star3.png'), onShowModal());
              }}
              style={{
                height: 60 * scale,
                width: 60 * scale,
                borderRadius: 30 * scale,
                borderColor: '#DEE1E6',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: state === 3 ? '#EFF3FA' : 'white',
              }}>
              <Image
                style={{width: 34 * scale, height: 34 * scale}}
                source={require('../images/star3.png')}
              />
            </TouchableOpacity>
            <Text
              onPress={() => onRateStar(3)}
              style={{
                color: state === 3 ? '#222222' : '#9093A3',
                lineHeight: 18,
                fontSize: 14,
                fontWeight: '600',
                marginTop: 18 * scale,
              }}>
              Nice Work
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                onRateStar(4),
                  setIconVote(require('../images/star4.png'), onShowModal());
              }}
              style={{
                height: 60 * scale,
                width: 60 * scale,
                borderRadius: 30 * scale,
                borderColor: '#DEE1E6',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: state === 4 ? '#EFF3FA' : 'white',
              }}>
              <Image
                style={{width: 34 * scale, height: 34 * scale}}
                source={require('../images/star4.png')}
              />
            </TouchableOpacity>
            <Text
              onPress={() => onRateStar(4)}
              style={{
                color: state === 4 ? '#222222' : '#9093A3',
                lineHeight: 18,
                fontSize: 14,
                fontWeight: '600',
                marginTop: 18 * scale,
              }}>
              Anwesome
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('DoctorMap')}
          style={{
            alignItems: 'center',
            backgroundColor: '#1D6AFF',
            width: 208 * scale,
            height: 62 * scale,
            justifyContent: 'center',
            // alignSelf: 'center',
            borderRadius: 31 * scale,
            marginTop: 74 * scale,
          }}>
          <View>
            <Text style={{color: 'white', fontSize: 18, lineHeight: 23}}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

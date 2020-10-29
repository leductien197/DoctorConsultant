import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

function ratingCompleted(rating) {
  console.log('Rating is: ' + rating);
}

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function Share() {
  return (
    <View style={{height: '100%'}}>
      {/* <AirbnbRating
        count={5}
        reviews={['1/5', '2/5', '3/5', '4/5', '5/5']}
        size={20}
        defaultRating={5}
        starStyle={{backgroundColor: 'white', borderColor: 'yellow'}}
        showRating
      />
      <Rating
        type="heart"
        ratingCount={3}
        imageSize={60}
        showRating
        onFinishRating={ratingCompleted}
      /> */}
      <View
        style={{
          height: 390 * scale,
          width: '100%',
          borderTopLeftRadius: 50 * scale,
          borderTopRightRadius: 50 * scale,
          backgroundColor: 'white',
          // alignSelf: 'flex-end',
          marginTop: 'auto',
          // bottom: 0 * scale,
        }}>
        <View
          style={{
            width: 119 * scale,
            height: 25 * scale,
            marginTop: 35 * scale,
            marginLeft: 30 * scale,
          }}>
          <Text style={{lineHeight: 25, fontSize: 20, fontWeight: '700'}}>
            Share live to
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 56 * scale,
          }}>
          <TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <LinearGradient
                style={{
                  width: 62 * scale,
                  height: 62 * scale,
                  borderRadius: 31 * scale,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                colors={['#20B038', '#60D66A']}>
                <Image
                  style={{
                    width: 28 * scale,
                    height: 29 * scale,
                  }}
                  source={require('../images/whatsapp.png')}
                />
              </LinearGradient>
              <Text
                style={{
                  lineHeight: 18,
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: 10 * scale,
                }}>
                Whatsapp
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <LinearGradient
                style={{
                  width: 62 * scale,
                  height: 62 * scale,
                  borderRadius: 31 * scale,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                colors={['#3C5A9A', '#3C5A9A']}>
                <Image
                  style={{
                    width: 15 * scale,
                    height: 29 * scale,
                  }}
                  source={require('../images/facebook.png')}
                />
              </LinearGradient>
              <Text
                style={{
                  lineHeight: 18,
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: 10 * scale,
                }}>
                Facebook
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <LinearGradient
                style={{
                  width: 62 * scale,
                  height: 62 * scale,
                  borderRadius: 31 * scale,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                colors={['#00B2FF', '#006AFF']}>
                <Image
                  style={{
                    width: 28 * scale,
                    height: 28 * scale,
                  }}
                  source={require('../images/fbmessenger.png')}
                />
              </LinearGradient>
              <Text
                style={{
                  lineHeight: 18,
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: 10 * scale,
                }}>
                Messenger
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 56 * scale,
          }}>
          <TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <LinearGradient
                style={{
                  width: 62 * scale,
                  height: 62 * scale,
                  borderRadius: 31 * scale,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                colors={['#2DAAE1', '#2DAAE1']}>
                <Image
                  style={{
                    width: 28 * scale,
                    height: 23 * scale,
                  }}
                  source={require('../images/twitter.png')}
                />
              </LinearGradient>
              <Text
                style={{
                  lineHeight: 18,
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: 10 * scale,
                }}>
                Twitter
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <LinearGradient
                style={{
                  width: 62 * scale,
                  height: 62 * scale,
                  borderRadius: 31 * scale,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                colors={['#8D34AC', '#E34662', '#E54D5B']}>
                <Image
                  style={{
                    width: 28 * scale,
                    height: 28 * scale,
                  }}
                  source={require('../images/ig.png')}
                />
              </LinearGradient>
              <Text
                style={{
                  lineHeight: 18,
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: 10 * scale,
                }}>
                Instagram
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <LinearGradient
                style={{
                  width: 62 * scale,
                  height: 62 * scale,
                  borderRadius: 31 * scale,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                colors={['#70EFFF', '#5770FF']}>
                <Image
                  style={{
                    width: 28 * scale,
                    height: 18 * scale,
                  }}
                  source={require('../images/email.png')}
                />
              </LinearGradient>
              <Text
                style={{
                  lineHeight: 18,
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: 10 * scale,
                }}>
                Email
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

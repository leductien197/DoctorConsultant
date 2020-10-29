import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function LiveStream({navigation}) {
  const [hideShare, setHideShare] = useState(false);
  const onShowShare = () => {
    setHideShare(!hideShare);
  };

  // const onHideShare = () => {
  //   setHideShare(false);
  // };
  // console.log('a',)
  return (
    <View
      // onPress={}
      // onPress={() => setHideShare(false)}
      style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../images/GirlBackGround.png')}>
        <LinearGradient
          style={{
            flex: 1,
          }}
          colors={['rgba(29, 106, 255, 0.0001)', 'rgba(0, 0, 0, 0.9000) ']}
          start={{x: 0.0, y: 0.1}}
          end={{x: 0.0, y: 1.0}}
          locations={[0.4, 0.8]}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DoctorProfile');
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
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Dr.Caroline
                </Text>
                <Text
                  style={{
                    lineHeight: 18,
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Daily tips for breakfast
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

            {!hideShare ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 46 * scale,
                  //   backgroundColor: 'red',
                  //   position: 'absolute',
                  marginTop: 'auto',
                  marginBottom: 50 * scale,
                }}>
                <View
                  style={{
                    width: 199 * scale,
                    height: 46 * scale,
                    marginLeft: 30 * scale,
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: 37 * scale,
                  }}>
                  <TextInput
                    placeholder="Add comment..."
                    style={{width: '100%', textAlign: 'center'}}></TextInput>
                  <View
                    style={{
                      width: 38 * scale,
                      height: 38 * scale,
                      borderRadius: 19 * scale,
                      backgroundColor: '#1D6AFF',
                      position: 'absolute',
                      left: 4 * scale,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{
                        width: 18 * scale,
                        height: 17 * scale,
                      }}
                      source={require('../images/ChatIconLive.png')}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PersonalChat');
                  }}
                  style={{
                    width: 46 * scale,
                    height: 46 * scale,
                    borderRadius: 23 * scale,
                    backgroundColor: '#626262',
                    opacity: 0.1,
                    marginLeft: 12 * scale,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      width: 19 * scale,
                      height: 14 * scale,
                    }}
                    source={require('../images/Mail.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    onShowShare();
                  }}
                  style={{
                    width: 46 * scale,
                    height: 46 * scale,
                    borderRadius: 23 * scale,
                    backgroundColor: '#626262',
                    opacity: 0.1,
                    marginLeft: 12 * scale,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      width: 19 * scale,
                      height: 14 * scale,
                    }}
                    source={require('../images/Share.png')}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>

          {hideShare ? (
            <View
              style={{
                height: 390 * scale,
                width: '100%',
                borderTopLeftRadius: 50 * scale,
                borderTopRightRadius: 50 * scale,
                backgroundColor: 'white',
                marginTop: 'auto',
                zIndex: 9999,
                // alignSelf: 'flex-end',
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

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PersonalChat');
                  }}>
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
          ) : null}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

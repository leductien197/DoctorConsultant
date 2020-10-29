import React from 'react';
import CountryDetail from './CountryDetail';
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

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
// const itemList = {flag: '', countryName: '', teleCode: ''};
export default function Country({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{backgroundColor: '#1D6AFF', height: '100%'}}>
          <View
            style={{
              backgroundColor: 'white',
              borderTopLeftRadius: 50 * scale,
              borderTopRightRadius: 50 * scale,
              top: 36 * scale,
              width: '100%',
              position: 'absolute',
              bottom: 0,
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  backgroundColor: '#EFF3FA',
                  width: 315 * scale,
                  height: 48 * scale,
                  marginTop: 45 * scale,
                  borderRadius: 15 * scale,
                }}>
                <TextInput
                  style={{
                    alignSelf: 'center',
                    width: '100%',
                    paddingLeft: 280 * scale,
                  }}
                  maxLength={30}
                  inlineImageLeft="search_image"
                  inlineImagePadding={-1000 * scale}
                  autoFocus={false}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 40 * scale,
                width: 315 * scale,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CountryDetail', {
                    flag: require('../images/U.S.A.png'),
                    countryCode: 1,
                    // countryName: 'U.S.A',
                  });
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: 40 * scale,
                        height: 40 * scale,
                        marginRight: 18 * scale,
                      }}
                      source={require('../images/U.S.A.png')}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        color: '#222222',
                        lineHeight: 23 * scale,
                        fontSize: 18 * scale,
                      }}>
                      U.S.A.
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#9093A3',
                      lineHeight: 20 * scale,
                      fontSize: 16 * scale,
                      fontWeight: 'bold',
                      fontStyle: 'normal',
                    }}>
                    +1
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: 315 * scale,
                  height: 1 * scale,
                  borderColor: '#DEE1E6',
                  borderWidth: 1 * scale,
                  marginTop: 18 * scale,
                }}
              />
            </View>

            <View
              style={{
                marginTop: 18 * scale,
                width: 315 * scale,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CountryDetail', {
                    flag: require('../images/Austalia.png'),
                    countryCode: 61,
                    // countryName: 'U.S.A',
                  });
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: 40 * scale,
                        height: 40 * scale,
                        marginRight: 18 * scale,
                      }}
                      source={require('../images/Austalia.png')}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        color: '#222222',
                        lineHeight: 23 * scale,
                        fontSize: 18 * scale,
                      }}>
                      Austalia
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#9093A3',
                      lineHeight: 20 * scale,
                      fontSize: 16 * scale,
                      fontWeight: 'bold',
                      fontStyle: 'normal',
                    }}>
                    +61
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: 315 * scale,
                  height: 1 * scale,
                  borderColor: '#DEE1E6',
                  borderWidth: 1 * scale,
                  marginTop: 18 * scale,
                }}
              />
            </View>

            <View
              style={{
                marginTop: 18 * scale,
                width: 315 * scale,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CountryDetail', {
                    flag: require('../images/SaudiArabia.png'),
                    countryCode: 966,
                    // countryName: 'U.S.A',
                  });
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: 40 * scale,
                        height: 40 * scale,
                        marginRight: 18 * scale,
                      }}
                      source={require('../images/SaudiArabia.png')}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        color: '#222222',
                        lineHeight: 23 * scale,
                        fontSize: 18 * scale,
                      }}>
                      Saudi Arabia
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#9093A3',
                      lineHeight: 20 * scale,
                      fontSize: 16 * scale,
                      fontWeight: 'bold',
                      fontStyle: 'normal',
                    }}>
                    +966
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: 315 * scale,
                  height: 1 * scale,
                  borderColor: '#DEE1E6',
                  borderWidth: 1 * scale,
                  marginTop: 18 * scale,
                }}
              />
            </View>

            <View
              style={{
                marginTop: 18 * scale,
                width: 315 * scale,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CountryDetail', {
                    flag: require('../images/Bitmap3x.png'),
                    countryCode: 62,
                    // countryName: 'U.S.A',
                  });
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: 40 * scale,
                        height: 40 * scale,
                        marginRight: 18 * scale,
                      }}
                      source={require('../images/Bitmap3x.png')}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        color: '#222222',
                        lineHeight: 23 * scale,
                        fontSize: 18 * scale,
                      }}>
                      Indonesia
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#9093A3',
                      lineHeight: 20 * scale,
                      fontSize: 16 * scale,
                      fontWeight: 'bold',
                      fontStyle: 'normal',
                    }}>
                    +62
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: 315 * scale,
                  height: 1 * scale,
                  borderColor: '#DEE1E6',
                  borderWidth: 1 * scale,
                  marginTop: 18 * scale,
                }}
              />
            </View>

            <View
              style={{
                marginTop: 18 * scale,
                width: 315 * scale,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CountryDetail', {
                    flag: require('../images/Malaysia.png'),
                    countryCode: 60,
                    // countryName: 'U.S.A',
                  });
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: 40 * scale,
                        height: 40 * scale,
                        marginRight: 18 * scale,
                      }}
                      source={require('../images/Malaysia.png')}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        color: '#222222',
                        lineHeight: 23 * scale,
                        fontSize: 18 * scale,
                      }}>
                      Malaysia
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#9093A3',
                      lineHeight: 20 * scale,
                      fontSize: 16 * scale,
                      fontWeight: 'bold',
                      fontStyle: 'normal',
                    }}>
                    +60
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: 315 * scale,
                  height: 1 * scale,
                  borderColor: '#DEE1E6',
                  borderWidth: 1 * scale,
                  marginTop: 18 * scale,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

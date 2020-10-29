import React from 'react';
import ReacomendedDoctor from '../components/cpn2/RecomendedDoctor';
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
export default function DoctorProfile({navigation}) {
  return (
    <View style={{backgroundColor: '#EFF3FA', height: '100%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* <View style={{}}> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 40 * scale,
              height: 40 * scale,
              borderRadius: 20 * scale,
              marginTop: 20 * scale,
              marginLeft: 20 * scale,
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LiveStream');
          }}
          style={{
            width: 66 * scale,
            height: 36 * scale,
            backgroundColor: '#FF91A6',
            marginTop: 20 * scale,
            marginRight: 20 * scale,
            borderRadius: 15 * scale,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 6 * scale,
              width: 6 * scale,
              borderRadius: 3 * scale,
              borderWidth: 0.5,
              backgroundColor: '#FFFFFF',
              marginRight: 5 * scale,
            }}
          />
          <View>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 14,
                lineHeight: 18,
              }}>
              Live
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Image
          style={{
            height: 300 * scale,
            width: '80%',
            alignSelf: 'center',
            marginTop: -55 * scale,
          }}
          source={require('../images/doctorprofile3x.png')}
        />
      </View>

      <View
        style={{
          width: '100%',
          height: 503 * scale,
          borderTopLeftRadius: 50 * scale,
          borderTopRightRadius: 50 * scale,
          backgroundColor: 'white',
          marginTop: 'auto',
        }}>
        <View style={{}}>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
              fontSize: 26,
              lineHeight: 33,
              marginTop: 35 * scale,
              marginLeft: 30 * scale,
            }}>
            Dr. Brian Hanner
          </Text>
          <View
            style={{
              marginLeft: -120 * scale,
              marginTop: -40 * scale,
            }}>
            <ReacomendedDoctor />
          </View>
          <View
            style={{
              width: 253 * scale,
              height: 43 * scale,
              marginLeft: 30 * scale,
              marginTop: -70 * scale,
            }}>
            <Text
              style={{
                lineHeight: 21 * scale,
                fontSize: 14 * scale,
                color: '#9093A3',
              }}>
              Specialist in bone and skin health. Love sharing and work at Miami
              Hospital
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Subscription');
          }}>
          <View>
            <View
              style={{
                width: 315 * scale,
                height: 78 * scale,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#DEE1E6',
                alignSelf: 'center',
                marginTop: 20 * scale,
                flexDirection: 'row',
                backgroundColor: '#1D6AFF',
              }}>
              <Image
                style={{
                  width: 30 * scale,
                  height: 30 * scale,
                  marginTop: 24 * scale,
                  marginLeft: 24 * scale,
                }}
                source={require('../images/Dr.mesage.png')}
              />
              <View
                style={{
                  marginLeft: 24 * scale,
                  marginTop: 12 * scale,
                  marginBottom: 24 * scale,
                }}>
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 18,
                    fontWeight: '600',
                    color: 'white',
                  }}>
                  Subcribe Consult
                </Text>
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 14,
                    fontWeight: '400',
                    marginTop: -5 * scale,
                    color: 'white',
                  }}>
                  Takes %25 takes and more!
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BookSchedule');
          }}>
          <View>
            <View
              style={{
                width: 315 * scale,
                height: 78 * scale,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#DEE1E6',
                alignSelf: 'center',
                marginTop: 20 * scale,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: 30 * scale,
                  height: 30 * scale,
                  marginTop: 24 * scale,
                  marginLeft: 24 * scale,
                }}
                source={require('../images/Dr.calenda.png')}
              />
              <View
                style={{
                  marginLeft: 24 * scale,
                  marginTop: 12 * scale,
                  marginBottom: 24 * scale,
                }}>
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#222222',
                  }}>
                  Availibility
                </Text>
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 14,
                    fontWeight: '400',
                    marginTop: -5 * scale,
                    color: '#9093A3',
                  }}>
                  08:00 AM - 05:00 PM
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        // onPress={() => {
        //   navigation.navigate('DoctorMap');
        // }}
        >
          <View>
            <View
              style={{
                width: 315 * scale,
                height: 78 * scale,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#DEE1E6',
                alignSelf: 'center',
                marginTop: 20 * scale,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: 30 * scale,
                  height: 30 * scale,
                  marginTop: 24 * scale,
                  marginLeft: 24 * scale,
                }}
                source={require('../images/Dr.location.png')}
              />
              <View
                style={{
                  marginLeft: 24 * scale,
                  marginTop: 12 * scale,
                  marginBottom: 24 * scale,
                }}>
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#222222',
                  }}>
                  Location
                </Text>
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 14,
                    fontWeight: '400',
                    marginTop: -5 * scale,
                    color: '#9093A3',
                  }}>
                  Miami Hospital Center
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

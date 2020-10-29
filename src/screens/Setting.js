import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function Setting({navigation}) {
  const [state0, setState0] = useState(true);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(true);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Country');
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

      <View style={{marginTop: 40, marginLeft: 34, marginRight: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              lineHeight: 20,
              fontSize: 16,
              fontWeight: '400',
              color: '#9093A3',
            }}>
            Notifications
          </Text>
          <ToggleSwitch
            isOn={state0}
            onColor="blue"
            offColor="gray"
            size="normal"
            onToggle={(isOn) => {
              setState0(isOn);
              //   alert('xxx');
            }}
            // label="Example label"
            // labelStyle={{color: 'black', fontWeight: '900'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20 * scale,
          }}>
          <Text
            style={{
              lineHeight: 20,
              fontSize: 16,
              fontWeight: '400',
              color: '#9093A3',
            }}>
            Ask before buy
          </Text>
          <ToggleSwitch
            isOn={state1}
            onColor="blue"
            offColor="gray"
            size="normal"
            onToggle={(isOn) => {
              setState1(isOn);
              //   alert('xxx');
            }}
            // label="Example label"
            // labelStyle={{color: 'black', fontWeight: '900'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20 * scale,
          }}>
          <Text
            style={{
              lineHeight: 20,
              fontSize: 16,
              fontWeight: '400',
              color: '#9093A3',
            }}>
            Color blind mode
          </Text>
          <ToggleSwitch
            isOn={state2}
            onColor="blue"
            offColor="gray"
            size="normal"
            onToggle={(isOn) => {
              setState2(isOn);
              //   alert('xxx');
            }}
            // label="Example label"
            // labelStyle={{color: 'black', fontWeight: '900'}}
          />
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 35 * scale,
          alignSelf: 'center',
          // zIndex: 9999,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserSubcription')}
          style={{
            backgroundColor: '#1D6AFF',
            width: 208 * scale,
            height: 62 * scale,
            alignItems: 'center',
            justifyContent: 'center',
            // alignSelf: 'center',
            borderRadius: 31 * scale,
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                lineHeight: 23,
                fontWeight: '600',
              }}>
              Save Changes
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

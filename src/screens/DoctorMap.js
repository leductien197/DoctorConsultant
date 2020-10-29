import React, {useState} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import DialogMap from '../components/DialogMap';
import MapView, {
  PROVIDER_GOOGLE,
  ProviderPropType,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
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
import {Callout} from 'react-native-maps';

const screenWidth = Dimensions.get('window');
const scale = screenWidth / 375;

export default function DoctorMap({navigation}) {
  // const [state, setState] = useState[{x: 21.0142}];
  const [marker, setMarker] = useState({
    // latlng: [21.0142, 105.5111],
    title: 'Blue',
    description: "I'm blue",
  });
  const [state, setState] = useState({
    region: {
      latitude: 21.0211,
      longitude: 105.4916,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    },
  });

  function onRegionChange(region) {
    setState({region});
  }

  const showDialog = () => {};
  return (
    <View style={{flex: 1}}>
      <MapView
        onRegionChange={() => onRegionChange}
        // customMapStyle={mapSilver}
        provider={PROVIDER_GOOGLE}
        region={state.region}
        style={{flex: 1}}>
        <Marker
          coordinate={{latitude: 21.0211, longitude: 105.4916}}
          title={marker.title}
          description={marker.description}
          image={require('../images/marker1.png')}></Marker>
        <Marker
          coordinate={{latitude: 21.0531, longitude: 105.4999}}
          title={marker.title}
          description={marker.description}
          image={require('../images/marker2.png')}></Marker>
        <Marker
          coordinate={{latitude: 21.0221, longitude: 105.5106}}
          title={marker.title}
          description={marker.description}
          image={require('../images/marker3.png')}></Marker>
        <Marker
          coordinate={{latitude: 21.0219, longitude: 105.5}}
          title={marker.title}
          description={marker.description}
          image={require('../images/marker4.png')}></Marker>
      </MapView>
      {/* <View
        style={{
          position: 'absolute',
          marginTop: 30 * scale,
          marginLeft: 30 * scale,
          width: 40 * scale,
          height: 40 * scale,
        }}>
        <TouchableOpacity>
          <Image
            style={{
              width: 40 * scale,
              height: 40 * scale,
            }}
            source={require('../images/back_button.png')}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

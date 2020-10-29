import React, {Component, useState} from 'react';
import {
  Button,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MyTabBar from '../components/MyTabBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Country from '../screens/Country';
import CountryDetail from '../screens/CountryDetail';
import OtpVerification from '../screens/OtpVerification';
import DoctorMap from '../screens/DoctorMap';

import ConsultType from '../screens/ConsultType';
import Chat from '../screens/Chat';
import HomeScreen from '../screens/HomeScreen';
import DoctorProfile from '../screens/DoctorProfile';
import Subscription from '../screens/Subscription';
import BookSchedule from '../screens/BookSchedule';

import Test from '../screens/Test';
import Auto_Test from '../screens/Auto_Test';
import ExfloreScreen from '../screens/ExfloreScreen';
import PersonalChat from '../screens/PersonalChat';
import Profile from '../screens/Profile';
import DetailProfile from '../screens/DetailProfile';
import Setting from '../screens/Setting';

import UserSubcription from '../screens/UserSubcription';
import User from '../components/User';
import RateScreen from '../screens/RateScreen';
import CallScreen from '../screens/CallScreen';

import RecomendedDoctor from '../components/cpn2/RecomendedDoctor';
import SliderVer from '../components/SliderVer';
import SliderHoz from '../components/SliderHoz';
import Draw from '../components/Draw';
import ScrollBookedList from '../components/ScrollBookedList';
import ScrollConsultList from '../components/ScrollConsultList';
import BasicVerification from '../components/BasicVerification';
import DialogMap from '../components/DialogMap';
import StarRating from '../components/StarRating';
import Share from '../components/Share';

import LiveStream from '../screens/LiveStream';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const [isFocus, setIsFocus] = useState(false);

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
// const isFocus = useState(true);
// const tabColor = {
//   // setting height 'null', and top 0 will change the color of pressed tab
//   indicatorStyle: {
//     backgroundColor: 'white',
//   },
//   activeTintColor: '#1D6AFF',
//   pressColor: '#1D6AFF',
//   style: {
//     backgroundColor: '#1D6AFF',
//   },
// };
function TabHome() {
  const [count, setCount] = useState(0);
  const pressTab = (index) => {
    if (index === count) {
      setCount(0);
    } else {
      setCount(index);
    }
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 150 * scale,
          borderTopLeftRadius: 50 * scale,
          borderTopRightRadius: 50 * scale,
          backgroundColor: 'white',
          position: 'absolute',
          paddingBottom: 15 * scale,
        },
        // inactiveBackgroundColor: 'blue',
        indicatorStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
          height: 90 * scale,
          width: 72 * scale,
          borderRadius: 23 * scale,
        },
      }}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                // backgroundColor: count === 1 ? '#1D6AFF' : 'white',
                height: 90 * scale,
                width: 72 * scale,
                borderRadius: 23 * scale,
              }}>
              <Image
                source={require('../images/Chatbubble3x.png')}
                style={{width: 24 * scale, height: 22 * scale}}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({color}) => (
            <View
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                height: 90 * scale,
                width: 72 * scale,
                borderRadius: 23 * scale,
              }}>
              <Image
                source={require('../images/HomeDark.png')}
                style={{
                  width: 24 * scale,
                  height: 21 * scale,
                  alignSelf: 'center',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{
          tabBarLabel: 'DoctorProfile',
          tabBarVisible: false,
          tabBarIcon: ({color}) => (
            <View
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Image
                source={require('../images/Mantabbottom3x.png')}
                style={{width: 42 * scale, height: 42 * scale}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const ContainerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
      {/* <Stack.Screen
        name="ConsultType"
        component={ConsultType}
      /> */}
      {/* <Stack.Screen name="DoctorProfile" component={DoctorProfile} /> */}
      {/* <Stack.Screen name="DoctorMap" component={DoctorMap} /> */}
      {/* <Stack.Screen name="LiveStream" component={LiveStream} /> */}
      {/* <Stack.Screen name="ConsultType" component={ConsultType} /> */}
      {/* <Stack.Screen name="Auto_Test" component={Auto_Test} /> */}
      {/* <Stack.Screen name="UserSubcription" component={UserSubcription} />
      <Stack.Screen name="HomeScreen" component={TabHome} />
      <Stack.Screen name="User" component={User} /> */}
      {/* <Stack.Screen name="LiveStream" component={LiveStream} /> */}
      {/* <Stack.Screen name="DoctorMap" component={DoctorMap} /> */}
      {/* <Stack.Screen name="HomeScreen" component={TabHome} /> */}
      {/* <Stack.Screen name="LiveStream" component={LiveStream} /> */}

      <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="CountryDetail" component={CountryDetail} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="ConsultType" component={ConsultType} />
      <Stack.Screen name="HomeScreen" component={TabHome} />
      <Stack.Screen name="BookSchedule" component={BookSchedule} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="LiveStream" component={LiveStream} />
      {/* <Stack.Screen name="DoctorProfile" component={DoctorProfile} /> */}
      <Stack.Screen name="DoctorMap" component={DoctorMap} />
      <Stack.Screen name="RecomendedDoctor" component={RecomendedDoctor} />
      <Stack.Screen name="CallScreen" component={CallScreen} />
      <Stack.Screen name="RateScreen" component={RateScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PersonalChat" component={PersonalChat} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="UserSubcription" component={UserSubcription} />
      <Stack.Screen name="DetailProfile" component={DetailProfile} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <ContainerStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

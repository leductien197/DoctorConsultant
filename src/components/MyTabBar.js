import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  console.log(state);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 150 * scale,
        // borderTopLeftRadius: 50 * scale,
        // borderTopRightRadius: 50 * scale,
        backgroundColor: 'white',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          console.log('alo');
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              // backgroundColor:'yellow',
              flex: 1 / 3,
              borderTopRightRadius: 50 * scale,
              borderTopLeftRadius: 50 * scale,
            }}>
            <Text
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                color: '#fff',
                textAlign: 'center',
                backgroundColor: '#68a0cf',
                borderTopRightRadius: 50 * scale,
                borderTopLeftRadius: 50 * scale,
                borderWidth: 1,
                borderColor: '#fff',
                height: '100%',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 15;

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;
export default function BasicVerification({text}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <TextInput
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
            {text}
          </TextInput>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {padding: 10 * scale},
  codeFieldRoot: {marginTop: 0 * scale},
  cell: {
    width: 62 * scale,
    height: 72 * scale,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#DEE1E6',
    textAlign: 'center',
    borderRadius: 16 * scale,
    marginLeft: 12 * scale,
    backgroundColor: 'white',
  },
  focusCell: {
    borderColor: '#000',
    backgroundColor: '#1D6AFF',
  },
});
